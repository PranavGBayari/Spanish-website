import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface UserProgress {
  id: string;
  topic_id: string;
  topic_type: string;
  completed: boolean;
  rating: number | null;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProgressSummary {
  total_completed: number;
  grammar_completed: number;
  tense_completed: number;
  average_rating: number | null;
}

export function useUserProgress() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<UserProgress[]>([]);
  const [summary, setSummary] = useState<ProgressSummary | null>(null);

  // Fetch all user progress
  const fetchProgress = useCallback(async () => {
    if (!user) {
      setProgress([]);
      setSummary(null);
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setProgress(data || []);
    } catch (error) {
      console.error('Error fetching user progress:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch progress summary
  const fetchSummary = useCallback(async () => {
    if (!user) {
      setSummary(null);
      return;
    }

    try {
      // Use direct query instead of RPC for now
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id);

      if (error) throw error;

      if (data) {
        const totalCompleted = data.filter(p => p.completed).length;
        const grammarCompleted = data.filter(p => p.completed && p.topic_type === 'grammar').length;
        const tenseCompleted = data.filter(p => p.completed && p.topic_type === 'tense').length;
        const ratingsData = data.filter(p => p.rating !== null);
        const averageRating = ratingsData.length > 0 
          ? ratingsData.reduce((sum, p) => sum + p.rating, 0) / ratingsData.length 
          : null;

        setSummary({
          total_completed: totalCompleted,
          grammar_completed: grammarCompleted,
          tense_completed: tenseCompleted,
          average_rating: averageRating ? Number(averageRating.toFixed(2)) : null,
        });
      } else {
        setSummary({
          total_completed: 0,
          grammar_completed: 0,
          tense_completed: 0,
          average_rating: null,
        });
      }
    } catch (error) {
      console.error('Error fetching progress summary:', error);
    }
  }, [user]);

  // Mark a topic as completed with optional rating
  const markTopicCompleted = useCallback(async (
    topicId: string, 
    topicType: string, 
    rating?: number
  ) => {
    if (!user) return false;

    try {
      // First, check if the RPC function exists, if not use direct insert/upsert
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          topic_id: topicId,
          topic_type: topicType,
          completed: true,
          rating: rating || null,
          completed_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id,topic_id,topic_type'
        });

      if (error) throw error;

      // Refresh data
      await Promise.all([fetchProgress(), fetchSummary()]);
      return true;
    } catch (error) {
      console.error('Error marking topic as completed:', error);
      return false;
    }
  }, [user, fetchProgress, fetchSummary]);

  // Check if a specific topic is completed
  const isTopicCompleted = useCallback((topicId: string, topicType: string) => {
    return progress.some(p => 
      p.topic_id === topicId && 
      p.topic_type === topicType && 
      p.completed
    );
  }, [progress]);

  // Get rating for a specific topic
  const getTopicRating = useCallback((topicId: string, topicType: string) => {
    const topicProgress = progress.find(p => 
      p.topic_id === topicId && p.topic_type === topicType
    );
    return topicProgress?.rating || null;
  }, [progress]);

  // Get completed topics by type
  const getCompletedTopicsByType = useCallback((topicType: string) => {
    return progress.filter(p => p.topic_type === topicType && p.completed);
  }, [progress]);

  useEffect(() => {
    if (user) {
      fetchProgress();
      fetchSummary();
    }
  }, [user, fetchProgress, fetchSummary]);

  return {
    loading,
    progress,
    summary,
    markTopicCompleted,
    isTopicCompleted,
    getTopicRating,
    getCompletedTopicsByType,
    refresh: () => {
      fetchProgress();
      fetchSummary();
    },
    hasUser: !!user,
  };
}