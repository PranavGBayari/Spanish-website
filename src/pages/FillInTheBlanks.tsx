
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

const FillInTheBlanks = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      sentence: 'Yo ___ al parque todos los días.',
      options: ['voy', 'vas', 'va', 'vamos'],
      correct: 'voy',
      translation: 'I go to the park every day.',
      explanation: 'Use "voy" (first person singular) for "I go"'
    },
    {
      sentence: 'Ella ___ muy bien español.',
      options: ['habla', 'hablas', 'hablo', 'hablamos'],
      correct: 'habla',
      translation: 'She speaks Spanish very well.',
      explanation: 'Use "habla" (third person singular) for "she speaks"'
    },
    {
      sentence: 'Nosotros ___ en Madrid.',
      options: ['vive', 'vives', 'vivo', 'vivimos'],
      correct: 'vivimos',
      translation: 'We live in Madrid.',
      explanation: 'Use "vivimos" (first person plural) for "we live"'
    }
  ];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    setShowResult(true);
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setShowResult(false);
    setScore(0);
  };

  const isQuizComplete = currentQuestion === questions.length - 1 && showResult;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Fill in the Blanks
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test your Spanish grammar skills by choosing the correct verb form
          </p>
        </div>

        {/* Progress */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
            <Badge variant="outline">Score: {score}/{questions.length}</Badge>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 mb-8">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl mb-4">
                {questions[currentQuestion].sentence}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                {questions[currentQuestion].translation}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {questions[currentQuestion].options.map((option) => (
                  <Button
                    key={option}
                    variant={selectedAnswer === option ? 'default' : 'outline'}
                    className="p-4 text-lg"
                    onClick={() => handleAnswerSelect(option)}
                    disabled={showResult}
                  >
                    {option}
                  </Button>
                ))}
              </div>

              {!showResult && selectedAnswer && (
                <div className="text-center">
                  <Button onClick={handleSubmit} className="px-8 py-2">
                    Submit Answer
                  </Button>
                </div>
              )}

              {showResult && (
                <div className="space-y-4">
                  <div className="text-center">
                    {selectedAnswer === questions[currentQuestion].correct ? (
                      <div className="flex items-center justify-center text-green-600 mb-4">
                        <CheckCircle className="w-8 h-8 mr-2" />
                        <span className="text-xl font-semibold">Correct!</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center text-red-600 mb-4">
                        <XCircle className="w-8 h-8 mr-2" />
                        <span className="text-xl font-semibold">Incorrect</span>
                      </div>
                    )}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>Correct answer:</strong> {questions[currentQuestion].correct}
                    </p>
                    <p className="text-gray-600">
                      {questions[currentQuestion].explanation}
                    </p>
                  </div>

                  <div className="text-center">
                    {!isQuizComplete ? (
                      <Button onClick={handleNext} className="px-8 py-2">
                        Next Question
                      </Button>
                    ) : (
                      <div className="space-y-4">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h3>
                          <p className="text-xl text-gray-600">
                            Final Score: {score}/{questions.length} ({Math.round((score/questions.length) * 100)}%)
                          </p>
                        </div>
                        <Button onClick={handleRestart} className="px-8 py-2">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Restart Quiz
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FillInTheBlanks;
