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
    Bell
} from 'lucide-react';

const AgencyDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Total Active Agencies');

    const sidebarItems = [
        { icon: Home, label: 'Dashboard', active: true },
        { icon: Users, label: 'Agencies', active: false },
        { icon: Users, label: 'Users', active: false },
        { icon: BarChart3, label: 'Analytics', active: false },
        { icon: Settings, label: 'Settings', active: false },
        { icon: HelpCircle, label: 'Help', active: false }
    ];

    const agencyData = [
        { name: 'Best test column', region: 'Region test column', signup: 'Signup test column', status: 'Active', eligible: 'Eligible test column' },
        { name: 'Best test column', region: 'Region test column', signup: 'Signup test column', status: 'Active', eligible: 'Eligible test column' },
        { name: 'Best test column', region: 'Region test column', signup: 'Signup test column', status: 'Active', eligible: 'Eligible test column' },
        { name: 'Best test column', region: 'Region test column', signup: 'Signup test column', status: 'Active', eligible: 'Eligible test column' },
        { name: 'Best test column', region: 'Region test column', signup: 'Signup test column', status: 'Active', eligible: 'Eligible test column' },
        { name: 'Best test column', region: 'Region test column', signup: 'Signup test column', status: 'Active', eligible: 'Eligible test column' },
        { name: 'Best test column', region: 'Region test column', signup: 'Signup test column', status: 'Active', eligible: 'Eligible test column' },
        { name: 'Best test column', region: 'Region test column', signup: 'Signup test column', status: 'Active', eligible: 'Eligible test column' },
        { name: 'Best test column', region: 'Region test column', signup: 'Signup test column', status: 'Active', eligible: 'Eligible test column' },
        { name: 'Best test column', region: 'Region test column', signup: 'Signup test column', status: 'Active', eligible: 'Eligible test column' },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Page Content */}
                <main className="flex-1 overflow-auto p-4 lg:p-6">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">Agency Management</h1>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h3 className="text-sm font-medium text-gray-600 mb-2">Total Active Agencies</h3>
                                <p className="text-2xl font-bold text-gray-900">245</p>
                                <p className="text-sm text-gray-500">Currently in Active Plan</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h3 className="text-sm font-medium text-gray-600 mb-2">Agencies on Trial</h3>
                                <p className="text-2xl font-bold text-gray-900">156</p>
                                <p className="text-sm text-gray-500">Free Agencies</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h3 className="text-sm font-medium text-gray-600 mb-2">Agencies Suspended</h3>
                                <p className="text-2xl font-bold text-gray-900">23</p>
                                <p className="text-sm text-gray-500">Agencies with suspension</p>
                            </div>
                        </div>

                        {/* Filters and Search */}
                        <div className="bg-white rounded-lg shadow-sm border mb-6">
                            <div className="p-4 border-b">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div className="flex-1 max-w-md">
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Search Agencies by Name or Email"
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <button className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                                            <Filter className="h-4 w-4 mr-2" />
                                            Filters
                                        </button>
                                        <button className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                                            <Download className="h-4 w-4 mr-2" />
                                            Export
                                        </button>
                                        <button className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                            <Plus className="h-4 w-4 mr-2" />
                                            Add Agency
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Agency List Header */}
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-medium text-gray-900">Agency Management</h3>
                                    <p className="text-sm text-gray-500">Showing 1-10 of 245 entries</p>
                                </div>

                                {/* Mobile Cards View */}
                                <div className="lg:hidden space-y-4">
                                    {agencyData.slice(0, 5).map((agency, index) => (
                                        <div key={index} className="bg-gray-50 rounded-lg p-4 border">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center">
                                                    <input type="checkbox" className="mr-3" />
                                                    <span className="font-medium text-gray-900">{agency.name}</span>
                                                </div>
                                                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                                                    {agency.status}
                                                </span>
                                            </div>
                                            <div className="space-y-1 text-sm text-gray-600">
                                                <p><span className="font-medium">Region:</span> {agency.region}</p>
                                                <p><span className="font-medium">Signup:</span> {agency.signup}</p>
                                                <p><span className="font-medium">Eligible:</span> {agency.eligible}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Desktop Table View */}
                                <div className="hidden lg:block overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="text-left py-3 px-4 font-medium text-gray-700">
                                                    <input type="checkbox" className="mr-2" />
                                                    Agency Name
                                                </th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-700">Region</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-700">Signup Date</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-700">Eligible</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {agencyData.map((agency, index) => (
                                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-3 px-4">
                                                        <div className="flex items-center">
                                                            <input type="checkbox" className="mr-3" />
                                                            <span className="text-gray-900">{agency.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-4 text-gray-600">{agency.region}</td>
                                                    <td className="py-3 px-4 text-gray-600">{agency.signup}</td>
                                                    <td className="py-3 px-4">
                                                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                                                            {agency.status}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 px-4 text-gray-600">{agency.eligible}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-700 mb-4 sm:mb-0">
                                        Showing 1 to 10 of 245 results
                                    </p>
                                    <div className="flex items-center space-x-2">
                                        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled>
                                            Previous
                                        </button>
                                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">1</button>
                                        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">2</button>
                                        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">3</button>
                                        <span className="px-2 text-gray-500">...</span>
                                        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">25</button>
                                        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AgencyDashboard;