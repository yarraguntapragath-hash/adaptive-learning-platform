import StudyHero from "@/components/StudyHero";
import DocumentUpload from "@/components/DocumentUpload";
import StudyDashboard from "@/components/StudyDashboard";
import AIRecommendations from "@/components/AIRecommendations";
import AssessmentGenerator from "@/components/AssessmentGenerator";

const Index = () => {
  return (
    <main className="pt-16">
      <StudyHero />
      <section id="upload">
        <DocumentUpload />
      </section>
      <section id="dashboard">
        <StudyDashboard />
      </section>
      <section id="study">
        <AssessmentGenerator />
      </section>
      <section id="recommendations">
        <AIRecommendations />
      </section>
    </main>
  );
};

export default Index;
