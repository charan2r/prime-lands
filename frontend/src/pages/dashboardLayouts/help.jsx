import React, { useState } from 'react';
import {
    Search,
    Filter,
    Download,
    Plus,
    Menu,
    X,
    Home,
    Users,
    BarChart3,
    Settings,
    HelpCircle,
    Bell,
    Book,
    MessageCircle,
    Phone,
    Mail,
    FileText,
    Video,
    ChevronRight,
    ChevronDown,
    ExternalLink,
    Clock,
    CheckCircle,
    AlertCircle,
    Star
} from 'lucide-react';

const HelpDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedFAQ, setExpandedFAQ] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const sidebarItems = [
        { icon: Home, label: 'Dashboard', active: false },
        { icon: Users, label: 'Agencies', active: false },
        { icon: Users, label: 'Users', active: false },
        { icon: BarChart3, label: 'Analytics', active: false },
        { icon: Settings, label: 'Settings', active: false },
        { icon: HelpCircle, label: 'Help', active: true }
    ];

    const helpCategories = [
        { id: 'all', name: 'All Topics', icon: Book, count: 45 },
        { id: 'getting-started', name: 'Getting Started', icon: Book, count: 12 },
        { id: 'account', name: 'Account Management', icon: Users, count: 8 },
        { id: 'billing', name: 'Billing & Payments', icon: FileText, count: 10 },
        { id: 'features', name: 'Features & Tools', icon: Settings, count: 15 }
    ];

    const faqData = [
        {
            id: 1,
            category: 'getting-started',
            question: 'How do I create my first agency account?',
            answer: 'To create your first agency account, navigate to the Agencies section and click the "Add Agency" button. Fill in the required information including agency name, region, and contact details. Once submitted, the agency will be created with an active status.',
            helpful: 24,
            views: 156
        },
        {
            id: 2,
            category: 'account',
            question: 'How can I reset my password?',
            answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page. Enter your email address and follow the instructions sent to your email. Alternatively, contact your administrator for assistance.',
            helpful: 18,
            views: 89
        },
        {
            id: 3,
            category: 'billing',
            question: 'How do I update my billing information?',
            answer: 'To update billing information, go to Settings > Billing. Here you can update your payment method, billing address, and view your payment history. Changes take effect immediately.',
            helpful: 32,
            views: 203
        },
        {
            id: 4,
            category: 'features',
            question: 'How do I export user data?',
            answer: 'User data can be exported from the Users section by clicking the "Export" button. You can choose between CSV and Excel formats. The export includes all visible user information based on your current filters.',
            helpful: 15,
            views: 67
        },
        {
            id: 5,
            category: 'account',
            question: 'What are the different user roles?',
            answer: 'There are three user roles: Admin (full access to all features), Manager (can manage users and agencies), and User (basic access to assigned features). Roles can be changed by administrators.',
            helpful: 41,
            views: 298
        },
        {
            id: 6,
            category: 'billing',
            question: 'How do I cancel my subscription?',
            answer: 'To cancel your subscription, go to Settings > Billing > Subscription. Click "Cancel Subscription" and follow the prompts. Your access will continue until the end of your current billing period.',
            helpful: 12,
            views: 45
        }
    ];

    const supportChannels = [
        {
            icon: MessageCircle,
            title: 'Live Chat',
            description: 'Get instant help from our support team',
            availability: 'Mon-Fri, 9AM-6PM EST',
            status: 'online'
        },
        {
            icon: Mail,
            title: 'Email Support',
            description: 'Send us detailed questions via email',
            availability: 'Response within 24 hours',
            status: 'available'
        },
        {
            icon: Phone,
            title: 'Phone Support',
            description: 'Speak directly with our experts',
            availability: 'Mon-Fri, 10AM-5PM EST',
            status: 'offline'
        }
    ];

    const quickLinks = [
        { title: 'Getting Started Guide', icon: Book, url: '#' },
        { title: 'Video Tutorials', icon: Video, url: '#' },
        { title: 'API Documentation', icon: FileText, url: '#' },
        { title: 'System Status', icon: CheckCircle, url: '#' },
        { title: 'Feature Requests', icon: Star, url: '#' }
    ];

    const filteredFAQs = faqData.filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Page Content */}
                <main className="flex-1 overflow-auto p-4 lg:p-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Help & Support</h1>
                            <p className="text-gray-600">Find answers to common questions and get support</p>
                        </div>

                        {/* Search Section */}
                        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                            <div className="max-w-2xl mx-auto">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search for help articles, guides, or FAQs..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <link.icon className="h-8 w-8 text-blue-600 mb-2" />
                                        <span className="text-sm font-medium text-gray-900">{link.title}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            {/* Categories Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
                                    <div className="space-y-2">
                                        {helpCategories.map((category) => (
                                            <button
                                                key={category.id}
                                                onClick={() => setActiveCategory(category.id)}
                                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${activeCategory === category.id
                                                    ? 'bg-blue-50 text-blue-600'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                    }`}
                                            >
                                                <div className="flex items-center">
                                                    <category.icon className="h-4 w-4 mr-2" />
                                                    <span className="text-sm">{category.name}</span>
                                                </div>
                                                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                                    {category.count}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Support Channels */}
                                <div className="bg-white rounded-lg shadow-sm border p-4">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Support</h3>
                                    <div className="space-y-4">
                                        {supportChannels.map((channel, index) => (
                                            <div key={index} className="border rounded-lg p-3">
                                                <div className="flex items-start">
                                                    <channel.icon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between mb-1">
                                                            <h4 className="text-sm font-medium text-gray-900">{channel.title}</h4>
                                                            <span className={`w-2 h-2 rounded-full ${channel.status === 'online' ? 'bg-green-400' :
                                                                channel.status === 'available' ? 'bg-yellow-400' : 'bg-gray-400'
                                                                }`}></span>
                                                        </div>
                                                        <p className="text-xs text-gray-600 mb-1">{channel.description}</p>
                                                        <p className="text-xs text-gray-500">{channel.availability}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div className="lg:col-span-3">
                                <div className="bg-white rounded-lg shadow-sm border">
                                    <div className="p-6 border-b">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-medium text-gray-900">
                                                Frequently Asked Questions
                                            </h3>
                                            <span className="text-sm text-gray-500">
                                                {filteredFAQs.length} articles found
                                            </span>
                                        </div>
                                    </div>

                                    <div className="divide-y divide-gray-200">
                                        {filteredFAQs.map((faq) => (
                                            <div key={faq.id} className="p-6">
                                                <button
                                                    onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                                                    className="w-full flex items-center justify-between text-left"
                                                >
                                                    <h4 className="text-md font-medium text-gray-900 pr-4">
                                                        {faq.question}
                                                    </h4>
                                                    {expandedFAQ === faq.id ? (
                                                        <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                                    ) : (
                                                        <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                                    )}
                                                </button>

                                                {expandedFAQ === faq.id && (
                                                    <div className="mt-4">
                                                        <p className="text-gray-600 leading-relaxed mb-4">
                                                            {faq.answer}
                                                        </p>
                                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                                            <div className="flex items-center space-x-4">
                                                                <span className="flex items-center">
                                                                    <CheckCircle className="h-4 w-4 mr-1" />
                                                                    {faq.helpful} found this helpful
                                                                </span>
                                                                <span className="flex items-center">
                                                                    <Clock className="h-4 w-4 mr-1" />
                                                                    {faq.views} views
                                                                </span>
                                                            </div>
                                                            <div className="flex space-x-2">
                                                                <button className="text-blue-600 hover:text-blue-700">
                                                                    Helpful
                                                                </button>
                                                                <button className="text-gray-400 hover:text-gray-600">
                                                                    Not helpful
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {filteredFAQs.length === 0 && (
                                        <div className="p-8 text-center">
                                            <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                                            <p className="text-gray-600">
                                                Try adjusting your search terms or browse our categories
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HelpDashboard;