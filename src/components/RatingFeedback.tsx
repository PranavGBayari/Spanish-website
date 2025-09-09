import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useUserProgress } from '@/hooks/useUserProgress';

interface RatingFeedbackProps {
  topicId: string;
  topicTitle: string;
  topicType: 'grammar' | 'tense';
  onSubmit?: (rating: number, feedback: string) => void;
}

const RatingFeedback: React.FC<RatingFeedbackProps> = ({ 
  topicId, 
  topicTitle, 
  topicType, 
  onSubmit 
}) => {
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { markTopicCompleted } = useUserProgress();

  const handleSubmit = async () => {
    if (rating === 0) return;
    
    setIsSubmitting(true);
    try {
      // Mark topic as completed with rating
      await markTopicCompleted(topicId, topicType, rating);
      
      // Call optional onSubmit callback
      onSubmit?.(rating, feedback);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting rating:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-6 text-center">
          <div className="text-green-600 mb-2">✅</div>
          <h3 className="font-semibold text-green-800 mb-2">Thank you for your feedback!</h3>
          <p className="text-green-600">Your progress has been saved.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rate this topic: {topicTitle}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Star Rating */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="hover:scale-110 transition-transform"
            >
              <Star
                className={`w-8 h-8 ${
                  star <= rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
          <span className="ml-2 text-sm text-gray-600">
            {rating > 0 ? `${rating}/5` : 'Click to rate'}
          </span>
        </div>

        {/* Feedback Textarea */}
        <Textarea
          placeholder="Share your thoughts about this topic (optional)"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={3}
        />

        {/* Submit Button */}
        <Button 
          onClick={handleSubmit}
          disabled={rating === 0 || isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Rating & Mark Complete'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default RatingFeedback;