
import React from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Learning',
      description: 'From basic vocabulary to advanced grammar, we cover all aspects of Spanish learning.'
    },
    {
      icon: Users,
      title: 'For All Levels',
      description: 'Whether you\'re a complete beginner or preparing for IB exams, we have content for you.'
    },
    {
      icon: Target,
      title: 'Focused Practice',
      description: 'Interactive exercises and quizzes help reinforce what you\'ve learned.'
    },
    {
      icon: Heart,
      title: 'Made with Passion',
      description: 'Created by language enthusiasts who understand the joy of learning Spanish.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About ¿Español o inglés?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive platform for mastering the Spanish language
          </p>
        </div>

        {/* Mission */}
        <Card className="max-w-4xl mx-auto p-8 mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              We believe that learning Spanish should be accessible, engaging, and effective. 
              Our platform combines traditional learning methods with modern technology to create 
              an immersive experience that helps students master Spanish grammar, vocabulary, 
              and practical usage.
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Why Choose ¿Español o inglés?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <feature.icon className="w-12 h-12 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-2xl">Grammar Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Our grammar section is structured like a Madrid Metro map, guiding you through 
                Spanish grammar topics from IGCSE foundation level to IB advanced concepts. 
                Each "station" represents a key grammar topic with comprehensive explanations 
                and examples.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-2xl">Verb Tenses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Master Spanish verb tenses with our detailed explanations, conjugation tables, 
                and practical examples. From present simple to complex subjunctive forms, 
                we break down each tense into digestible lessons.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-2xl">Interactive Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Put your knowledge to the test with our fill-in-the-blanks exercises, 
                vocabulary quizzes, and grammar challenges. Immediate feedback helps 
                you learn from mistakes and reinforce correct usage.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-2xl">Daily Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Expand your vocabulary with our Word of the Day feature, complete with 
                pronunciation guides, etymology, examples, and related words. 
                Consistent daily practice builds a strong foundation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Start Your Spanish Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6">
                Join thousands of students who are already improving their Spanish with ¿Español o inglés?
              </p>
              <p className="text-purple-100">
                ¡Vamos a aprender español juntos! (Let's learn Spanish together!)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
