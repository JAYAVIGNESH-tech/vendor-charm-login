import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, ArrowRight, ShoppingBag, Store } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("customer");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implement auth
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-[45%] flex-col justify-between p-12 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-primary-foreground/8 blur-3xl" />
        </div>

        <div className="relative z-10">
          <span className="text-2xl font-bold font-heading tracking-tight">VENDORA</span>
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl xl:text-5xl font-bold leading-tight font-heading">
            Your marketplace,<br />
            unlimited potential.
          </h1>
          <p className="text-lg opacity-80 max-w-md leading-relaxed">
            Shop from thousands of vendors or start selling today. One platform, endless possibilities.
          </p>
          <div className="flex gap-8 pt-4">
            <div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm opacity-70">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2.4K+</div>
              <div className="text-sm opacity-70">Vendors</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm opacity-70">Customers</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-sm opacity-60">
          © 2026 VENDORA. All rights reserved.
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden">
            <span className="text-2xl font-bold font-heading text-foreground tracking-tight">VENDORA</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight font-heading text-foreground">
              Welcome back
            </h2>
            <p className="text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-12 rounded-xl bg-muted p-1">
              <TabsTrigger
                value="customer"
                className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm font-medium flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Customer
              </TabsTrigger>
              <TabsTrigger
                value="vendor"
                className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm font-medium flex items-center gap-2"
              >
                <Store className="w-4 h-4" />
                Vendor
              </TabsTrigger>
            </TabsList>

            <TabsContent value="customer" className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="customer-email" className="text-foreground text-sm font-medium">
                    Email address
                  </Label>
                  <Input
                    id="customer-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 rounded-xl bg-card border-input px-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="customer-password" className="text-foreground text-sm font-medium">
                      Password
                    </Label>
                    <button type="button" className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Input
                      id="customer-password"
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
                  className="w-full h-12 rounded-xl text-base font-semibold shadow-md transition-all duration-200 hover:shadow-lg group"
                >
                  Sign in as Customer
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="vendor" className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="vendor-email" className="text-foreground text-sm font-medium">
                    Business email
                  </Label>
                  <Input
                    id="vendor-email"
                    type="email"
                    placeholder="store@business.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 rounded-xl bg-card border-input px-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="vendor-password" className="text-foreground text-sm font-medium">
                      Password
                    </Label>
                    <button type="button" className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Input
                      id="vendor-password"
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
                  className="w-full h-12 rounded-xl text-base font-semibold shadow-md transition-all duration-200 hover:shadow-lg group"
                >
                  Sign in as Vendor
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-3 text-muted-foreground">
                Don't have an account?
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full h-12 rounded-xl text-base font-medium border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
            asChild
          >
            <Link to="/register">Create an account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
