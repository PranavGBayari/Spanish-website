import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, AlertCircle, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const ImperfectSubjunctive = () => {
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
          <Link to="/tenses" className="hover:text-primary">Tenses</Link>
          <span>/</span>
          <span className="text-foreground">Imperfect Subjunctive</span>
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
            <Badge className="mb-4" variant="destructive">Advanced</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Imperfect Subjunctive
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Imperfecto de Subjuntivo
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Express doubt, emotion, or desire in past contexts and hypothetical situations
            </p>
          </div>

          {/* Formation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Formation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  <strong>Formation:</strong> Take the third person plural (ellos) preterite form, remove -ron, add imperfect subjunctive endings
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Two sets of endings (interchangeable):</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">-ra endings</p>
                      <p>-ra, -ras, -ra</p>
                      <p>-ramos, -rais, -ran</p>
                    </div>
                    <div>
                      <p className="font-medium">-se endings</p>
                      <p>-se, -ses, -se</p>
                      <p>-semos, -seis, -sen</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Examples:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="font-medium">hablar → hablaron</p>
                      <p>hablara/hablase</p>
                      <p>hablaras/hablases</p>
                      <p>hablara/hablase</p>
                    </div>
                    <div>
                      <p className="font-medium">comer → comieron</p>
                      <p>comiera/comiese</p>
                      <p>comieras/comieses</p>
                      <p>comiera/comiese</p>
                    </div>
                    <div>
                      <p className="font-medium">vivir → vivieron</p>
                      <p>viviera/viviese</p>
                      <p>vivieras/vivieses</p>
                      <p>viviera/viviese</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* When to Use */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                When to Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold">The imperfect subjunctive is used:</h4>
                <ul className="space-y-3 text-lg">
                  <li>• After past tense expressions of emotion, doubt, desire</li>
                  <li>• In "si" (if) clauses for hypothetical situations</li>
                  <li>• After "como si" (as if)</li>
                  <li>• In polite requests and suggestions</li>
                  <li>• In formal written Spanish instead of conditional</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Esperaba que vinieras a la fiesta.</p>
                  <p className="text-gray-600">I hoped you would come to the party. (Past emotion)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Si tuviera dinero, viajaría por el mundo.</p>
                  <p className="text-gray-600">If I had money, I would travel the world. (Hypothetical)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Habla como si fuera experto.</p>
                  <p className="text-gray-600">He speaks as if he were an expert. (Como si)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Quisiera un café, por favor.</p>
                  <p className="text-gray-600">I would like a coffee, please. (Polite request)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Common Mistakes to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-600">❌ Incorrect:</p>
                  <p>Si tendría dinero, compraría una casa.</p>
                  <p className="text-sm text-gray-600">Don't use conditional in "si" clause</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-600">✅ Correct:</p>
                  <p>Si tuviera dinero, compraría una casa.</p>
                  <p className="text-sm text-gray-600">Use imperfect subjunctive in "si" clause</p>
                </div>
              </div>
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Key Points:</h4>
                <ul className="space-y-1">
                  <li>• Both -ra and -se endings are correct and interchangeable</li>
                  <li>• Always use in "si" clauses for hypothetical situations</li>
                  <li>• After "como si" always use imperfect subjunctive</li>
                  <li>• Used in sequence of tenses after past main verbs</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Irregular Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Irregular Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold">Based on preterite irregulars:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p><strong>ser/ir → fueron:</strong> fuera, fueras, fuera...</p>
                    <p><strong>tener → tuvieron:</strong> tuviera, tuvieras, tuviera...</p>
                    <p><strong>poder → pudieron:</strong> pudiera, pudieras, pudiera...</p>
                    <p><strong>hacer → hicieron:</strong> hiciera, hicieras, hiciera...</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p><strong>venir → vinieron:</strong> viniera, vinieras, viniera...</p>
                    <p><strong>decir → dijeron:</strong> dijera, dijeras, dijera...</p>
                    <p><strong>poner → pusieron:</strong> pusiera, pusieras, pusiera...</p>
                    <p><strong>estar → estuvieron:</strong> estuviera, estuvieras, estuviera...</p>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <p><strong>Remember:</strong> Any verb irregular in preterite will be irregular in imperfect subjunctive in the same way</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Time Expressions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Time Expressions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold">Common expressions with imperfect subjunctive:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Conditional expressions:</h5>
                    <ul className="space-y-1">
                      <li>• Si... (if...)</li>
                      <li>• Como si... (as if...)</li>
                      <li>• Aunque... (even if...)</li>
                      <li>• En caso de que... (in case...)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Past expressions:</h5>
                    <ul className="space-y-1">
                      <li>• Esperaba que... (I hoped that...)</li>
                      <li>• Quería que... (I wanted that...)</li>
                      <li>• Dudaba que... (I doubted that...)</li>
                      <li>• Era importante que... (It was important that...)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="imperfect-subjunctive"
            topicTitle="Imperfect Subjunctive"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default ImperfectSubjunctive;