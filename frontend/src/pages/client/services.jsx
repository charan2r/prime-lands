import React, { useState } from 'react';
import {
    Home,
    Search,
    TrendingUp,
    Calculator,
    FileText,
    Users,
    Shield,
    Headphones,
    Building2,
    MapPin,
    Camera,
    Gavel,
    Phone,
    Mail,
    MessageCircle,
    Star,
    ArrowRight,
    CheckCircle,
    Clock,
    Award,
    Target
} from 'lucide-react';

const Services = () => {
    const [activeService, setActiveService] = useState(null);

    // Main services data
    const mainServices = [
        {
            id: 1,
            title: "Property Sales",
            description: "Complete assistance in buying and selling residential and commercial properties",
            icon: Home,
            features: ["Market valuation", "Property listing", "Buyer matching", "Negotiation support"],
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
            color: "blue"
        },
        {
            id: 2,
            title: "Property Rentals",
            description: "Find the perfect rental property or reliable tenants for your investment",
            icon: Search,
            features: ["Tenant screening", "Lease agreements", "Property management", "Rent collection"],
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
            color: "green"
        },
        {
            id: 3,
            title: "Investment Advisory",
            description: "Expert guidance on real estate investments and portfolio management",
            icon: TrendingUp,
            features: ["Market analysis", "ROI calculations", "Investment strategies", "Risk assessment"],
            image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&h=300&fit=crop",
            color: "purple"
        },
        {
            id: 4,
            title: "Property Valuation",
            description: "Professional property appraisal services for accurate market pricing",
            icon: Calculator,
            features: ["Market comparisons", "Detailed reports", "Legal compliance", "Insurance valuations"],
            image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=500&h=300&fit=crop",
            color: "orange"
        },
        {
            id: 5,
            title: "Legal Services",
            description: "Complete legal support for property transactions and documentation",
            icon: FileText,
            features: ["Title verification", "Contract preparation", "Registration assistance", "Due diligence"],
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=300&fit=crop",
            color: "red"
        },
        {
            id: 6,
            title: "Property Management",
            description: "Comprehensive management services for property owners and investors",
            icon: Building2,
            features: ["Maintenance coordination", "Tenant relations", "Financial reporting", "Property marketing"],
            image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500&h=300&fit=crop",
            color: "indigo"
        }
    ];

    // Additional services
    const additionalServices = [
        {
            title: "Property Photography",
            description: "Professional photography and virtual tours",
            icon: Camera,
            color: "pink"
        },
        {
            title: "Auction Services",
            description: "Property auctions and distressed sales",
            icon: Gavel,
            color: "yellow"
        },
        {
            title: "Consultation",
            description: "Expert real estate consultation",
            icon: Users,
            color: "teal"
        },
        {
            title: "Insurance Support",
            description: "Property insurance guidance",
            icon: Shield,
            color: "cyan"
        }
    ];

    // Process steps
    const processSteps = [
        {
            step: "01",
            title: "Initial Consultation",
            description: "We understand your requirements and provide expert advice tailored to your needs."
        },
        {
            step: "02",
            title: "Market Research",
            description: "Comprehensive market analysis to ensure you get the best value and opportunities."
        },
        {
            step: "03",
            title: "Service Execution",
            description: "Professional execution of services with regular updates and transparent communication."
        },
        {
            step: "04",
            title: "Follow-up Support",
            description: "Continued support even after service completion to ensure your satisfaction."
        }
    ];

    // Testimonials
    const testimonials = [
        {
            name: "Priya Jayawardena",
            role: "Property Investor",
            content: "Their investment advisory service helped me build a profitable real estate portfolio. Excellent market insights!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
        },
        {
            name: "Ranil Fernando",
            role: "Home Buyer",
            content: "The team made buying my first home stress-free. Their legal services ensured everything was perfect.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
        },
        {
            name: "Lakshika Silva",
            role: "Property Owner",
            content: "Outstanding property management service. They handle everything professionally while I focus on other investments.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
        }
    ];

    const ServiceCard = ({ service, index }) => {
        const IconComponent = service.icon;
        const isActive = activeService === service.id;

        return (
            <div
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${isActive ? 'ring-2 ring-blue-500' : ''
                    }`}
                onClick={() => setActiveService(isActive ? null : service.id)}
            >


                <div className="relative h-48">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-${service.color}-600/90 to-transparent`}></div>
                    <div className="absolute bottom-4 left-4 text-white">
                        <IconComponent className="w-8 h-8 mb-2" />
                        <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                </div>

                <div className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    {isActive && (
                        <div className="space-y-3 mb-4">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    <button className={`w-full bg-${service.color}-600 text-white py-2 px-4 rounded-lg hover:bg-${service.color}-700 transition-colors flex items-center justify-center`}>
                        {isActive ? 'Get Started' : 'Learn More'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20 lg:py-32">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Comprehensive real estate solutions tailored to meet all your property needs in Sri Lanka
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                            <Award className="w-5 h-5 mr-2" />
                            <span>15+ Years Experience</span>
                        </div>
                        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                            <Target className="w-5 h-5 mr-2" />
                            <span>1200+ Properties Handled</span>
                        </div>
                        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                            <Users className="w-5 h-5 mr-2" />
                            <span>850+ Satisfied Clients</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Our Core Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            From property sales to investment advisory, we offer comprehensive solutions for all your real estate needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mainServices.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            How We Work
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our proven 4-step process ensures exceptional results for every client
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="text-center relative">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white text-xl font-bold rounded-2xl mb-6">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 left-full w-full">
                                        <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Additional Services
                        </h2>
                        <p className="text-xl text-gray-600">
                            Specialized services to complement your real estate journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-${service.color}-100 rounded-xl mb-4`}>
                                        <IconComponent className={`w-6 h-6 text-${service.color}-600`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-sm">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-gray-600">
                            Don't just take our word for it - hear from our satisfied clients
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-6">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Contact us today for a free consultation and let us help you achieve your real estate goals
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center">
                            <Phone className="w-5 h-5 mr-2" />
                            Call Now
                        </button>
                        <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors flex items-center justify-center">
                            <Mail className="w-5 h-5 mr-2" />
                            Get Quote
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;