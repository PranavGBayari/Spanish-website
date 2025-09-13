// src/pages/grammar/NumbersSpanish.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import RatingFeedback from '@/components/RatingFeedback';

const NumbersSpanish = () => {
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
          <Link to="/grammar" className="hover:text-primary">Grammar</Link>
          <span>/</span>
          <span className="text-foreground">Numbers in Spanish</span>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/grammar" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Grammar Roadmap
          </Link>

          <div className="text-center mb-12">
            <Badge className="mb-4" variant="default">IGCSE</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Numbers in Spanish
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-2">
              Los Números en Español
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master Spanish numbers from 1 to 100 and beyond, including their pronunciation and usage
            </p>
          </div>

          {/* Cardinal Numbers 1-20 */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Cardinal Numbers 1-20
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-2">Number</th>
                        <th className="border border-gray-300 p-2">Spanish</th>
                        <th className="border border-gray-300 p-2">Pronunciation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-300 p-2">1</td><td className="border border-gray-300 p-2 font-medium text-blue-600">uno</td><td className="border border-gray-300 p-2">[OO-no]</td></tr>
                      <tr><td className="border border-gray-300 p-2">2</td><td className="border border-gray-300 p-2 font-medium text-blue-600">dos</td><td className="border border-gray-300 p-2">[dos]</td></tr>
                      <tr><td className="border border-gray-300 p-2">3</td><td className="border border-gray-300 p-2 font-medium text-blue-600">tres</td><td className="border border-gray-300 p-2">[tres]</td></tr>
                      <tr><td className="border border-gray-300 p-2">4</td><td className="border border-gray-300 p-2 font-medium text-blue-600">cuatro</td><td className="border border-gray-300 p-2">[KWAH-tro]</td></tr>
                      <tr><td className="border border-gray-300 p-2">5</td><td className="border border-gray-300 p-2 font-medium text-blue-600">cinco</td><td className="border border-gray-300 p-2">[SEEN-ko]</td></tr>
                      <tr><td className="border border-gray-300 p-2">6</td><td className="border border-gray-300 p-2 font-medium text-blue-600">seis</td><td className="border border-gray-300 p-2">[says]</td></tr>
                      <tr><td className="border border-gray-300 p-2">7</td><td className="border border-gray-300 p-2 font-medium text-blue-600">siete</td><td className="border border-gray-300 p-2">[see-EH-teh]</td></tr>
                      <tr><td className="border border-gray-300 p-2">8</td><td className="border border-gray-300 p-2 font-medium text-blue-600">ocho</td><td className="border border-gray-300 p-2">[O-cho]</td></tr>
                      <tr><td className="border border-gray-300 p-2">9</td><td className="border border-gray-300 p-2 font-medium text-blue-600">nueve</td><td className="border border-gray-300 p-2">[NWEH-veh]</td></tr>
                      <tr><td className="border border-gray-300 p-2">10</td><td className="border border-gray-300 p-2 font-medium text-blue-600">diez</td><td className="border border-gray-300 p-2">[dee-es]</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-2">Number</th>
                        <th className="border border-gray-300 p-2">Spanish</th>
                        <th className="border border-gray-300 p-2">Pronunciation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-300 p-2">11</td><td className="border border-gray-300 p-2 font-medium text-blue-600">once</td><td className="border border-gray-300 p-2">[ON-seh]</td></tr>
                      <tr><td className="border border-gray-300 p-2">12</td><td className="border border-gray-300 p-2 font-medium text-blue-600">doce</td><td className="border border-gray-300 p-2">[DO-seh]</td></tr>
                      <tr><td className="border border-gray-300 p-2">13</td><td className="border border-gray-300 p-2 font-medium text-blue-600">trece</td><td className="border border-gray-300 p-2">[TREH-seh]</td></tr>
                      <tr><td className="border border-gray-300 p-2">14</td><td className="border border-gray-300 p-2 font-medium text-blue-600">catorce</td><td className="border border-gray-300 p-2">[ka-TOR-seh]</td></tr>
                      <tr><td className="border border-gray-300 p-2">15</td><td className="border border-gray-300 p-2 font-medium text-blue-600">quince</td><td className="border border-gray-300 p-2">[KEEN-seh]</td></tr>
                      <tr><td className="border border-gray-300 p-2">16</td><td className="border border-gray-300 p-2 font-medium text-blue-600">dieciséis</td><td className="border border-gray-300 p-2">[dee-eh-see-SAYS]</td></tr>
                      <tr><td className="border border-gray-300 p-2">17</td><td className="border border-gray-300 p-2 font-medium text-blue-600">diecisiete</td><td className="border border-gray-300 p-2">[dee-eh-see-see-EH-teh]</td></tr>
                      <tr><td className="border border-gray-300 p-2">18</td><td className="border border-gray-300 p-2 font-medium text-blue-600">dieciocho</td><td className="border border-gray-300 p-2">[dee-eh-see-O-cho]</td></tr>
                      <tr><td className="border border-gray-300 p-2">19</td><td className="border border-gray-300 p-2 font-medium text-blue-600">diecinueve</td><td className="border border-gray-300 p-2">[dee-eh-see-NWEH-veh]</td></tr>
                      <tr><td className="border border-gray-300 p-2">20</td><td className="border border-gray-300 p-2 font-medium text-blue-600">veinte</td><td className="border border-gray-300 p-2">[VAYN-teh]</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tens and Larger Numbers */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Tens and Larger Numbers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-800">Tens (20-90)</h4>
                  <ul className="space-y-2">
                    <li><strong>20</strong> - veinte</li>
                    <li><strong>30</strong> - treinta</li>
                    <li><strong>40</strong> - cuarenta</li>
                    <li><strong>50</strong> - cincuenta</li>
                    <li><strong>60</strong> - sesenta</li>
                    <li><strong>70</strong> - setenta</li>
                    <li><strong>80</strong> - ochenta</li>
                    <li><strong>90</strong> - noventa</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-800">Hundreds</h4>
                  <ul className="space-y-2">
                    <li><strong>100</strong> - cien</li>
                    <li><strong>101</strong> - ciento uno</li>
                    <li><strong>200</strong> - doscientos</li>
                    <li><strong>300</strong> - trescientos</li>
                    <li><strong>400</strong> - cuatrocientos</li>
                    <li><strong>500</strong> - quinientos</li>
                    <li><strong>600</strong> - seiscientos</li>
                    <li><strong>700</strong> - setecientos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-800">Large Numbers</h4>
                  <ul className="space-y-2">
                    <li><strong>1,000</strong> - mil</li>
                    <li><strong>2,000</strong> - dos mil</li>
                    <li><strong>10,000</strong> - diez mil</li>
                    <li><strong>100,000</strong> - cien mil</li>
                    <li><strong>1,000,000</strong> - un millón</li>
                    <li><strong>2,000,000</strong> - dos millones</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rules and Formation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Number Rules and Formation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">21-29: Use "veinti-"</h4>
                  <p className="text-blue-700">veintiuno (21), veintidós (22), veintitrés (23), etc.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">31-99: Use "y" (and)</h4>
                  <p className="text-green-700">treinta y uno (31), cuarenta y cinco (45), setenta y ocho (78)</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Hundreds agree in gender</h4>
                  <p className="text-yellow-700">doscientos hombres (200 men), doscientas mujeres (200 women)</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">"Uno" changes before nouns</h4>
                  <p className="text-purple-700">un libro (one book), una mesa (one table)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Examples in Context
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Tengo veintidós años.</p>
                  <p className="text-gray-600">I am 22 years old.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">El libro cuesta quince euros.</p>
                  <p className="text-gray-600">The book costs fifteen euros.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">Viven en el piso número ciento cinco.</p>
                  <p className="text-gray-600">They live on floor number 105.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-blue-600 mb-2">La ciudad tiene un millón de habitantes.</p>
                  <p className="text-gray-600">The city has one million inhabitants.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rating Component */}
          <RatingFeedback 
            topicId="numbers-spanish"
            topicTitle="Numbers in Spanish"
            topicType="grammar"
            onSubmit={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default NumbersSpanish;