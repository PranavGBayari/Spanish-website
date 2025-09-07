import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, AlertCircle, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const Indefenido = () => {
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
          <span className="text-foreground">Indefenido</span>
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
              Past tense
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Preterito Indefinido
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Completed past actions with defined time
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
              <h4 className="font-semibold text-lg">Regular Preterite Conjugation</h4>
        <p> To conjugate verbs in the preterite tense, remove the infinitive endings and add these instead. </p><br />
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
                <td className="border border-gray-300 p-2">-é</td>
                <td className="border border-gray-300 p-2">-í</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Tú</td>
                <td className="border border-gray-300 p-2">-aste</td>
                <td className="border border-gray-300 p-2">-iste</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Él/Ella</td>
                <td className="border border-gray-300 p-2">-ó</td>
                <td className="border border-gray-300 p-2">-ió</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Nosotros</td>
                <td className="border border-gray-300 p-2">-amos</td>
                <td className="border border-gray-300 p-2">-imos</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Vosotros</td>
                <td className="border border-gray-300 p-2">-asteis</td>
                <td className="border border-gray-300 p-2">-isteis</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Ellos/Ellas</td>
                <td className="border border-gray-300 p-2">-aron</td>
                <td className="border border-gray-300 p-2">-ieron</td>
              </tr>
            </tbody>
          </table>
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
        <h4 className="font-semibold text-lg">When to Use Preterite</h4>
        <div className="grid gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h5 className="font-medium text-blue-800 mb-2">1. Completed Actions</h5>
            <p className="text-blue-700">Actions that happened and finished at a specific time</p>
            <p className="text-sm italic mt-1">Example: "Comí pizza ayer" (I ate pizza yesterday)</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h5 className="font-medium text-green-800 mb-2">2. Sequence of Events</h5>
            <p className="text-green-700">Series of actions that happened one after another</p>
            <p className="text-sm italic mt-1">Example: "Me levanté, desayuné y salí de casa"</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h5 className="font-medium text-yellow-800 mb-2">3. Specific Time References</h5>
            <p className="text-yellow-700">Actions that occured at a specific time in the past</p>
            <p className="text-sm italic mt-1">Example: "El año pasado fuimos a España"</p>
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
                    <h4 className="font-semibold text-lg">Example Sentences</h4>
                    <ul className="list-disc pl-5 space-y-2">
                    <li><span className="font-medium">Ayer comí pizza.</span> (Yesterday I ate pizza.)</li>
                    <li><span className="font-medium">El año pasado viajé a España.</span> (Last year I traveled to Spain.)</li>
                    <li><span className="font-medium">Estudié español durante tres años.</span> (I studied Spanish for three years.)</li>
                    </ul>
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
              
                <p>Many verbs in the <b>pretérito indefinido</b> have irregular stems and endings. Here are some of the most common irregular verbs and their conjugations:</p><br />
    
                <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 p-2">Verb</th>
              <th className="border border-gray-300 p-2">Stem Change</th>
              <th className="border border-gray-300 p-2">Exceptions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">tener</td>
              <td className="border border-gray-300 p-2">tuv-</td>
              <td className="border border-gray-300 p-2">-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">estar</td>
              <td className="border border-gray-300 p-2">estuv-</td>
              <td className="border border-gray-300 p-2">-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">poder</td>
              <td className="border border-gray-300 p-2">pud-</td>
              <td className="border border-gray-300 p-2">-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">poner</td>
              <td className="border border-gray-300 p-2">pus-</td>
              <td className="border border-gray-300 p-2">-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">saber</td>
              <td className="border border-gray-300 p-2">sup-</td>
              <td className="border border-gray-300 p-2">-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">venir</td>
              <td className="border border-gray-300 p-2">vin-</td>
              <td className="border border-gray-300 p-2">-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">traer</td>
              <td className="border border-gray-300 p-2">traj-</td>
              <td className="border border-gray-300 p-2">ellos/ellas/ustedes form ends in -eron instead of -ieron</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">decir</td>
              <td className="border border-gray-300 p-2">dij-</td>
              <td className="border border-gray-300 p-2">-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">hacer</td>
              <td className="border border-gray-300 p-2">hic-</td>
              <td className="border border-gray-300 p-2">él/ella/usted form is hizo</td>
            </tr>
          </tbody>
          </table><br />

        <h4 className="font-semibold text-lg mb-3">Irregular Stems and Endings</h4>
        <p>For these irregular verbs, use the following endings (note there are no accent marks):</p><br />
        <table className="w-full border-collapse border border-gray-300">
        <thead>
            <tr className="bg-gray-50">
                <th className="border border-gray-300 p-2">Person</th>
                <th className="border border-gray-300 p-2">-AR/-ER/-IR Verbs</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border border-gray-300 p-2 font-medium">Yo</td>
                <td className="border border-gray-300 p-2">-e</td>
            </tr>
            <tr>
                <td className="border border-gray-300 p-2 font-medium">Tú</td>
                <td className="border border-gray-300 p-2">-iste</td>
            </tr>
            <tr>
                <td className="border border-gray-300 p-2 font-medium">Él/Ella/Ud.</td>
                <td className="border border-gray-300 p-2">-o</td>
            </tr>
            <tr>
                <td className="border border-gray-300 p-2 font-medium">Nosotros</td>
                <td className="border border-gray-300 p-2">-imos</td>
            </tr>
            <tr>
                <td className="border border-gray-300 p-2 font-medium">Vosotros</td>
                <td className="border border-gray-300 p-2">-isteis</td>
            </tr>
            <tr>
                <td className="border border-gray-300 p-2 font-medium">Ellos/Uds.</td>
                <td className="border border-gray-300 p-2">-ieron</td>
            </tr>
        </tbody>
        </table><br />

            
        
        
    
          <h4 className="font-semibold text-lg mb-3">Irregular Verbs: Ser and Ir</h4>
          <p>Both <b>ser</b> (to be) and <b>ir</b> (to go) share the exact same conjugations in the pretérito indefinido:</p><br />
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 p-2">Subject</th>
                <th className="border border-gray-300 p-2">Conjugation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Yo</td>
                <td className="border border-gray-300 p-2">fui</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Tú</td>
                <td className="border border-gray-300 p-2">fuiste</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Él/Ella/Ud.</td>
                <td className="border border-gray-300 p-2">fue</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Nosotros</td>
                <td className="border border-gray-300 p-2">fuimos</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Vosotros</td>
                <td className="border border-gray-300 p-2">fuisteis</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Ellos/Uds.</td>
                <td className="border border-gray-300 p-2">fueron</td>
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
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                  
                    <ul className="space-y-1">
                      <li>• Ayer</li>
                      <li>• La semana pasada</li>
                      <li>• En 2020</li>
                     
                    </ul>
                  
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="indefenido"
            topicTitle="Past tense"
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

export default Indefenido;