import { Users, Award, Globe, Target } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To enable businesses worldwide to seamlessly manage subscription-based revenue models with cutting-edge technology and unparalleled expertise."
    },
    {
      icon: Users,
      title: "Our Team", 
      description: "A diverse group of subscription billing experts, engineers, and customer success professionals dedicated to your growth."
    },
    {
      icon: Award,
      title: "Our Expertise",
      description: "25+ years of proven experience in subscription management, serving 250+ customers across 50+ countries worldwide."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers across India, South East Asia, Africa, LATAM, JAPAC and Europe with localized solutions."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slideInUp">
            <h1 className="text-5xl font-bold mb-6">About Magnaquest</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We are the pioneers in subscription and usage-based monetization mechanisms. 
              For over 25 years, we've been helping businesses transform their revenue models 
              and build lasting customer relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeIn">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Magnaquest team working together" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
            <div className="animate-slideInUp">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to revolutionize how businesses manage subscription revenue, 
                Magnaquest has grown from a small startup to a global leader in subscription management platforms.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our flagship product, Sure, has enabled thousands of businesses to scale their subscription 
                models efficiently, reduce churn, and maximize customer lifetime value. From OTT platforms 
                to healthcare services, we've adapted our solutions to meet the unique needs of every industry.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve over 250 customers managing 300+ million subscribers across 50+ countries, 
                making us one of the most trusted names in subscription lifecycle management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center animate-fadeIn">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the visionaries behind Magnaquest</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((leader, index) => (
              <div key={index} className="text-center animate-fadeIn">
                <img 
                  src={`https://images.unsplash.com/photo-${1507003211169 + index}-a54c38bc2b30?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300`}
                  alt={`Leadership team member ${index + 1}`}
                  className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Leadership Member</h3>
                <p className="text-primary font-medium mb-2">Executive Position</p>
                <p className="text-gray-600 text-sm">
                  Leading innovation in subscription management with extensive experience 
                  in enterprise software and customer success.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
