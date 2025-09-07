import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, AlertCircle, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const PresentSubjunctive = () => {
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
          <span className="text-foreground">Present Subjunctive</span>
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
              Present Subjunctive
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Presente de Subjuntivo
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Express doubt, emotion, desire, or hypothetical situations in the present
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
                  <strong>Formation:</strong> Take the yo form of present indicative, remove -o, add subjunctive endings
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Regular Verbs:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="font-medium">-ar verbs (hablar)</p>
                      <p>hable, hables, hable</p>
                      <p>hablemos, habléis, hablen</p>
                    </div>
                    <div>
                      <p className="font-medium">-er verbs (comer)</p>
                      <p>coma, comas, coma</p>
                      <p>comamos, comáis, coman</p>
                    </div>
                    <div>
                      <p className="font-medium">-ir verbs (vivir)</p>
                      <p>viva, vivas, viva</p>
                      <p>vivamos, viváis, vivan</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Step by step:</h4>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Take the yo form: hablo → habl-</li>
                    <li>Add endings: -e, -es, -e, -emos, -éis, -en</li>
                    <li>For -er/-ir: -a, -as, -a, -amos, -áis, -an</li>
                  </ol>
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
                <h4 className="font-semibold">The subjunctive is used after expressions of:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Emotion:</h5>
                    <ul className="space-y-1">
                      <li>• Me alegra que... (I'm happy that...)</li>
                      <li>• Espero que... (I hope that...)</li>
                      <li>• Temo que... (I fear that...)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Doubt/Uncertainty:</h5>
                    <ul className="space-y-1">
                      <li>• Dudo que... (I doubt that...)</li>
                      <li>• No creo que... (I don't think that...)</li>
                      <li>• Es posible que... (It's possible that...)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Desire/Influence:</h5>
                    <ul className="space-y-1">
                      <li>• Quiero que... (I want that...)</li>
                      <li>• Necesito que... (I need that...)</li>
                      <li>• Recomiendo que... (I recommend that...)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Impersonal expressions:</h5>
                    <ul className="space-y-1">
                      <li>• Es importante que... (It's important that...)</li>
                      <li>• Es necesario que... (It's necessary that...)</li>
                      <li>• Es mejor que... (It's better that...)</li>
                    </ul>
                  </div>
                </div>
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
                  <p className="text-lg font-medium text-blue-600 mb-2">Espero que tengas un buen día.</p>
                  <p className="text-gray-600">I hope you have a good day. (Emotion/wish)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">No creo que venga mañana.</p>
                  <p className="text-gray-600">I don't think he'll come tomorrow. (Doubt)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Es importante que estudies para el examen.</p>
                  <p className="text-gray-600">It's important that you study for the exam. (Impersonal expression)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Quiero que me ayudes.</p>
                  <p className="text-gray-600">I want you to help me. (Influence/desire)</p>
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
                  <p>Espero que tienes suerte.</p>
                  <p className="text-sm text-gray-600">Using indicative instead of subjunctive</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-600">✅ Correct:</p>
                  <p>Espero que tengas suerte.</p>
                </div>
              </div>
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Key Points:</h4>
                <ul className="space-y-1">
                  <li>• Must have "que" to connect clauses</li>
                  <li>• Different subject in each clause</li>
                  <li>• "Creo que" takes indicative, "No creo que" takes subjunctive</li>
                  <li>• Remember UWEID: Uncertainty, Wish, Emotion, Impersonal, Doubt</li>
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
                <h4 className="font-semibold">Irregular Verbs:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p><strong>ser:</strong> sea, seas, sea, seamos, seáis, sean</p>
                    <p><strong>ir:</strong> vaya, vayas, vaya, vayamos, vayáis, vayan</p>
                    <p><strong>dar:</strong> dé, des, dé, demos, deis, den</p>
                    <p><strong>estar:</strong> esté, estés, esté, estemos, estéis, estén</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p><strong>haber:</strong> haya, hayas, haya, hayamos, hayáis, hayan</p>
                    <p><strong>saber:</strong> sepa, sepas, sepa, sepamos, sepáis, sepan</p>
                    <p><strong>ver:</strong> vea, veas, vea, veamos, veáis, vean</p>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <h5 className="font-medium mb-2">Stem-changing verbs:</h5>
                  <p>Keep the same stem changes as present indicative, plus additional changes in nosotros/vosotros for -ir verbs</p>
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
                <h4 className="font-semibold">Common expressions that trigger subjunctive:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Emotion verbs:</h5>
                    <ul className="space-y-1">
                      <li>• alegrarse de que (to be happy that)</li>
                      <li>• temer que (to fear that)</li>
                      <li>• sentir que (to regret that)</li>
                      <li>• molestar que (to bother that)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Doubt expressions:</h5>
                    <ul className="space-y-1">
                      <li>• dudar que (to doubt that)</li>
                      <li>• negar que (to deny that)</li>
                      <li>• no estar seguro de que (not sure that)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="present-subjunctive"
            topicTitle="Present Subjunctive"
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

export default PresentSubjunctive;