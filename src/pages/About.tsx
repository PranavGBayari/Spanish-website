
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
            <p>If you're here, you're probably either trying to figure out what subjunctive even means or panicking over how to write 150 words in Spanish without sounding like Google Translate's distant cousin. Trust me, I've been there.</p><br />
              <p>This website was created by <b>Pranav Bayari</b> (95th percentile in IGCSE Spanish), who started learning Spanish at the beginning of IGCSE and felt like diving headfirst into the deep end of la piscina. If I could go from Hola, ¿cómo estás? to acing my exams, so can you.</p><br />
              <p>We've taken feedback and experiences from both Spanish B and Ab Initio students to create the most comprehensive resource possible. This means we understand the challenges across both IGCSE and IB levels, and we are here to make your Spanish journey easier, more fun, and (hopefully) less stressful.</p><br />
              <p>Want to connect? Find me on <a href="https://www.linkedin.com/in/pranav-bayari-394734327/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">LinkedIn</a>!</p><br />
              <p>We’ve got the perspectives of both IGCSE and IB (B and Ab Initio), so we know what you’re going through. And we’re here to make it easier, more fun, and (hopefully) less stressful.</p><br />
              <p>Here, you’ll find:</p><br />
              <ul>
                  <li>Grammar explained without the boring textbook vibe</li>
                  <li>Writing tips that’ll have your teacher wondering who you hired</li>
                  <li>Speaking tricks to sound like you actually know what you’re saying</li>
                  <li>Resources for mastering those papers, whether you’re aiming for a 7 in IB or just trying to pass IGCSE without crying.</li>
              </ul><br />
              <p>So buckle up, grab your hucha (Word of the Day, see what we did there?), and let’s make Spanish less of a mystery and more of a win! ¡Vamos!</p>
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
