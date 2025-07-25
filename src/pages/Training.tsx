import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Award, 
  Monitor, 
  CheckCircle, 
  GraduationCap,
  Building,
  Briefcase,
  Shield
} from 'lucide-react';

const TrainingPage = () => {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative w-full py-16 md:py-24 px-6 md:px-12 bg-background">
            <div className="absolute inset-0 cosmic-grid opacity-20"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground">
                {t('training.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('training.subtitle')}
              </p>
            </div>
          </section>

          {/* Training Cards Section */}
          <section className="w-full py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Online Courses Card */}
                <Card className="p-8 border border-border cosmic-gradient">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Monitor className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-medium">
                        {t('training.courses.title')}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      {t('training.courses.subtitle')}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {t('training.courses.description')}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.courses.features.selfpaced')}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.courses.features.practical')}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.courses.features.certificate')}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.courses.features.support')}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Corporate Seminars Card */}
                <Card className="p-8 border border-border cosmic-gradient">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-medium">
                        {t('training.seminars.title')}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      {t('training.seminars.subtitle')}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {t('training.seminars.description')}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.seminars.features.customized')}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.seminars.features.expert')}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.seminars.features.interactive')}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.seminars.features.materials')}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Training Topics Section */}
          <section className="w-full py-16 px-6 md:px-12 bg-muted/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6 mb-12">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
                  {t('training.topics.title')}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 border border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0 space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Monitor className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium text-foreground">
                        {t('training.topics.ai_basics')}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-16">
                      {t('training.topics.ai_basics.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 border border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0 space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium text-foreground">
                        {t('training.topics.automation')}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-16">
                      {t('training.topics.automation.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 border border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0 space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium text-foreground">
                        {t('training.topics.chatbots')}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-16">
                      {t('training.topics.chatbots.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 border border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0 space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium text-foreground">
                        {t('training.topics.data_analysis')}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-16">
                      {t('training.topics.data_analysis.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 border border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0 space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium text-foreground">
                        {t('training.topics.machine_learning')}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-16">
                      {t('training.topics.machine_learning.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 border border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0 space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium text-foreground">
                        {t('training.topics.ethics')}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-16">
                      {t('training.topics.ethics.description')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default TrainingPage;