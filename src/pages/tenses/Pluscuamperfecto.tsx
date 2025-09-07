import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, AlertCircle, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const Pluscuamperfecto = () => {
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
          <span className="text-foreground">Pluscuamperfecto</span>
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
            <Badge className="mb-4" variant="destructive">Advanced</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Pluscuamperfecto
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Pluscuamperfecto
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Actions completed before another past action or time reference
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
                  <strong>Formula:</strong> Haber (imperfect) + Past Participle
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Conjugation of Haber (Imperfect):</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p>Yo había</p>
                      <p>Tú habías</p>
                      <p>Él/Ella/Usted había</p>
                    </div>
                    <div>
                      <p>Nosotros/as habíamos</p>
                      <p>Vosotros/as habíais</p>
                      <p>Ellos/Ellas/Ustedes habían</p>
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
                <li>• Actions completed before another past action</li>
                <li>• Actions completed before a specific past time</li>
                <li>• In reported speech for past perfect</li>
                <li>• In conditional sentences (if clauses) referring to the past</li>
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
                  <p className="text-lg font-medium text-blue-600 mb-2">Cuando llegué, él ya había salido.</p>
                  <p className="text-gray-600">When I arrived, he had already left. (Two past actions)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">A las 8, ya había terminado mi trabajo.</p>
                  <p className="text-gray-600">By 8 o'clock, I had already finished my work. (Past time reference)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Me dijo que había estudiado toda la noche.</p>
                  <p className="text-gray-600">He told me that he had studied all night. (Reported speech)</p>
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
                  <p>Cuando llegué, él salió.</p>
                  <p className="text-sm text-gray-600">This doesn't show the sequence of events clearly</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-600">✅ Correct:</p>
                  <p>Cuando llegué, él ya había salido.</p>
                  <p className="text-sm text-gray-600">This clearly shows he left before I arrived</p>
                </div>
              </div>
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Key Points:</h4>
                <ul className="space-y-1">
                  <li>• Always indicates an action before another past action/time</li>
                  <li>• Often used with time expressions like "ya" (already)</li>
                  <li>• Don't overuse - only when sequence is important</li>
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
                <h4 className="font-semibold">Irregular Past Participles (same as Pretérito Perfecto):</h4>
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
                <h4 className="font-semibold">Common time expressions used with Pluscuamperfecto:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Sequence indicators:</h5>
                    <ul className="space-y-1">
                      <li>• Ya (already)</li>
                      <li>• Antes de que (before)</li>
                      <li>• Cuando (when)</li>
                      <li>• Después de que (after)</li>
                      <li>• Todavía no (not yet)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Time references:</h5>
                    <ul className="space-y-1">
                      <li>• Para entonces (by then)</li>
                      <li>• A las... (by ... o'clock)</li>
                      <li>• Antes de... (before...)</li>
                      <li>• Al final de... (by the end of...)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="pluscuamperfecto"
            topicTitle="Pluscuamperfecto"
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

export default Pluscuamperfecto;