import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, AlertCircle, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const PresentContinuous = () => {
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
          <span className="text-foreground">present-continuous</span>
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
              Present Continuous
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Gerundio
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Used to describe actions that are currently happening or ongoing
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
        <h4 className="font-semibold text-lg">Formation: ESTAR + Gerund</h4>
        <div className="mt-4">
          <h4 className="font-semibold text-lg mb-2">Gerund Formation</h4>
            <p className="text-gray-700 mb-2">
                To form the gerund in Spanish, remove the infinitive endings and add the appropriate gerund endings:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>-AR verbs:</strong> Remove -ar, add -ando (hablar → hablando)</li>
            <li><strong>-ER verbs:</strong> Remove -er, add -iendo (comer → comiendo)</li>
            <li><strong>-IR verbs:</strong> Remove -ir, add -iendo (vivir → viviendo)</li>
          </ul>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 p-2">Person</th>
                <th className="border border-gray-300 p-2">ESTAR</th>
                <th className="border border-gray-300 p-2">+ Gerund</th>
                <th className="border border-gray-300 p-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Yo</td>
                <td className="border border-gray-300 p-2">estoy</td>
                <td className="border border-gray-300 p-2">hablando</td>
                <td className="border border-gray-300 p-2">Estoy hablando</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Tú</td>
                <td className="border border-gray-300 p-2">estás</td>
                <td className="border border-gray-300 p-2">comiendo</td>
                <td className="border border-gray-300 p-2">Estás comiendo</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Él/Ella</td>
                <td className="border border-gray-300 p-2">está</td>
                <td className="border border-gray-300 p-2">viviendo</td>
                <td className="border border-gray-300 p-2">Está viviendo</td>
              </tr>
                <tr>
                    <td className="border border-gray-300 p-2 font-medium">Nosotros</td>
                    <td className="border border-gray-300 p-2">estamos</td>
                    <td className="border border-gray-300 p-2">trabajando</td>
                    <td className="border border-gray-300 p-2">Estamos trabajando</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2 font-medium">Vosotros</td>
                    <td className="border border-gray-300 p-2">estáis</td>
                    <td className="border border-gray-300 p-2">estudiando</td>
                    <td className="border border-gray-300 p-2">Estáis estudiando</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2 font-medium">Ellos/Ellas</td>
                    <td className="border border-gray-300 p-2">están</td>
                    <td className="border border-gray-300 p-2">jugando</td>
                    <td className="border border-gray-300 p-2">Están jugando</td>
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
        <h4 className="font-semibold text-lg">When to Use Present Continuous</h4>
        <div className="grid gap-4">
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h5 className="font-medium text-yellow-800 mb-2">1. Actions Happening Right Now</h5>
            <p className="text-yellow-700">Something occurring at this exact moment</p>
            <p className="text-sm italic mt-1">Example: "Estoy escribiendo un email ahora mismo"</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h5 className="font-medium text-orange-800 mb-2">2. Temporary Situations</h5>
            <p className="text-orange-700">Situations that are temporary, not permanent</p>
            <p className="text-sm italic mt-1">Example: "Estoy viviendo con mis padres este mes"</p>
          </div>
        </div>
        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-2">Important Note</h4>
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-red-700">
              Spanish uses present continuous much LESS than English. Many actions that use 
              "to be + -ing" in English use the simple present in Spanish.
            </p>
            <div className="mt-2 text-sm">
              <p><strong>English:</strong> "I'm studying Spanish" (general statement)</p>
              <p><strong>Spanish:</strong> "Estudio español" (NOT "Estoy estudiando español")</p>
            </div>
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
                    <p className="text-lg font-medium text-blue-600 mb-2">Estoy estudiando para el examen.</p>
                    <p className="text-gray-600">I am studying for the exam. (Regular -ar verb)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg font-medium text-blue-600 mb-2">Están leyendo un libro interesante.</p>
                    <p className="text-gray-600">They are reading an interesting book. (Irregular gerund: i → y)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg font-medium text-blue-600 mb-2">Nosotros estamos durmiendo temprano esta semana.</p>
                    <p className="text-gray-600">We are sleeping early this week. (Stem-changing verb in gerundio)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg font-medium text-blue-600 mb-2">¿Usted está trabajando desde casa hoy?</p>
                    <p className="text-gray-600">Are you working from home today? (Formal 'usted' form)</p>
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
              <p> Some verbs have irregular gerund forms due to spelling changes for easier pronunciation:</p><br />
                <ul className="list-disc list-inside space-y-1">
                  <li>decir → diciendo (saying)</li>
                  <li>pedir → pidiendo (asking for)</li>
                  <li>dormir → durmiendo (sleeping)</li>
                  <li>leer → leyendo (reading)</li>
                  <li>oír → oyendo (hearing)</li>
                </ul>
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
            topicId="present-continuous"
            topicTitle="Present Continuous Tense"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default PresentContinuous;