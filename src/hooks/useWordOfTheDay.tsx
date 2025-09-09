import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { WordOfTheDay } from '@/types/wordOfTheDay';

export function useWordOfTheDay() {
  const [word, setWord] = useState<WordOfTheDay | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTodaysWord = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

          const { data, error: fetchError } = await (supabase as any)
      .rpc('get_todays_word');

      if (fetchError) {
        throw fetchError;
      }

      if (data && data.length > 0) {
        setWord(data[0]);
      } else {
        setError('No word found for today');
      }
    } catch (err) {
      console.error('Error fetching word of the day:', err);
      setError('Failed to load word of the day');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodaysWord();
  }, [fetchTodaysWord]);

  return {
    word,
    loading,
    error,
    refreshWord: fetchTodaysWord
  };
}
