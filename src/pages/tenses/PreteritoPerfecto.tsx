import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, AlertCircle, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const PreteritoPerfecto = () => {
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
          <Link to="/tenses" className="hover:text-primary">Tenses</Link>
          <span>/</span>
          <span className="text-foreground">Pretérito Perfecto</span>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/tenses" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tenses
          </Link>

          <div className="text-center mb-12">
            <Badge className="mb-4">Intermediate</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Pretérito Perfecto
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Pretérito Perfecto
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Actions completed in a recent past period or with relevance to the present
            </p>
          </div>

          {/* Formation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Formation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  <strong>Formula:</strong> Haber (present) + Past Participle
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Conjugation of Haber:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p>Yo he</p>
                      <p>Tú has</p>
                      <p>Él/Ella/Usted ha</p>
                    </div>
                    <div>
                      <p>Nosotros/as hemos</p>
                      <p>Vosotros/as habéis</p>
                      <p>Ellos/Ellas/Ustedes han</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Past Participle Formation:</h4>
                  <ul className="space-y-2">
                    <li><strong>-ar verbs:</strong> -ado (hablar → hablado)</li>
                    <li><strong>-er verbs:</strong> -ido (comer → comido)</li>
                    <li><strong>-ir verbs:</strong> -ido (vivir → vivido)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* When to Use */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                When to Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-lg">
                <li>• Actions completed in a time period that includes the present</li>
                <li>• Recent past actions with relevance to the present</li>
                <li>• Life experiences (without specific time)</li>
                <li>• Actions in unfinished time periods (today, this week, this year)</li>
              </ul>
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
                  <p className="text-lg font-medium text-blue-600 mb-2">He comido paella.</p>
                  <p className="text-gray-600">I have eaten paella. (Life experience)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Hoy he trabajado mucho.</p>
                  <p className="text-gray-600">Today I have worked a lot. (Unfinished time period)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">¿Has visto a María?</p>
                  <p className="text-gray-600">Have you seen María? (Recent past with present relevance)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Common Mistakes to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-600">❌ Incorrect:</p>
                  <p>Ayer he comido en el restaurante.</p>
                  <p className="text-sm text-gray-600">Don't use with specific past time markers like "ayer" (yesterday)</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-600">✅ Correct:</p>
                  <p>Ayer comí en el restaurante. (Preterite)</p>
                  <p>Esta semana he comido en el restaurante. (Perfect)</p>
                </div>
              </div>
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Key Points:</h4>
                <ul className="space-y-1">
                  <li>• Don't confuse with simple preterite</li>
                  <li>• Use only with time periods that include the present</li>
                  <li>• Past participle never changes (unlike adjectives)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Irregular Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Irregular Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold">Irregular Past Participles:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p><strong>abrir</strong> → abierto (opened)</p>
                    <p><strong>escribir</strong> → escrito (written)</p>
                    <p><strong>hacer</strong> → hecho (done/made)</p>
                    <p><strong>poner</strong> → puesto (put)</p>
                    <p><strong>ver</strong> → visto (seen)</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p><strong>decir</strong> → dicho (said)</p>
                    <p><strong>morir</strong> → muerto (died)</p>
                    <p><strong>romper</strong> → roto (broken)</p>
                    <p><strong>volver</strong> → vuelto (returned)</p>
                    <p><strong>cubrir</strong> → cubierto (covered)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Time Expressions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Time Expressions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold">Common time expressions used with Pretérito Perfecto:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Unfinished time periods:</h5>
                    <ul className="space-y-1">
                      <li>• Hoy (today)</li>
                      <li>• Esta semana (this week)</li>
                      <li>• Este mes (this month)</li>
                      <li>• Este año (this year)</li>
                      <li>• Esta mañana (this morning)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Experience expressions:</h5>
                    <ul className="space-y-1">
                      <li>• Alguna vez (ever/sometime)</li>
                      <li>• Nunca (never)</li>
                      <li>• Ya (already/yet)</li>
                      <li>• Todavía no (not yet)</li>
                      <li>• Últimamente (lately)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="preterito-perfecto"
            topicTitle="Pretérito Perfecto"
            topicType="tense"
            onSubmit={(rating, feedback) => {
    console.log('Rating submitted:', rating, feedback);
  }}
          />
        </div>
      </div>
    </div>
  );
};

export default PreteritoPerfecto;