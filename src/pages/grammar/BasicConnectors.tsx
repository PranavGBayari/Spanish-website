// src/pages/grammar/BasicConnectors.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Clock, MessageSquare, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const BasicConnectors = () => {
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
          <span className="text-foreground">Basic Connectors</span>
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
            <Badge className="mb-4" variant="secondary">IGCSE</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Basic Connectors
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Los Conectores Básicos
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect your ideas and create flowing sentences in Spanish
            </p>
          </div>

          {/* Coordinating Connectors */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Coordinating Connectors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Addition (And)</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>y</strong> - and (before consonant sounds)</li>
                    <li>• <strong>e</strong> - and (before words starting with 'i' or 'hi')</li>
                    <li>• Example: Pedro <strong>y</strong> María / María <strong>e</strong> Isabel</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Contrast (But)</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• <strong>pero</strong> - but (general contrast)</li>
                    <li>• <strong>sino</strong> - but rather (after negative statements)</li>
                    <li>• Example: No es rojo, <strong>sino</strong> azul</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Choice (Or)</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>o</strong> - or (before consonant sounds)</li>
                    <li>• <strong>u</strong> - or (before words starting with 'o' or 'ho')</li>
                    <li>• Example: Café <strong>o</strong> té / Siete <strong>u</strong> ocho</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Causal Connectors */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Causal Connectors (Cause and Effect)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Expressing Cause (Because)</h4>
                  <ul className="space-y-2 text-purple-700">
                    <li>• <strong>porque</strong> - because</li>
                    <li>• <strong>como</strong> - since, as (at beginning of sentence)</li>
                    <li>• <strong>ya que</strong> - since, given that</li>
                    <li>• Example: Estoy cansado <strong>porque</strong> trabajé mucho</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Expressing Effect (Therefore)</h4>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• <strong>por eso</strong> - that's why, therefore</li>
                    <li>• <strong>así que</strong> - so, therefore</li>
                    <li>• <strong>entonces</strong> - then, so</li>
                    <li>• Example: Llueve, <strong>por eso</strong> no salgo</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Temporal Connectors */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Temporal Connectors (Time)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Sequence and Time</h4>
                  <ul className="space-y-2 text-orange-700">
                    <li>• <strong>cuando</strong> - when</li>
                    <li>• <strong>mientras</strong> - while</li>
                    <li>• <strong>antes de</strong> - before</li>
                    <li>• <strong>después de</strong> - after</li>
                    <li>• <strong>primero</strong> - first</li>
                    <li>• <strong>luego</strong> - then, later</li>
                    <li>• <strong>finalmente</strong> - finally</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Frequency</h4>
                  <ul className="space-y-2 text-teal-700">
                    <li>• <strong>siempre</strong> - always</li>
                    <li>• <strong>nunca</strong> - never</li>
                    <li>• <strong>a veces</strong> - sometimes</li>
                    <li>• <strong>normalmente</strong> - normally</li>
                    <li>• <strong>generalmente</strong> - generally</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Connectors */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="w-5 h-5" />
                Additional Useful Connectors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">Condition</h4>
                  <ul className="space-y-1 text-pink-700">
                    <li>• <strong>si</strong> - if</li>
                    <li>• <strong>aunque</strong> - although, even if</li>
                    <li>• Example: <strong>Si</strong> llueve, me quedo en casa</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">Purpose</h4>
                  <ul className="space-y-1 text-indigo-700">
                    <li>• <strong>para</strong> - in order to, for</li>
                    <li>• <strong>para que</strong> - so that</li>
                    <li>• Example: Estudio <strong>para</strong> aprobar</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Emphasis/Addition</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <strong>también</strong> - also, too</li>
                    <li>• <strong>además</strong> - besides, furthermore</li>
                    <li>• <strong>tampoco</strong> - neither, not either</li>
                  </ul>
                </div>
                <div className="bg-red-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Exception</h4>
                  <ul className="space-y-1 text-red-700">
                    <li>• <strong>excepto</strong> - except</li>
                    <li>• <strong>salvo</strong> - except, save</li>
                    <li>• <strong>menos</strong> - except, but</li>
                  </ul>
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
                  <p className="text-lg font-medium text-blue-600 mb-2">Me gusta el café, pero prefiero el té.</p>
                  <p className="text-gray-600">I like coffee, but I prefer tea.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Estudio español porque quiero viajar a España.</p>
                  <p className="text-gray-600">I study Spanish because I want to travel to Spain.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Cuando llueve, siempre llevo paraguas.</p>
                  <p className="text-gray-600">When it rains, I always carry an umbrella.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Si tienes tiempo, podemos ir al cine.</p>
                  <p className="text-gray-600">If you have time, we can go to the movies.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <RatingFeedback
            topicId="basic-connectors"
            topicTitle="Basic Connectors"
            topicType="grammar"
            onSubmit={handleRating}
            />
        </div>
      </div>
    </div>
  );
}

export default BasicConnectors;