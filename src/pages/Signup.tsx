import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff, PenTool, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    studyField: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account Created Successfully! 🎉",
        description: "Welcome to Blogify! You can now start creating and sharing your study blogs.",
      });
    }, 1500);
  };

  const studyFields = [
    "Computer Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Engineering",
    "Medicine",
    "Business",
    "Psychology",
    "Literature",
    "History",
    "Art & Design",
    "Other"
  ];

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
            Join the Community
          </h2>
          <p className="mt-2 text-muted-foreground">
            Create your account and start sharing your knowledge with fellow students
          </p>
        </div>

        {/* Signup Form */}
        <Card className="border-0 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-center text-xl flex items-center justify-center space-x-2">
              <GraduationCap className="h-5 w-5" />
              <span>Create Account</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                    First Name
                  </Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                    Last Name
                  </Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

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
                    placeholder="john.doe@university.edu"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Study Field */}
              <div>
                <Label htmlFor="studyField" className="text-sm font-medium text-foreground">
                  Field of Study
                </Label>
                <Select value={formData.studyField} onValueChange={(value) => handleInputChange("studyField", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your field of study" />
                  </SelectTrigger>
                  <SelectContent>
                    {studyFields.map((field) => (
                      <SelectItem key={field} value={field}>
                        {field}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                    placeholder="Create a strong password"
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

              {/* Confirm Password */}
              <div>
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                  Confirm Password
                </Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-border rounded mt-1"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-hero hover:shadow-elegant transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>

              {/* Features */}
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm font-medium text-foreground mb-2">What you'll get:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Unlimited blog creation and publishing</li>
                  <li>• Markdown editor with live preview</li>
                  <li>• Connect with fellow students</li>
                  <li>• Organize notes by subject and topic</li>
                </ul>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}