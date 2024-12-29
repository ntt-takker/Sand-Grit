import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, TrendingUp, Truck } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Shreenathji
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/products" className="text-sm text-gray-400 hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Button variant="ghost" className="text-sm hover:text-white hover:bg-gray-800" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button className="bg-white text-black hover:bg-gray-200 transition-colors" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-fade-in">
                  Elevate Your Construction Game
                </h1>
                <div className="absolute -inset-x-20 top-0 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-400 mb-8 animate-fade-in-up">
                Shreenathji's all-in-one platform gives you everything you need to streamline your sand & grit supply chain. No matter the scale of your project, our powerful platform can help grow your construction business.
              </p>
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-colors animate-fade-in-up" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: ShoppingCart,
                  title: "Easy Purchasing",
                  description: "Buy various types of sand and grit in your preferred size and quantity with just a click."
                },
                {
                  icon: TrendingUp,
                  title: "Real-time Management",
                  description: "Track inventory, manage orders, and adjust pricing in real-time with our powerful tools."
                },
                {
                  icon: Truck,
                  title: "Efficient Logistics",
                  description: "Streamline your delivery process with integrated vehicle tracking and management."
                }
              ].map((feature, index) => (
                <div key={index} className="group relative p-6 bg-black border border-gray-800 rounded-lg transition-all duration-300 hover:border-gray-700 hover:transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-600 transition-colors">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Powerful Tools for Sellers
                </h2>
                <p className="text-gray-400 mb-8">
                  Take control of your business with robust tools designed specifically for construction material suppliers. Manage orders, track vehicles, and adjust pricing with unparalleled ease.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-black bg-white hover:bg-gray-200 hover:text-gray-800 transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Platform",
                links: [
                  { href: "/features", label: "Features" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/enterprise", label: "Enterprise" }
                ]
              },
              {
                title: "Company",
                links: [
                  { href: "/about", label: "About" },
                  { href: "/careers", label: "Careers" },
                  { href: "/contact", label: "Contact" }
                ]
              },
              {
                title: "Resources",
                links: [
                  { href: "/blog", label: "Blog" },
                  { href: "/support", label: "Support" },
                  { href: "/documentation", label: "Documentation" }
                ]
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <Link href="/" className="inline-block mb-4">
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Shreenathji
                </span>
              </Link>
              <p className="text-gray-400 text-sm">
                Elevating construction supply management with innovative solutions.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            © 2024 Shreenathji. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

