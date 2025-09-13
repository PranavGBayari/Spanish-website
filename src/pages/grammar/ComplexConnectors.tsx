// src/pages/grammar/ComplexConnectors.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Clock, MessageSquare, Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const ComplexConnectors = () => {
  const handleRating = (rating: number, feedback: string) => {
    console.log('Rating:', rating, 'Feedback:', feedback);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/grammar" className="hover:text-primary">Grammar</Link>
          <span>/</span>
          <span className="text-foreground">Complex Connectors</span>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/grammar" 
            className="inline-flex items-center text-green-600 hover:text-green-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Grammar Roadmap
          </Link>

          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">IGCSE</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Complex Connectors
            </h1>
            <p className="text-xl text-green-600 font-medium mb-2">
              Conectores Complejos
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create sophisticated sentences with advanced connectors
            </p>
          </div>

          {/* Causal Connectors */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Causal and Reason Connectors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Expressing Cause</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>porque</strong> - because</li>
                    <li>• <strong>ya que</strong> - since, given that</li>
                    <li>• <strong>puesto que</strong> - since, given that</li>
                    <li>• <strong>dado que</strong> - given that</li>
                    <li>• <strong>debido a que</strong> - due to the fact that</li>
                    <li>• <strong>a causa de</strong> - because of</li>
                    <li>• <strong>por culpa de</strong> - because of (fault)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">Expressing Consequence</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>por lo tanto</strong> - therefore</li>
                    <li>• <strong>por consiguiente</strong> - consequently</li>
                    <li>• <strong>así que</strong> - so, therefore</li>
                    <li>• <strong>de modo que</strong> - so that</li>
                    <li>• <strong>de manera que</strong> - in such a way that</li>
                    <li>• <strong>por eso</strong> - that's why</li>
                    <li>• <strong>como resultado</strong> - as a result</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contrast and Opposition */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Contrast and Opposition Connectors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Strong Opposition</h4>
                  <ul className="space-y-1 text-purple-700">
                    <li>• <strong>sin embargo</strong> - however, nevertheless</li>
                    <li>• <strong>no obstante</strong> - nevertheless, however</li>
                    <li>• <strong>a pesar de que</strong> - despite the fact that</li>
                    <li>• <strong>aunque</strong> - although, even though</li>
                    <li>• <strong>pese a que</strong> - despite the fact that</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Mild Contrast</h4>
                  <ul className="space-y-1 text-orange-700">
                    <li>• <strong>pero</strong> - but</li>
                    <li>• <strong>mas</strong> - but (more formal)</li>
                    <li>• <strong>mientras que</strong> - while, whereas</li>
                    <li>• <strong>en cambio</strong> - on the other hand</li>
                    <li>• <strong>por el contrario</strong> - on the contrary</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Concession</h4>
                  <ul className="space-y-1 text-yellow-700">
                    <li>• <strong>aun cuando</strong> - even when</li>
                    <li>• <strong>si bien</strong> - although, while it's true that</li>
                    <li>• <strong>por más que</strong> - no matter how much</li>
                    <li>• <strong>con todo</strong> - nevertheless</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Temporal Connectors */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link2 className="w-5 h-5" />
                Temporal and Sequential Connectors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Time Sequence</h4>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>antes de que</strong> - before</li>
                      <li>• <strong>después de que</strong> - after</li>
                      <li>• <strong>mientras tanto</strong> - meanwhile</li>
                      <li>• <strong>tan pronto como</strong> - as soon as</li>
                      <li>• <strong>en cuanto</strong> - as soon as</li>
                      <li>• <strong>hasta que</strong> - until</li>
                      <li>• <strong>desde que</strong> - since</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Sequential Order</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>en primer lugar</strong> - first of all</li>
                      <li>• <strong>en segundo lugar</strong> - secondly</li>
                      <li>• <strong>a continuación</strong> - next</li>
                      <li>• <strong>posteriormente</strong> - later</li>
                      <li>• <strong>finalmente</strong> - finally</li>
                      <li>• <strong>por último</strong> - lastly</li>
                      <li>• <strong>para concluir</strong> - to conclude</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conditional and Hypothetical */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Conditional and Hypothetical Connectors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-3">Conditions</h4>
                  <ul className="space-y-2 text-purple-700">
                    <li>• <strong>si</strong> - if</li>
                    <li>• <strong>en caso de que</strong> - in case</li>
                    <li>• <strong>a condición de que</strong> - on condition that</li>
                    <li>• <strong>con tal de que</strong> - provided that</li>
                    <li>• <strong>siempre que</strong> - as long as</li>
                    <li>• <strong>a menos que</strong> - unless</li>
                    <li>• <strong>salvo que</strong> - except if</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-3">Hypothetical Situations</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• <strong>como si</strong> - as if</li>
                    <li>• <strong>en el caso de que</strong> - in the event that</li>
                    <li>• <strong>suponiendo que</strong> - supposing that</li>
                    <li>• <strong>imaginemos que</strong> - let's imagine that</li>
                    <li>• <strong>por si acaso</strong> - just in case</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Addition and Emphasis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Addition and Emphasis Connectors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Adding Information</h4>
                  <ul className="space-y-1 text-teal-700">
                    <li>• <strong>además</strong> - furthermore, besides</li>
                    <li>• <strong>asimismo</strong> - likewise, also</li>
                    <li>• <strong>igualmente</strong> - equally, likewise</li>
                    <li>• <strong>por otra parte</strong> - on the other hand</li>
                    <li>• <strong>también</strong> - also</li>
                    <li>• <strong>incluso</strong> - even</li>
                    <li>• <strong>encima</strong> - on top of that</li>
                  </ul>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">Emphasis and Clarification</h4>
                  <ul className="space-y-1 text-pink-700">
                    <li>• <strong>es decir</strong> - that is to say</li>
                    <li>• <strong>o sea</strong> - in other words</li>
                    <li>• <strong>en otras palabras</strong> - in other words</li>
                    <li>• <strong>sobre todo</strong> - especially, above all</li>
                    <li>• <strong>en particular</strong> - in particular</li>
                    <li>• <strong>de hecho</strong> - in fact</li>
                    <li>• <strong>efectivamente</strong> - indeed, effectively</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Purpose and Goal */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Purpose and Goal Connectors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-3">Expressing Purpose</h4>
                  <ul className="space-y-2 text-indigo-700">
                    <li>• <strong>para que</strong> - so that, in order that</li>
                    <li>• <strong>con el fin de que</strong> - with the purpose of</li>
                    <li>• <strong>con la intención de</strong> - with the intention of</li>
                    <li>• <strong>a fin de que</strong> - in order that</li>
                    <li>• <strong>con el objeto de</strong> - with the aim of</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Examples in Context</h4>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Estudia mucho para que</strong> pueda aprobar el examen.</p>
                    <p className="text-xs text-gray-600">He studies hard so that he can pass the exam.</p>
                    <p className="text-sm"><strong>Con el fin de que</strong> todos entiendan, lo explico otra vez.</p>
                    <p className="text-xs text-gray-600">So that everyone understands, I'll explain it again.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Complex Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Complex Sentence Examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-green-600 mb-2">Aunque llueva mucho, sin embargo iremos al parque porque ya habíamos hecho planes.</p>
                  <p className="text-gray-600">Although it rains a lot, nevertheless we will go to the park because we had already made plans.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-green-600 mb-2">Dado que no tenía dinero, por consiguiente no pudo comprar el regalo; por eso decidió hacerlo él mismo.</p>
                  <p className="text-gray-600">Given that he had no money, consequently he couldn't buy the gift; that's why he decided to make it himself.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-green-600 mb-2">En primer lugar estudiaremos la teoría; a continuación, haremos los ejercicios; finalmente, para concluir, repasaremos todo.</p>
                  <p className="text-gray-600">First we will study the theory; next, we'll do the exercises; finally, to conclude, we'll review everything.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-green-600 mb-2">Siempre que tengas tiempo libre, es decir, cuando no estés trabajando, puedes llamarme para que podamos hablar.</p>
                  <p className="text-gray-600">As long as you have free time, that is to say, when you're not working, you can call me so that we can talk.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Tips */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Usage Tips and Common Mistakes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Best Practices</h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• Use varied connectors to avoid repetition</li>
                      <li>• Match formality level to context</li>
                      <li>• Consider subjunctive mood with certain connectors</li>
                      <li>• Place connectors logically in sentence structure</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">📝 Subjunctive Required</h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• para que, con tal de que</li>
                      <li>• a menos que, en caso de que</li>
                      <li>• aunque (with future/hypothetical)</li>
                      <li>• antes de que</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Common Mistakes</h4>
                    <ul className="space-y-1 text-red-700 text-sm">
                      <li>• Overusing simple connectors like "y" and "pero"</li>
                      <li>• Wrong mood after certain connectors</li>
                      <li>• Mixing formal and informal registers</li>
                      <li>• Creating overly complex sentences</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Watch Out For</h4>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• "Mas" (but) vs "más" (more)</li>
                      <li>• Position of connectors in sentence</li>
                      <li>• Punctuation with complex connectors</li>
                      <li>• Register consistency throughout text</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="complex-connectors"
            topicTitle="Complex Connectors"
            topicType="grammar"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default ComplexConnectors;