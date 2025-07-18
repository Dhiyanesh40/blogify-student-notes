import { Link } from "react-router-dom";
import { PenTool, Github, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-hero rounded-lg">
                <PenTool className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Blogify</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Transform your study notes into structured, shareable learning blogs. 
              Perfect for students who want to organize their knowledge and help others learn.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blogs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Explore Blogs
                </Link>
              </li>
              <li>
                <Link to="/write" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Write Blog
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Examples
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Blogify. Built for students, by students. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}