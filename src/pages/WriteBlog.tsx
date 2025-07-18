import { useState } from "react";
import { PenTool, Save, Eye, FileText, Tag as TagIcon, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

export default function WriteBlog() {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    tags: "",
    author: ""
  });
  const [activeTab, setActiveTab] = useState("write");
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePublish = () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least the title and content before publishing.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Blog Published! 🎉",
      description: "Your study blog has been published successfully. Students can now discover and learn from your content.",
    });

    // Reset form
    setFormData({
      title: "",
      summary: "",
      content: "",
      tags: "",
      author: ""
    });
  };

  const handleSaveDraft = () => {
    toast({
      title: "Draft Saved",
      description: "Your blog has been saved as a draft. You can continue editing later.",
    });
  };

  // Parse tags
  const tagList = formData.tags
    .split(",")
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0);

  // Simple markdown preview
  const renderPreview = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-6 mb-4">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-5 mb-3">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-4 mb-2">{line.slice(4)}</h3>;
      }
      if (line.trim() === '') {
        return <div key={index} className="my-3" />;
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4 mb-1">{line.slice(2)}</li>;
      }
      
      // Process inline formatting
      let processedLine = line;
      processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      processedLine = processedLine.replace(/`(.*?)`/g, '<code className="bg-muted px-1 py-0.5 rounded text-sm">$1</code>');
      
      return <p key={index} className="mb-3" dangerouslySetInnerHTML={{ __html: processedLine }} />;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="p-2 bg-gradient-hero rounded-lg">
              <PenTool className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Write Your Study Blog
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your class notes and study materials into a well-structured blog post that can help other students learn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Writing Form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Blog Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Title */}
                <div>
                  <Label htmlFor="title" className="text-sm font-medium text-foreground">
                    Blog Title *
                  </Label>
                  <Input
                    id="title"
                    placeholder="e.g., Data Structures and Algorithms Study Notes"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="mt-1"
                  />
                </div>

                {/* Author */}
                <div>
                  <Label htmlFor="author" className="text-sm font-medium text-foreground">
                    Author Name
                  </Label>
                  <Input
                    id="author"
                    placeholder="Your name"
                    value={formData.author}
                    onChange={(e) => handleInputChange("author", e.target.value)}
                    className="mt-1"
                  />
                </div>

                {/* Summary */}
                <div>
                  <Label htmlFor="summary" className="text-sm font-medium text-foreground">
                    Summary
                  </Label>
                  <Textarea
                    id="summary"
                    placeholder="Brief description of your blog content (appears in blog feed)"
                    value={formData.summary}
                    onChange={(e) => handleInputChange("summary", e.target.value)}
                    rows={3}
                    className="mt-1"
                  />
                </div>

                {/* Tags */}
                <div>
                  <Label htmlFor="tags" className="text-sm font-medium text-foreground">
                    Tags
                  </Label>
                  <Input
                    id="tags"
                    placeholder="e.g., Programming, Computer Science, Python (comma-separated)"
                    value={formData.tags}
                    onChange={(e) => handleInputChange("tags", e.target.value)}
                    className="mt-1"
                  />
                  {tagList.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tagList.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          <TagIcon className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content Editor */}
                <div>
                  <Label htmlFor="content" className="text-sm font-medium text-foreground">
                    Content *
                  </Label>
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-1">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="write">Write</TabsTrigger>
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="write" className="mt-4">
                      <Textarea
                        id="content"
                        placeholder="Write your blog content here... 

You can use markdown formatting:
# Main Heading
## Sub Heading  
### Section Heading

**Bold text**
`code snippets`

- List item 1
- List item 2

```
Code blocks
```"
                        value={formData.content}
                        onChange={(e) => handleInputChange("content", e.target.value)}
                        rows={20}
                        className="font-mono text-sm"
                      />
                    </TabsContent>
                    
                    <TabsContent value="preview" className="mt-4">
                      <div className="border rounded-md p-4 min-h-[500px] bg-background">
                        {formData.content ? (
                          <div className="prose prose-sm max-w-none">
                            {renderPreview(formData.content)}
                          </div>
                        ) : (
                          <p className="text-muted-foreground italic">
                            Start writing your content to see the preview...
                          </p>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    onClick={handlePublish}
                    size="lg"
                    className="bg-gradient-hero hover:shadow-elegant transition-all duration-300"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Publish Blog
                  </Button>
                  <Button
                    onClick={handleSaveDraft}
                    variant="outline"
                    size="lg"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Tips Card */}
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Writing Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Structure Your Content</h4>
                    <p className="text-muted-foreground">Use headings to organize your notes into clear sections.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Add Examples</h4>
                    <p className="text-muted-foreground">Include code snippets and practical examples to illustrate concepts.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Use Tags Wisely</h4>
                    <p className="text-muted-foreground">Add relevant subject tags to help others find your content.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Keep It Clear</h4>
                    <p className="text-muted-foreground">Write as if you're explaining to a fellow student.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Markdown Guide */}
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Markdown Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="space-y-1">
                    <code className="bg-muted px-1 py-0.5 rounded text-xs"># Heading 1</code>
                    <code className="bg-muted px-1 py-0.5 rounded text-xs">## Heading 2</code>
                    <code className="bg-muted px-1 py-0.5 rounded text-xs">**Bold text**</code>
                    <code className="bg-muted px-1 py-0.5 rounded text-xs">`code`</code>
                    <code className="bg-muted px-1 py-0.5 rounded text-xs">- List item</code>
                  </div>
                </CardContent>
              </Card>

              {/* Student Examples */}
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Popular Topics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {["Programming", "Mathematics", "Computer Science", "Physics", "Chemistry", "Biology"].map((topic) => (
                    <Badge key={topic} variant="outline" className="mr-2 mb-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      {topic}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}