import React, { useState } from "react";
import {
  Building2,
  Users,
  Award,
  TrendingUp,
  Target,
  Heart,
  Shield,
  Star,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowRight,
  Home,
  Search,
  Handshake,
} from "lucide-react";
const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const teamMembers = [
    {
      name: "Rajesh Fernando",
      position: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      experience: "20+ years",
      description:
        "Visionary leader with extensive experience in Sri Lankan real estate market.",
    },
    {
      name: "Priya Jayawardena",
      position: "Head of Sales",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      experience: "15+ years",
      description:
        "Expert in luxury property sales and client relationship management.",
    },
    {
      name: "Samantha Silva",
      position: "Property Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      experience: "12+ years",
      description:
        "Specialist in property valuations and market analysis across Sri Lanka.",
    },
    {
      name: "Nimal Perera",
      position: "Legal Advisor",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
      experience: "18+ years",
      description:
        "Ensures all transactions comply with Sri Lankan property laws and regulations.",
    },
  ];

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description:
        "Started as a small real estate agency in Colombo with a vision to revolutionize property trading in Sri Lanka.",
    },
    {
      year: "2012",
      title: "Digital Platform Launch",
      description:
        "Launched our first online platform, making property search accessible to everyone across the island.",
    },
    {
      year: "2015",
      title: "500+ Properties",
      description:
        "Reached a milestone of 500+ properties listed on our platform with successful sales across all provinces.",
    },
    {
      year: "2018",
      title: "Award Recognition",
      description:
        "Received 'Best Real Estate Platform' award from Sri Lanka Property Developers Association.",
    },
    {
      year: "2020",
      title: "Mobile App Launch",
      description:
        "Launched mobile application for iOS and Android, making property search even more convenient.",
    },
    {
      year: "2024",
      title: "Market Leader",
      description:
        "Became Sri Lanka's leading online real estate platform with 1200+ properties and 850+ satisfied clients.",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We conduct all our business with the highest ethical standards and transparency.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Our clients' needs and satisfaction are at the center of everything we do.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service delivery.",
    },
    {
      icon: Handshake,
      title: "Trust",
      description:
        "Building long-term relationships based on trust and mutual respect.",
    },
  ];

  const services = [
    {
      icon: Home,
      title: "Property Sales",
      description:
        "Comprehensive property selling services with market analysis and professional photography.",
    },
    {
      icon: Search,
      title: "Property Search",
      description:
        "Advanced search tools and personalized assistance to find your perfect property.",
    },
    {
      icon: TrendingUp,
      title: "Investment Consulting",
      description:
        "Expert advice on real estate investments and market trends across Sri Lanka.",
    },
    {
      icon: Users,
      title: "Property Management",
      description:
        "Complete property management services for landlords and property investors.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white pt-12 mb-6">
              About Prime Lands
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Sri Lanka's most trusted real estate platform, connecting dreams
              with reality since 2009
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Our Story
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                1,200+
              </div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                850+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                95%
              </div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                15+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("story")}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "story"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Our Story
            </button>
            <button
              onClick={() => setActiveTab("values")}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "values"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Our Values
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "team"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Our Team
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "services"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Our Services
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-96">
            {/* Our Story Tab */}
            {activeTab === "story" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Our Journey Since 2009
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    Prime Lands began as a small real estate agency in Colombo
                    with a simple but powerful vision: to make property buying,
                    selling, and renting accessible to everyone across Sri
                    Lanka.
                  </p>
                  <p className="text-gray-600 text-lg mb-6">
                    Over the past 15 years, we've grown from a local agency to
                    Sri Lanka's leading online real estate platform, helping
                    thousands of families find their dream homes and investors
                    discover lucrative opportunities.
                  </p>
                  <p className="text-gray-600 text-lg mb-8">
                    Today, we're proud to be the most trusted name in Sri Lankan
                    real estate, with a team of experienced professionals
                    dedicated to providing exceptional service and results.
                  </p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center">
                    View Our Milestones
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
                <div className="space-y-6">
                  {milestones.slice(0, 4).map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full flex-shrink-0">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-blue-600 font-bold text-lg">
                            {milestone.year}
                          </span>
                          <span className="text-gray-900 font-bold">
                            {milestone.title}
                          </span>
                        </div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Our Values Tab */}
            {activeTab === "values" && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Our Core Values
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    These values guide every decision we make and every service
                    we provide
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                        <value.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Our Team Tab */}
            {activeTab === "team" && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Meet Our Expert Team
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Experienced professionals dedicated to helping you achieve
                    your real estate goals
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-medium mb-2">
                          {member.position}
                        </p>
                        <p className="text-sm text-gray-600 mb-3">
                          {member.experience}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Our Services Tab */}
            {activeTab === "services" && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Comprehensive Real Estate Services
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    From property search to investment consulting, we provide
                    end-to-end real estate solutions
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                        <service.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-lg mb-6">
                        {service.description}
                      </p>
                      <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Property Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found their dream
            properties with Prime Lands
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Browse Properties
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600">
                Have questions? We're here to help you every step of the way.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600">+94 11 234 5678</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600">info@primelands.lk</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600">123 Galle Road, Colombo 03</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
