import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export const PROGRESS_EVENT = 'profile-progress-updated';

export function useProfileProgress() {
  const { user } = useAuth();
  const [pagesCompleted, setPagesCompleted] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const hasUser = !!user;

  const fetchProgress = useCallback(async () => {
    if (!user) {
      setPagesCompleted(null);
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('pages_completed')
      .eq('id', user.id)
      .maybeSingle();

    if (!error && data) {
      setPagesCompleted(data.pages_completed ?? 0);
    }
    setLoading(false);
  }, [user]);

  const increment = useCallback(async () => {
    if (!user) return;
    const { error } = await supabase.rpc('increment_pages_completed');
    if (!error) {
      // Inform all listeners to refresh
      window.dispatchEvent(new Event(PROGRESS_EVENT));
      await fetchProgress();
    }
  }, [user, fetchProgress]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  useEffect(() => {
    const handler = () => fetchProgress();
    window.addEventListener(PROGRESS_EVENT, handler);
    return () => window.removeEventListener(PROGRESS_EVENT, handler);
  }, [fetchProgress]);

  return { pagesCompleted, loading, refresh: fetchProgress, increment, hasUser };
}
