import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Store, ArrowRight } from "lucide-react";

const VendorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implement auth
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary-foreground/20 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary-foreground/15 blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
              <Store className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold font-heading">VendorHub</span>
          </div>
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl xl:text-5xl font-bold leading-tight font-heading">
            Manage your store,<br />
            grow your business.
          </h1>
          <p className="text-lg opacity-80 max-w-md leading-relaxed">
            Access your dashboard, track orders, manage inventory, and connect with customers — all in one place.
          </p>
          <div className="flex gap-8 pt-4">
            <div>
              <div className="text-3xl font-bold">2.4K+</div>
              <div className="text-sm opacity-70">Active Vendors</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm opacity-70">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold">$12M+</div>
              <div className="text-sm opacity-70">Revenue Processed</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-sm opacity-60">
          © 2026 VendorHub. All rights reserved.
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Store className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-heading text-foreground">VendorHub</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight font-heading text-foreground">
              Welcome back
            </h2>
            <p className="text-muted-foreground">
              Sign in to your vendor account to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground text-sm font-medium">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="vendor@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl bg-card border-input px-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-foreground text-sm font-medium">
                  Password
                </Label>
                <button
                  type="button"
                  className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-xl bg-card border-input px-4 pr-12 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all duration-200 hover:shadow-lg group"
            >
              Sign in
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-3 text-muted-foreground">
                New to VendorHub?
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full h-12 rounded-xl text-base font-medium border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            Create a vendor account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;
