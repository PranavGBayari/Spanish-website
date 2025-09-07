import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, AlertCircle, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const Future = () => {
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
          <span className="text-foreground">Future</span>
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
            <Badge className="mb-4" variant="secondary">Beginner</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Future
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Futuro
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Future plans, predictions,and promises.
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
        <h4 className="font-semibold text-lg">Formation: Infinitive + Endings</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 p-2">Person</th>
                <th className="border border-gray-300 p-2">-AR/ER/IR Verbs</th>
                <th className="border border-gray-300 p-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Yo</td>
                <td className="border border-gray-300 p-2">-é</td>
                <td className="border border-gray-300 p-2">Estudiaré</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Tú</td>
                <td className="border border-gray-300 p-2">-ás </td>
                <td className="border border-gray-300 p-2">Estudiarás</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Él/Ella/Usted</td>
                <td className="border border-gray-300 p-2">-á </td>
                <td className="border border-gray-300 p-2">Estudiará</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Nosotros</td>
                <td className="border border-gray-300 p-2">-emos </td>
                <td className="border border-gray-300 p-2">Estudiaremos</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Vosotros</td>
                <td className="border border-gray-300 p-2">-éis </td>
                <td className="border border-gray-300 p-2">Estudiaréis</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Ellos/Ellas/Ustedes</td>
                <td className="border border-gray-300 p-2">-án </td>
                <td className="border border-gray-300 p-2">Estudiarán</td>
              </tr>
            </tbody>
          </table>
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
        <div className="grid gap-4">
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h5 className="font-semibold">Future Plans</h5>
            <p className="text-yellow-700">To express plans or intentions for the future</p>
            <p className="text-sm italic">Example: "Mañana estudiaré para el examen"</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h5 className="font-semibold">Predictions</h5>
            <p className="text-green-700">To make predictions about future events</p>
            <p className="text-sm italic">Example: "Creo que lloverá mañana"</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h5 className="font-semibold">Promises</h5>
            <p className="text-blue-700">To make promises or commitments</p>
            <p className="text-sm italic">Example: "Te ayudaré con tu tarea"</p>
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
        <p className="text-lg font-medium text-blue-600 mb-2">Mañana visitaré un museo para aprender más sobre la historia.</p>
        <p className="text-gray-600">Tomorrow I will visit a museum to learn more about history. (Regular future tense verb)</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-lg font-medium text-blue-600 mb-2">Mis amigos y yo tendremos una reunión para planificar el evento escolar.</p>
        <p className="text-gray-600">My friends and I will have a meeting to plan the school event. (Irregular future tense verb)</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-lg font-medium text-blue-600 mb-2">¿Qué harás si no terminas la tarea a tiempo?</p>
        <p className="text-gray-600">What will you do if you don't finish the homework on time? (Irregular future tense verb with a question)</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-lg font-medium text-blue-600 mb-2">En el futuro, comprenderemos mejor los efectos del cambio climático.</p>
        <p className="text-gray-600">In the future, we will better understand the effects of climate change. (Regular and reflexive-like usage in future tense)</p>
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
              <p>In the futuro tense, some verbs have irregular stems. Instead of using the infinitive form, these verbs change their stem before adding the future endings. The endings themselves remain the same as for regular verbs.</p><br />
  
        <h4 className = "font-semibold text-lg mb-3">Common Irregular Verbs and Their Stems</h4>
    
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 p-2">Infinitive</th>
              <th className="border border-gray-300 p-2">Irregular Stem</th>
              <th className="border border-gray-300 p-2">Conjugation Example (Yo)</th>
              <th className="border border-gray-300 p-2">Translation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">decir</td>
              <td className="border border-gray-300 p-2">dir-</td>
              <td className="border border-gray-300 p-2">diré</td>
              <td className="border border-gray-300 p-2">I will say</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">hacer</td>
              <td className="border border-gray-300 p-2">har-</td>
              <td className="border border-gray-300 p-2">haré</td>
              <td className="border border-gray-300 p-2">I will do/make</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">poder</td>
              <td className="border border-gray-300 p-2">podr-</td>
              <td className="border border-gray-300 p-2">podré</td>
              <td className="border border-gray-300 p-2">I will be able to</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">poner</td>
              <td className="border border-gray-300 p-2">pondr-</td>
              <td className="border border-gray-300 p-2">pondré</td>
              <td className="border border-gray-300 p-2">I will put/place</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">querer</td>
              <td className="border border-gray-300 p-2">querr-</td>
              <td className="border border-gray-300 p-2">querré</td>
              <td className="border border-gray-300 p-2">I will want</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">saber</td>
              <td className="border border-gray-300 p-2">sabr-</td>
              <td className="border border-gray-300 p-2">sabré</td>
              <td className="border border-gray-300 p-2">I will know</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">salir</td>
              <td className="border border-gray-300 p-2">saldr-</td>
              <td className="border border-gray-300 p-2">saldré</td>
              <td className="border border-gray-300 p-2">I will leave/go out</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">tener</td>
              <td className="border border-gray-300 p-2">tendr-</td>
              <td className="border border-gray-300 p-2">tendré</td>
              <td className="border border-gray-300 p-2">I will have</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">valer</td>
              <td className="border border-gray-300 p-2">valdr-</td>
              <td className="border border-gray-300 p-2">valdré</td>
              <td className="border border-gray-300 p-2">I will be worth</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">venir</td>
              <td className="border border-gray-300 p-2">vendr-</td>
              <td className="border border-gray-300 p-2">vendré</td>
              <td className="border border-gray-300 p-2">I will come</td>
            </tr>
          </tbody>
        </table>

            </CardContent>
          </Card>

          {/* Time Expressions 
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-blue-600">
                <Clock className="w-5 h-5" />
                Time Expressions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold">Common words used with imperatives:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Politeness markers:</h5>
                    <ul className="space-y-1">
                      <li>• Por favor (please)</li>
                      <li>• Si es tan amable (if you would be so kind)</li>
                      <li>• Haga el favor de... (please...)</li>
                      <li>• Tenga la bondad de... (please be so good as to...)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Urgency/emphasis:</h5>
                    <ul className="space-y-1">
                      <li>• ¡Rápido! (quickly!)</li>
                      <li>• ¡Ahora mismo! (right now!)</li>
                      <li>• ¡Inmediatamente! (immediately!)</li>
                      <li>• ¡Ya! (now!/already!)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>*/}

          {/* Rating Component */}
          <RatingFeedback 
            topicId="future"
            topicTitle="Future Tense"
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

export default Future;