import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Settings, 
  Play, 
  CheckCircle, 
  Clock, 
  Target,
  Zap,
  ArrowRight
} from "lucide-react";

const AssessmentGenerator = () => {
  const [generatingAssessment, setGeneratingAssessment] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);

  const assessmentTypes = [
    {
      type: "Quick Quiz",
      description: "5-10 multiple choice questions",
      duration: "5-10 mins",
      difficulty: "Easy",
      icon: Zap,
      color: "success"
    },
    {
      type: "Comprehensive Test",
      description: "20-30 mixed format questions",
      duration: "30-45 mins", 
      difficulty: "Medium",
      icon: FileText,
      color: "accent"
    },
    {
      type: "Practice Exam",
      description: "50+ questions with detailed explanations",
      duration: "60-90 mins",
      difficulty: "Hard",
      icon: Target,
      color: "primary"
    }
  ];

  const recentAssessments = [
    {
      title: "Machine Learning Fundamentals",
      score: 87,
      totalQuestions: 25,
      completedAt: "2 hours ago",
      difficulty: "Medium",
      status: "completed"
    },
    {
      title: "Data Structures Review",
      score: 92,
      totalQuestions: 15,
      completedAt: "Yesterday",
      difficulty: "Easy", 
      status: "completed"
    },
    {
      title: "Algorithm Analysis",
      score: null,
      totalQuestions: 30,
      completedAt: null,
      difficulty: "Hard",
      status: "pending"
    }
  ];

  const handleGenerateAssessment = async (type: string) => {
    setGeneratingAssessment(true);
    setGenerationProgress(0);

    // Simulate assessment generation
    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setGeneratingAssessment(false);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 500);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-success border-success/20 bg-success/5';
      case 'Medium': return 'text-accent border-accent/20 bg-accent/5';
      case 'Hard': return 'text-primary border-primary/20 bg-primary/5';
      default: return 'text-muted-foreground border-border';
    }
  };

  const getStatusIcon = (status: string, score: number | null) => {
    if (status === 'completed') {
      return <CheckCircle className="w-5 h-5 text-success" />;
    }
    return <Clock className="w-5 h-5 text-muted-foreground" />;
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Generate Smart Assessments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered assessment generation tailored to your study materials and learning progress
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Assessment Types */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {assessmentTypes.map((assessment, index) => {
              const IconComponent = assessment.icon;
              return (
                <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 bg-gradient-${assessment.color} rounded-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={getDifficultyColor(assessment.difficulty)}
                      >
                        {assessment.difficulty}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{assessment.type}</h3>
                      <p className="text-muted-foreground">{assessment.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {assessment.duration}
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full group-hover:shadow-glow transition-all duration-300"
                      onClick={() => handleGenerateAssessment(assessment.type)}
                      disabled={generatingAssessment}
                    >
                      {generatingAssessment ? (
                        <>
                          <Settings className="w-4 h-4 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          Generate {assessment.type}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Generation Progress */}
          {generatingAssessment && (
            <Card className="p-6 shadow-elegant mb-12 bg-gradient-card">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Settings className="w-5 h-5 text-primary-foreground animate-spin" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Generating Your Assessment</h3>
                    <p className="text-muted-foreground">AI is analyzing your study materials and creating personalized questions...</p>
                  </div>
                </div>
                <Progress value={generationProgress} className="h-3" />
                <div className="text-sm text-muted-foreground">
                  {generationProgress < 30 && "Analyzing study materials..."}
                  {generationProgress >= 30 && generationProgress < 60 && "Identifying key concepts..."}
                  {generationProgress >= 60 && generationProgress < 90 && "Generating questions..."}
                  {generationProgress >= 90 && "Finalizing assessment..."}
                </div>
              </div>
            </Card>
          )}

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Assessments */}
            <Card className="p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Recent Assessments</h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              
              <div className="space-y-4">
                {recentAssessments.map((assessment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:shadow-card transition-all duration-200">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(assessment.status, assessment.score)}
                      <div>
                        <p className="font-medium">{assessment.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getDifficultyColor(assessment.difficulty)}`}
                          >
                            {assessment.difficulty}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {assessment.totalQuestions} questions
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      {assessment.status === 'completed' ? (
                        <>
                          <p className="text-lg font-bold text-success">
                            {assessment.score}%
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {assessment.completedAt}
                          </p>
                        </>
                      ) : (
                        <Button size="sm" variant="outline">
                          <Play className="w-4 h-4 mr-2" />
                          Continue
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Assessment Settings */}
            <Card className="p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-6">Customize Assessment</h3>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium">Question Types</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Multiple Choice', 'True/False', 'Short Answer', 'Code Review'].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <input 
                          type="checkbox" 
                          id={type}
                          className="rounded border-border" 
                          defaultChecked={type === 'Multiple Choice' || type === 'True/False'}
                        />
                        <label htmlFor={type} className="text-sm">{type}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-medium">Focus Areas</label>
                  <div className="flex flex-wrap gap-2">
                    {['Algorithms', 'Data Structures', 'System Design', 'Machine Learning'].map((area) => (
                      <Badge key={area} variant="outline" className="cursor-pointer hover:bg-accent/10">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-medium">Time Limit</label>
                  <select className="w-full p-2 border border-border rounded-lg bg-background">
                    <option>No time limit</option>
                    <option>15 minutes</option>
                    <option>30 minutes</option>
                    <option>60 minutes</option>
                    <option>90 minutes</option>
                  </select>
                </div>
                
                <Button className="w-full bg-gradient-primary shadow-glow">
                  <Settings className="w-4 h-4 mr-2" />
                  Generate Custom Assessment
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentGenerator;