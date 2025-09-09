-- Create word_of_the_day table
CREATE TABLE IF NOT EXISTS public.word_of_the_day (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  spanish_word TEXT NOT NULL,
  english_translation TEXT NOT NULL,
  pronunciation TEXT,
  part_of_speech TEXT, -- noun, verb, adjective, etc.
  example_spanish TEXT,
  example_english TEXT,
  difficulty_level TEXT DEFAULT 'beginner', -- beginner, intermediate, advanced
  category TEXT, -- food, colors, emotions, etc.
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true
);

-- Enable RLS
ALTER TABLE public.word_of_the_day ENABLE ROW LEVEL SECURITY;

-- RLS Policy - allow everyone to read words (no auth required)
CREATE POLICY "Everyone can view active words" ON public.word_of_the_day
  FOR SELECT USING (is_active = true);

-- Admin policy (you can add admin role later)
CREATE POLICY "Only authenticated users can manage words" ON public.word_of_the_day
  FOR ALL USING (auth.role() = 'authenticated');

-- Function to get today's word of the day
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
  category TEXT
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
  -- Get total count of active words
  SELECT COUNT(*) INTO word_count 
  FROM public.word_of_the_day 
  WHERE is_active = true;
  
  -- If no words, return empty
  IF word_count = 0 THEN
    RETURN;
  END IF;
  
  -- Get day of year (1-365/366)
  SELECT EXTRACT(DOY FROM CURRENT_DATE)::INTEGER INTO day_of_year;
  
  -- Calculate which word to show (cycles through all words)
  word_index := (day_of_year - 1) % word_count;
  
  -- Return the word for today
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
    w.category
  FROM public.word_of_the_day w
  WHERE w.is_active = true
  ORDER BY w.created_at
  LIMIT 1 OFFSET word_index;
END;
$$;

-- Insert some sample words
INSERT INTO public.word_of_the_day (
  spanish_word, 
  english_translation, 
  pronunciation,
  part_of_speech,
  example_spanish,
  example_english,
  difficulty_level,
  category
) VALUES 
  ('hola', 'hello', 'OH-lah', 'interjection', 'Hola, ¿cómo estás?', 'Hello, how are you?', 'beginner', 'greetings'),
  ('casa', 'house', 'KAH-sah', 'noun', 'Mi casa es grande.', 'My house is big.', 'beginner', 'home'),
  ('amor', 'love', 'ah-MOR', 'noun', 'El amor es hermoso.', 'Love is beautiful.', 'beginner', 'emotions'),
  ('trabajar', 'to work', 'trah-bah-HAHR', 'verb', 'Necesito trabajar mañana.', 'I need to work tomorrow.', 'beginner', 'actions'),
  ('feliz', 'happy', 'feh-LEES', 'adjective', 'Estoy muy feliz hoy.', 'I am very happy today.', 'beginner', 'emotions'),
  ('comida', 'food', 'ko-MEE-dah', 'noun', 'La comida está deliciosa.', 'The food is delicious.', 'beginner', 'food'),
  ('hermoso', 'beautiful', 'er-MO-so', 'adjective', 'Qué día tan hermoso.', 'What a beautiful day.', 'intermediate', 'descriptions'),
  ('biblioteca', 'library', 'bee-blee-oh-TEH-kah', 'noun', 'Estudio en la biblioteca.', 'I study in the library.', 'intermediate', 'places'),
  ('mariposa', 'butterfly', 'mah-ree-PO-sah', 'noun', 'Una mariposa colorida voló por el jardín.', 'A colorful butterfly flew through the garden.', 'intermediate', 'animals'),
  ('imprescindible', 'essential', 'eem-pres-seen-DEE-bleh', 'adjective', 'Es imprescindible estudiar español.', 'It is essential to study Spanish.', 'advanced', 'descriptions');

-- Update trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_word_of_day_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_word_of_day_updated_at
  BEFORE UPDATE ON public.word_of_the_day
  FOR EACH ROW
  EXECUTE FUNCTION public.update_word_of_day_updated_at();