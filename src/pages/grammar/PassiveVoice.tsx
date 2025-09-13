// src/pages/grammar/PassiveVoice.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Clock, MessageSquare, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const PassiveVoice = () => {
  const handleRating = (rating: number, feedback: string) => {
    console.log('Rating:', rating, 'Feedback:', feedback);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/grammar" className="hover:text-primary">Grammar</Link>
          <span>/</span>
          <span className="text-foreground">Passive Voice</span>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/grammar" 
            className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Grammar Roadmap
          </Link>

          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">IGCSE</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Passive Voice
            </h1>
            <p className="text-xl text-orange-600 font-medium mb-2">
              La Voz Pasiva
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform active sentences into passive constructions
            </p>
          </div>

          {/* Basic Passive Formation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Basic Passive Voice Formation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Formula: ser + past participle</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Active Voice:</h5>
                      <p className="text-blue-600">Juan escribió la carta.</p>
                      <p className="text-sm text-gray-600">Juan wrote the letter.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Passive Voice:</h5>
                      <p className="text-blue-600">La carta fue escrita por Juan.</p>
                      <p className="text-sm text-gray-600">The letter was written by Juan.</p>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3">Tense</th>
                        <th className="border border-gray-300 p-3">Ser Conjugation</th>
                        <th className="border border-gray-300 p-3">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Present</td>
                        <td className="border border-gray-300 p-3">es/son</td>
                        <td className="border border-gray-300 p-3">es construida (is built)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Preterite</td>
                        <td className="border border-gray-300 p-3">fue/fueron</td>
                        <td className="border border-gray-300 p-3">fue construida (was built)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Imperfect</td>
                        <td className="border border-gray-300 p-3">era/eran</td>
                        <td className="border border-gray-300 p-3">era construida (was being built)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Future</td>
                        <td className="border border-gray-300 p-3">será/serán</td>
                        <td className="border border-gray-300 p-3">será construida (will be built)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Conditional</td>
                        <td className="border border-gray-300 p-3">sería/serían</td>
                        <td className="border border-gray-300 p-3">sería construida (would be built)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Past Participle Agreement */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Past Participle Agreement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Agreement Rule</h4>
                  <p className="text-green-700 mb-3">The past participle agrees in gender and number with the subject of the passive sentence.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Masculine Examples:</h5>
                      <ul className="space-y-1 text-green-600">
                        <li>• El libro fue <strong>comprado</strong></li>
                        <li>• Los libros fueron <strong>comprados</strong></li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Feminine Examples:</h5>
                      <ul className="space-y-1 text-green-600">
                        <li>• La casa fue <strong>comprada</strong></li>
                        <li>• Las casas fueron <strong>compradas</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Common Past Participles</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <ul className="space-y-1 text-yellow-700">
                      <li>• hacer → <strong>hecho</strong></li>
                      <li>• escribir → <strong>escrito</strong></li>
                      <li>• ver → <strong>visto</strong></li>
                    </ul>
                    <ul className="space-y-1 text-yellow-700">
                      <li>• decir → <strong>dicho</strong></li>
                      <li>• poner → <strong>puesto</strong></li>
                      <li>• volver → <strong>vuelto</strong></li>
                    </ul>
                    <ul className="space-y-1 text-yellow-700">
                      <li>• abrir → <strong>abierto</strong></li>
                      <li>• morir → <strong>muerto</strong></li>
                      <li>• romper → <strong>roto</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Passive vs Pseudo-passive */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5" />
                True Passive vs Pseudo-passive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">True Passive with "ser"</h4>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-orange-800 font-medium mb-2">Used for actions and processes</p>
                    <ul className="space-y-2 text-orange-700">
                      <li>• La casa <strong>fue construida</strong> en 1990.</li>
                      <li className="text-sm text-gray-600">The house was built in 1990.</li>
                      <li>• Los estudiantes <strong>serán evaluados</strong> mañana.</li>
                      <li className="text-sm text-gray-600">The students will be evaluated tomorrow.</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">Pseudo-passive with "estar"</h4>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-purple-800 font-medium mb-2">Used for states and conditions</p>
                    <ul className="space-y-2 text-purple-700">
                      <li>• La casa <strong>está construida</strong>.</li>
                      <li className="text-sm text-gray-600">The house is built (completed state).</li>
                      <li>• La puerta <strong>está cerrada</strong>.</li>
                      <li className="text-sm text-gray-600">The door is closed (current state).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Passive Constructions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Alternative Passive Constructions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-3">Passive "se" (most common)</h4>
                  <div className="space-y-2">
                    <p className="text-indigo-700">Used when the agent is not specified or important:</p>
                    <ul className="space-y-1 text-indigo-600">
                      <li>• <strong>Se vende</strong> la casa. (The house is being sold.)</li>
                      <li>• <strong>Se habla</strong> español aquí. (Spanish is spoken here.)</li>
                      <li>• <strong>Se construyeron</strong> muchas casas. (Many houses were built.)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-3">Impersonal "se"</h4>
                  <div className="space-y-2">
                    <p className="text-teal-700">Used with people (direct object marker "a"):</p>
                    <ul className="space-y-1 text-teal-600">
                      <li>• <strong>Se contrató a</strong> los empleados. (The employees were hired.)</li>
                      <li>• <strong>Se ayudó a</strong> los estudiantes. (The students were helped.)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-3">Third person plural</h4>
                  <div className="space-y-2">
                    <p className="text-pink-700">Anonymous "they" construction:</p>
                    <ul className="space-y-1 text-pink-600">
                      <li>• <strong>Dicen que</strong> va a llover. (They say it's going to rain.)</li>
                      <li>• <strong>Construyeron</strong> una nueva escuela. (They built a new school.)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* When to Use Passive */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                When to Use Passive Voice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Use Passive When:</h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• The action is more important than who does it</li>
                      <li>• The agent is unknown or unimportant</li>
                      <li>• You want to emphasize the result</li>
                      <li>• Writing formal or academic texts</li>
                      <li>• Describing processes or procedures</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">📰 Common in:</h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• News reports</li>
                      <li>• Scientific writing</li>
                      <li>• Official documents</li>
                      <li>• Instructions and manuals</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Avoid Passive When:</h4>
                    <ul className="space-y-1 text-red-700 text-sm">
                      <li>• The agent is important to mention</li>
                      <li>• Writing conversational or informal texts</li>
                      <li>• It makes the sentence unclear</li>
                      <li>• Active voice is more natural</li>
                      <li>• Spanish preference for active voice</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Remember:</h4>
                    <p className="text-yellow-700 text-sm">Spanish uses passive voice less frequently than English. The "se" construction is often preferred.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Practice Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Practice Examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-orange-600 mb-2">La novela fue escrita por García Márquez en 1967.</p>
                  <p className="text-gray-600">The novel was written by García Márquez in 1967.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-orange-600 mb-2">Se hablan cuatro idiomas en esta escuela.</p>
                  <p className="text-gray-600">Four languages are spoken in this school.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-orange-600 mb-2">Los documentos serán revisados por el comité mañana.</p>
                  <p className="text-gray-600">The documents will be reviewed by the committee tomorrow.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-orange-600 mb-2">Se construyeron muchos edificios durante el siglo XX.</p>
                  <p className="text-gray-600">Many buildings were built during the 20th century.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="passive-voice"
            topicTitle="Passive Voice"
            topicType="grammar"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default PassiveVoice;