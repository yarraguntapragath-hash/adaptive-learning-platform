import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Target, 
  Clock, 
  TrendingUp, 
  Award, 
  Calendar,
  ArrowRight,
  Zap
} from "lucide-react";

const StudyDashboard = () => {
  const studyStats = {
    documentsProcessed: 24,
    assessmentsCompleted: 18,
    studyTime: 47.5,
    averageScore: 87,
    weeklyGoal: 75,
    currentStreak: 7
  };

  const recentStudySessions = [
    { subject: "Machine Learning", duration: "2h 15m", score: 92, date: "Today" },
    { subject: "Data Structures", duration: "1h 30m", score: 85, date: "Yesterday" },
    { subject: "Algorithms", duration: "3h 45m", score: 91, date: "2 days ago" },
  ];

  const upcomingAssessments = [
    { title: "ML Fundamentals Quiz", due: "In 2 days", difficulty: "Medium" },
    { title: "DSA Practice Test", due: "Next week", difficulty: "Hard" },
    { title: "Algorithm Review", due: "In 5 days", difficulty: "Easy" },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Study Dashboard
          </h2>
          <p className="text-lg text-muted-foreground">
            Track your progress and stay on top of your learning goals
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">{studyStats.documentsProcessed}</p>
                  <p className="text-sm text-muted-foreground">Documents Processed</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-accent rounded-lg">
                  <Target className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">{studyStats.assessmentsCompleted}</p>
                  <p className="text-sm text-muted-foreground">Assessments Completed</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-success rounded-lg">
                  <Clock className="w-6 h-6 text-success-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-success">{studyStats.studyTime}h</p>
                  <p className="text-sm text-muted-foreground">Study Time This Week</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">{studyStats.averageScore}%</p>
                  <p className="text-sm text-muted-foreground">Average Score</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Weekly Progress */}
            <Card className="lg:col-span-2 p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Weekly Goal Progress</h3>
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                  <Zap className="w-4 h-4 mr-1" />
                  {studyStats.currentStreak} day streak
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Study Time Goal</span>
                  <span className="text-sm text-muted-foreground">
                    {studyStats.studyTime}h / {studyStats.weeklyGoal}h
                  </span>
                </div>
                <Progress 
                  value={(studyStats.studyTime / studyStats.weeklyGoal) * 100} 
                  className="h-3"
                />
                
                <div className="grid grid-cols-7 gap-2 mt-6">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                    <div key={day} className="text-center">
                      <div className={`w-8 h-8 rounded-full mx-auto mb-1 ${
                        index < 5 
                          ? 'bg-success' 
                          : index === 5 
                            ? 'bg-accent' 
                            : 'bg-muted'
                      }`} />
                      <span className="text-xs text-muted-foreground">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-between">
                  <span>Start Study Session</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Generate Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Review Weak Areas</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>View Recommendations</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Recent Study Sessions */}
            <Card className="p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Recent Study Sessions</h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              
              <div className="space-y-4">
                {recentStudySessions.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <BookOpen className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">{session.subject}</p>
                        <p className="text-sm text-muted-foreground">{session.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{session.duration}</p>
                      <Badge variant="outline" className="text-xs">
                        {session.score}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Upcoming Assessments */}
            <Card className="p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Upcoming Assessments</h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              
              <div className="space-y-4">
                {upcomingAssessments.map((assessment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{assessment.title}</p>
                        <p className="text-sm text-muted-foreground">{assessment.due}</p>
                      </div>
                    </div>
                    <Badge 
                      variant="outline"
                      className={
                        assessment.difficulty === 'Hard' 
                          ? 'text-destructive border-destructive/20' 
                          : assessment.difficulty === 'Medium'
                            ? 'text-accent border-accent/20'
                            : 'text-success border-success/20'
                      }
                    >
                      {assessment.difficulty}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyDashboard;