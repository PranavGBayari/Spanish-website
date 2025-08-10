-- Fix linter: set immutable search_path for functions
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, display_name, pages_completed)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url',
    COALESCE(new.raw_user_meta_data->>'display_name', new.raw_user_meta_data->>'full_name'),
    0
  )
  ON CONFLICT (id) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    avatar_url = EXCLUDED.avatar_url,
    display_name = COALESCE(EXCLUDED.display_name, public.profiles.display_name),
    updated_at = now();
  RETURN new;
END;
$function$;

CREATE OR REPLACE FUNCTION public.increment_pages_completed()
RETURNS void
LANGUAGE sql
SET search_path = public
AS $$
  update public.profiles
  set pages_completed = COALESCE(pages_completed, 0) + 1,
      updated_at = now()
  where id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;