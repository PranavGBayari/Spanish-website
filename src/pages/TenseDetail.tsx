
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Clock, Users } from 'lucide-react';
import RatingFeedback from '@/components/RatingFeedback';

const TenseDetail = () => {
  const { tenseSlug } = useParams();

  // Tense data for all relevant tenses
  const tenseData = {
    'present-subjunctive': {
      name: 'Present Subjunctive',
      level: 'Advanced',
      spanish: 'Presente de Subjuntivo',
      description: 'Express doubt, emotion, or desire in present.',
      formation: 'Take the yo form of present indicative, remove -o, add subjunctive endings.',
      usage: 'Used after expressions of doubt, emotion, desire, or uncertainty in the present.',
      examples: [
        'Es importante que tú estudies.',
        'Ojalá que llueva mañana.',
        'No creo que él venga.'
      ]
    },
    'imperfect-subjunctive': {
      name: 'Imperfect Subjunctive',
      level: 'Advanced',
      spanish: 'Imperfecto de Subjuntivo',
      description: 'Express doubt, emotion, or desire in the past.',
      formation: 'Take the third person plural (ellos) preterite form, remove -ron, add imperfect subjunctive endings.',
      usage: 'Used after expressions of doubt, emotion, desire, or uncertainty in the past.',
      examples: [
        'Si yo fuera rico, viajaría por el mundo.',
        'Quería que tú vinieras.',
        'Era posible que ellos llegaran tarde.'
      ]
    },
    'present': {
      name: 'Present Simple',
      level: 'Basic',
      spanish: 'Presente Simple',
      description: 'Habitual actions and general truths.',
      formation: 'Remove infinitive ending, add present endings.',
      usage: 'Used for actions happening now or regularly.',
      examples: [
        'Yo como pan.',
        'Tú estudias español.',
        'Ellos viven en Madrid.'
      ]
    },
    'present-continuous': {
      name: 'Present Continuous',
      level: 'Basic',
      spanish: 'Gerundio',
      description: 'Actions happening right now.',
      formation: 'Estar + gerundio.',
      usage: 'Used for actions occurring at the moment of speaking.',
      examples: [
        'Estoy estudiando.',
        'Estamos comiendo.',
        '¿Qué estás haciendo?'
      ]
    },
    'Indefenido': {
      name: 'Past tense',
      level: 'Intermediate',
      spanish: 'Pretérito indefenido',
      description: 'Completed past actions.',
      formation: 'Remove infinitive ending, add preterite endings.',
      usage: 'Used for actions completed in the past.',
      examples: [
        'Ayer comí pizza.',
        'Ellos viajaron a España.',
        '¿Fuiste al cine?'
      ]
    },
    'imperfect-preterito': {
      name: 'Imperfect',
      level: 'Intermediate',
      spanish: 'Imperfecto',
      description: 'Ongoing past actions.',
      formation: 'Remove infinitive ending, add imperfect endings.',
      usage: 'Used for habitual or ongoing actions in the past.',
      examples: [
        'Cuando era niño, jugaba mucho.',
        'Siempre comíamos juntos.',
        'Ella leía mientras yo escribía.'
      ]
    },
    'perfecto': {
      name: 'Pretérito Perfecto',
      level: 'Intermediate',
      spanish: 'Pretérito Perfecto',
      description: 'Actions completed in a recent past period.',
      formation: 'Haber + past participle.',
      usage: 'Used for actions completed recently.',
      examples: [
        'He comido.',
        '¿Has visto la película?',
        'Hemos terminado el trabajo.'
      ]
    },
    'pluscuamperfecto': {
      name: 'Pluscuamperfecto',
      level: 'Advanced',
      spanish: 'Pluscuamperfecto',
      description: 'Actions completed before another past action.',
      formation: 'Había + past participle.',
      usage: 'Used for actions that happened before another past event.',
      examples: [
        'Cuando llegué, ellos ya habían salido.',
        'Nunca había visto algo así.',
        'Habíamos terminado antes de cenar.'
      ]
    },
    'future': {
      name: 'Future Simple',
      level: 'Intermediate',
      spanish: 'Futuro Simple',
      description: 'Actions that will happen.',
      formation: 'Infinitive + future endings.',
      usage: 'Used for actions that will occur.',
      examples: [
        'Mañana viajaré a Barcelona.',
        '¿Vendrás a la fiesta?',
        'Ellos estudiarán medicina.'
      ]
    },
    'conditional': {
      name: 'Conditional',
      level: 'Advanced',
      spanish: 'Condicional',
      description: 'Actions that would happen.',
      formation: 'Infinitive + conditional endings.',
      usage: 'Used for hypothetical actions.',
      examples: [
        'Yo viajaría si tuviera dinero.',
        '¿Te gustaría venir?',
        'Comerías más si tuvieras hambre.'
      ]
    },
    'imperative': {
      name: 'Imperative',
      level: 'Intermediate',
      spanish: 'Imperativo',
      description: 'Commands, orders, and instructions.',
      formation: 'Use imperative endings for commands.',
      usage: 'Used to give orders or instructions.',
      examples: [
        '¡Ven aquí!',
        'Haz la tarea.',
        'No hables.'
      ]
    }
  };

  const tense = tenseData[tenseSlug];

  const handleRating = (rating: number, feedback: string) => {
    console.log(`Tense: ${tenseSlug}, Rating: ${rating}, Feedback: ${feedback}`);
    // Store feedback for admin access
  };

  if (!tense) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Tense Not Found</h1>
          <Link to="/tenses" className="text-blue-600 hover:underline">
            ← Back to Tenses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/tenses" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tenses
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant={tense.level === 'Basic' ? 'default' : 'secondary'} className="text-lg px-4 py-1">
              {tense.level}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {tense.name}
          </h1>
          <p className="text-2xl text-blue-600 font-medium mb-4">{tense.spanish}</p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {tense.description}
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Formation */}
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <Clock className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <CardTitle className="text-2xl">Formation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg text-gray-700">{tense.formation}</p>
              </div>
            </CardContent>
          </Card>

          {/* When to Use */}
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <BookOpen className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <CardTitle className="text-2xl">When to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg text-gray-700">{tense.usage}</p>
              </div>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <Users className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <CardTitle className="text-2xl">Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tense.examples.map((example, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg text-gray-700">{example}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Common Mistakes to Avoid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Common mistakes when using {tense.name.toLowerCase()} will be listed here.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Mistake example 1</li>
                  <li>• Mistake example 2</li>
                  <li>• Mistake example 3</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Irregular Information */}
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Irregular Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Irregular verbs and special cases for {tense.name.toLowerCase()} will be documented here.
                </p>
                <div className="mt-4">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Verb</th>
                        <th className="border border-gray-300 p-2">Irregular Form</th>
                        <th className="border border-gray-300 p-2">Translation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">ser</td>
                        <td className="border border-gray-300 p-2">irregular conjugation</td>
                        <td className="border border-gray-300 p-2">to be</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Time Expressions */}
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Time Expressions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Time expressions commonly used with {tense.name.toLowerCase()} will be listed here.
                </p>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Frequency</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• siempre (always)</li>
                      <li>• nunca (never)</li>
                      <li>• a veces (sometimes)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time indicators</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• hoy (today)</li>
                      <li>• ayer (yesterday)</li>
                      <li>• mañana (tomorrow)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating and Feedback System */}
          <RatingFeedback 
  topicId={tenseSlug}
  topicTitle={tense.name}
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

export default TenseDetail;
