import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Brain, BarChart3, FileText } from "lucide-react";
import heroImage from "@/assets/hero-study.jpg";

const StudyHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent-glow))_0%,transparent_70%)]" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Smart Study
                <span className="bg-gradient-accent bg-clip-text text-transparent block">
                  System
                </span>
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-lg leading-relaxed">
                Transform your learning with AI-powered document processing, automated assessments, and personalized study recommendations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-glow hover:shadow-elegant transition-all duration-300">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                View Demo
              </Button>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <Card className="bg-gradient-card border-white/20 p-4 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <FileText className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Document Processing</h3>
                    <p className="text-xs text-muted-foreground">AI-powered analysis</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-gradient-card border-white/20 p-4 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-accent rounded-lg">
                    <Brain className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Smart Recommendations</h3>
                    <p className="text-xs text-muted-foreground">Personalized learning</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Modern study environment with AI-powered learning tools"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <Card className="absolute -bottom-6 -left-6 bg-gradient-card p-4 shadow-elegant border-white/20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success rounded-lg">
                  <BarChart3 className="w-6 h-6 text-success-foreground" />  
                </div>
                <div>
                  <p className="text-2xl font-bold text-success">95%</p>
                  <p className="text-sm text-muted-foreground">Study Efficiency</p>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -top-6 -right-6 bg-gradient-card p-4 shadow-elegant border-white/20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">1,000+</p>
                  <p className="text-sm text-muted-foreground">Documents Processed</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyHero;