import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin, Bed, Bath, Square, User, Phone, Heart, Eye } from 'lucide-react';


const Properties = () => {
    // Sample property data
    const [properties] = useState([
        {
            id: 1,
            title: "Luxury Villa with Ocean View",
            location: "Galle Fort, Galle",
            price: 25000000,
            priceText: "LKR 25,000,000",
            type: "house",
            status: "sale",
            bedrooms: 4,
            bathrooms: 3,
            area: "3500 sq ft",
            agent: "Saman Silva",
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400",
            featured: true
        },
        {
            id: 2,
            title: "Modern Apartment in Colombo",
            location: "Colombo 03",
            price: 18000000,
            priceText: "LKR 18,000,000",
            type: "apartment",
            status: "sale",
            bedrooms: 3,
            bathrooms: 2,
            area: "1800 sq ft",
            agent: "Nimal Perera",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
            featured: false
        },
        {
            id: 3,
            title: "Beachfront Land for Development",
            location: "Mirissa",
            price: 12000000,
            priceText: "LKR 12,000,000",
            type: "land",
            status: "sale",
            bedrooms: 0,
            bathrooms: 0,
            area: "40 perches",
            agent: "Kamal Fernando",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400",
            featured: true
        },
        {
            id: 4,
            title: "Cozy Studio for Rent",
            location: "Kandy",
            price: 45000,
            priceText: "LKR 45,000/month",
            type: "apartment",
            status: "rent",
            bedrooms: 1,
            bathrooms: 1,
            area: "600 sq ft",
            agent: "Sunil Bandara",
            image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400",
            featured: false
        },
        {
            id: 5,
            title: "Luxury Penthouse",
            location: "Colombo 07",
            price: 35000000,
            priceText: "LKR 35,000,000",
            type: "apartment",
            status: "sale",
            bedrooms: 4,
            bathrooms: 3,
            area: "3200 sq ft",
            agent: "Priyanthi Jayawardena",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400",
            featured: true
        },
        {
            id: 6,
            title: "Commercial Space for Rent",
            location: "Negombo",
            price: 120000,
            priceText: "LKR 120,000/month",
            type: "commercial",
            status: "rent",
            bedrooms: 0,
            bathrooms: 2,
            area: "2500 sq ft",
            agent: "Roshan Mendis",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400",
            featured: false
        }
    ]);

    // Filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [propertyType, setPropertyType] = useState('all');
    const [propertyStatus, setPropertyStatus] = useState('all');
    const [minBedrooms, setMinBedrooms] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000000);

    // Filter properties based on filters
    const filteredProperties = useMemo(() => {
        return properties.filter(property => {
            // Search term filter
            const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                property.location.toLowerCase().includes(searchTerm.toLowerCase());

            // Property type filter
            const matchesType = propertyType === 'all' || property.type === propertyType;

            // Property status filter
            const matchesStatus = propertyStatus === 'all' || property.status === propertyStatus;

            // Bedrooms filter
            const matchesBedrooms = property.bedrooms >= minBedrooms;

            // Price filter
            const matchesPrice = property.price >= minPrice && property.price <= maxPrice;

            return matchesSearch && matchesType && matchesStatus && matchesBedrooms && matchesPrice;
        });
    }, [properties, searchTerm, propertyType, propertyStatus, minBedrooms, minPrice, maxPrice]);

    // Clear all filters
    const clearFilters = () => {
        setSearchTerm('');
        setPropertyType('all');
        setPropertyStatus('all');
        setMinBedrooms(0);
        setMinPrice(0);
        setMaxPrice(100000000);
    };

    const PropertyCard = ({ property }) => (
        <div className={`bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow ${property.featured ? 'border-2 border-indigo-500' : ''}`}>
            <div className="relative">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                />
                {property.featured && (
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                    </div>
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                    <button className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-indigo-600">
                        <Heart size={18} />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-indigo-600">
                        <Eye size={18} />
                    </button>
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{property.title}</h3>
                    <span className="text-lg font-semibold text-indigo-600">{property.priceText}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-1" />
                    <span>{property.location}</span>
                </div>

                <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                        <Bed size={16} className="mr-1" />
                        <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Bath size={16} className="mr-1" />
                        <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Square size={16} className="mr-1" />
                        <span>{property.area}</span>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                            <User size={16} />
                        </div>
                        <span className="text-sm text-gray-600">{property.agent}</span>
                    </div>
                    <button className="bg-indigo-600 text-white p-2 rounded-full">
                        <Phone size={16} />
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-gray-50">
            <main className="pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            Find Your Dream Property
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the perfect home or investment opportunity from our extensive collection of premium properties across Sri Lanka
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search by name or location"
                                    className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            <select
                                className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={propertyType}
                                onChange={(e) => setPropertyType(e.target.value)}
                            >
                                <option value="all">All Types</option>
                                <option value="house">House</option>
                                <option value="apartment">Apartment</option>
                                <option value="land">Land</option>
                                <option value="commercial">Commercial</option>
                            </select>

                            <select
                                className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={propertyStatus}
                                onChange={(e) => setPropertyStatus(e.target.value)}
                            >
                                <option value="all">All Status</option>
                                <option value="sale">For Sale</option>
                                <option value="rent">For Rent</option>
                            </select>

                            <select
                                className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={minBedrooms}
                                onChange={(e) => setMinBedrooms(parseInt(e.target.value))}
                            >
                                <option value="0">Any Bedrooms</option>
                                <option value="1">1+ Bedrooms</option>
                                <option value="2">2+ Bedrooms</option>
                                <option value="3">3+ Bedrooms</option>
                                <option value="4">4+ Bedrooms</option>
                            </select>
                        </div>

                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Min Price (LKR)</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100000000"
                                    step="1000000"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(parseInt(e.target.value))}
                                    className="w-full"
                                />
                                <div className="text-sm text-gray-600">LKR {minPrice.toLocaleString()}</div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Max Price (LKR)</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100000000"
                                    step="1000000"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                    className="w-full"
                                />
                                <div className="text-sm text-gray-600">LKR {maxPrice.toLocaleString()}</div>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={clearFilters}
                                className="text-indigo-600 hover:text-indigo-800 font-medium"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                        <div className="text-gray-700">
                            Showing <span className="font-semibold">{filteredProperties.length}</span> properties
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-700">Sort by:</span>
                            <select className="border border-gray-300 rounded-lg py-1 px-3 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                                <option>Most Recent</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Most Popular</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {filteredProperties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>

                    {filteredProperties.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🏠</div>
                            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Properties Found</h3>
                            <p className="text-gray-500 mb-6">Try adjusting your search filters to find more properties.</p>
                            <button
                                onClick={clearFilters}
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}

                    {filteredProperties.length > 0 && (
                        <div className="flex justify-center gap-2">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                                Previous
                            </button>
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium">
                                1
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                                2
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                                3
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Properties;