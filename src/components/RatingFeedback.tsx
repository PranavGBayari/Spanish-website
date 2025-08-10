
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star, Send, CheckCircle } from 'lucide-react';
import { useProfileProgress } from '@/hooks/useProfileProgress';

interface RatingFeedbackProps {
  topicId: string;
  topicTitle: string;
  onSubmit: (rating: number, feedback: string) => void;
}

const RatingFeedback = ({ topicId, topicTitle, onSubmit }: RatingFeedbackProps) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const { increment, hasUser } = useProfileProgress();

  const handleSubmit = async () => {
    if (rating > 0) {
      onSubmit(rating, feedback);
      if (hasUser) {
        await increment();
      }
      setSubmitted(true);
      // Store in localStorage for persistence (rating only)
      localStorage.setItem(`rating_${topicId}`, JSON.stringify({
        rating,
        feedback,
        timestamp: new Date().toISOString(),
        topicTitle
      }));
    }
  };

  if (submitted) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">Thank you for your feedback!</h3>
          <p className="text-green-600">Your rating and suggestions help improve the content.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-blue-200 bg-blue-50">
      <CardHeader>
        <CardTitle className="text-xl text-blue-800">Rate Your Learning Experience</CardTitle>
        <p className="text-blue-600">How helpful was this {topicTitle} content?</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Star Rating */}
        <div className="text-center">
          <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="transition-all duration-200 hover:scale-110"
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                onClick={() => setRating(star)}
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoveredStar || rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            {rating === 0 && 'Click to rate'}
            {rating === 1 && 'Poor - Needs improvement'}
            {rating === 2 && 'Fair - Could be better'}
            {rating === 3 && 'Good - Helpful content'}
            {rating === 4 && 'Very Good - Well explained'}
            {rating === 5 && 'Excellent - Perfectly clear!'}
          </p>
        </div>

        {/* Feedback Textarea */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Share your suggestions (optional)
          </label>
          <Textarea
            placeholder="What could be improved? What did you like most? Any specific suggestions..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={rating === 0}
          className="w-full"
        >
          <Send className="w-4 h-4 mr-2" />
          Submit Feedback
        </Button>
      </CardContent>
    </Card>
  );
};

export default RatingFeedback;