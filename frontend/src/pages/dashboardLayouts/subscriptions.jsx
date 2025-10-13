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
    Check,
    Crown,
    Building,
    MapPin,
    Camera,
    TrendingUp,
    Shield,
    Headphones,
    Star,
    Calendar,
    CreditCard,
    Eye,
    Edit,
    Trash2
} from 'lucide-react';

const SubscriptionsDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeView, setActiveView] = useState('plans');
    const [billingCycle, setBillingCycle] = useState('monthly');

    const sidebarItems = [
        { icon: Home, label: 'Dashboard', active: false },
        { icon: Users, label: 'Agencies', active: true },
        { icon: Users, label: 'Users', active: false },
        { icon: BarChart3, label: 'Analytics', active: false },
        { icon: Settings, label: 'Settings', active: false },
        { icon: HelpCircle, label: 'Help', active: false }
    ];

    const subscriptionPlans = [
        {
            id: 1,
            name: 'Starter',
            price: { monthly: 29, yearly: 290 },
            description: 'Perfect for individual agents starting out',
            icon: Building,
            color: 'bg-blue-500',
            popular: false,
            features: [
                'Up to 5 property listings',
                'Basic property search',
                'Standard photo uploads (up to 10 per listing)',
                'Email support',
                'Basic analytics',
                'Mobile app access'
            ],
            limits: {
                listings: 5,
                photos: 10,
                leads: 25,
                storage: '1GB'
            }
        },
        {
            id: 2,
            name: 'Professional',
            price: { monthly: 79, yearly: 790 },
            description: 'Ideal for growing real estate professionals',
            icon: Crown,
            color: 'bg-purple-500',
            popular: true,
            features: [
                'Up to 50 property listings',
                'Advanced search & filters',
                'Unlimited photo uploads',
                'Virtual tour integration',
                'Lead management system',
                'Priority email & chat support',
                'Advanced analytics & reports',
                'Custom branding',
                'Social media integration'
            ],
            limits: {
                listings: 50,
                photos: 'Unlimited',
                leads: 500,
                storage: '10GB'
            }
        },
        {
            id: 3,
            name: 'Enterprise',
            price: { monthly: 199, yearly: 1990 },
            description: 'Complete solution for agencies and teams',
            icon: Building,
            color: 'bg-green-500',
            popular: false,
            features: [
                'Unlimited property listings',
                'Multi-agent management',
                'Custom integrations & API access',
                'White-label solution',
                'Advanced CRM integration',
                'Dedicated account manager',
                '24/7 phone support',
                'Custom reporting',
                'Team collaboration tools',
                'Advanced security features'
            ],
            limits: {
                listings: 'Unlimited',
                photos: 'Unlimited',
                leads: 'Unlimited',
                storage: '100GB'
            }
        }
    ];

    const currentSubscriptions = [
        {
            id: 1,
            agencyName: 'Premium Realty Group',
            plan: 'Professional',
            status: 'Active',
            nextBilling: '2025-07-04',
            amount: '$79/month',
            propertiesListed: 32,
            planLimit: 50,
            joinDate: '2024-01-15'
        },
        {
            id: 2,
            agencyName: 'Downtown Properties Inc',
            plan: 'Enterprise',
            status: 'Active',
            nextBilling: '2025-06-15',
            amount: '$199/month',
            propertiesListed: 127,
            planLimit: 'Unlimited',
            joinDate: '2023-08-22'
        },
        {
            id: 3,
            agencyName: 'Sunset Real Estate',
            plan: 'Starter',
            status: 'Active',
            nextBilling: '2025-06-20',
            amount: '$29/month',
            propertiesListed: 4,
            planLimit: 5,
            joinDate: '2024-12-10'
        },
        {
            id: 4,
            agencyName: 'Metro Housing Solutions',
            plan: 'Professional',
            status: 'Cancelled',
            nextBilling: 'N/A',
            amount: '$79/month',
            propertiesListed: 18,
            planLimit: 50,
            joinDate: '2024-03-05'
        },
        {
            id: 5,
            agencyName: 'Coastal Properties LLC',
            plan: 'Professional',
            status: 'Pending',
            nextBilling: '2025-06-10',
            amount: '$79/month',
            propertiesListed: 0,
            planLimit: 50,
            joinDate: '2025-05-25'
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active':
                return 'bg-green-100 text-green-800';
            case 'Cancelled':
                return 'bg-red-100 text-red-800';
            case 'Pending':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const Sidebar = () => (
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
            <div className="flex items-center justify-between h-16 px-6 border-b">
                <h1 className="text-xl font-semibold text-gray-800">RealEstate Pro</h1>
                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="lg:hidden"
                >
                    <X className="h-6 w-6" />
                </button>
            </div>

            <nav className="mt-6">
                {sidebarItems.map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${item.active ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : ''
                            }`}
                    >
                        <item.icon className="h-5 w-5 mr-3" />
                        {item.label}
                    </a>
                ))}
            </nav>
        </div>
    );

    const PlansView = () => (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Subscription Plans</h2>
                    <p className="text-gray-600 mt-1">Choose the perfect plan for your real estate business</p>
                </div>

                {/* Billing Toggle */}
                <div className="mt-4 sm:mt-0">
                    <div className="flex items-center bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${billingCycle === 'monthly'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${billingCycle === 'yearly'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Yearly
                            <span className="ml-1 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">Save 17%</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subscriptionPlans.map((plan) => (
                    <div key={plan.id} className={`relative bg-white rounded-2xl shadow-lg border-2 ${plan.popular ? 'border-purple-500' : 'border-gray-200'} overflow-hidden`}>
                        {plan.popular && (
                            <div className="absolute top-0 left-0 right-0 bg-purple-500 text-white text-center py-2 text-sm font-medium">
                                Most Popular
                            </div>
                        )}

                        <div className={`p-6 ${plan.popular ? 'pt-12' : ''}`}>
                            <div className="flex items-center mb-4">
                                <div className={`p-3 rounded-lg ${plan.color} text-white`}>
                                    <plan.icon className="h-6 w-6" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                                    <p className="text-gray-600 text-sm">{plan.description}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold text-gray-900">
                                        ${plan.price[billingCycle]}
                                    </span>
                                    <span className="text-gray-600 ml-2">
                                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                                    </span>
                                </div>
                                {billingCycle === 'yearly' && (
                                    <p className="text-sm text-green-600 mt-1">
                                        Save ${(plan.price.monthly * 12) - plan.price.yearly} per year
                                    </p>
                                )}
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${plan.popular
                                ? 'bg-purple-500 hover:bg-purple-600 text-white'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                                }`}>
                                Get Started
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const SubscriptionsView = () => (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Current Subscriptions</h2>
                    <p className="text-gray-600 mt-1">Manage all agency subscriptions</p>
                </div>

                <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                    <button className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                    </button>
                    <button className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <TrendingUp className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Active Subscriptions</p>
                            <p className="text-2xl font-bold text-gray-900">3</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <CreditCard className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                            <p className="text-2xl font-bold text-gray-900">$307</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                            <Calendar className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Pending</p>
                            <p className="text-2xl font-bold text-gray-900">1</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center">
                        <div className="p-2 bg-red-100 rounded-lg">
                            <X className="h-5 w-5 text-red-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Cancelled</p>
                            <p className="text-2xl font-bold text-gray-900">1</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subscriptions Table */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-lg font-medium text-gray-900">Subscription Management</h3>
                        <div className="mt-4 sm:mt-0 flex-1 max-w-md">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search agencies..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Cards */}
                <div className="lg:hidden">
                    {currentSubscriptions.map((subscription) => (
                        <div key={subscription.id} className="p-4 border-b border-gray-200 last:border-b-0">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-gray-900">{subscription.agencyName}</h4>
                                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(subscription.status)}`}>
                                    {subscription.status}
                                </span>
                            </div>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex justify-between">
                                    <span>Plan:</span>
                                    <span className="font-medium">{subscription.plan}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Amount:</span>
                                    <span>{subscription.amount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Properties:</span>
                                    <span>{subscription.propertiesListed}/{subscription.planLimit}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Next Billing:</span>
                                    <span>{subscription.nextBilling}</span>
                                </div>
                            </div>
                            <div className="flex justify-end space-x-2 mt-3">
                                <button className="p-1 text-gray-400 hover:text-blue-600">
                                    <Eye className="h-4 w-4" />
                                </button>
                                <button className="p-1 text-gray-400 hover:text-green-600">
                                    <Edit className="h-4 w-4" />
                                </button>
                                <button className="p-1 text-gray-400 hover:text-red-600">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Table */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Agency Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Plan
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Amount
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Properties Listed
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Next Billing
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentSubscriptions.map((subscription) => (
                                <tr key={subscription.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{subscription.agencyName}</div>
                                            <div className="text-sm text-gray-500">Since {subscription.joinDate}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            {subscription.plan}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(subscription.status)}`}>
                                            {subscription.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {subscription.amount}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div className="flex items-center">
                                            <span>{subscription.propertiesListed}/{subscription.planLimit}</span>
                                            {subscription.planLimit !== 'Unlimited' && (
                                                <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-blue-600 h-2 rounded-full"
                                                        style={{ width: `${(subscription.propertiesListed / subscription.planLimit) * 100}%` }}
                                                    ></div>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {subscription.nextBilling}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center space-x-2">
                                            <button className="text-blue-600 hover:text-blue-900">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="text-green-600 hover:text-green-900">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="text-red-600 hover:text-red-900">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                    <div className="flex-1 flex justify-between sm:hidden">
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Previous
                        </button>
                        <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Next
                        </button>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
                                <span className="font-medium">5</span> results
                            </p>
                        </div>
                        <div>
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    Previous
                                </button>
                                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600">
                                    1
                                </button>
                                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    Next
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm border-b px-4 py-4 lg:px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="lg:hidden mr-4"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                            <div className="flex space-x-8">
                                <a href="#" className="text-gray-600 hover:text-gray-900">Dashboard</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Agencies</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Users</a>
                                <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-4">Subscriptions</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Settings</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Analytics</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Help</a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Bell className="h-5 w-5 text-gray-600" />
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                </header>

                {/* Sub Navigation */}
                <div className="bg-white border-b px-4 lg:px-6">
                    <div className="flex space-x-8">
                        <button
                            onClick={() => setActiveView('plans')}
                            className={`py-4 px-2 text-sm font-medium border-b-2 ${activeView === 'plans'
                                ? 'text-blue-600 border-blue-600'
                                : 'text-gray-600 border-transparent hover:text-gray-900'
                                }`}
                        >
                            Subscription Plans
                        </button>
                        <button
                            onClick={() => setActiveView('subscriptions')}
                            className={`py-4 px-2 text-sm font-medium border-b-2 ${activeView === 'subscriptions'
                                ? 'text-blue-600 border-blue-600'
                                : 'text-gray-600 border-transparent hover:text-gray-900'
                                }`}
                        >
                            Current Subscriptions
                        </button>
                    </div>
                </div>

                {/* Page Content */}
                <main className="flex-1 overflow-auto p-4 lg:p-6">
                    <div className="max-w-7xl mx-auto">
                        {activeView === 'plans' ? <PlansView /> : <SubscriptionsView />}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SubscriptionsDashboard;