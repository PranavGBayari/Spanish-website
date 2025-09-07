import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, AlertCircle, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const Perfecto = () => {
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
          <span className="text-foreground">Perfecto</span>
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
              Perfect Tense
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Perfecto
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The perfect tense is used to describe actions that have been completed in the past and are relevant to the present. It is formed using the auxiliary verb "haber" and the past participle of the main verb.
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
                <td className="border border-gray-300 p-2">o</td>
                <td className="border border-gray-300 p-2">o</td>
                <td className="border border-gray-300 p-2">o</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Tú</td>
                <td className="border border-gray-300 p-2">as</td>
                <td className="border border-gray-300 p-2">es</td>
                <td className="border border-gray-300 p-2">es</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Él/Ella/Usted</td>
                <td className="border border-gray-300 p-2">a</td>
                <td className="border border-gray-300 p-2">e</td>
                <td className="border border-gray-300 p-2">e</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Nosotros</td>
                <td className="border border-gray-300 p-2">amos</td>
                <td className="border border-gray-300 p-2">emos</td>
                <td className="border border-gray-300 p-2">imos</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Vosotros</td>
                <td className="border border-gray-300 p-2">áis</td>
                <td className="border border-gray-300 p-2">éis</td>
                <td className="border border-gray-300 p-2">ís</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">Ellos/Ellas/Ustedes</td>
                <td className="border border-gray-300 p-2">an</td>
                <td className="border border-gray-300 p-2">en</td>
                <td className="border border-gray-300 p-2">en</td>
              </tr>

            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-lg mb-2">Formation</h4>
          <p> To form the present simple, remove the infinitive endings (-ar, -er, -ir) and add the appropriate endings based on the verb ending.</p>
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
            <h5 className="font-medium text-blue-800 mb-2">1. Habitual Actions</h5>
            <p className="text-blue-700">Actions that happen regularly or repeatedly</p>
            <p className="text-sm italic mt-1">Example: "Yo desayuno a las 7:00 todos los días"</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h5 className="font-medium text-green-800 mb-2">2. General Truths</h5>
            <p className="text-green-700">Facts that are always true</p>
            <p className="text-sm italic mt-1">Example: "El sol sale por el este"</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h5 className="font-medium text-purple-800 mb-2">3. Current States</h5>
            <p className="text-purple-700">Describing how things are right now</p>
            <p className="text-sm italic mt-1">Example: "Ella vive en Madrid"</p>
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
                    <p className="text-lg font-medium text-blue-600 mb-2">Yo estudio español todos los días.</p>
                    <p className="text-gray-600">I study Spanish every day. (Regular verb)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg font-medium text-blue-600 mb-2">Ella piensa que la clase es interesante.</p>
                    <p className="text-gray-600">She thinks the class is interesting. (Irregular stem-changing verb)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg font-medium text-blue-600 mb-2">Nosotros dormimos ocho horas cada noche.</p>
                    <p className="text-gray-600">We sleep eight hours every night. (Irregular verb, no stem change in nosotros form)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg font-medium text-blue-600 mb-2">¿Usted necesita ayuda con el proyecto?</p>
                    <p className="text-gray-600">Do you need help with the project? (Formal ‘usted’ form)</p>
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
              <h4 className="font-semibold text-lg mb-5">a. Irregular Yo Form Conjugations</h4>
            <p><strong>-go verbs:</strong> Verbs that add "-go" in the yo form.</p><br />
            <p>hacer → <strong>hago</strong> (to do/make)</p>
            <p>tener → <strong>tengo</strong> (to have)</p>
            <p>salir → <strong>salgo</strong> (to leave)</p>
            <p>poner → <strong>pongo</strong> (to put)</p>
            <p>decir → <strong>digo</strong> (to say/tell)</p><br />

            <p><strong>-zco verbs:</strong> Verbs ending in -cer or -cir where the root often ends in a vowel and change to "-zco" in the yo form.</p><br />
            <p>conocer → <strong>conozco</strong> (to know/meet)</p>
            <p>traducir → <strong>traduzco</strong> (to translate)</p>
            <p>conducir → <strong>conduzco</strong> (to drive)</p><br />

            <p><strong>Other irregular yo forms:</strong></p><br />
            <p>saber → <strong>sé</strong> (to know)</p>
            <p>ver → <strong>veo</strong> (to see)</p>
            <p>caber → <strong>quepo</strong> (to fit)</p>
            <p>dar → <strong>doy</strong> (to give)</p><br />

            <h4 className="font-semibold text-lg mb-5">b. Stem-Changing Verbs</h4>
            <h5 className = "font-semibold text-purple-800 mb-4">1. e → ie:</h5>
            <p>pensar → pienso, piensas, piensa, pensamos, pensáis, piensan (to think)</p>
            <p>querer → quiero, quieres, quiere, queremos, queréis, quieren (to want)</p>
            <p>entender → entiendo, entiendes, entiende, entendemos, entendéis, entienden (to understand)</p><br />

            <h5 className = "font-semibold text-purple-800 mb-4">2. o → ue:</h5>
            <p>poder → puedo, puedes, puede, podemos, podéis, pueden (to be able to/can)</p>
            <p>dormir → duermo, duermes, duerme, dormimos, dormís, duermen (to sleep)</p>
            <p>volver → vuelvo, vuelves, vuelve, volvemos, volvéis, vuelven (to return)</p><br />

            <h5 className = "font-semibold text-purple-800 mb-4">3. e → i: (common in -ir verbs)</h5>
            <p>pedir → pido, pides, pide, pedimos, pedís, piden (to ask for)</p>
            <p>servir → sirvo, sirves, sirve, servimos, servís, sirven (to serve)</p>
            <p>repetir → repito, repites, repite, repetimos, repetís, repiten (to repeat)</p><br />

            <h4 className="font-semibold text-lg mb-5">c. Completely Irregular Verbs</h4>
            <p>ser (to be): soy, eres, es, somos, sois, son</p>
            <p>ir (to go): voy, vas, va, vamos, vais, van</p>
            <p>estar (to be - temporary states or locations): estoy, estás, está, estamos, estáis, están</p>
            <p>haber (used as an auxiliary verb): he, has, ha, hemos, habéis, han</p><br />

            <h4 className="font-semibold text-lg mb-5">d. Accent Changes in Some Irregular Verbs</h4>
            <p>continuar → continúo, continúas, continúa, continuamos, continuáis, continúan (to continue)</p>
            <p>enviar → envío, envías, envía, enviamos, enviáis, envían (to send)</p><br />

            <p><em>With consistent practice, these irregular patterns will become second nature!</em></p>

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
            topicId="perfecto"
            topicTitle="Perfect Tense"
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

export default Perfecto;