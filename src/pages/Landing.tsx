import { Link } from "react-router-dom";
import { PenTool, BookOpen, Users, Zap, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Landing() {
  const features = [
    {
      icon: PenTool,
      title: "Smart Note Taking",
      description: "Transform your class notes into well-structured, professional blog posts with our intuitive editor."
    },
    {
      icon: BookOpen,
      title: "Learn by Teaching",
      description: "Reinforce your understanding by explaining concepts in your own words through blog-style articles."
    },
    {
      icon: Users,
      title: "Peer Learning",
      description: "Share your knowledge with fellow students and learn from their perspectives and study methods."
    },
    {
      icon: Zap,
      title: "Quick Publishing",
      description: "Publish your study materials instantly with markdown support and beautiful formatting."
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      subject: "Computer Science",
      content: "Blogify helped me organize my programming notes and share them with my study group. It's amazing!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      subject: "Mathematics",
      content: "I love how I can turn my complex math concepts into clear, readable explanations. Great for revision!",
      rating: 5
    },
    {
      name: "Mike Wilson",
      subject: "Physics",
      content: "The platform makes it so easy to structure my lab notes and formulas. Highly recommend for STEM students.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-8">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Perfect for Students</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Turn your notes into
              <span className="bg-gradient-hero bg-clip-text text-transparent"> structured learning blogs</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Blogify helps students transform their class notes and study materials into clean, 
              readable blog-style articles. Perfect for revision, peer learning, and knowledge sharing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/write">
                <Button size="lg" className="bg-gradient-hero hover:shadow-elegant transition-all duration-300 text-lg px-8 py-4">
                  Start Writing Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/blogs">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Explore Sample Blogs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Students Love Blogify
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for academic needs with features that make studying and sharing knowledge effortless.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to transform your notes into beautiful blogs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Take Notes",
                description: "Use our markdown editor to write your class notes, study summaries, or concept explanations."
              },
              {
                step: "02", 
                title: "Structure Content",
                description: "Organize your notes with headings, code blocks, lists, and other formatting options."
              },
              {
                step: "03",
                title: "Publish & Share",
                description: "Publish your blog-style study material and share it with your peers for collaborative learning."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Students Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from students using Blogify for their studies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.subject} Student</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Study Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who are already using Blogify to enhance their learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Get Started Free
              </Button>
            </Link>
            <Link to="/blogs">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                View Examples
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}