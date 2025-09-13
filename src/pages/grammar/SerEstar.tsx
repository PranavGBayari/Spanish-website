// src/pages/grammar/SerEstar.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Clock, MessageSquare, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const SerEstar = () => {
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
          <span className="text-foreground">Ser vs Estar</span>
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
              Ser vs Estar
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Los Verbos "Ser" y "Estar"
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master the crucial difference between permanent and temporary states of being
            </p>
          </div>

          {/* Conjugations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Conjugations (Present Tense)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">SER</h3>
                  <table className="w-full">
                    <tbody>
                      <tr><td className="py-1 font-medium">yo</td><td className="py-1 text-blue-600 font-bold">soy</td></tr>
                      <tr><td className="py-1 font-medium">tú</td><td className="py-1 text-blue-600 font-bold">eres</td></tr>
                      <tr><td className="py-1 font-medium">él/ella/usted</td><td className="py-1 text-blue-600 font-bold">es</td></tr>
                      <tr><td className="py-1 font-medium">nosotros</td><td className="py-1 text-blue-600 font-bold">somos</td></tr>
                      <tr><td className="py-1 font-medium">vosotros</td><td className="py-1 text-blue-600 font-bold">sois</td></tr>
                      <tr><td className="py-1 font-medium">ellos/ellas/ustedes</td><td className="py-1 text-blue-600 font-bold">son</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4 text-center">ESTAR</h3>
                  <table className="w-full">
                    <tbody>
                      <tr><td className="py-1 font-medium">yo</td><td className="py-1 text-green-600 font-bold">estoy</td></tr>
                      <tr><td className="py-1 font-medium">tú</td><td className="py-1 text-green-600 font-bold">estás</td></tr>
                      <tr><td className="py-1 font-medium">él/ella/usted</td><td className="py-1 text-green-600 font-bold">está</td></tr>
                      <tr><td className="py-1 font-medium">nosotros</td><td className="py-1 text-green-600 font-bold">estamos</td></tr>
                      <tr><td className="py-1 font-medium">vosotros</td><td className="py-1 text-green-600 font-bold">estáis</td></tr>
                      <tr><td className="py-1 font-medium">ellos/ellas/ustedes</td><td className="py-1 text-green-600 font-bold">están</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* When to Use SER */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                When to Use SER (Permanent/Essential Characteristics)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">1. Identity and Profession</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• <strong>Soy</strong> María (I am María)</li>
                    <li>• Él <strong>es</strong> médico (He is a doctor)</li>
                    <li>• <strong>Somos</strong> estudiantes (We are students)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">2. Physical Characteristics</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• María <strong>es</strong> alta (María is tall)</li>
                    <li>• El coche <strong>es</strong> rojo (The car is red)</li>
                    <li>• <strong>Es</strong> una casa grande (It's a big house)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">3. Origin and Nationality</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• <strong>Soy</strong> de España (I am from Spain)</li>
                    <li>• Ella <strong>es</strong> mexicana (She is Mexican)</li>
                    <li>• El vino <strong>es</strong> de Francia (The wine is from France)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">4. Time and Dates</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• <strong>Son</strong> las tres (It's three o'clock)</li>
                    <li>• Hoy <strong>es</strong> lunes (Today is Monday)</li>
                    <li>• <strong>Es</strong> el 15 de mayo (It's May 15th)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* When to Use ESTAR */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                When to Use ESTAR (Temporary States/Location)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">1. Location (Where something is)</h4>
                  <ul className="space-y-1 text-green-700">
                    <li>• <strong>Estoy</strong> en casa (I am at home)</li>
                    <li>• El libro <strong>está</strong> en la mesa (The book is on the table)</li>
                    <li>• Madrid <strong>está</strong> en España (Madrid is in Spain)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">2. Temporary States and Conditions</h4>
                  <ul className="space-y-1 text-green-700">
                    <li>• <strong>Estoy</strong> cansado (I am tired)</li>
                    <li>• La sopa <strong>está</strong> caliente (The soup is hot)</li>
                    <li>• <strong>Estás</strong> muy guapo hoy (You look very handsome today)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">3. Ongoing Actions (Progressive)</h4>
                  <ul className="space-y-1 text-green-700">
                    <li>• <strong>Estoy</strong> estudiando (I am studying)</li>
                    <li>• <strong>Está</strong> lloviendo (It is raining)</li>
                    <li>• <strong>Estamos</strong> trabajando (We are working)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">4. Results of Actions</h4>
                  <ul className="space-y-1 text-green-700">
                    <li>• La puerta <strong>está</strong> cerrada (The door is closed)</li>
                    <li>• El problema <strong>está</strong> resuelto (The problem is solved)</li>
                    <li>• <strong>Está</strong> roto (It is broken)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Meaning Changes */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Adjectives That Change Meaning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3">Adjective</th>
                      <th className="border border-gray-300 p-3">With SER</th>
                      <th className="border border-gray-300 p-3">With ESTAR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">rico</td>
                      <td className="border border-gray-300 p-3">rich (wealthy)</td>
                      <td className="border border-gray-300 p-3">tasty, delicious</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">listo</td>
                      <td className="border border-gray-300 p-3">clever, smart</td>
                      <td className="border border-gray-300 p-3">ready</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">aburrido</td>
                      <td className="border border-gray-300 p-3">boring (personality)</td>
                      <td className="border border-gray-300 p-3">bored (feeling)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">verde</td>
                      <td className="border border-gray-300 p-3">green (color)</td>
                      <td className="border border-gray-300 p-3">unripe</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">malo</td>
                      <td className="border border-gray-300 p-3">bad (character)</td>
                      <td className="border border-gray-300 p-3">sick, ill</td>
                    </tr>
                  </tbody>
                </table>
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
                  <p className="mb-2">1. Ella <strong>____</strong> doctora. (She is a doctor.)</p>
                  <p className="text-sm text-gray-600">Answer: <strong>es</strong> (profession - permanent)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">2. Nosotros <strong>____</strong> en la escuela. (We are at school.)</p>
                  <p className="text-sm text-gray-600">Answer: <strong>estamos</strong> (location - temporary)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">3. El café <strong>____</strong> caliente. (The coffee is hot.)</p>
                    <p className="text-sm text-gray-600">Answer: <strong>está</strong> (condition - temporary)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">4. Yo <strong>____</strong> de México. (I am from Mexico.)</p>    
                    <p className="text-sm text-gray-600">Answer: <strong>soy</strong> (origin - permanent)</p>
                </div>
            </div>
                </CardContent>
            </Card>
            {/* Rating and Feedback System */}
            <RatingFeedback 
            topicId="ser-estar"
            topicTitle="Ser vs Estar"
            topicType="grammar"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
}

export default SerEstar;
