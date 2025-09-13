// src/pages/grammar/BasicPronouns.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const BasicPronouns = () => {
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
          <span className="text-foreground">Basic Pronouns</span>
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
              Basic Pronouns
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Los Pronombres Básicos
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master subject and object pronouns - the fundamental building blocks of Spanish sentences
            </p>
          </div>

          {/* Subject Pronouns */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Subject Pronouns (Pronombres Personales)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3">Spanish</th>
                      <th className="border border-gray-300 p-3">English</th>
                      <th className="border border-gray-300 p-3">Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">yo</td>
                      <td className="border border-gray-300 p-3">I</td>
                      <td className="border border-gray-300 p-3">1st person singular</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">tú</td>
                      <td className="border border-gray-300 p-3">you (informal)</td>
                      <td className="border border-gray-300 p-3">2nd person singular</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">él/ella</td>
                      <td className="border border-gray-300 p-3">he/she</td>
                      <td className="border border-gray-300 p-3">3rd person singular</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">usted</td>
                      <td className="border border-gray-300 p-3">you (formal)</td>
                      <td className="border border-gray-300 p-3">2nd person singular formal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">nosotros/nosotras</td>
                      <td className="border border-gray-300 p-3">we</td>
                      <td className="border border-gray-300 p-3">1st person plural</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">vosotros/vosotras</td>
                      <td className="border border-gray-300 p-3">you (informal plural)</td>
                      <td className="border border-gray-300 p-3">2nd person plural (Spain)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">ellos/ellas</td>
                      <td className="border border-gray-300 p-3">they</td>
                      <td className="border border-gray-300 p-3">3rd person plural</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-blue-600">ustedes</td>
                      <td className="border border-gray-300 p-3">you (formal plural)</td>
                      <td className="border border-gray-300 p-3">2nd person plural formal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Direct Object Pronouns */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Direct Object Pronouns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
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
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">me</td>
                        <td className="border border-gray-300 p-3">me</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">te</td>
                        <td className="border border-gray-300 p-3">you (informal)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">lo/la</td>
                        <td className="border border-gray-300 p-3">him/her/it/you (formal)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">nos</td>
                        <td className="border border-gray-300 p-3">us</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">os</td>
                        <td className="border border-gray-300 p-3">you (informal plural)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-blue-600">los/las</td>
                        <td className="border border-gray-300 p-3">them/you (formal plural)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Position Rules</h4>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Before conjugated verbs</li>
                      <li>• Attached to infinitives</li>
                      <li>• Attached to gerunds</li>
                      <li>• Attached to positive commands</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Examples</h4>
                    <ul className="space-y-1 text-green-700">
                      <li>• <strong>Lo</strong> veo (I see him/it)</li>
                      <li>• Voy a ver<strong>lo</strong> (I'm going to see him/it)</li>
                      <li>• Estoy viéndo<strong>lo</strong> (I'm seeing him/it)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indirect Object Pronouns */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Indirect Object Pronouns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
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
                        <td className="border border-gray-300 p-3">to/for you (informal plural)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-purple-600">les</td>
                        <td className="border border-gray-300 p-3">to/for them/you (formal plural)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Common Verbs</h4>
                    <ul className="space-y-1 text-purple-700">
                      <li>• dar (to give)</li>
                      <li>• decir (to tell/say)</li>
                      <li>• escribir (to write)</li>
                      <li>• comprar (to buy)</li>
                      <li>• enviar (to send)</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Examples</h4>
                    <ul className="space-y-1 text-yellow-700">
                      <li>• <strong>Le</strong> doy el libro (I give him/her the book)</li>
                      <li>• <strong>Nos</strong> escriben cartas (They write us letters)</li>
                      <li>• <strong>Te</strong> compro un regalo (I buy you a gift)</li>
                    </ul>
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
                  <p className="text-lg font-medium text-blue-600 mb-2">Yo estudio español todos los días.</p>
                  <p className="text-gray-600">I study Spanish every day. (Subject pronoun)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">María me llama por teléfono.</p>
                  <p className="text-gray-600">María calls me on the phone. (Direct object pronoun)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Le escribo una carta a mi abuela.</p>
                  <p className="text-gray-600">I write a letter to my grandmother. (Indirect object pronoun)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Nosotros los vemos en el parque.</p>
                  <p className="text-gray-600">We see them in the park. (Direct object pronoun)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="basic-pronouns"
            topicTitle="Basic Pronouns"
            topicType="grammar"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicPronouns;