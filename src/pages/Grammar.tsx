
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, ArrowRight } from 'lucide-react';
import ProgressTracker from '@/components/ProgressTracker';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const Grammar = () => {
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const { user } = useAuth();

  // Load completed topics from database
  useEffect(() => {
    const loadProgress = async () => {
      if (!user) {
        // Load from localStorage for non-authenticated users
        const completed = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith('rating_')) {
            completed.push(key.replace('rating_', ''));
          }
        }
        setCompletedTopics(completed);
        return;
      }

      // TODO: Implement database progress loading after migration is complete
      // For now, fall back to localStorage
      const completed = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('rating_')) {
          completed.push(key.replace('rating_', ''));
        }
      }
      setCompletedTopics(completed);
    };

    loadProgress();
  }, [user]);

  const grammarTopics = {
    igcse: [
      { id: 'days-of-week', name: 'Days of the Week', color: 'bg-blue-500', description: 'Lunes, martes, miércoles... - Learn the seven days in Spanish' },
      { id: 'numbers-spanish', name: 'Numbers in Spanish', color: 'bg-blue-500', description: 'Uno, dos, tres... - Master Spanish numbers from 1 to 100 and beyond' },
      { id: 'articles-spanish', name: 'Articles in Spanish', color: 'bg-blue-500', description: 'El, la, los, las, un, una... - Definite and indefinite articles' },
      { id: 'basic-pronouns', name: 'Basic Pronouns', color: 'bg-blue-500', description: 'Subject and object pronouns - Learn the fundamental building blocks of Spanish sentences' },
      { id: 'possessive-adjectives', name: 'Possessive Adjectives', color: 'bg-blue-500', description: 'Mi, tu, su, nuestro... - Express ownership and relationships in Spanish' },
      { id: 'present', name: 'Present Simple', color: 'bg-blue-500', description: 'Regular and irregular verbs - Master the most essential Spanish tense' },
      { id: 'ser-estar', name: 'Ser vs Estar', color: 'bg-blue-500', description: 'To be verbs usage - Understand the crucial difference between permanent and temporary states' },
      { id: 'place-prepositions', name: 'Prepositions of Place', color: 'bg-green-500', description: 'Aquí, allí, debajo, encima... - Navigate locations and spatial relationships' },
      { id: 'present-continuous', name: 'Present Continuous', color: 'bg-green-500', description: 'Estar + gerund - Express ongoing actions happening right now' },
      { id: 'basic-connectors', name: 'Basic Connectors', color: 'bg-green-500', description: 'Y, pero, porque, cuando... - Connect your ideas and create flowing sentences' },
      { id: 'indefenido', name: 'PastTense', color: 'bg-green-500', description: 'Past simple actions - Talk about completed events in the past' },
      { id: 'imperfect-preterito', name: 'Imperfect Tense', color: 'bg-green-500', description: 'Ongoing past actions - Describe habits, descriptions, and background events' },
      { id: 'perefecto', name: 'Pretérito Perfecto', color: 'bg-green-500', description: 'Recent past actions - Discuss events that have relevance to the present' },
    ],
    ib: [
      { id: 'advanced-pronouns', name: 'Advanced Pronouns', color: 'bg-red-500', description: 'Direct/indirect object pronouns - Master complex pronoun placement and usage' },
      { id: 'subjunctive-present', name: 'Present Subjunctive', color: 'bg-red-500', description: 'Expressing doubt, emotion - Navigate the complex world of subjunctive mood' },
      { id: 'complex-connectors', name: 'Complex Connectors', color: 'bg-red-500', description: 'Sin embargo, por tanto, a pesar de... - Create sophisticated, academic-level writing' },
      { id: 'conditional', name: 'Conditional Tense', color: 'bg-red-500', description: 'Would, could, should - Express hypothetical situations and polite requests' },
      { id: 'subjunctive-imperfect', name: 'Imperfect Subjunctive', color: 'bg-purple-500', description: 'Advanced subjunctive forms - Handle complex hypothetical and formal situations' },
      { id: 'passive-voice', name: 'Passive Voice', color: 'bg-purple-500', description: 'Ser + past participle - Express actions without specifying the doer' },
    ]
  };

  const SubwayStation = ({ topic, level, index, isLast }) => (
    <div className="flex items-start mb-8">
      <div className="relative flex items-start w-full">
        {/* Subway line */}
        {!isLast && (
          <div className={`absolute top-12 left-4 w-0.5 h-20 ${topic.color.replace('bg-', 'bg-')}`}></div>
        )}
        
        {/* Station circle */}
        <div className={`w-8 h-8 rounded-full ${topic.color} flex items-center justify-center z-10 relative mt-2 flex-shrink-0`}>
          <MapPin className="w-4 h-4 text-white" />
        </div>
        
        {/* Station info */}
        <div className="ml-6 flex-1">
          <Link 
            to={topic.id === 'present' || topic.id === 'present-continuous' || topic.id === 'indefenido' || topic.id === 'imperfect-preterito' || topic.id === 'perfecto' || topic.id === 'subjunctive-present' || topic.id === 'subjunctive-imperfect' ? `/tense/${topic.id}` : `/grammar/${topic.id}`}
            className="group block"
          >
            <Card className="hover:shadow-lg transition-all duration-200 group-hover:border-primary min-h-[140px] h-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2">
                      {topic.name}
                      {completedTopics.includes(topic.id) && (
                        <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                          ✓ Completed
                        </Badge>
                      )}
                    </CardTitle>
                    <Badge variant={level === 'igcse' ? 'default' : 'destructive'} className="mb-2">
                      {level.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {topic.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <div className="flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <span>Start learning</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );

  // Prepare progress data
  const igcseProgress = grammarTopics.igcse.map(topic => ({
    id: topic.id,
    name: topic.name,
    completed: completedTopics.includes(topic.id)
  }));

  const ibProgress = grammarTopics.ib.map(topic => ({
    id: topic.id,
    name: topic.name,
    completed: completedTopics.includes(topic.id)
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Spanish Grammar Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate your Spanish grammar learning like the Madrid Metro system. 
            Follow the tracks from IGCSE basics to IB advanced topics.
          </p>
        </div>

        {/* Progress Tracker */}
        <ProgressTracker igcseTopics={igcseProgress} ibTopics={ibProgress} />

        {/* Legend */}
        <div className="flex justify-center mb-8">
          <Card className="p-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm">IGCSE Foundation</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm">IGCSE Intermediate</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm">IB Standard</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-sm">IB Higher</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Subway Map */}
        <div className="max-w-4xl mx-auto">
          {/* IGCSE Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mr-4">IGCSE Line</h2>
              <Badge variant="outline" className="text-lg px-3 py-1">Foundation to Intermediate</Badge>
            </div>
            
            <div className="space-y-0">
              {grammarTopics.igcse.map((topic, index) => (
                <SubwayStation 
                  key={topic.id} 
                  topic={topic} 
                  level="igcse" 
                  index={index}
                  isLast={index === grammarTopics.igcse.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Transfer Station */}
          <div className="flex justify-center mb-16">
            <Card className="p-6 border-2 border-yellow-400 bg-yellow-50">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🚇 Transfer Station</h3>
                <p className="text-gray-600">Continue to IB Level for advanced grammar topics</p>
              </div>
            </Card>
          </div>

          {/* IB Section */}
          <div>
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mr-4">IB Line</h2>
              <Badge variant="destructive" className="text-lg px-3 py-1">Standard to Higher Level</Badge>
            </div>
            
            <div className="space-y-0">
              {grammarTopics.ib.map((topic, index) => (
                <SubwayStation 
                  key={topic.id} 
                  topic={topic} 
                  level="ib" 
                  index={index}
                  isLast={index === grammarTopics.ib.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access to Tenses */}
        <div className="mt-16">
          <Card className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Quick Access: Spanish Tenses</CardTitle>
              <CardDescription className="text-blue-100">
                Jump directly to our comprehensive tenses section
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link 
                to="/tenses" 
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore All Tenses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Grammar;
