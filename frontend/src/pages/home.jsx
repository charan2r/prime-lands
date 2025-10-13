import React, { useState } from "react";
import {
  Search,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Star,
  Phone,
  Mail,
  MessageCircle,
  Building2,
  Home,
  TrendingUp,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    propertyType: "all",
    priceRange: "all",
  });

  // Sample property data with placeholder images
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Villa in Colombo 7",
      price: "Rs 45,000,000",
      location: "Colombo 7, Western Province",
      beds: 4,
      baths: 3,
      sqft: "2,500",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Luxury Apartment Galle Face",
      price: "Rs 25,000,000",
      location: "Galle Face, Colombo 3",
      beds: 3,
      baths: 2,
      sqft: "1,800",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      featured: true,
    },
    {
      id: 3,
      title: "Family House in Kandy",
      price: "Rs 18,500,000",
      location: "Kandy, Central Province",
      beds: 3,
      baths: 2,
      sqft: "2,000",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
      featured: true,
    },
    {
      id: 4,
      title: "Beachfront Villa Galle",
      price: "Rs 65,000,000",
      location: "Galle, Southern Province",
      beds: 5,
      baths: 4,
      sqft: "3,200",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "City Apartment Dehiwala",
      price: "Rs 12,000,000",
      location: "Dehiwala, Western Province",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Mountain View Bungalow",
      price: "Rs 32,000,000",
      location: "Nuwara Eliya, Central Province",
      beds: 4,
      baths: 3,
      sqft: "2,800",
      image:
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop",
      featured: false,
    },
  ];

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
      title: "Find Your Dream Home Today",
      subtitle:
        "Discover the perfect property in Sri Lanka's most desirable locations",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=600&fit=crop",
      title: "Luxury Living Awaits",
      subtitle: "Experience premium properties with world-class amenities",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=600&fit=crop",
      title: "Investment Opportunities",
      subtitle:
        "Build your portfolio with Sri Lanka's growing real estate market",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
        {property.featured && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {property.title}
        </h3>
        <p className="text-2xl font-bold text-blue-600 mb-3">
          {property.price}
        </p>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span className="text-sm mr-4">{property.beds}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span className="text-sm mr-4">{property.baths}</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.sqft} sqft</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slider */}
      <section className="relative h-96 lg:h-[500px] overflow-hidden">
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center text-white max-w-4xl px-6">
                  <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl lg:text-2xl mb-8 opacity-90">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Location"
                  value={searchFilters.location}
                  onChange={(e) =>
                    setSearchFilters({
                      ...searchFilters,
                      location: e.target.value,
                    })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <select
                value={searchFilters.propertyType}
                onChange={(e) =>
                  setSearchFilters({
                    ...searchFilters,
                    propertyType: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="land">Land</option>
              </select>
              <select
                value={searchFilters.priceRange}
                onChange={(e) =>
                  setSearchFilters({
                    ...searchFilters,
                    priceRange: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Price Range</option>
                <option value="0-10m">Under Rs 10M</option>
                <option value="10m-25m">Rs 10M - 25M</option>
                <option value="25m-50m">Rs 25M - 50M</option>
                <option value="50m+">Above Rs 50M</option>
              </select>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties across Sri
              Lanka
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties
              .filter((p) => p.featured)
              .map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
          </div>
        </div>
      </section>

      {/* All Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Properties
            </h2>
            <p className="text-xl text-gray-600">
              Browse our complete collection of available properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="flex items-center justify-center mb-4">
                <Home className="w-12 h-12" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">1,200+</div>
              <div className="text-blue-100">Properties Listed</div>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-12 h-12" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">850+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-12 h-12" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-12 h-12" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Prime Lands
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional real estate services
              across Sri Lanka
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Easy Property Search
              </h3>
              <p className="text-gray-600">
                Find your perfect property with our advanced search filters and
                detailed listings.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Our experienced team provides professional advice throughout
                your property journey.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Trusted Service
              </h3>
              <p className="text-gray-600">
                With 15+ years of experience, we're Sri Lanka's most trusted
                real estate platform.
              </p>
            </div>
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
                Ready to find your dream property? Contact us today!
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
                <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  WhatsApp
                </h3>
                <p className="text-gray-600">+94 77 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
