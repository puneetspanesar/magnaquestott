import { BookOpen, FileText, Calendar, Video, Download, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Resources() {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Blog",
      description: "Latest insights, best practices, and industry trends in subscription management",
      items: [
        "How to Reduce Churn in SaaS Businesses",
        "The Future of Subscription Billing",
        "OTT Monetization Strategies for 2025"
      ]
    },
    {
      icon: FileText,
      title: "Case Studies",
      description: "Real success stories from our customers across different industries",
      items: [
        "Ozonetel's Cloud Communication Transformation",
        "Thu Do Multimedia Subscription Management",
        "Healthcare Provider Revenue Optimization"
      ]
    },
    {
      icon: Download,
      title: "Whitepapers",
      description: "In-depth research and analysis on subscription business trends",
      items: [
        "Subscription Economy Growth Report 2025",
        "OTT Industry Revenue Analysis",
        "Healthcare Subscription Models Guide"
      ]
    },
    {
      icon: Calendar,
      title: "News & Events",
      description: "Latest company news, product updates, and industry events",
      items: [
        "MediaMelon Partnership Announcement",
        "Product Update: New Analytics Dashboard",
        "Upcoming Industry Conference Participation"
      ]
    }
  ];

  const featuredResources = [
    {
      type: "Case Study",
      title: "Magnaquest to Empower Ozonetel's Cloud Communication Solution",
      description: "How we transformed Ozonetel's call centre operations with Sure's subscription management platform",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      readTime: "5 min read"
    },
    {
      type: "Partnership",
      title: "MediaMelon and Magnaquest Partner to Redefine Streaming Success",
      description: "Strategic partnership to deliver enhanced analytics and subscription management for OTT platforms",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      readTime: "3 min read"
    },
    {
      type: "Success Story",
      title: "Thu Do Multimedia: Transforming Subscription Content Management",
      description: "Complete digital transformation of content subscription management for enhanced customer experience",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slideInUp">
            <h1 className="text-5xl font-bold mb-6">Resources & Insights</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the latest trends, best practices, and success stories in subscription 
              management. Get the insights you need to grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-600">Latest insights and success stories from our customers</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all animate-fadeIn group">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {resource.type}
                    </span>
                    <span className="text-gray-500 text-sm">{resource.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a href="#" className="text-primary font-semibold hover:text-primary/80 transition-colors flex items-center">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Resources</h2>
            <p className="text-xl text-gray-600">Find the information you need to succeed</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all animate-fadeIn">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{category.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 hover:text-primary transition-colors cursor-pointer">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <a href="#" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                    View All →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-12 text-white text-center animate-fadeIn">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, case studies, and industry trends.
            </p>
            <div className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-accent px-6 py-3 rounded-r-lg hover:bg-accent/90 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Have questions about subscription management? Our experts are here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <button className="bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Schedule a Demo
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
