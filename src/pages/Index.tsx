
import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Users, Award } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Learn Spanish with <span className="text-blue-600">¿Español o inglés?</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master Spanish through interactive lessons, grammar guides, and daily practice. 
            Perfect for IGCSE and IB students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/word-of-the-day" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Learning Today
            </Link>
            <Link 
              to="/grammar" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Explore Grammar
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Choose ¿Español o inglés?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Grammar</h3>
              <p className="text-muted-foreground">
                Complete grammar roadmap from basics to advanced IB level
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Practice</h3>
              <p className="text-muted-foreground">
                Fill-in-the-blanks and interactive exercises to test your knowledge
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Daily Learning</h3>
              <p className="text-muted-foreground">
                Word of the day feature to expand your vocabulary consistently
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Exam Ready</h3>
              <p className="text-muted-foreground">
                Structured learning path perfect for IGCSE and IB preparation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Quick Access
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/word-of-the-day" className="block">
              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Word of the Day</h3>
                <p className="text-muted-foreground">
                  Learn a new Spanish word every day with examples and pronunciation
                </p>
              </div>
            </Link>
            <Link to="/practice" className="block">
              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-600">Practice Exercises</h3>
                <p className="text-muted-foreground">
                  Test your Spanish skills with interactive fill-in-the-blank exercises
                </p>
              </div>
            </Link>
            <Link to="/grammar" className="block">
              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">Grammar Roadmap</h3>
                <p className="text-muted-foreground">
                  Follow our complete grammar guide from IGCSE to IB level
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 ¿Español o inglés? Making Spanish learning accessible and enjoyable.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
