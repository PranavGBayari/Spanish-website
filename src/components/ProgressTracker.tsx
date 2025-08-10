
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, Trophy, Target } from 'lucide-react';

interface TopicProgress {
  id: string;
  name: string;
  completed: boolean;
  rating?: number;
}

interface ProgressTrackerProps {
  igcseTopics: TopicProgress[];
  ibTopics: TopicProgress[];
}

const ProgressTracker = ({ igcseTopics, ibTopics }: ProgressTrackerProps) => {
  const igcseCompleted = igcseTopics.filter(t => t.completed).length;
  const ibCompleted = ibTopics.filter(t => t.completed).length;
  const totalCompleted = igcseCompleted + ibCompleted;
  const totalTopics = igcseTopics.length + ibTopics.length;
  const progressPercentage = Math.round((totalCompleted / totalTopics) * 100);

  return (
    <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-gray-800 flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
            Your Progress
          </CardTitle>
          <Badge variant="outline" className="text-lg px-3 py-1">
            {progressPercentage}% Complete
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Overall Progress</span>
            <span className="text-sm font-medium">{totalCompleted}/{totalTopics} topics</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
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
            <p className="text-2xl font-bold text-blue-800">{igcseCompleted}/{igcseTopics.length}</p>
            <p className="text-sm text-gray-600">Foundation & Intermediate</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-red-700">IB Level</h3>
              <Trophy className="w-4 h-4 text-red-500" />
            </div>
            <p className="text-2xl font-bold text-red-800">{ibCompleted}/{ibTopics.length}</p>
            <p className="text-sm text-gray-600">Standard & Higher Level</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;