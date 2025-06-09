import { Database, CreditCard, BarChart3, Users, Phone, Shield } from "lucide-react";

export default function SolutionOfferings() {
  const offerings = [
    {
      category: "Subscription Management",
      icon: Database,
      color: "bg-primary/10 text-primary",
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
      color: "bg-accent/10 text-accent",
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
      color: "bg-primary/10 text-primary",
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
      color: "bg-accent/10 text-accent",
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
      color: "bg-primary/10 text-primary",
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
      color: "bg-accent/10 text-accent",
      features: [
        "Automatic Billing Process",
        "Bill Logs",
        "Custom Invoice Templates",
        "Multi-language Invoicing"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Solution Offerings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end subscription management platform with integrated billing, 
            CRM, analytics, and customer care capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all animate-fadeIn group">
              <div className={`${offering.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <offering.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">{offering.category}</h3>
              <ul className="space-y-3">
                {offering.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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