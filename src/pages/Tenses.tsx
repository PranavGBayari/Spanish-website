
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';

const Tenses = () => {
  const tenseCategories = [
    {
      category: 'Present Tenses',
      description: 'Actions happening now or regularly',
      tenses: [
        { id: 'present', name: 'Present Simple', spanish: 'Presente Simple', description: 'Habitual actions and general truths', level: 'Basic', color: 'bg-green-500' },
        { id: 'present-continuous', name: 'Present Continuous', spanish: ' Gerundio', description: 'Actions happening right now', level: 'Basic', color: 'bg-green-500' },      
      ]
    },
    {
      category: 'Past Tenses',
      description: 'Actions that happened in the past',
      tenses: [
        { id: 'Indefenido', name: 'Past tense', spanish: 'Pretérito indefenido', description: 'Completed past actions', level: 'Intermediate', color: 'bg-blue-500' },
        { id: 'imperfect-preterito', name: 'Imperfect', spanish: 'Imperfecto', description: 'Ongoing past actions', level: 'Intermediate', color: 'bg-blue-500' },
        { id: 'perfecto', name: 'Pretérito Perfecto', spanish: 'Pretérito Perfecto', description: 'Actions completed in a recent past period', level: 'Intermediate', color: 'bg-blue-500' },
        { id: 'pluscuamperfecto', name: 'Pluscuamperfecto', spanish: 'Pluscuamperfecto', description: 'Actions completed before another past action', level: 'Advanced', color: 'bg-blue-600' }
      ]
    },
    {
      category: 'Future Tenses',
      description: 'Actions that will happen',
      tenses: [
        { id: 'future', name: 'Future Simple', spanish: 'Futuro Simple', description: 'Actions that will happen', level: 'Intermediate', color: 'bg-purple-500' },
        { id: 'conditional', name: 'Conditional', spanish: 'Condicional', description: 'Actions that would happen', level: 'Advanced', color: 'bg-red-500' }
      ]
    },
    {
      category: 'Subjunctive Tenses',
      description: 'Express doubt, emotion, desire, or hypothetical situations',
      tenses: [
        { id: 'present-subjunctive', name: 'Present Subjunctive', spanish: 'Presente de Subjuntivo', description: 'Express doubt, emotion, or desire in present', level: 'Advanced', color: 'bg-orange-500' },
        { id: 'imperfect-subjunctive', name: 'Imperfect Subjunctive', spanish: 'Imperfecto de Subjuntivo', description: 'Express doubt, emotion, or desire in past', level: 'Advanced', color: 'bg-orange-600' }
      ]
    },
    {
      category: 'Imperative Mood',
      description: 'Commands and instructions',
      tenses: [
        { id: 'imperative', name: 'Imperative', spanish: 'Imperativo', description: 'Commands, orders, and instructions', level: 'Intermediate', color: 'bg-teal-500' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Clock className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Spanish Tenses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master Spanish verb tenses step by step. From present to conditional, 
            learn when and how to use each tense correctly.
          </p>
        </div>

        {/* Tense Categories */}
        <div className="space-y-12">
          {tenseCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{category.category}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.tenses.map((tense) => (
                  <Link key={tense.id} to={`/tense/${tense.id}`}>
                    <Card className="hover:shadow-lg transition-all duration-200 h-full group cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className={`w-4 h-4 rounded-full ${tense.color}`}></div>
                          <Badge variant={tense.level === 'Basic' ? 'default' : tense.level === 'Intermediate' ? 'secondary' : 'destructive'}>
                            {tense.level}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {tense.name}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600">
                          {tense.spanish}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{tense.description}</p>
                        <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                          <span className="font-medium">Learn more</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Access to Grammar */}
        <div className="mt-16">
          <Card className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-green-500 to-blue-600 text-white">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Explore More Grammar</CardTitle>
              <CardDescription className="text-green-100">
                Check out our comprehensive grammar roadmap
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link 
                to="/grammar" 
                className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Grammar Roadmap
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tenses;
