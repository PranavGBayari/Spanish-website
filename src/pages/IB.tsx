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

const IB = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="destructive">International Baccalaureate</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            IB Spanish Assessment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guide to IB Spanish B assessment components for Standard and Higher Level
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
                          Paper 1: Reading Comprehension
                        </CardTitle>
                        <CardDescription className="text-lg">
                          SL: 1 hour 15 minutes • HL: 1 hour 30 minutes • 25% of total marks
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
                        Reading comprehension based on authentic texts covering the five prescribed themes of the IB Spanish B curriculum.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Standard Level (SL)</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• 3 texts (400-600 words total)</li>
                          <li>• 20-30 questions</li>
                          <li>• Multiple choice and short answers</li>
                          <li>• Focus on factual understanding</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Higher Level (HL)</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• 4 texts (600-800 words total)</li>
                          <li>• 25-40 questions</li>
                          <li>• Complex analysis required</li>
                          <li>• Inference and interpretation skills</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">IB Themes Covered</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Identities • Experiences • Human ingenuity • Social organization • Sharing the planet</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Assessment Strategies</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Skim the text first for general understanding</li>
                        <li>• Identify key words related to IB themes</li>
                        <li>• Pay attention to cultural contexts</li>
                        <li>• Practice inferring meaning from context</li>
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
                          Paper 2: Written Production
                        </CardTitle>
                        <CardDescription className="text-lg">
                          SL: 1 hour 15 minutes • HL: 1 hour 30 minutes • 25% of total marks
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
                        Productive writing skills assessment through various text types related to the IB themes.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Standard Level (SL)</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• One writing task (250-400 words)</li>
                          <li>• Choice from 5 tasks</li>
                          <li>• Various text types</li>
                          <li>• Focus on communicative purpose</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Higher Level (HL)</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• One writing task (450-600 words)</li>
                          <li>• Choice from 5 tasks</li>
                          <li>• Complex argumentation required</li>
                          <li>• Sophisticated language use</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Text Types</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Article • Blog/diary entry • Brochure/leaflet/flyer • Essay • Interview • Letter/email</li>
                        <li>• Proposal • Report • Review • Set of instructions • Speech</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Assessment Criteria</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Language: vocabulary, grammar, and conventions</li>
                        <li>• Message: ideas, arguments, and supporting details</li>
                        <li>• Conceptual understanding: context, audience, purpose</li>
                        <li>• Organization: structure, logical development</li>
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
                          Paper 3: Listening Comprehension
                        </CardTitle>
                        <CardDescription className="text-lg">
                          SL: 45 minutes • HL: 1 hour • 25% of total marks
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
                        Listening comprehension based on authentic audio and audio-visual materials covering IB themes.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Standard Level (SL)</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• 3 audio passages</li>
                          <li>• 20-25 questions</li>
                          <li>• Multiple choice and short answers</li>
                          <li>• Clear speech and familiar accents</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Higher Level (HL)</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• 4 audio passages</li>
                          <li>• 25-30 questions</li>
                          <li>• Complex inference required</li>
                          <li>• Variety of accents and speeds</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Audio Types</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Interviews • News reports • Podcasts • Radio programs • Documentaries</li>
                        <li>• Conversations • Announcements • Advertisements</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Listening Strategies</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Practice with authentic Spanish media</li>
                        <li>• Focus on global understanding first</li>
                        <li>• Learn to identify speakers' attitudes and opinions</li>
                        <li>• Develop note-taking skills during audio</li>
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
                          Internal Assessment: Individual Oral
                        </CardTitle>
                        <CardDescription className="text-lg">
                          SL: 12-15 minutes • HL: 15-20 minutes • 25% of total marks
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
                        Individual oral assessment based on a visual stimulus, exploring how it relates to a theme and linking to a literary work (HL only).
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Standard Level (SL)</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Visual stimulus discussion (3-4 min)</li>
                          <li>• Follow-up conversation (4-5 min)</li>
                          <li>• Focus on IB themes</li>
                          <li>• 15 minutes preparation time</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Higher Level (HL)</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Visual stimulus discussion (3-4 min)</li>
                          <li>• Literary work connection (4-5 min)</li>
                          <li>• Follow-up conversation (5-6 min)</li>
                          <li>• 20 minutes preparation time</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Assessment Criteria</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Language: vocabulary, grammar, pronunciation</li>
                        <li>• Message: ideas, arguments, supporting details</li>
                        <li>• Interactive skills: response and initiative</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Preparation Strategies</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Practice describing and analyzing images</li>
                        <li>• Develop theme-specific vocabulary</li>
                        <li>• Study literary works thoroughly (HL)</li>
                        <li>• Practice connecting concepts across themes</li>
                        <li>• Work on fluency and natural interaction</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* IB Specific Resources */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-red-500 to-purple-600 text-white">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">IB Spanish B Resources</CardTitle>
              <CardDescription className="text-red-100">
                Essential resources for IB Spanish B success
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-2">Key Study Materials</h5>
                  <ul className="space-y-1 text-sm text-red-100">
                    <li>• IB Spanish B Course Companion</li>
                    <li>• Authentic Spanish media sources</li>
                    <li>• Literary works (HL students)</li>
                    <li>• IB Past Papers</li>
                    <li>• Theme-based vocabulary lists</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Assessment Timeline</h5>
                  <ul className="space-y-1 text-sm text-red-100">
                    <li>• Internal Assessment: Throughout Year 2</li>
                    <li>• Paper 1: May examination session</li>
                    <li>• Paper 2: May examination session</li>
                    <li>• Paper 3: May examination session</li>
                    <li>• CAS reflections ongoing</li>
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

export default IB;