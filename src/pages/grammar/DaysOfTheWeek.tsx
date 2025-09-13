// src/pages/grammar/DaysOfTheWeek.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, AlertCircle, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const DaysOfTheWeek = () => {
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
          <span className="text-foreground">Days of the Week</span>
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
              Days of the Week
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Los Días de la Semana
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn the seven days of the week in Spanish and how to use them in everyday conversation
            </p>
          </div>

          {/* Days of the Week */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                The Days of the Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3">Spanish</th>
                        <th className="border border-gray-300 p-3">English</th>
                        <th className="border border-gray-300 p-3">Pronunciation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">lunes</td>
                        <td className="border border-gray-300 p-3">Monday</td>
                        <td className="border border-gray-300 p-3">[LOO-nes]</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">martes</td>
                        <td className="border border-gray-300 p-3">Tuesday</td>
                        <td className="border border-gray-300 p-3">[MAR-tes]</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">miércoles</td>
                        <td className="border border-gray-300 p-3">Wednesday</td>
                        <td className="border border-gray-300 p-3">[MYER-ko-les]</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">jueves</td>
                        <td className="border border-gray-300 p-3">Thursday</td>
                        <td className="border border-gray-300 p-3">[HWEH-bes]</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">viernes</td>
                        <td className="border border-gray-300 p-3">Friday</td>
                        <td className="border border-gray-300 p-3">[bee-ER-nes]</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">sábado</td>
                        <td className="border border-gray-300 p-3">Saturday</td>
                        <td className="border border-gray-300 p-3">[SAH-ba-do]</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">domingo</td>
                        <td className="border border-gray-300 p-3">Sunday</td>
                        <td className="border border-gray-300 p-3">[do-MEEN-go]</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Rules */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Usage Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">1. Days are masculine and lowercase</h4>
                  <p className="text-blue-700">Los días de la semana son masculinos y se escriben en minúscula</p>
                  <p className="text-sm italic mt-1">Example: el lunes, los martes</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">2. Use 'el' for 'on' + day</h4>
                  <p className="text-green-700">Voy al cine el sábado</p>
                  <p className="text-sm italic mt-1">I'm going to the movies on Saturday</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">3. Use 'los' for habitual actions</h4>
                  <p className="text-yellow-700">Trabajo los lunes</p>
                  <p className="text-sm italic mt-1">I work on Mondays (every Monday)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Hoy es lunes.</p>
                  <p className="text-gray-600">Today is Monday.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">El miércoles tengo una cita.</p>
                  <p className="text-gray-600">On Wednesday I have an appointment.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Los viernes voy al gimnasio.</p>
                  <p className="text-gray-600">On Fridays I go to the gym.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">¿Qué día es mañana?</p>
                  <p className="text-gray-600">What day is tomorrow?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Phrases */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Common Phrases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Asking about days:</h4>
                    <ul className="space-y-1 text-purple-700">
                      <li>• ¿Qué día es hoy? (What day is today?)</li>
                      <li>• ¿Qué día es mañana? (What day is tomorrow?)</li>
                      <li>• ¿Qué día fue ayer? (What day was yesterday?)</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Time expressions:</h4>
                    <ul className="space-y-1 text-orange-700">
                      <li>• fin de semana (weekend)</li>
                      <li>• entre semana (weekdays)</li>
                      <li>• día laborable (working day)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="days-of-week"
            topicTitle="Days of the Week"
            topicType="grammar"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default DaysOfTheWeek;