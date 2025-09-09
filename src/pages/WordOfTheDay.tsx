import React from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Volume2, BookOpen, Lightbulb } from 'lucide-react';
import { useWordOfTheDay } from '@/hooks/useWordOfTheDay';

const WordOfTheDay = () => {
  const { word, loading, error } = useWordOfTheDay();

  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
        <Navbar />
        <div className="flex items-center justify-center h-full py-20">
          <p className="text-lg text-gray-600">Loading today&apos;s word...</p>
        </div>
      </div>
    );
  }

  if (error || !word) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
        <Navbar />
        <div className="flex items-center justify-center h-full py-20">
          <p className="text-red-600">{error || 'No word found for today'}</p>
        </div>
      </div>
    );
  }

  const relatedWords = [
    word.related_noun && `${word.related_noun} (noun)`,
    word.related_verb && `${word.related_verb} (verb)`,
    word.related_adjective && `${word.related_adjective} (adjective)`
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Calendar className="w-16 h-16 text-orange-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Word of the Day
          </h1>
          <p className="text-xl text-gray-600">
            {today}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Word Card */}
          <Card className="p-8 mb-8 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4 gap-2">
                <Badge variant="secondary" className="text-lg px-4 py-1">
                  {word.difficulty_level}
                </Badge>
                {word.category && (
                  <Badge variant="secondary" className="text-lg px-4 py-1">
                    {word.category}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-5xl md:text-6xl font-bold mb-4">
                {word.spanish_word}
              </CardTitle>
              {word.pronunciation && (
                <CardDescription className="text-orange-100 text-xl flex items-center justify-center gap-2">
                  /{word.pronunciation}/
                  <button
                    onClick={() => speakWord(word.spanish_word)}
                    className="hover:opacity-80"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="text-lg">{word.part_of_speech}</span>
              </div>
              <p className="text-2xl font-medium">
                {word.english_translation}
              </p>
            </CardContent>
          </Card>

          {/* Definition (we treat english_translation as definition) */}
          <Card className="p-6 mb-6">
            <CardHeader>
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                <CardTitle className="text-xl">Definition</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg">{word.english_translation}</p>
            </CardContent>
          </Card>

          {/* Examples */}
          {(word.example_spanish || word.example_english) && (
            <Card className="p-6 mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {word.example_spanish && (
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="text-lg font-medium text-gray-800 mb-1">
                        {word.example_spanish}
                      </p>
                      {word.example_english && (
                        <p className="text-gray-600">{word.example_english}</p>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Etymology */}
            {word.etymology && (
              <Card className="p-6">
                <CardHeader>
                  <div className="flex items-center">
                    <Lightbulb className="w-6 h-6 text-yellow-600 mr-3" />
                    <CardTitle className="text-xl">Etymology</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{word.etymology}</p>
                </CardContent>
              </Card>
            )}

            {/* Related Words */}
            {relatedWords.length > 0 && (
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">Related Words</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {relatedWords.map((rw, i) => (
                      <div key={i} className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-700">{rw}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Previous Words placeholder (can be Supabase history later) */}
          <Card className="p-6 mt-8">
            <CardHeader>
              <CardTitle className="text-xl">Previous Words</CardTitle>
              <CardDescription>
                Check out words from previous days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-gray-800">Alegría</p>
                  <p className="text-gray-600">Joy</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-gray-800">Esperanza</p>
                  <p className="text-gray-600">Hope</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-gray-800">Aventura</p>
                  <p className="text-gray-600">Adventure</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WordOfTheDay;
