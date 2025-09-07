import React from 'react';
import { useUserProgress } from '@/hooks/useUserProgress';

interface ProgressSummaryProps {
  totalTopics?: number;
  topicType?: string; // 'grammar', 'tense', etc.
}

const ProgressSummary: React.FC<ProgressSummaryProps> = ({ totalTopics, topicType }) => {
  const { summary, loading, hasUser } = useUserProgress();

  if (!hasUser) return null;

  const getCompletedCount = () => {
    if (!summary) return 0;
    
    switch (topicType) {
      case 'grammar':
        return summary.grammar_completed;
      case 'tense':
        return summary.tense_completed;
      default:
        return summary.total_completed;
    }
  };

  const completedCount = getCompletedCount();

  return (
    <div className="text-sm text-gray-600">
      {loading ? 'Loading progress…' : (
        <div className="space-y-1">
          <div>
            {totalTopics ? `${completedCount}/${totalTopics} topics` : `${completedCount} topics`}
          </div>
          {summary?.average_rating && (
            <div className="text-xs text-yellow-600">
              ⭐ Avg: {summary.average_rating}/5
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgressSummary;