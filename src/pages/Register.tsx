import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, ArrowRight, ShoppingBag, Store } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("customer");

  // Customer fields
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");

  // Vendor fields
  const [vendorName, setVendorName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [vendorEmail, setVendorEmail] = useState("");
  const [vendorPhone, setVendorPhone] = useState("");
  const [vendorPassword, setVendorPassword] = useState("");

  const handleCustomerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implement customer registration
  };

  const handleVendorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implement vendor registration
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
            {activeTab === "customer" ? (
              <>Discover products<br />you'll love.</>
            ) : (
              <>Start selling<br />to thousands.</>
            )}
          </h1>
          <p className="text-lg opacity-80 max-w-md leading-relaxed">
            {activeTab === "customer"
              ? "Join VENDORA and explore a curated marketplace with thousands of unique products from trusted vendors."
              : "Set up your store in minutes. Reach thousands of customers, manage orders, and grow your business with VENDORA."
            }
          </p>

          <div className="space-y-4 pt-4">
            {activeTab === "customer" ? (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="opacity-90">Free to join — no hidden fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="opacity-90">Buyer protection on every order</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="opacity-90">Track orders in real time</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="opacity-90">No upfront costs to start</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="opacity-90">Built-in analytics dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="opacity-90">Instant payouts to your bank</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="relative z-10 text-sm opacity-60">
          © 2026 VENDORA. All rights reserved.
        </div>
      </div>

      {/* Right Panel - Register Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden">
            <span className="text-2xl font-bold font-heading text-foreground tracking-tight">VENDORA</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight font-heading text-foreground">
              Create your account
            </h2>
            <p className="text-muted-foreground">
              Join VENDORA as a customer or vendor
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

            {/* Customer Registration */}
            <TabsContent value="customer" className="mt-6">
              <form onSubmit={handleCustomerSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="c-name" className="text-foreground text-sm font-medium">Full name</Label>
                  <Input
                    id="c-name"
                    type="text"
                    placeholder="John Doe"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="h-12 rounded-xl bg-card border-input px-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="c-email" className="text-foreground text-sm font-medium">Email address</Label>
                  <Input
                    id="c-email"
                    type="email"
                    placeholder="you@example.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="h-12 rounded-xl bg-card border-input px-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="c-password" className="text-foreground text-sm font-medium">Password</Label>
                  <div className="relative">
                    <Input
                      id="c-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={customerPassword}
                      onChange={(e) => setCustomerPassword(e.target.value)}
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
                  Create Customer Account
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </form>
            </TabsContent>

            {/* Vendor Registration */}
            <TabsContent value="vendor" className="mt-6">
              <form onSubmit={handleVendorSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="v-name" className="text-foreground text-sm font-medium">Your name</Label>
                    <Input
                      id="v-name"
                      type="text"
                      placeholder="Jane Doe"
                      value={vendorName}
                      onChange={(e) => setVendorName(e.target.value)}
                      className="h-12 rounded-xl bg-card border-input px-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="v-store" className="text-foreground text-sm font-medium">Store name</Label>
                    <Input
                      id="v-store"
                      type="text"
                      placeholder="My Store"
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      className="h-12 rounded-xl bg-card border-input px-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="v-email" className="text-foreground text-sm font-medium">Business email</Label>
                  <Input
                    id="v-email"
                    type="email"
                    placeholder="store@business.com"
                    value={vendorEmail}
                    onChange={(e) => setVendorEmail(e.target.value)}
                    className="h-12 rounded-xl bg-card border-input px-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="v-phone" className="text-foreground text-sm font-medium">Phone number</Label>
                  <Input
                    id="v-phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={vendorPhone}
                    onChange={(e) => setVendorPhone(e.target.value)}
                    className="h-12 rounded-xl bg-card border-input px-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="v-password" className="text-foreground text-sm font-medium">Password</Label>
                  <div className="relative">
                    <Input
                      id="v-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={vendorPassword}
                      onChange={(e) => setVendorPassword(e.target.value)}
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
                  Create Vendor Account
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
                Already have an account?
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full h-12 rounded-xl text-base font-medium border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
            asChild
          >
            <Link to="/login">Sign in instead</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
