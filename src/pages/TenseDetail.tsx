
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Clock, Users } from 'lucide-react';
import RatingFeedback from '@/components/RatingFeedback';

const TenseDetail = () => {
  const { tenseSlug } = useParams();

  // Placeholder data - will be expanded later
  const tenseData = {
    'present-simple': {
      name: 'Present Simple',
      spanish: 'Presente Simple',
      level: 'Basic',
      description: 'Used for habitual actions, general truths, and permanent situations',
      formation: 'Subject + verb (infinitive without "to")',
      examples: ['Yo hablo español (I speak Spanish)', 'Ella come frutas (She eats fruits)', 'Nosotros vivimos aquí (We live here)'],
      usage: 'Use for routine actions, facts, and permanent states'
    },
    'present-continuous': {
      name: 'Present Continuous',
      spanish: 'Presente Continuo',
      level: 'Basic', 
      description: 'Used for actions happening right now or temporary situations',
      formation: 'Estar + gerund (-ando/-iendo)',
      examples: ['Yo estoy hablando (I am speaking)', 'Ella está comiendo (She is eating)', 'Nosotros estamos viviendo (We are living)'],
      usage: 'Use for actions happening now or temporary situations'
    },
    'preterite-tense': {
      name: 'Preterite Tense',
      spanish: 'Pretérito Indefinido',
      level: 'Intermediate',
      description: 'Used for completed actions in the past with specific time references',
      formation: 'Verb + preterite endings (-é, -aste, -ó, -amos, -asteis, -aron)',
      examples: ['Yo hablé con María ayer (I spoke with María yesterday)', 'Él comió la pizza (He ate the pizza)', 'Nosotros fuimos al cine (We went to the cinema)'],
      usage: 'Use for completed past actions with specific time markers'
    },
    'imperfect-tense': {
      name: 'Imperfect Tense',
      spanish: 'Pretérito Imperfecto',
      level: 'Intermediate',
      description: 'Used for ongoing past actions, descriptions, and habitual actions',
      formation: 'Verb + imperfect endings (-aba, -abas, -aba, -ábamos, -abais, -aban)',
      examples: ['Yo hablaba español cuando era niño (I used to speak Spanish when I was a child)', 'Ella comía frutas todos los días (She used to eat fruits every day)', 'Nosotros vivíamos en Madrid (We used to live in Madrid)'],
      usage: 'Use for past descriptions, habitual actions, and ongoing past situations'
    }
  };

  const tense = tenseData[tenseSlug];

  const handleRating = (rating: number, feedback: string) => {
    console.log(`Tense: ${tenseSlug}, Rating: ${rating}, Feedback: ${feedback}`);
    // Store feedback for admin access
  };

  if (!tense) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Tense Not Found</h1>
          <Link to="/tenses" className="text-blue-600 hover:underline">
            ← Back to Tenses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/tenses" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tenses
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant={tense.level === 'Basic' ? 'default' : 'secondary'} className="text-lg px-4 py-1">
              {tense.level}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {tense.name}
          </h1>
          <p className="text-2xl text-blue-600 font-medium mb-4">{tense.spanish}</p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {tense.description}
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Formation */}
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <Clock className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <CardTitle className="text-2xl">Formation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg text-gray-700">{tense.formation}</p>
              </div>
            </CardContent>
          </Card>

          {/* When to Use */}
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <BookOpen className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <CardTitle className="text-2xl">When to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg text-gray-700">{tense.usage}</p>
              </div>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <Users className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <CardTitle className="text-2xl">Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tense.examples.map((example, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg text-gray-700">{example}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Common Mistakes to Avoid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Common mistakes when using {tense.name.toLowerCase()} will be listed here.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Mistake example 1</li>
                  <li>• Mistake example 2</li>
                  <li>• Mistake example 3</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Irregular Information */}
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Irregular Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Irregular verbs and special cases for {tense.name.toLowerCase()} will be documented here.
                </p>
                <div className="mt-4">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Verb</th>
                        <th className="border border-gray-300 p-2">Irregular Form</th>
                        <th className="border border-gray-300 p-2">Translation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">ser</td>
                        <td className="border border-gray-300 p-2">irregular conjugation</td>
                        <td className="border border-gray-300 p-2">to be</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Time Expressions */}
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Time Expressions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Time expressions commonly used with {tense.name.toLowerCase()} will be listed here.
                </p>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Frequency</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• siempre (always)</li>
                      <li>• nunca (never)</li>
                      <li>• a veces (sometimes)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time indicators</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• hoy (today)</li>
                      <li>• ayer (yesterday)</li>
                      <li>• mañana (tomorrow)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating and Feedback System */}
          <RatingFeedback 
            topicId={tenseSlug}
            topicTitle={tense.name}
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default TenseDetail;
