import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getBlogById, dummyBlogs } from "@/data/blogs";
import { useToast } from "@/hooks/use-toast";

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  if (!id) {
    return <Navigate to="/blogs" replace />;
  }

  const blog = getBlogById(id);
  
  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.summary,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Blog link has been copied to your clipboard.",
      });
    }
  };

  // Get related blogs (same tags, excluding current blog)
  const relatedBlogs = dummyBlogs
    .filter(b => 
      b.id !== blog.id && 
      b.tags.some(tag => blog.tags.includes(tag))
    )
    .slice(0, 3);

  // Simple markdown-like content rendering
  const renderContent = (content: string) => {
    // Split by lines and process each line
    const lines = content.split('\n');
    const processedLines = lines.map((line, index) => {
      // Headers
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-foreground mt-8 mb-4">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-foreground mt-6 mb-3">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-foreground mt-5 mb-2">{line.slice(4)}</h3>;
      }
      
      // Code blocks
      if (line.startsWith('```')) {
        return <div key={index} className="my-4" />; // Code block markers (simplified)
      }
      
      // Regular paragraphs
      if (line.trim() === '') {
        return <div key={index} className="my-3" />;
      }
      
      // Process inline formatting
      let processedLine = line;
      
      // Bold text
      processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong className="font-semibold">$1</strong>');
      
      // Inline code
      processedLine = processedLine.replace(/`(.*?)`/g, '<code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">$1</code>');
      
      // Check if it's a list item
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="ml-4 mb-1 text-foreground" dangerouslySetInnerHTML={{ __html: processedLine.slice(2) }} />
        );
      }
      
      // Regular paragraph
      return (
        <p key={index} className="text-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: processedLine }} />
      );
    });

    return <div className="prose prose-lg max-w-none">{processedLines}</div>;
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link to="/blogs">
            <Button variant="ghost" className="hover:bg-muted">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-background rounded-2xl shadow-card p-8 mb-8">
          <header className="mb-8">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              {blog.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(blog.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime} min read</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="hover:bg-muted"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
              <p className="text-muted-foreground font-medium">
                {blog.summary}
              </p>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(blog.content)}
          </div>
        </article>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <BookOpen className="h-6 w-6 mr-2" />
              Related Study Materials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Card key={relatedBlog.id} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6">
                    <Link to={`/blog/${relatedBlog.id}`}>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {relatedBlog.summary}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{relatedBlog.author}</span>
                      <span>{relatedBlog.readTime} min read</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="mt-12 text-center bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Inspired to Share Your Knowledge?
          </h3>
          <p className="text-muted-foreground mb-6">
            Create your own study blog and help fellow students learn from your experiences.
          </p>
          <Link to="/write">
            <Button size="lg" className="bg-gradient-hero hover:shadow-elegant transition-all duration-300">
              Start Writing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}