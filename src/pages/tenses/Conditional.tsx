import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, AlertCircle, Clock, MessageSquare } from 'lucide-react';
import RatingFeedback from '@/components/RatingFeedback';

const Conditional = () => {
  const handleRating = (rating: number, feedback: string) => {
    console.log('Rating:', rating, 'Feedback:', feedback);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-blue-600 text-sm text-muted-foreground mb-6">
          <a href="/" className="hover:text-primary">Home</a>
          <span>/</span>
          <a href="/tenses" className="hover:text-primary">Tenses</a>
          <span>/</span>
          <span className="text-foreground">Conditional</span>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <a 
            href="/tenses" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tenses
          </a>

          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Intermediate</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Conditional
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Condicional
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Used to express hypothetical situations, polite requests, and future events from the perspective of the past
            </p>
          </div>

          {/* Formation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-blue-600">
                Formation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
        <h4 className="font-semibold text-lg">Regular Verb Conjugation</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 p-2">Person</th>
                <th className="border border-gray-300 p-2">-AR Verbs (hablar)</th>
                <th className="border border-gray-300 p-2">-ER Verbs (comer)</th>
                <th className="border border-gray-300 p-2">-IR Verbs (vivir)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Yo</td>
                <td className="border border-gray-300 p-2">ía</td>
                <td className="border border-gray-300 p-2">ía</td>
                <td className="border border-gray-300 p-2">ía</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Tú</td>
                <td className="border border-gray-300 p-2">ías</td>
                <td className="border border-gray-300 p-2">ías</td>
                <td className="border border-gray-300 p-2">ías</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Él/Ella/Usted</td>
                <td className="border border-gray-300 p-2">ía</td>
                <td className="border border-gray-300 p-2">ía</td>
                <td className="border border-gray-300 p-2">ía</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Nosotros</td>
                <td className="border border-gray-300 p-2">íamos</td>
                <td className="border border-gray-300 p-2">íamos</td>
                <td className="border border-gray-300 p-2">íamos</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Vosotros</td>
                <td className="border border-gray-300 p-2">íais</td>
                <td className="border border-gray-300 p-2">íais</td>
                <td className="border border-gray-300 p-2">íais</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Ellos/Ellas/Ustedes</td>
                <td className="border border-gray-300 p-2">ían</td>
                <td className="border border-gray-300 p-2">ían</td>
                <td className="border border-gray-300 p-2">ían</td>
              </tr>

            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-lg mb-2">Formation</h4>
          <p>To form the conditional tense, add the conditional endings directly to the infinitive form of the verb. The endings are the same for all verb types (-ar, -er, -ir).</p>
        </div>
      </div>
            </CardContent>
          </Card>

          {/* When to Use */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-blue-600">
                When to Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
        <h4 className="font-semibold text-lg">Main Uses</h4>
        <div className="grid gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h5 className="font-medium text-blue-800 mb-2">1. Hypothetical Situations</h5>
            <p className="text-blue-700">Expressing what would happen under certain conditions</p>
            <p className="text-sm italic mt-1">Example: "Si tuviera dinero, viajaría por el mundo"</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h5 className="font-medium text-green-800 mb-2">2. Polite Requests</h5>
            <p className="text-green-700">Making courteous requests or suggestions</p>
            <p className="text-sm italic mt-1">Example: "¿Podrías ayudarme, por favor?"</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h5 className="font-medium text-purple-800 mb-2">3. Future from the Past</h5>
            <p className="text-purple-700">Expressing future events from a past perspective</p>
            <p className="text-sm italic mt-1">Example: "Dijo que llegaría tarde"</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h5 className="font-medium text-orange-800 mb-2">4. Possibility or Probability</h5>
            <p className="text-orange-700">Expressing probability or conjecture about the past</p>
            <p className="text-sm italic mt-1">Example: "Serían las diez cuando llegó"</p>
          </div>
        </div>
      </div>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-blue-600">
                Examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg font-medium text-blue-600 mb-2">Con más tiempo, estudiaría español todos los días.</p>
                    <p className="text-gray-600">With more time, I would study Spanish every day. (Hypothetical situation)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg font-medium text-blue-600 mb-2">¿Te gustaría cenar con nosotros esta noche?</p>
                    <p className="text-gray-600">Would you like to have dinner with us tonight? (Polite request)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg font-medium text-blue-600 mb-2">María dijo que vendría a la reunión.</p>
                    <p className="text-gray-600">María said she would come to the meeting. (Future from the past)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg font-medium text-blue-600 mb-2">¿Qué hora sería cuando terminó la película?</p>
                    <p className="text-gray-600">What time would it have been when the movie ended? (Probability/conjecture)</p>
                </div>
                </div>
            </CardContent>
          </Card>

          {/* Irregular Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-blue-600">
                Irregular Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-lg mb-5">Irregular Verbs in the Conditional</h4>
            <p>Some verbs have irregular stems in the conditional tense. However, the endings remain the same (-ía, -ías, -ía, -íamos, -íais, -ían). These are the same irregular stems used in the future tense:</p><br />

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mb-6">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-2">Infinitive</th>
                    <th className="border border-gray-300 p-2">Irregular Stem</th>
                    <th className="border border-gray-300 p-2">Yo Form</th>
                    <th className="border border-gray-300 p-2">Full Conjugation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">tener</td>
                    <td className="border border-gray-300 p-2">tendr-</td>
                    <td className="border border-gray-300 p-2">tendría</td>
                    <td className="border border-gray-300 p-2">tendría, tendrías, tendría, tendríamos, tendríais, tendrían</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">salir</td>
                    <td className="border border-gray-300 p-2">saldr-</td>
                    <td className="border border-gray-300 p-2">saldría</td>
                    <td className="border border-gray-300 p-2">saldría, saldrías, saldría, saldríamos, saldríais, saldrían</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">venir</td>
                    <td className="border border-gray-300 p-2">vendr-</td>
                    <td className="border border-gray-300 p-2">vendría</td>
                    <td className="border border-gray-300 p-2">vendría, vendrías, vendría, vendríamos, vendríais, vendrían</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">poner</td>
                    <td className="border border-gray-300 p-2">pondr-</td>
                    <td className="border border-gray-300 p-2">pondría</td>
                    <td className="border border-gray-300 p-2">pondría, pondrías, pondría, pondríamos, pondríais, pondrían</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">saber</td>
                    <td className="border border-gray-300 p-2">sabr-</td>
                    <td className="border border-gray-300 p-2">sabría</td>
                    <td className="border border-gray-300 p-2">sabría, sabrías, sabría, sabríamos, sabríais, sabrían</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">hacer</td>
                    <td className="border border-gray-300 p-2">har-</td>
                    <td className="border border-gray-300 p-2">haría</td>
                    <td className="border border-gray-300 p-2">haría, harías, haría, haríamos, haríais, harían</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">decir</td>
                    <td className="border border-gray-300 p-2">dir-</td>
                    <td className="border border-gray-300 p-2">diría</td>
                    <td className="border border-gray-300 p-2">diría, dirías, diría, diríamos, diríais, dirían</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">querer</td>
                    <td className="border border-gray-300 p-2">querr-</td>
                    <td className="border border-gray-300 p-2">querría</td>
                    <td className="border border-gray-300 p-2">querría, querrías, querría, querríamos, querríais, querrían</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">poder</td>
                    <td className="border border-gray-300 p-2">podr-</td>
                    <td className="border border-gray-300 p-2">podría</td>
                    <td className="border border-gray-300 p-2">podría, podrías, podría, podríamos, podríais, podrían</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-semibold text-lg mb-4">Common Patterns</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p><strong>Drop 'e' or 'i' and add 'd':</strong> tener → tendr-, venir → vendr-, poner → pondr-, salir → saldr-</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p><strong>Drop vowel before 'r':</strong> saber → sabr-, querer → querr-, poder → podr-</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p><strong>Complete stem change:</strong> hacer → har-, decir → dir-</p>
              </div>
            </div>

            <p className="mt-4"><em>Remember: These same irregular stems are used in both the conditional and future tenses!</em></p>

            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="conditional"
            topicTitle="Conditional Tense"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default Conditional;