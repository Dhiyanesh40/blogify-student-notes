import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Clock, Calendar, Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dummyBlogs, searchBlogs } from "@/data/blogs";

export default function BlogFeed() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Get all unique tags
  const allTags = Array.from(
    new Set(dummyBlogs.flatMap(blog => blog.tags))
  ).sort();

  // Filter blogs based on search and tag
  const filteredBlogs = dummyBlogs.filter(blog => {
    const matchesSearch = searchQuery 
      ? searchBlogs(searchQuery).some(b => b.id === blog.id)
      : true;
    const matchesTag = selectedTag 
      ? blog.tags.includes(selectedTag)
      : true;
    return matchesSearch && matchesTag;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Student Learning Blogs
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover study notes and learning materials shared by students from various subjects and courses.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search blogs by title, content, or tags..."
              className="pl-10 pr-4 py-3"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Tag Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Filter by Subject:</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedTag === "" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag("")}
              className="rounded-full"
            >
              All Topics
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredBlogs.length} blog{filteredBlogs.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
            {selectedTag && ` in ${selectedTag}`}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <Card key={blog.id} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <Link to={`/blog/${blog.id}`}>
                      <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h2>
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(blog.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{blog.readTime} min read</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {blog.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => setSelectedTag(tag)}
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                  {blog.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{blog.tags.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <Link to={`/blog/${blog.id}`}>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    Read Full Article
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">No blogs found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or clearing the filters.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedTag("");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Share Your Knowledge?
          </h3>
          <p className="text-muted-foreground mb-6">
            Transform your study notes into helpful blog posts that can benefit other students.
          </p>
          <Link to="/write">
            <Button size="lg" className="bg-gradient-hero hover:shadow-elegant transition-all duration-300">
              Start Writing Your Blog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}