import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star, Send, CheckCircle } from 'lucide-react';
import { useUserProgress } from '@/hooks/useUserProgress';
import { useToast } from '@/hooks/use-toast';

interface RatingFeedbackProps {
  topicId: string;
  topicTitle: string;
  topicType: string; // 'grammar', 'tense', etc.
  onSubmit?: (rating: number, feedback: string) => void;
}

const RatingFeedback = ({ topicId, topicTitle, topicType, onSubmit }: RatingFeedbackProps) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  
  const { markTopicCompleted, isTopicCompleted, getTopicRating, hasUser } = useUserProgress();
  const { toast } = useToast();

  // Check if topic is already completed and get existing rating
  useEffect(() => {
    if (hasUser) {
      const completed = isTopicCompleted(topicId, topicType);
      const existingRating = getTopicRating(topicId, topicType);
      
      if (completed) {
        setSubmitted(true);
        if (existingRating) {
          setRating(existingRating);
        }
      }
    }
  }, [topicId, topicType, isTopicCompleted, getTopicRating, hasUser]);

  const handleSubmit = async () => {
    if (rating === 0) return;
    
    setSubmitting(true);
    try {
      // Save to database if user is authenticated
      if (hasUser) {
        const success = await markTopicCompleted(topicId, topicType, rating);
        if (!success) {
          toast({
            title: "Error",
            description: "Failed to save your progress. Please try again.",
            variant: "destructive",
          });
          return;
        }
      } else {
        // Fallback to localStorage for non-authenticated users
        localStorage.setItem(`rating_${topicId}`, JSON.stringify({
          rating,
          feedback,
          timestamp: new Date().toISOString(),
          topicTitle
        }));
      }

      // Call optional callback
      onSubmit?.(rating, feedback);
      
      setSubmitted(true);
      toast({
        title: "Thank you!",
        description: "Your feedback has been saved successfully.",
      });
    } catch (error) {
      console.error('Error submitting rating:', error);
      toast({
        title: "Error",
        description: "Failed to save your feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // For non-authenticated users, check localStorage
  useEffect(() => {
    if (!hasUser) {
      const savedRating = localStorage.getItem(`rating_${topicId}`);
      if (savedRating) {
        try {
          const parsed = JSON.parse(savedRating);
          setRating(parsed.rating || 0);
          setFeedback(parsed.feedback || '');
          setSubmitted(true);
        } catch (e) {
          console.error('Error parsing saved rating:', e);
        }
      }
    }
  }, [topicId, hasUser]);

  if (submitted) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            {hasUser ? 'Progress Saved!' : 'Thank you for your feedback!'}
          </h3>
          <p className="text-green-600">
            {rating > 0 && (
              <span className="flex items-center justify-center gap-1 mb-2">
                Your rating: {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </span>
            )}
            Your rating and suggestions help improve the content.
          </p>
          {hasUser && (
            <p className="text-sm text-green-500 mt-2">
              ✓ Topic marked as completed
            </p>
          )}
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
          disabled={rating === 0 || submitting}
          className="w-full"
        >
          <Send className="w-4 h-4 mr-2" />
          {submitting ? 'Saving...' : 'Submit Feedback'}
        </Button>

        {!hasUser && (
          <p className="text-xs text-gray-500 text-center">
            Create an account to save your progress across devices!
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default RatingFeedback;