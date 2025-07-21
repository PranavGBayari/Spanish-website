import React from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, PenTool, Headphones, MessageCircle } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const IGCSE = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="default">Cambridge IGCSE</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            IGCSE Spanish Assessment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guide to the four assessment components of Cambridge IGCSE Spanish
          </p>
        </div>

        {/* Assessment Components */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Reading */}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                      <div>
                        <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                          Paper 1: Reading
                        </CardTitle>
                        <CardDescription className="text-lg">
                          45 minutes • 25% of total marks
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">Click to expand</Badge>
                  </div>
                </CardHeader>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Card className="mt-2">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Assessment Overview</h4>
                      <p className="text-gray-600 mb-4">
                        The reading paper tests your ability to understand written Spanish texts of varying complexity.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Question Types</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Multiple choice questions</li>
                          <li>• True/false/not mentioned</li>
                          <li>• Short answer questions</li>
                          <li>• Matching exercises</li>
                          <li>• Gap-filling activities</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Text Types</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Signs and notices</li>
                          <li>• Advertisements</li>
                          <li>• News articles</li>
                          <li>• Personal messages</li>
                          <li>• Informational texts</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Study Tips</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Practice reading Spanish texts daily</li>
                        <li>• Focus on understanding main ideas rather than every word</li>
                        <li>• Learn to recognize cognates (words similar to English)</li>
                        <li>• Time management is crucial - don't spend too long on one question</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>

          {/* Writing */}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <PenTool className="w-8 h-8 text-green-600" />
                      <div>
                        <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">
                          Paper 2: Writing
                        </CardTitle>
                        <CardDescription className="text-lg">
                          1 hour • 25% of total marks
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">Click to expand</Badge>
                  </div>
                </CardHeader>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Card className="mt-2">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Assessment Overview</h4>
                      <p className="text-gray-600 mb-4">
                        The writing paper assesses your ability to communicate in written Spanish through various task types.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Task Types</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Form filling</li>
                          <li>• Short messages (40-50 words)</li>
                          <li>• Email/letter writing (80-90 words)</li>
                          <li>• Descriptive/narrative pieces</li>
                          <li>• Opinion-based writing</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Assessment Criteria</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Communication (content relevance)</li>
                          <li>• Language accuracy (grammar/spelling)</li>
                          <li>• Range of vocabulary</li>
                          <li>• Appropriate register/style</li>
                          <li>• Organization and coherence</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Writing Strategies</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Plan your response before writing</li>
                        <li>• Use a variety of tenses and vocabulary</li>
                        <li>• Check grammar, spelling, and accents</li>
                        <li>• Stay within the word limits</li>
                        <li>• Address all bullet points in the task</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>

          {/* Listening */}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Headphones className="w-8 h-8 text-purple-600" />
                      <div>
                        <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">
                          Paper 3: Listening
                        </CardTitle>
                        <CardDescription className="text-lg">
                          45 minutes • 25% of total marks
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">Click to expand</Badge>
                  </div>
                </CardHeader>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Card className="mt-2">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Assessment Overview</h4>
                      <p className="text-gray-600 mb-4">
                        The listening paper tests your ability to understand spoken Spanish in various contexts and situations.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Audio Types</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Announcements</li>
                          <li>• Conversations</li>
                          <li>• News reports</li>
                          <li>• Advertisements</li>
                          <li>• Interviews</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Question Formats</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Multiple choice</li>
                          <li>• Box ticking</li>
                          <li>• Gap filling</li>
                          <li>• Short answers</li>
                          <li>• True/false statements</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Listening Tips</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Read questions before listening begins</li>
                        <li>• Focus on key words and context</li>
                        <li>• Don't panic if you miss a word - keep listening</li>
                        <li>• Use the pause time to review your answers</li>
                        <li>• Practice with different Spanish accents</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>

          {/* Speaking */}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-8 h-8 text-orange-600" />
                      <div>
                        <CardTitle className="text-2xl group-hover:text-orange-600 transition-colors">
                          Paper 4: Speaking
                        </CardTitle>
                        <CardDescription className="text-lg">
                          10-15 minutes • 25% of total marks
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">Click to expand</Badge>
                  </div>
                </CardHeader>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Card className="mt-2">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Assessment Overview</h4>
                      <p className="text-gray-600 mb-4">
                        The speaking test evaluates your ability to communicate orally in Spanish through conversation and role-play.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Test Components</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Role play (2-3 minutes)</li>
                          <li>• Topic presentation (2 minutes)</li>
                          <li>• General conversation (3-5 minutes)</li>
                          <li>• Picture-based discussion</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Assessment Areas</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Communication and response</li>
                          <li>• Pronunciation and intonation</li>
                          <li>• Accuracy of language</li>
                          <li>• Range of vocabulary</li>
                          <li>• Fluency and interaction</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Speaking Strategies</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Practice speaking regularly with native speakers</li>
                        <li>• Prepare topic vocabulary in advance</li>
                        <li>• Don't be afraid to make mistakes - keep talking</li>
                        <li>• Use connecting words to link ideas</li>
                        <li>• Ask for clarification if needed: "¿Puedes repetir?"</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Study Resources */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Additional Study Resources</CardTitle>
              <CardDescription className="text-blue-100">
                Enhance your IGCSE Spanish preparation with these recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-2">Recommended Practice</h5>
                  <ul className="space-y-1 text-sm text-blue-100">
                    <li>• Daily Spanish news reading</li>
                    <li>• Spanish podcasts for teens</li>
                    <li>• Language exchange programs</li>
                    <li>• Past paper practice</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Key Topics to Review</h5>
                  <ul className="space-y-1 text-sm text-blue-100">
                    <li>• Family and relationships</li>
                    <li>• School and education</li>
                    <li>• Hobbies and free time</li>
                    <li>• Food and health</li>
                    <li>• Travel and holidays</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IGCSE;