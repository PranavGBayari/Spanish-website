// src/pages/grammar/AdvancedPronouns.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Clock, MessageSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const AdvancedPronouns = () => {
  const handleRating = (rating: number, feedback: string) => {
    console.log('Rating:', rating, 'Feedback:', feedback);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/grammar" className="hover:text-primary">Grammar</Link>
          <span>/</span>
          <span className="text-foreground">Advanced Pronouns</span>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/grammar" 
            className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Grammar Roadmap
          </Link>

          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">IGCSE</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Advanced Pronouns
            </h1>
            <p className="text-xl text-purple-600 font-medium mb-2">
              Pronombres Avanzados
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master complex pronoun usage in Spanish
            </p>
          </div>

          {/* Object Pronouns */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Direct and Indirect Object Pronouns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">Direct Object Pronouns</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-3">Spanish</th>
                          <th className="border border-gray-300 p-3">English</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-purple-600">me</td>
                          <td className="border border-gray-300 p-3">me</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-purple-600">te</td>
                          <td className="border border-gray-300 p-3">you (informal)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-purple-600">lo/la</td>
                          <td className="border border-gray-300 p-3">him/her/it/you (formal)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-purple-600">nos</td>
                          <td className="border border-gray-300 p-3">us</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-purple-600">os</td>
                          <td className="border border-gray-300 p-3">you (plural informal)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-purple-600">los/las</td>
                          <td className="border border-gray-300 p-3">them/you (plural formal)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">Indirect Object Pronouns</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-3">Spanish</th>
                          <th className="border border-gray-300 p-3">English</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-purple-600">me</td>
                          <td className="border border-gray-300 p-3">to/for me</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-purple-600">te</td>
                          <td className="border border-gray-300 p-3">to/for you (informal)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-purple-600">le</td>
                          <td className="border border-gray-300 p-3">to/for him/her/you (formal)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-purple-600">nos</td>
                          <td className="border border-gray-300 p-3">to/for us</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-purple-600">os</td>
                          <td className="border border-gray-300 p-3">to/for you (plural informal)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-purple-600">les</td>
                          <td className="border border-gray-300 p-3">to/for them/you (plural formal)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pronoun Placement */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Pronoun Placement Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Before conjugated verbs</h4>
                  <ul className="space-y-1 text-blue-700">
                    <li>• <strong>Lo</strong> veo todos los días. (I see him every day.)</li>
                    <li>• <strong>Te</strong> compramos un regalo. (We buy you a gift.)</li>
                    <li>• <strong>Me</strong> gusta la música. (I like music.)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Attached to infinitives, gerunds, and commands</h4>
                  <ul className="space-y-1 text-green-700">
                    <li>• Quiero comprar<strong>lo</strong>. (I want to buy it.)</li>
                    <li>• Está estudiándo<strong>la</strong>. (He's studying it.)</li>
                    <li>• ¡Cómpr<strong>ame</strong>lo! (Buy it for me!)</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Double object pronouns</h4>
                  <ul className="space-y-1 text-yellow-700">
                    <li>• Indirect + Direct: <strong>Me lo</strong> da. (He gives it to me.)</li>
                    <li>• Le/Les → Se: <strong>Se lo</strong> doy. (I give it to him/her.)</li>
                    <li>• Order: IOP + DOP + verb</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reflexive and Reciprocal Pronouns */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Reflexive and Reciprocal Pronouns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">Reflexive Pronouns</h4>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-purple-700">
                      <li>• <strong>me</strong> - myself</li>
                      <li>• <strong>te</strong> - yourself (informal)</li>
                      <li>• <strong>se</strong> - himself/herself/yourself (formal)</li>
                      <li>• <strong>nos</strong> - ourselves</li>
                      <li>• <strong>os</strong> - yourselves (informal)</li>
                      <li>• <strong>se</strong> - themselves/yourselves (formal)</li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-purple-200">
                      <p className="text-sm font-medium">Examples:</p>
                      <ul className="text-sm mt-1">
                        <li>• Me lavo las manos (I wash my hands)</li>
                        <li>• Se acuesta temprano (He goes to bed early)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">Reciprocal Actions</h4>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-orange-800 font-medium mb-2">Using "se" for reciprocal actions:</p>
                    <ul className="space-y-1 text-orange-700">
                      <li>• <strong>Se</strong> saludan. (They greet each other.)</li>
                      <li>• <strong>Nos</strong> escribimos cartas. (We write letters to each other.)</li>
                      <li>• <strong>Se</strong> aman mucho. (They love each other very much.)</li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-orange-200">
                      <p className="text-sm font-medium">Clarification with:</p>
                      <ul className="text-sm mt-1">
                        <li>• el uno al otro (each other - masc.)</li>
                        <li>• la una a la otra (each other - fem.)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Relative Pronouns */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Relative Pronouns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Basic Relative Pronouns</h4>
                    <ul className="space-y-1 text-blue-700">
                      <li>• <strong>que</strong> - that, which, who</li>
                      <li>• <strong>quien(es)</strong> - who, whom (people only)</li>
                      <li>• <strong>el/la que</strong> - who, which, that</li>
                      <li>• <strong>el/la cual</strong> - which, who (formal)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">With prepositions</h4>
                    <ul className="space-y-1 text-green-700">
                      <li>• <strong>en que</strong> - in which, when</li>
                      <li>• <strong>con quien</strong> - with whom</li>
                      <li>• <strong>para el cual</strong> - for which</li>
                      <li>• <strong>de la que</strong> - of/from which</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Examples</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-purple-600 font-medium">El libro que leo es interesante.</p>
                      <p className="text-sm text-gray-600">The book that I'm reading is interesting.</p>
                    </div>
                    <div>
                      <p className="text-purple-600 font-medium">La persona con quien hablo es mi profesora.</p>
                      <p className="text-sm text-gray-600">The person I'm talking with is my teacher.</p>
                    </div>
                    <div>
                      <p className="text-purple-600 font-medium">La casa en la que vivo es pequeña.</p>
                      <p className="text-sm text-gray-600">The house in which I live is small.</p>
                    </div>
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
                  <p className="text-lg font-medium text-purple-600 mb-2">Se lo dije ayer, pero no me escuchó.</p>
                  <p className="text-gray-600">I told him/her yesterday, but he/she didn't listen to me.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-purple-600 mb-2">¿Puedes comprármelo en la tienda?</p>
                  <p className="text-gray-600">Can you buy it for me at the store?</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-purple-600 mb-2">Los estudiantes que estudian mucho sacan buenas notas.</p>
                  <p className="text-gray-600">The students who study a lot get good grades.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-purple-600 mb-2">Nos vemos todos los días en el parque.</p>
                  <p className="text-gray-600">We see each other every day in the park.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="advanced-pronouns"
            topicTitle="Advanced Pronouns"
            topicType="grammar"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvancedPronouns;