import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, AlertCircle, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const ImperfectPreterito = () => {
  const handleRating = (rating: number, feedback: string) => {
    console.log('Rating:', rating, 'Feedback:', feedback);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-blue-600 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/tenses" className="hover:text-primary">Tenses</Link>
          <span>/</span>
          <span className="text-foreground">Preterito Imperfecto</span>
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
            <Badge className="mb-4" variant="secondary">Intermediate</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Past Imperfect Tense (Imperfecto)
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Preterito Imperfecto
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The Imperfect Tense is used to describe actions that were ongoing or habitual in the past, without a specific endpoint. It sets the scene for past events, describing background actions or states. 
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
                <th className="border border-gray-300 p-2">-AR Verbs</th>
                <th className="border border-gray-300 p-2">-ER/-IR Verbs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Yo</td>
                <td className="border border-gray-300 p-2">-aba</td>
                <td className="border border-gray-300 p-2">-ía</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Tú</td>
                <td className="border border-gray-300 p-2">-abas</td>
                <td className="border border-gray-300 p-2">-ías</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Él/Ella</td>
                <td className="border border-gray-300 p-2">-aba</td>
                <td className="border border-gray-300 p-2">-ía</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Nosotros</td>
                <td className="border border-gray-300 p-2">-ábamos</td>
                <td className="border border-gray-300 p-2">-íamos</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Vosotros</td>
                <td className="border border-gray-300 p-2">-abais</td>
                <td className="border border-gray-300 p-2">-íais</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Ellos/Ellas</td>
                <td className="border border-gray-300 p-2">-aban</td>
                <td className="border border-gray-300 p-2">-ían</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-lg mb-2">Formation</h4>
          <p> To form the preterito imperfecto, remove the infinitive endings (-ar, -er, -ir) and add the appropriate endings based on the verb ending.</p>
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
        <h4 className="font-semibold text-lg">When to Use Imperfecto</h4>
        <div className="grid gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h5 className="font-medium text-blue-800 mb-2">1. Describing Ongoing or Background Actions</h5>
            <p className="text-blue-700"> Los niños jugaban en el parque mientras yo leía</p>
            <p className="text-sm italic mt-1">The children were playing in the park while I was reading(I ate pizza yesterday)</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h5 className="font-medium text-green-800 mb-2">2. Habitual or Repeated Actions in the Past</h5>
            <p className="text-green-700">Siempre íbamos a la casa de mis abuelos los domingos</p>
            <p className="text-sm italic mt-1">We used to go to my grandparents' house every Sunday</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h5 className="font-medium text-yellow-800 mb-2">3. Describing Background Information or Setting a Scene</h5>
            <p className="text-yellow-700">Era una noche fría y llovía muchoIt was a cold night, and it was raining heavily</p>
            <p className="text-sm italic mt-1">It was a cold night, and it was raining heavily</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h5 className="font-medium text-purple-800 mb-2">4. Giving Descriptions of People, Places, or Things in the Past</h5>
            <p className="text-purple-700">La casa era grande y tenía un jardín hermoso</p>
            <p className="text-sm italic mt-1">The house was big and had a beautiful garden</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <h5 className="font-medium text-red-800 mb-2">5. Expressing Simultaneous Actions in the Past</h5>
            <p className="text-red-700">Mi madre cocinaba mientras yo hacía la tarea</p>
            <p className="text-sm italic mt-1">My mother was cooking while I was doing my homework</p>
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
                    <p className="text-lg font-medium text-blue-600 mb-2">Yo trabajaba en una cafetería los fines de semana.</p>
                    <p className="text-gray-600">I used to work at a café on weekends. (Regular verb, imperfect tense)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg font-medium text-blue-600 mb-2">Él iba al parque todos los días cuando era niño.</p>
                    <p className="text-gray-600">He used to go to the park every day as a child. (Irregular verb, imperfect tense)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg font-medium text-blue-600 mb-2">Yo leía un libro cuando sonó el teléfono.</p>
                    <p className="text-gray-600">I was reading a book when the phone rang. (Imperfect + Preterite)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg font-medium text-blue-600 mb-2">Hacía frío y la gente llevaba abrigos.</p>
                    <p className="text-gray-600">It was cold and people were wearing coats. (Descriptive use of imperfect)</p>
                </div>
                </div>

            </CardContent>
          </Card>

          {/* Common Mistakes 
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-blue-600">
                Common Mistakes to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-600">❌ Incorrect:</p>
                  <p>¡No comes la comida! (using indicative in negative command)</p>
                  <p className="text-sm text-gray-600">Negative commands always use subjunctive</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-600">✅ Correct:</p>
                  <p>¡No comas la comida!</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 mt-4">
                  <p className="font-semibold text-red-600">❌ Incorrect:</p>
                  <p>¡Hablas más alto! (using present instead of imperative)</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-600">✅ Correct:</p>
                  <p>¡Habla más alto!</p>
                </div>
              </div>
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Key Points:</h4>
                <ul className="space-y-1">
                  <li>• Positive tú commands = 3rd person singular present</li>
                  <li>• Negative tú commands = 2nd person singular subjunctive</li>
                  <li>• All formal commands use subjunctive forms</li>
                  <li>• Pronouns attach to positive commands, precede negative ones</li>
                </ul>
              </div>
            </CardContent>
          </Card>*/}

          {/* Irregular Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-blue-600">
                Irregular Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>In the pretérito imperfecto, only three verbs are irregular: ir (to go), ser (to be), and ver (to see).</p><br />
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 p-2">Verb</th>
                <th className="border border-gray-300 p-2">Yo</th>
                <th className="border border-gray-300 p-2">Tú</th>
                <th className="border border-gray-300 p-2">Él/Ella</th>
                <th className="border border-gray-300 p-2">Nosotros</th>
                <th className="border border-gray-300 p-2">Vosotros</th>
                <th className="border border-gray-300 p-2">Ellos/Ellas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Ir</td>
                <td className="border border-gray-300 p-2">iba</td>
                <td className="border border-gray-300 p-2">ibas</td>
                <td className="border border-gray-300 p-2">iba</td>
                <td className="border border-gray-300 p-2">íbamos</td>
                <td className="border border-gray-300 p-2">ibais</td>
                <td className="border border-gray-300 p-2">iban</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Ser</td>
                <td className="border border-gray-300 p-2">era</td>
                <td className="border border-gray-300 p-2">eras</td>
                <td className="border border-gray-300 p-2">era</td>   
                <td className="border border-gray-300 p-2">éramos</td>
                <td className="border border-gray-300 p-2">erais</td>
                <td className="border border-gray-300 p-2">eran</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Ver</td>
                <td className="border border-gray-300 p-2">veía</td>
                <td className="border border-gray-300 p-2">veías</td>
                <td className="border border-gray-300 p-2">veía</td>
                <td className="border border-gray-300 p-2">veíamos</td>
                <td className="border border-gray-300 p-2">veíais</td>
                <td className="border border-gray-300 p-2">veían</td>
              </tr>
            </tbody>      
          </table>
            </CardContent>
          </Card>

          {/* Time Expressions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-blue-600">
                
                Time Expressions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold">Common words used with imperfecto:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-1">
                      <li>• Siempre (always)</li>
                      <li>• Cuando era niño/a (when I was a child)</li>
                      <li>• Todos los días (all the time) </li>

                    </ul>
                  </div>
                  
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="imperfect-preterito"
            topicTitle="Imperfect Preterito"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default ImperfectPreterito;