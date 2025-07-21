import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, AlertCircle, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const Imperative = () => {
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
          <span className="text-foreground">Imperative</span>
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
            <Badge className="mb-4" variant="secondary">Intermediate</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Imperative
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Imperativo
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Commands, orders, and instructions - tell someone to do or not to do something
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
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Affirmative Commands (Tú):</h4>
                  <p>Use the 3rd person singular (él/ella) form of present indicative</p>
                  <div className="grid md:grid-cols-3 gap-4 mt-3">
                    <div>
                      <p className="font-medium">-ar verbs</p>
                      <p>hablar → ¡Habla!</p>
                      <p>(Speak!)</p>
                    </div>
                    <div>
                      <p className="font-medium">-er verbs</p>
                      <p>comer → ¡Come!</p>
                      <p>(Eat!)</p>
                    </div>
                    <div>
                      <p className="font-medium">-ir verbs</p>
                      <p>escribir → ¡Escribe!</p>
                      <p>(Write!)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Negative Commands (Tú):</h4>
                  <p>Use the 2nd person singular subjunctive form</p>
                  <div className="grid md:grid-cols-3 gap-4 mt-3">
                    <div>
                      <p className="font-medium">-ar verbs</p>
                      <p>hablar → ¡No hables!</p>
                      <p>(Don't speak!)</p>
                    </div>
                    <div>
                      <p className="font-medium">-er verbs</p>
                      <p>comer → ¡No comas!</p>
                      <p>(Don't eat!)</p>
                    </div>
                    <div>
                      <p className="font-medium">-ir verbs</p>
                      <p>escribir → ¡No escribas!</p>
                      <p>(Don't write!)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Formal Commands (Usted/Ustedes):</h4>
                  <p>Always use subjunctive forms (both positive and negative)</p>
                  <p><strong>Usted:</strong> hable, no hable | coma, no coma | escriba, no escriba</p>
                  <p><strong>Ustedes:</strong> hablen, no hablen | coman, no coman | escriban, no escriban</p>
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
              <ul className="space-y-3 text-lg">
                <li>• Giving direct orders or commands</li>
                <li>• Making requests (formal and informal)</li>
                <li>• Giving instructions or directions</li>
                <li>• Making suggestions or recommendations</li>
                <li>• Emergency situations requiring immediate action</li>
              </ul>
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
                  <p className="text-lg font-medium text-blue-600 mb-2">¡Ven aquí! / ¡No vengas tarde!</p>
                  <p className="text-gray-600">Come here! / Don't come late! (Informal)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Siéntese, por favor. / No se preocupe.</p>
                  <p className="text-gray-600">Please sit down. / Don't worry. (Formal)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">¡Estudia más! / ¡No mires televisión!</p>
                  <p className="text-gray-600">Study more! / Don't watch TV! (Advice/instruction)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Tomen sus libros y abran la página 20.</p>
                  <p className="text-gray-600">Take your books and open page 20. (Group instruction)</p>
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
                <h4 className="font-semibold">Irregular Tú Commands (Affirmative only):</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p><strong>decir → di</strong> (say/tell)</p>
                    <p><strong>hacer → haz</strong> (do/make)</p>
                    <p><strong>ir → ve</strong> (go)</p>
                    <p><strong>poner → pon</strong> (put)</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p><strong>salir → sal</strong> (leave/go out)</p>
                    <p><strong>ser → sé</strong> (be)</p>
                    <p><strong>tener → ten</strong> (have)</p>
                    <p><strong>venir → ven</strong> (come)</p>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <p><strong>Remember:</strong> These irregulars only apply to positive tú commands. Negative commands and formal commands follow regular subjunctive patterns.</p>
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
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="imperative"
            topicTitle="Imperative"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default Imperative;