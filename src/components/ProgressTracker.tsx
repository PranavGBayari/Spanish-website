import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, Trophy, Target, Star } from 'lucide-react';
import { useUserProgress } from '@/hooks/useUserProgress';

interface Topic {
  id: string;
  name: string;
  type: string; // 'grammar', 'tense', etc.
}

interface ProgressTrackerProps {
  igcseTopics: Topic[];
  ibTopics: Topic[];
}

const ProgressTracker = ({ igcseTopics, ibTopics }: ProgressTrackerProps) => {
  const { summary, isTopicCompleted, loading, hasUser } = useUserProgress();


  if (loading) {
    return (
      <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
        <CardContent className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading your progress...</p>
        </CardContent>
      </Card>
    );
  }

  const allTopics = [...igcseTopics, ...ibTopics];
  let igcseCompleted = 0;
  let ibCompleted = 0;
  let totalCompleted = 0;
  let progressPercentage = 0;
  let totalTopics = allTopics.length;

  if (hasUser) {
    // Calculate completed topics live
    igcseCompleted = igcseTopics.filter(t => isTopicCompleted(t.id, t.type)).length;
    ibCompleted = ibTopics.filter(t => isTopicCompleted(t.id, t.type)).length;
    totalCompleted = igcseCompleted + ibCompleted;
    progressPercentage = totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0;
  } else {
    // For guests, show zero progress
    igcseCompleted = 0;
    ibCompleted = 0;
    totalCompleted = 0;
    progressPercentage = 0;
  }

  return (
    <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-gray-800 flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
            Your Progress
          </CardTitle>
          <Badge variant="outline" className="text-lg px-3 py-1">
            {hasUser ? `${progressPercentage}% Complete` : 'Sign in to track'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Overall Progress</span>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">{hasUser ? `${totalCompleted}/${totalTopics} topics` : `0/${totalTopics} topics`}</span>
              {hasUser && summary?.average_rating && (
                <div className="flex items-center gap-1 text-sm text-yellow-600">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <span>{summary.average_rating}/5</span>
                </div>
              )}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${hasUser ? 'bg-gradient-to-r from-green-500 to-blue-500' : 'bg-gray-400'}`}
              style={{ width: hasUser ? `${progressPercentage}%` : '0%' }}
            ></div>
          </div>
        </div>

        {/* Level Progress */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-blue-700">IGCSE Level</h3>
              <Target className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-blue-800">{hasUser ? igcseCompleted : 0}/{igcseTopics.length}</p>
            <p className="text-sm text-gray-600">Foundation & Intermediate</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-red-700">IB Level</h3>
              <Trophy className="w-4 h-4 text-red-500" />
            </div>
            <p className="text-2xl font-bold text-red-800">{hasUser ? ibCompleted : 0}/{ibTopics.length}</p>
            <p className="text-sm text-gray-600">Standard & Higher Level</p>
          </div>
        </div>

        {/* Recent Completions */}
        {hasUser && summary && (summary.grammar_completed > 0 || summary.tense_completed > 0) && (
          <div className="mt-4 p-3 bg-white/70 rounded-lg">
            <h4 className="font-medium text-gray-700 mb-2">Your Achievements</h4>
            <div className="flex flex-wrap gap-2">
              {summary.grammar_completed > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {summary.grammar_completed} Grammar Topics
                </Badge>
              )}
              {summary.tense_completed > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {summary.tense_completed} Tenses Mastered
                </Badge>
              )}
              {summary.average_rating && summary.average_rating >= 4 && (
                <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">
                  High Performer ⭐
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Placeholder for guests */}
        {!hasUser && (
          <div className="mt-4 p-3 bg-white/70 rounded-lg text-center">
            <h4 className="font-medium text-gray-700 mb-2">Sign in to track your progress and achievements!</h4>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;