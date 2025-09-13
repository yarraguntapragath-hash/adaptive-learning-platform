import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Lightbulb, 
  Target, 
  Clock, 
  Star, 
  TrendingUp,
  ArrowRight,
  Zap
} from "lucide-react";

const AIRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      type: "Focus Area",
      title: "Strengthen Algorithm Complexity",
      description: "Your recent assessments show you could improve in time complexity analysis. Focus on Big O notation practice.",
      priority: "High",
      estimatedTime: "2-3 hours",
      confidence: 89,
      icon: Target,
      color: "destructive"
    },
    {
      id: 2,
      type: "Study Schedule",
      title: "Optimal Learning Time",
      description: "Based on your activity patterns, you learn best between 9-11 AM. Schedule difficult topics during this window.",
      priority: "Medium",
      estimatedTime: "Ongoing",
      confidence: 92,
      icon: Clock,
      color: "accent"
    },
    {
      id: 3,
      type: "Content Review",
      title: "Revisit Data Structures",
      description: "It's been 2 weeks since your last deep dive into linked lists and trees. A review session is recommended.",
      priority: "Low",
      estimatedTime: "1-2 hours",
      confidence: 76,
      icon: Brain,
      color: "success"
    }
  ];

  const studyMethods = [
    {
      method: "Spaced Repetition",
      effectiveness: 94,
      description: "Review concepts at increasing intervals for better retention",
      recommended: true
    },
    {
      method: "Active Recall",
      effectiveness: 87,
      description: "Test yourself without looking at notes to strengthen memory",
      recommended: true
    },
    {
      method: "Practice Problems",
      effectiveness: 82,
      description: "Solve coding challenges to apply theoretical knowledge",
      recommended: false
    },
    {
      method: "Concept Mapping",
      effectiveness: 78,
      description: "Create visual connections between related topics",
      recommended: false
    }
  ];

  const weeklyInsights = [
    { metric: "Study Consistency", value: 85, trend: "+12%" },
    { metric: "Knowledge Retention", value: 79, trend: "+8%" },
    { metric: "Problem Solving Speed", value: 71, trend: "+15%" },
    { metric: "Concept Understanding", value: 88, trend: "+5%" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-destructive border-destructive/20 bg-destructive/5';
      case 'Medium': return 'text-accent border-accent/20 bg-accent/5';
      case 'Low': return 'text-success border-success/20 bg-success/5';
      default: return 'text-muted-foreground border-border';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-accent bg-clip-text text-transparent mb-4">
            <Brain className="w-8 h-8 text-accent" />
            <h2 className="text-4xl font-bold">AI Study Recommendations</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personalized insights and recommendations powered by advanced learning analytics
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Priority Recommendations */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-accent" />
              <h3 className="text-2xl font-semibold">Priority Recommendations</h3>
            </div>
            
            <div className="grid gap-6">
              {recommendations.map((rec) => {
                const IconComponent = rec.icon;
                return (
                  <Card key={rec.id} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-xs">
                            {rec.type}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getPriorityColor(rec.priority)}`}
                          >
                            {rec.priority} Priority
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-accent" />
                            {rec.confidence}% confidence
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-2">{rec.title}</h4>
                          <p className="text-muted-foreground mb-3">{rec.description}</p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              Estimated time: {rec.estimatedTime}
                            </span>
                            <Button size="sm" variant="outline">
                              Start Now
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Study Method Effectiveness */}
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-semibold">Recommended Study Methods</h3>
              </div>
              
              <div className="space-y-4">
                {studyMethods.map((method, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{method.method}</span>
                        {method.recommended && (
                          <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/20">
                            Recommended
                          </Badge>
                        )}
                      </div>
                      <span className="text-sm font-medium">{method.effectiveness}%</span>
                    </div>
                    <Progress value={method.effectiveness} className="h-2" />
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Weekly Performance Insights */}
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-success" />
                <h3 className="text-xl font-semibold">Weekly Performance Insights</h3>
              </div>
              
              <div className="space-y-6">
                {weeklyInsights.map((insight, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{insight.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">{insight.value}%</span>
                        <Badge variant="outline" className="text-success border-success/20 bg-success/10">
                          {insight.trend}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={insight.value} className="h-2" />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-card rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-accent" />
                  <span className="font-semibold">AI Insight</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your learning velocity has increased by 12% this week. Keep focusing on active recall techniques for optimal retention.
                </p>
              </div>
            </Card>
          </div>

          {/* Action Center */}
          <Card className="p-8 shadow-elegant bg-gradient-card">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Ready to Optimize Your Learning?</h3>
                <p className="text-muted-foreground">
                  Apply these AI-powered recommendations to accelerate your study progress
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary shadow-glow">
                  Apply All Recommendations
                </Button>
                <Button size="lg" variant="outline">
                  Customize Study Plan
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIRecommendations;