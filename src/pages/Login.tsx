import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful! 🎉",
        description: "Welcome back! You can now start writing and sharing your study blogs.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="p-3 bg-gradient-hero rounded-xl">
              <PenTool className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">Blogify</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground">
            Welcome back
          </h2>
          <p className="mt-2 text-muted-foreground">
            Sign in to your account to continue writing and sharing your knowledge
          </p>
        </div>

        {/* Login Form */}
        <Card className="border-0 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-center text-xl">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-hero hover:shadow-elegant transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>

              {/* Demo Credentials */}
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">Demo Credentials:</p>
                <p className="text-xs font-mono text-foreground">
                  Email: student@example.com<br />
                  Password: demo123
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:text-primary/80 font-medium transition-colors">
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Social Proof */}
        <div className="text-center space-y-4">
          <div className="flex items-center space-x-8 justify-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>500+ Students</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>1000+ Study Blogs</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
              <span>Free to Use</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}