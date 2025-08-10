import React from 'react';
import { useProfileProgress } from '@/hooks/useProfileProgress';

interface ProgressSummaryProps {
  totalTopics?: number;
}

const ProgressSummary: React.FC<ProgressSummaryProps> = ({ totalTopics }) => {
  const { pagesCompleted, loading, hasUser } = useProfileProgress();

  if (!hasUser) return null;

  return (
    <div className="text-sm text-gray-600">
      {loading ? 'Loading progress…' : (
        totalTopics ? `${pagesCompleted ?? 0}/${totalTopics} topics` : `${pagesCompleted ?? 0} topics`
      )}
    </div>
  );
};

export default ProgressSummary;