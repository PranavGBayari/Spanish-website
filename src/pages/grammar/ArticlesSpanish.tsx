// src/pages/grammar/ArticlesSpanish.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const ArticlesSpanish = () => {
  const handleRating = (rating: number, feedback: string) => {
    console.log('Rating:', rating, 'Feedback:', feedback);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/grammar" className="hover:text-primary">Grammar</Link>
          <span>/</span>
          <span className="text-foreground">Articles in Spanish</span>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/grammar" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Grammar Roadmap
          </Link>

          <div className="text-center mb-12">
            <Badge className="mb-4" variant="default">IGCSE</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Articles in Spanish
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Los Artículos en Español
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master definite and indefinite articles - the building blocks of Spanish grammar
            </p>
          </div>

          {/* Definite Articles */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Definite Articles (The)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3"></th>
                      <th className="border border-gray-300 p-3">Singular</th>
                      <th className="border border-gray-300 p-3">Plural</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Masculine</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">el</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">los</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Feminine</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">la</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">las</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Masculine Examples</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• <strong>el</strong> libro (the book)</li>
                    <li>• <strong>el</strong> coche (the car)</li>
                    <li>• <strong>los</strong> libros (the books)</li>
                    <li>• <strong>los</strong> coches (the cars)</li>
                  </ul>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">Feminine Examples</h4>
                  <ul className="space-y-1 text-pink-700">
                    <li>• <strong>la</strong> mesa (the table)</li>
                    <li>• <strong>la</strong> casa (the house)</li>
                    <li>• <strong>las</strong> mesas (the tables)</li>
                    <li>• <strong>las</strong> casas (the houses)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indefinite Articles */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Indefinite Articles (A/An/Some)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3"></th>
                      <th className="border border-gray-300 p-3">Singular</th>
                      <th className="border border-gray-300 p-3">Plural</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Masculine</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">un</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">unos</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Feminine</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">una</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">unas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Masculine Examples</h4>
                  <ul className="space-y-1 text-green-700">
                    <li>• <strong>un</strong> perro (a dog)</li>
                    <li>• <strong>un</strong> café (a coffee)</li>
                    <li>• <strong>unos</strong> perros (some dogs)</li>
                    <li>• <strong>unos</strong> cafés (some coffees)</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Feminine Examples</h4>
                  <ul className="space-y-1 text-yellow-700">
                    <li>• <strong>una</strong> ventana (a window)</li>
                    <li>• <strong>una</strong> idea (an idea)</li>
                    <li>• <strong>unas</strong> ventanas (some windows)</li>
                    <li>• <strong>unas</strong> ideas (some ideas)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gender Rules */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Gender Identification Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Usually Masculine</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Words ending in <strong>-o</strong>: el libro, el carro</li>
                    <li>• Words ending in <strong>-or</strong>: el profesor, el color</li>
                    <li>• Words ending in <strong>-aje</strong>: el viaje, el mensaje</li>
                    <li>• Days, months, languages: el lunes, el español</li>
                  </ul>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">Usually Feminine</h4>
                  <ul className="space-y-1 text-pink-700">
                    <li>• Words ending in <strong>-a</strong>: la mesa, la casa</li>
                    <li>• Words ending in <strong>-ión</strong>: la nación, la canción</li>
                    <li>• Words ending in <strong>-dad</strong>: la ciudad, la verdad</li>
                    <li>• Words ending in <strong>-tad</strong>: la libertad</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Important Exceptions</h4>
                  <ul className="space-y-1 text-orange-700">
                    <li>• <strong>el día</strong> (the day) - masculine despite ending in -a</li>
                    <li>• <strong>la mano</strong> (the hand) - feminine despite ending in -o</li>
                    <li>• <strong>el problema</strong> (the problem) - masculine</li>
                    <li>• <strong>la foto</strong> (the photo) - feminine (short for fotografía)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* When to Use Articles */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                When to Use Articles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Use definite articles with:</h4>
                  <ul className="space-y-1 text-green-700">
                    <li>• General concepts: <em>La música es importante</em></li>
                    <li>• Languages: <em>Estudio el español</em></li>
                    <li>• Days of the week: <em>El lunes voy al trabajo</em></li>
                    <li>• Times: <em>Son las tres</em></li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Omit articles with:</h4>
                  <ul className="space-y-1 text-yellow-700">
                    <li>• Professions after ser: <em>Soy profesora</em></li>
                    <li>• Nationalities: <em>Es español</em></li>
                    <li>• After prepositions with languages: <em>Hablo en inglés</em></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Practice Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">El profesor enseña la lección.</p>
                  <p className="text-gray-600">The professor teaches the lesson.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Una estudiante tiene unos libros.</p>
                  <p className="text-gray-600">A student has some books.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Las casas son grandes.</p>
                  <p className="text-gray-600">The houses are big.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Me gusta la música clásica.</p>
                  <p className="text-gray-600">I like classical music.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="articles-spanish"
            topicTitle="Articles in Spanish"
            topicType="grammar"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
}

export default ArticlesSpanish;