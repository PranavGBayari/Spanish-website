// src/pages/grammar/PossessiveAdjectives.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const PossessiveAdjectives = () => {
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
          <Link to="/grammar" className="hover:text-primary">Grammar</Link>
          <span>/</span>
          <span className="text-foreground">Possessive Adjectives</span>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/grammar" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Grammar Roadmap
          </Link>

          <div className="text-center mb-12">
            <Badge className="mb-4" variant="default">IGCSE</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Possessive Adjectives
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Los Adjetivos Posesivos
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn how to express ownership and relationships in Spanish
            </p>
          </div>

          {/* Short Form Possessives */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Short Form Possessives (Before the Noun)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3">Owner</th>
                      <th className="border border-gray-300 p-3">Masculine Singular</th>
                      <th className="border border-gray-300 p-3">Feminine Singular</th>
                      <th className="border border-gray-300 p-3">Masculine Plural</th>
                      <th className="border border-gray-300 p-3">Feminine Plural</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">yo (I)</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">mi</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">mi</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">mis</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">mis</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">tú (you)</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">tu</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">tu</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">tus</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">tus</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">él/ella/usted</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">su</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">su</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">sus</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">sus</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">nosotros (we)</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">nuestro</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">nuestra</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">nuestros</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">nuestras</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">vosotros (you pl.)</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">vuestro</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">vuestra</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">vuestros</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">vuestras</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">ellos/ellas/ustedes</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">su</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">su</td>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">sus</td>
                      <td className="border border-gray-300 p-3 font-medium text-pink-600">sus</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Agreement Rules */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Agreement Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">1. Agree with the possessed item, NOT the owner</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• <strong>mi</strong> libro (my book - masculine singular)</li>
                    <li>• <strong>mi</strong> casa (my house - feminine singular)</li>
                    <li>• <strong>mis</strong> libros (my books - masculine plural)</li>
                    <li>• <strong>mis</strong> casas (my houses - feminine plural)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">2. Only nuestro/vuestra change for gender</h4>
                  <ul className="space-y-1 text-green-700">
                    <li>• <strong>nuestro</strong> coche (our car - masculine)</li>
                    <li>• <strong>nuestra</strong> casa (our house - feminine)</li>
                    <li>• <strong>nuestros</strong> coches (our cars - masculine plural)</li>
                    <li>• <strong>nuestras</strong> casas (our houses - feminine plural)</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">3. No articles with possessives</h4>
                  <p className="text-yellow-700">Say <strong>mi casa</strong>, not <em>la mi casa</em></p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Long Form Possessives */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Long Form Possessives (After the Noun)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-2">Owner</th>
                        <th className="border border-gray-300 p-2">Masc. Sing.</th>
                        <th className="border border-gray-300 p-2">Fem. Sing.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">yo</td>
                        <td className="border border-gray-300 p-2 font-medium text-blue-600">mío</td>
                        <td className="border border-gray-300 p-2 font-medium text-pink-600">mía</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">tú</td>
                        <td className="border border-gray-300 p-2 font-medium text-blue-600">tuyo</td>
                        <td className="border border-gray-300 p-2 font-medium text-pink-600">tuya</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">él/ella</td>
                        <td className="border border-gray-300 p-2 font-medium text-blue-600">suyo</td>
                        <td className="border border-gray-300 p-2 font-medium text-pink-600">suya</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">nosotros</td>
                        <td className="border border-gray-300 p-2 font-medium text-blue-600">nuestro</td>
                        <td className="border border-gray-300 p-2 font-medium text-pink-600">nuestra</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Used for emphasis</h4>
                    <ul className="space-y-1 text-purple-700">
                      <li>• El libro <strong>mío</strong> (MY book)</li>
                      <li>• La casa <strong>tuya</strong> (YOUR house)</li>
                      <li>• Los amigos <strong>nuestros</strong> (OUR friends)</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">After "ser"</h4>
                    <ul className="space-y-1 text-orange-700">
                      <li>• Es <strong>mío</strong> (It's mine)</li>
                      <li>• Son <strong>tuyas</strong> (They're yours)</li>
                      <li>• Es <strong>nuestro</strong> (It's ours)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Clarifications */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Clarifying "su/sus"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">Since <strong>su/sus</strong> can mean his, her, your, or their, you can clarify using:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Article + noun + de + pronoun</h4>
                  <ul className="space-y-2">
                    <li>• <strong>su casa</strong> → <strong>la casa de él</strong> (his house)</li>
                    <li>• <strong>su casa</strong> → <strong>la casa de ella</strong> (her house)</li>
                    <li>• <strong>su casa</strong> → <strong>la casa de usted</strong> (your house)</li>
                    <li>• <strong>sus libros</strong> → <strong>los libros de ellos</strong> (their books)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Practice Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Practice Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Mi hermana estudia en nuestra escuela.</p>
                  <p className="text-gray-600">My sister studies at our school.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">¿Dónde están tus llaves?</p>
                  <p className="text-gray-600">Where are your keys?</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Sus padres viven en Madrid.</p>
                  <p className="text-gray-600">His/Her/Your/Their parents live in Madrid.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Este coche es mío, no tuyo.</p>
                  <p className="text-gray-600">This car is mine, not yours.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="possessive-adjectives"
            topicTitle="Possessive Adjectives"
            topicType="grammar"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
}

export default PossessiveAdjectives;