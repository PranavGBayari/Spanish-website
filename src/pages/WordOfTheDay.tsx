import React from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RefreshCw, Volume2, BookOpen, MessageSquare } from 'lucide-react';
import { useWordOfTheDay } from '@/hooks/useWordOfTheDay';

const WordOfTheDay = () => {
  const { word, loading, error, refreshWord } = useWordOfTheDay();

  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES'; // Spanish
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading today's word...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !word) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error || 'No word found'}</p>
            <Button onClick={refreshWord}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Word of the Day
          </h1>
          <p className="text-lg text-gray-600">{today}</p>
        </div>

        {/* Main Word Card */}
        <div className="max-w-2xl mx-auto mb-8">
          <Card className="p-8 text-center shadow-lg">
            <CardHeader>
              <div className="flex justify-center items-center gap-4 mb-4">
                <Badge 
                  className={`${getDifficultyColor(word.difficulty_level)} text-white px-3 py-1`}
                >
                  {word.difficulty_level}
                </Badge>
                {word.category && (
                  <Badge variant="outline" className="px-3 py-1">
                    {word.category}
                  </Badge>
                )}
              </div>
              
              <CardTitle className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
                {word.spanish_word}
              </CardTitle>
              
              {word.pronunciation && (
                <div className="flex justify-center items-center gap-2 mb-4">
                  <span className="text-lg text-gray-500">/{word.pronunciation}/</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => speakWord(word.spanish_word)}
                    className="hover:bg-blue-100"
                  >
                    <Volume2 className="w-4 h-4" />
                  </Button>
                </div>
              )}
              
              <CardDescription className="text-2xl font-medium text-gray-700">
                {word.english_translation}
              </CardDescription>
              
              {word.part_of_speech && (
                <Badge variant="secondary" className="mt-2">
                  {word.part_of_speech}
                </Badge>
              )}
            </CardHeader>
          </Card>
        </div>

        {/* Example Usage */}
        {(word.example_spanish || word.example_english) && (
          <div className="max-w-2xl mx-auto mb-8">
            <Card className="p-6">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  <CardTitle className="text-xl">Example Usage</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {word.example_spanish && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <p className="text-lg text-gray-800 italic">
                        "{word.example_spanish}"
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => speakWord(word.example_spanish!)}
                      >
                        <Volume2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
                
                {word.example_english && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 italic">
                      "{word.example_english}"
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Actions */}
        <div className="text-center">
          <Button 
            onClick={refreshWord}
            variant="outline"
            className="mr-4"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          
          <Button 
            onClick={() => speakWord(word.spanish_word)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Volume2 className="w-4 h-4 mr-2" />
            Hear Pronunciation
          </Button>
        </div>

        {/* Note */}
        <div className="max-w-2xl mx-auto mt-8">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-4 text-center">
              <BookOpen className="w-6 h-6 mx-auto mb-2 text-yellow-600" />
              <p className="text-sm text-yellow-800">
                The word changes automatically every day based on our curated collection. 
                Come back tomorrow for a new word!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WordOfTheDay;