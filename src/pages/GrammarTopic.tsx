
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Target, Users } from 'lucide-react';
import RatingFeedback from '@/components/RatingFeedback';

const GrammarTopic = () => {
  const { topicId } = useParams();

  // This will be replaced with actual data later
  const topicData = {
    'basic-pronouns': {
      title: 'Basic Pronouns',
      level: 'IGCSE',
      description: 'Master the fundamental pronouns in Spanish',
      content: 'This section will contain comprehensive information about basic Spanish pronouns including subject pronouns (yo, tú, él, ella, nosotros, vosotros, ellos, ellas) and object pronouns.'
    },
    'possessive-adjectives': {
      title: 'Possessive Adjectives',
      level: 'IGCSE',
      description: 'Learn how to express possession in Spanish',
      content: 'This section will cover possessive adjectives like mi, tu, su, nuestro, vuestro, and their usage in different contexts.'
    },
    'ser-estar': {
      title: 'Ser vs Estar',
      level: 'IGCSE',
      description: 'Understand the difference between the two "to be" verbs',
      content: 'Comprehensive guide to using ser and estar correctly, including permanent vs temporary states, locations, and characteristics.'
    },
    'place-prepositions': {
      title: 'Prepositions of Place',
      level: 'IGCSE',
      description: 'Express location and spatial relationships',
      content: 'Learn prepositions like aquí (here), allí (there), debajo (below), encima (above), fuera (outside), entre (between), and more.'
    },
    'basic-connectors': {
      title: 'Basic Connectors',
      level: 'IGCSE',
      description: 'Connect your ideas in Spanish',
      content: 'Master basic connectors like y (and), pero (but), porque (because), cuando (when), and others to create flowing sentences.'
    },
    'advanced-pronouns': {
      title: 'Advanced Pronouns',
      level: 'IB',
      description: 'Master direct and indirect object pronouns',
      content: 'Advanced pronoun usage including direct object pronouns (lo, la, los, las) and indirect object pronouns (le, les, me, te, nos, os).'
    },
    'subjunctive-present': {
      title: 'Present Subjunctive',
      level: 'IB',
      description: 'Express doubt, emotion, and desire',
      content: 'Learn the present subjunctive mood for expressing uncertainty, emotions, desires, and hypothetical situations.'
    },
    'complex-connectors': {
      title: 'Complex Connectors',
      level: 'IB',
      description: 'Advanced linking words and phrases',
      content: 'Master sophisticated connectors like sin embargo (however), por tanto (therefore), a pesar de (despite), and others.'
    },
    'conditional': {
      title: 'Conditional Tense',
      level: 'IB',
      description: 'Express hypothetical situations',
      content: 'Learn to use the conditional tense for polite requests, hypothetical situations, and expressing what would happen.'
    },
    'future-perfect': {
      title: 'Future Perfect',
      level: 'IB',
      description: 'Talk about future completed actions',
      content: 'Master the future perfect tense to express actions that will be completed by a certain point in the future.'
    },
    'subjunctive-imperfect': {
      title: 'Imperfect Subjunctive',
      level: 'IB',
      description: 'Advanced subjunctive forms',
      content: 'Learn the imperfect subjunctive for complex hypothetical situations and formal expressions.'
    },
    'passive-voice': {
      title: 'Passive Voice',
      level: 'IB',
      description: 'Express actions without specifying the doer',
      content: 'Master the passive voice using ser + past participle and reflexive passive constructions.'
    }
  };

  const topic = topicData[topicId];

  const handleRating = (rating: number, feedback: string) => {
    console.log(`Topic: ${topicId}, Rating: ${rating}, Feedback: ${feedback}`);
    // Here you can implement data collection for admin access
    // For now, it's stored in localStorage and can be accessed via browser console
  };

  if (!topic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Topic Not Found</h1>
          <Link to="/grammar" className="text-blue-600 hover:underline">
            ← Back to Grammar
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
            to="/grammar" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Grammar Roadmap
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant={topic.level === 'IGCSE' ? 'default' : 'destructive'} className="text-lg px-4 py-1">
              {topic.level}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {topic.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {topic.description}
          </p>
        </div>

          {/* Content Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <BookOpen className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <CardTitle className="text-2xl">Content Coming Soon!</CardTitle>
              <CardDescription className="text-lg">
                This section is ready for you to add comprehensive content about {topic.title.toLowerCase()}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700">{topic.content}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="font-semibold">Learning Objectives</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Detailed learning objectives and goals will be added here.
                  </p>
                </Card>
                
                <Card className="p-4">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold">Practice Exercises</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Interactive exercises and practice activities will be available here.
                  </p>
                </Card>
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
                  Common mistakes and pitfalls will be listed here with explanations and corrections.
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
                  Special cases, irregular forms, and exceptions will be documented here.
                </p>
                <div className="mt-4">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Form</th>
                        <th className="border border-gray-300 p-2">Example</th>
                        <th className="border border-gray-300 p-2">Translation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">Irregular form 1</td>
                        <td className="border border-gray-300 p-2">Example</td>
                        <td className="border border-gray-300 p-2">Translation</td>
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
                  Time expressions commonly used with this topic will be listed here.
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
            topicId={topicId}
            topicTitle={topic.title}
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default GrammarTopic;
