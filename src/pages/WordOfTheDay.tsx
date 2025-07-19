
import React from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Volume2, BookOpen, Lightbulb } from 'lucide-react';

const WordOfTheDay = () => {
  // Placeholder data - will be replaced with dynamic content later
  const wordOfTheDay = {
    word: 'Maravilloso',
    pronunciation: 'ma-ra-vi-LLO-so',
    partOfSpeech: 'Adjective',
    english: 'Wonderful, Marvelous',
    definition: 'Something that causes wonder or admiration; extraordinary',
    examples: [
      {
        spanish: 'El concierto fue maravilloso.',
        english: 'The concert was wonderful.'
      },
      {
        spanish: 'Qué día tan maravilloso.',
        english: 'What a marvelous day.'
      },
      {
        spanish: 'Tienes una familia maravillosa.',
        english: 'You have a wonderful family.'
      }
    ],
    etymology: 'From Latin "mirabilis" meaning "wonderful, marvelous"',
    relatedWords: ['Maravilla (wonder)', 'Maravillar (to amaze)', 'Maravillosamente (wonderfully)'],
    difficulty: 'Intermediate',
    date: new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  };

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
            {wordOfTheDay.date}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Word Card */}
          <Card className="p-8 mb-8 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-1">
                  {wordOfTheDay.difficulty}
                </Badge>
              </div>
              <CardTitle className="text-5xl md:text-6xl font-bold mb-4">
                {wordOfTheDay.word}
              </CardTitle>
              <CardDescription className="text-orange-100 text-xl">
                {wordOfTheDay.pronunciation}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Volume2 className="w-6 h-6 mr-2" />
                <span className="text-lg">{wordOfTheDay.partOfSpeech}</span>
              </div>
              <p className="text-2xl font-medium">
                {wordOfTheDay.english}
              </p>
            </CardContent>
          </Card>

          {/* Definition */}
          <Card className="p-6 mb-6">
            <CardHeader>
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                <CardTitle className="text-xl">Definition</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg">{wordOfTheDay.definition}</p>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="p-6 mb-6">
            <CardHeader>
              <CardTitle className="text-xl">Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {wordOfTheDay.examples.map((example, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <p className="text-lg font-medium text-gray-800 mb-1">
                      {example.spanish}
                    </p>
                    <p className="text-gray-600">
                      {example.english}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Etymology */}
            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center">
                  <Lightbulb className="w-6 h-6 text-yellow-600 mr-3" />
                  <CardTitle className="text-xl">Etymology</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{wordOfTheDay.etymology}</p>
              </CardContent>
            </Card>

            {/* Related Words */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl">Related Words</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {wordOfTheDay.relatedWords.map((word, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-700">{word}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Previous Words */}
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
