// src/pages/grammar/PlacePrepositions.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Clock, MessageSquare, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const PlacePrepositions = () => {
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
          <span className="text-foreground">Prepositions of Place</span>
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
            <Badge className="mb-4" variant="secondary">IGCSE</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Prepositions of Place
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Las Preposiciones de Lugar
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Express location and spatial relationships in Spanish
            </p>
          </div>

          {/* Basic Prepositions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Basic Prepositions of Place
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3">Spanish</th>
                        <th className="border border-gray-300 p-3">English</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">en</td>
                        <td className="border border-gray-300 p-3">in, on, at</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">sobre</td>
                        <td className="border border-gray-300 p-3">on, over, above</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">debajo de</td>
                        <td className="border border-gray-300 p-3">under, below</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">encima de</td>
                        <td className="border border-gray-300 p-3">above, on top of</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">al lado de</td>
                        <td className="border border-gray-300 p-3">next to, beside</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">entre</td>
                        <td className="border border-gray-300 p-3">between, among</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3">Spanish</th>
                        <th className="border border-gray-300 p-3">English</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">delante de</td>
                        <td className="border border-gray-300 p-3">in front of</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">detrás de</td>
                        <td className="border border-gray-300 p-3">behind</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">cerca de</td>
                        <td className="border border-gray-300 p-3">near, close to</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">lejos de</td>
                        <td className="border border-gray-300 p-3">far from</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">dentro de</td>
                        <td className="border border-gray-300 p-3">inside, within</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">fuera de</td>
                        <td className="border border-gray-300 p-3">outside of</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Special Uses */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Special Uses and Contractions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Contractions with "de"</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• <strong>de + el = del</strong> → cerca del parque (near the park)</li>
                    <li>• <strong>de + la = de la</strong> → lejos de la escuela (far from school)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Using "en" for location</h4>
                  <ul className="space-y-1 text-green-700">
                    <li>• Countries/cities: <strong>en</strong> España, <strong>en</strong> Madrid</li>
                    <li>• Buildings: <strong>en</strong> la escuela, <strong>en</strong> casa</li>
                    <li>• Surfaces: <strong>en</strong> la mesa, <strong>en</strong> la pared</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">"A" for destination</h4>
                  <ul className="space-y-1 text-yellow-700">
                    <li>• Voy <strong>a</strong> la tienda (I'm going to the store)</li>
                    <li>• Viajamos <strong>a</strong> México (We're traveling to Mexico)</li>
                    <li>• <strong>a + el = al</strong> → Vamos al cine (We're going to the movies)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Directional Prepositions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Directional Prepositions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Direction & Movement</h4>
                    <ul className="space-y-1 text-purple-700">
                      <li>• <strong>hacia</strong> - toward, towards</li>
                      <li>• <strong>hasta</strong> - until, up to</li>
                      <li>• <strong>desde</strong> - from, since</li>
                      <li>• <strong>por</strong> - through, along</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Position Reference</h4>
                    <ul className="space-y-1 text-orange-700">
                      <li>• <strong>a la derecha de</strong> - to the right of</li>
                      <li>• <strong>a la izquierda de</strong> - to the left of</li>
                      <li>• <strong>enfrente de</strong> - across from</li>
                      <li>• <strong>al final de</strong> - at the end of</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🏠</div>
                    <p className="text-sm text-gray-600">Visual representation of spatial relationships would go here</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Expressions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Common Expressions with Place
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Asking for directions</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• ¿Dónde está...? (Where is...?)</li>
                    <li>• ¿Cómo llego a...? (How do I get to...?)</li>
                    <li>• ¿Está cerca de aquí? (Is it near here?)</li>
                    <li>• ¿Por dónde se va a...? (Which way to...?)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Giving directions</h4>
                  <ul className="space-y-1 text-green-700">
                    <li>• Está al lado del banco (It's next to the bank)</li>
                    <li>• Sigue recto (Go straight)</li>
                    <li>• Dobla a la derecha (Turn right)</li>
                    <li>• Está enfrente de la farmacia (It's across from the pharmacy)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Practice Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Practice Examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">El libro está sobre la mesa, al lado del ordenador.</p>
                  <p className="text-gray-600">The book is on the table, next to the computer.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Mi casa está entre la farmacia y la panadería.</p>
                  <p className="text-gray-600">My house is between the pharmacy and the bakery.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">El gato está debajo de la cama.</p>
                  <p className="text-gray-600">The cat is under the bed.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">La escuela está lejos del centro de la ciudad.</p>
                  <p className="text-gray-600">The school is far from the city center.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="place-prepositions"
            topicTitle="Prepositions of Place"
            topicType="grammar"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default PlacePrepositions;