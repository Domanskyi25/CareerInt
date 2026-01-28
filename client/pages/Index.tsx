import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Briefcase, Users, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">CareerInt</div>
          <nav className="flex gap-6">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
            <Link to="/career" className="text-slate-300 hover:text-white transition-colors">Careers</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Build Your Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">CareerInt</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join a team of talented professionals dedicated to innovation and excellence
          </p>
          <div className="flex gap-4 justify-center pt-6">
            <Link to="/career">
              <Button size="lg" className="gap-2">
                Explore Careers <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <Briefcase className="w-8 h-8 text-blue-400 mb-2" />
              <CardTitle className="text-white">Great Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">Explore diverse roles that match your skills and aspirations</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <Users className="w-8 h-8 text-cyan-400 mb-2" />
              <CardTitle className="text-white">Amazing Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">Work with talented professionals passionate about their craft</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <Target className="w-8 h-8 text-purple-400 mb-2" />
              <CardTitle className="text-white">Growth Path</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">Continuous learning and career development opportunities</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <Zap className="w-8 h-8 text-yellow-400 mb-2" />
              <CardTitle className="text-white">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">Work on cutting-edge projects that make an impact</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-12 text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Ready to Join Us?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Check out our current open positions and find the perfect opportunity for you
          </p>
          <Link to="/career">
            <Button size="lg" variant="secondary" className="gap-2">
              View Open Positions <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-slate-400">
            <p>&copy; 2024 CareerInt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
