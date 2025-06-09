import { Database, CreditCard, BarChart3, Users, Phone, Shield } from "lucide-react";

export default function SolutionOfferings() {
  const offerings = [
    {
      category: "Subscription Management",
      icon: Database,
      color: "bg-primary",
      features: [
        "Subscriber Information & Management",
        "Subscriber Engagement",
        "Product Catalogue & Pricing Management",
        "Discounts & Promotions"
      ]
    },
    {
      category: "Payments",
      icon: CreditCard,
      color: "bg-accent",
      features: [
        "Multiple Payment Gateways",
        "Automatic Collections",
        "Revenue Recognition",
        "Multi-currency Support"
      ]
    },
    {
      category: "Insights & Analytics",
      icon: BarChart3,
      color: "bg-primary",
      features: [
        "Revenue Insights",
        "Subscriber Analytics",
        "Churn Management",
        "Customer Engagement Analytics"
      ]
    },
    {
      category: "Finance",
      icon: Shield,
      color: "bg-accent",
      features: [
        "Revenue Recognition",
        "Revenue Reconciliations",
        "Partner Settlements",
        "Automatic Billing Process"
      ]
    },
    {
      category: "CRM - Customer Care",
      icon: Phone,
      color: "bg-primary",
      features: [
        "Service Ticket Management",
        "24/7 Support Desk",
        "Implementation Support",
        "360-Degree Customer View"
      ]
    },
    {
      category: "Invoices",
      icon: Users,
      color: "bg-accent",
      features: [
        "Automatic Billing Process",
        "Bill Logs",
        "Custom Invoice Templates",
        "Multi-language Invoicing"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
            Comprehensive Solution Offerings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal">
            End-to-end subscription management platform with integrated capabilities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-6">
            {offerings.slice(0, 3).map((offering, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary/30 transition-all animate-fadeIn group">
                <div className="flex items-start space-x-4">
                  <div className={`${offering.color} p-3 rounded-lg flex-shrink-0`}>
                    <offering.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">{offering.category}</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {offering.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm font-normal">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right column */}
          <div className="space-y-6">
            {offerings.slice(3, 6).map((offering, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary/30 transition-all animate-fadeIn group">
                <div className="flex items-start space-x-4">
                  <div className={`${offering.color} p-3 rounded-lg flex-shrink-0`}>
                    <offering.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">{offering.category}</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {offering.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm font-normal">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center animate-fadeIn">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">All-in-One Platform</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            From subscription onboarding to revenue recognition, our integrated platform 
            handles every aspect of your subscription business with enterprise-grade security and scalability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">API-First Architecture</span>
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">Real-time Processing</span>
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">Cloud Native</span>
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">Enterprise Security</span>
          </div>
        </div>
      </div>
    </section>
  );
}