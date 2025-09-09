-- Create user_progress table to track individual topic completion and ratings
CREATE TABLE IF NOT EXISTS public.user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  topic_id TEXT NOT NULL,
  topic_type TEXT NOT NULL, -- 'grammar', 'tense', etc.
  completed BOOLEAN DEFAULT FALSE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Ensure one record per user per topic
  UNIQUE(user_id, topic_id, topic_type)
);

-- Enable RLS
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own progress" ON public.user_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON public.user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON public.user_progress
  FOR UPDATE USING (auth.uid() = user_id);

-- Function to upsert user progress
CREATE OR REPLACE FUNCTION public.upsert_user_progress(
  p_topic_id TEXT,
  p_topic_type TEXT,
  p_rating INTEGER DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_progress (user_id, topic_id, topic_type, completed, rating, completed_at)
  VALUES (
    auth.uid(),
    p_topic_id,
    p_topic_type,
    true,
    p_rating,
    NOW()
  )
  ON CONFLICT (user_id, topic_id, topic_type) 
  DO UPDATE SET
    completed = true,
    rating = COALESCE(EXCLUDED.rating, public.user_progress.rating),
    completed_at = COALESCE(public.user_progress.completed_at, NOW()),
    updated_at = NOW();
END;
$$;

-- Function to get user progress summary
CREATE OR REPLACE FUNCTION public.get_user_progress_summary()
RETURNS TABLE (
  total_completed BIGINT,
  grammar_completed BIGINT,
  tense_completed BIGINT,
  average_rating NUMERIC
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COUNT(*) FILTER (WHERE completed = true) as total_completed,
    COUNT(*) FILTER (WHERE completed = true AND topic_type = 'grammar') as grammar_completed,
    COUNT(*) FILTER (WHERE completed = true AND topic_type = 'tense') as tense_completed,
    ROUND(AVG(rating) FILTER (WHERE rating IS NOT NULL), 2) as average_rating
  FROM public.user_progress 
  WHERE user_id = auth.uid();
END;
$$;

-- Update trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_user_progress_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_user_progress_updated_at
  BEFORE UPDATE ON public.user_progress
  FOR EACH ROW
  EXECUTE FUNCTION public.update_user_progress_updated_at();

  -- Add missing fields for full Word of the Day info
ALTER TABLE public.word_of_the_day
ADD COLUMN IF NOT EXISTS etymology TEXT,
ADD COLUMN IF NOT EXISTS related_noun TEXT,
ADD COLUMN IF NOT EXISTS related_verb TEXT,
ADD COLUMN IF NOT EXISTS related_adjective TEXT;

-- Update the function to return new fields too
CREATE OR REPLACE FUNCTION public.get_todays_word()
RETURNS TABLE (
  id UUID,
  spanish_word TEXT,
  english_translation TEXT,
  pronunciation TEXT,
  part_of_speech TEXT,
  example_spanish TEXT,
  example_english TEXT,
  difficulty_level TEXT,
  category TEXT,
  etymology TEXT,
  related_noun TEXT,
  related_verb TEXT,
  related_adjective TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  word_count INTEGER;
  day_of_year INTEGER;
  word_index INTEGER;
BEGIN
  SELECT COUNT(*) INTO word_count 
  FROM public.word_of_the_day 
  WHERE is_active = true;

  IF word_count = 0 THEN
    RETURN;
  END IF;

  SELECT EXTRACT(DOY FROM CURRENT_DATE)::INTEGER INTO day_of_year;
  word_index := (day_of_year - 1) % word_count;

  RETURN QUERY
  SELECT 
    w.id,
    w.spanish_word,
    w.english_translation,
    w.pronunciation,
    w.part_of_speech,
    w.example_spanish,
    w.example_english,
    w.difficulty_level,
    w.category,
    w.etymology,
    w.related_noun,
    w.related_verb,
    w.related_adjective
  FROM public.word_of_the_day w
  WHERE w.is_active = true
  ORDER BY w.created_at
  LIMIT 1 OFFSET word_index;
END;
$$;
