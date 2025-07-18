import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PenTool, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "Write", path: "/write" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-hero rounded-lg group-hover:shadow-elegant transition-all duration-300">
              <PenTool className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Blogify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Link to="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/write">
              <Button size="sm" className="bg-gradient-hero hover:shadow-elegant transition-all duration-300">
                Start Writing
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-border">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full mb-2">
                    Login
                  </Button>
                </Link>
                <Link to="/write" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full bg-gradient-hero hover:shadow-elegant transition-all duration-300">
                    Start Writing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}