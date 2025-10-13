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
    Edit,
    Trash2,
    Eye
} from 'lucide-react';

const UserDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Total Active Users');

    const sidebarItems = [
        { icon: Home, label: 'Dashboard', active: false },
        { icon: Users, label: 'Agencies', active: false },
        { icon: Users, label: 'Users', active: true },
        { icon: BarChart3, label: 'Analytics', active: false },
        { icon: Settings, label: 'Settings', active: false },
        { icon: HelpCircle, label: 'Help', active: false }
    ];

    const userData = [
        {
            name: 'John Smith',
            email: 'john.smith@email.com',
            role: 'Admin',
            status: 'Active',
            lastLogin: '2 hours ago',
            agency: 'Digital Marketing Pro',
            joinDate: '15 Jan 2024'
        },
        {
            name: 'Sarah Johnson',
            email: 'sarah.j@email.com',
            role: 'Manager',
            status: 'Active',
            lastLogin: '1 day ago',
            agency: 'Creative Solutions',
            joinDate: '08 Feb 2024'
        },
        {
            name: 'Michael Brown',
            email: 'michael.brown@email.com',
            role: 'User',
            status: 'Inactive',
            lastLogin: '5 days ago',
            agency: 'Tech Innovations',
            joinDate: '22 Dec 2023'
        },
        {
            name: 'Emily Davis',
            email: 'emily.davis@email.com',
            role: 'Manager',
            status: 'Active',
            lastLogin: '3 hours ago',
            agency: 'Design Studio',
            joinDate: '10 Mar 2024'
        },
        {
            name: 'David Wilson',
            email: 'david.wilson@email.com',
            role: 'User',
            status: 'Suspended',
            lastLogin: '1 week ago',
            agency: 'Marketing Hub',
            joinDate: '05 Jan 2024'
        },
        {
            name: 'Lisa Anderson',
            email: 'lisa.anderson@email.com',
            role: 'Admin',
            status: 'Active',
            lastLogin: '30 minutes ago',
            agency: 'Brand Masters',
            joinDate: '18 Feb 2024'
        },
        {
            name: 'Robert Taylor',
            email: 'robert.taylor@email.com',
            role: 'User',
            status: 'Active',
            lastLogin: '4 hours ago',
            agency: 'Digital Marketing Pro',
            joinDate: '25 Jan 2024'
        },
        {
            name: 'Jennifer Martinez',
            email: 'jennifer.m@email.com',
            role: 'Manager',
            status: 'Active',
            lastLogin: '2 days ago',
            agency: 'Creative Solutions',
            joinDate: '12 Mar 2024'
        },
        {
            name: 'Christopher Lee',
            email: 'chris.lee@email.com',
            role: 'User',
            status: 'Inactive',
            lastLogin: '1 week ago',
            agency: 'Tech Innovations',
            joinDate: '30 Nov 2023'
        },
        {
            name: 'Amanda White',
            email: 'amanda.white@email.com',
            role: 'Admin',
            status: 'Active',
            lastLogin: '1 hour ago',
            agency: 'Design Studio',
            joinDate: '20 Feb 2024'
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active':
                return 'bg-green-100 text-green-800';
            case 'Inactive':
                return 'bg-gray-100 text-gray-800';
            case 'Suspended':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getRoleColor = (role) => {
        switch (role) {
            case 'Admin':
                return 'bg-purple-100 text-purple-800';
            case 'Manager':
                return 'bg-blue-100 text-blue-800';
            case 'User':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Page Content */}
                <main className="flex-1 overflow-auto p-4 lg:p-6">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">User Management</h1>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h3 className="text-sm font-medium text-gray-600 mb-2">Total Active Users</h3>
                                <p className="text-2xl font-bold text-gray-900">1,847</p>
                                <p className="text-sm text-gray-500">Currently logged in</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h3 className="text-sm font-medium text-gray-600 mb-2">New Users</h3>
                                <p className="text-2xl font-bold text-gray-900">342</p>
                                <p className="text-sm text-gray-500">This month</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h3 className="text-sm font-medium text-gray-600 mb-2">Inactive Users</h3>
                                <p className="text-2xl font-bold text-gray-900">89</p>
                                <p className="text-sm text-gray-500">Not logged in 30+ days</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h3 className="text-sm font-medium text-gray-600 mb-2">Suspended Users</h3>
                                <p className="text-2xl font-bold text-gray-900">12</p>
                                <p className="text-sm text-gray-500">Account suspended</p>
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
                                                placeholder="Search Users by Name or Email"
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
                                            Add User
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* User List Header */}
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-medium text-gray-900">User Management</h3>
                                    <p className="text-sm text-gray-500">Showing 1-10 of 1,847 entries</p>
                                </div>

                                {/* Mobile Cards View */}
                                <div className="lg:hidden space-y-4">
                                    {userData.slice(0, 5).map((user, index) => (
                                        <div key={index} className="bg-gray-50 rounded-lg p-4 border">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center">
                                                    <input type="checkbox" className="mr-3" />
                                                    <div>
                                                        <div className="font-medium text-gray-900">{user.name}</div>
                                                        <div className="text-sm text-gray-500">{user.email}</div>
                                                    </div>
                                                </div>
                                                <div className="flex space-x-1">
                                                    <button className="p-1 text-gray-400 hover:text-gray-600">
                                                        <Eye className="h-4 w-4" />
                                                    </button>
                                                    <button className="p-1 text-gray-400 hover:text-gray-600">
                                                        <Edit className="h-4 w-4" />
                                                    </button>
                                                    <button className="p-1 text-gray-400 hover:text-red-600">
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className={`px-2 py-1 text-xs rounded-full ${getRoleColor(user.role)}`}>
                                                    {user.role}
                                                </span>
                                                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(user.status)}`}>
                                                    {user.status}
                                                </span>
                                            </div>
                                            <div className="space-y-1 text-sm text-gray-600">
                                                <p><span className="font-medium">Agency:</span> {user.agency}</p>
                                                <p><span className="font-medium">Last Login:</span> {user.lastLogin}</p>
                                                <p><span className="font-medium">Joined:</span> {user.joinDate}</p>
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
                                                    User
                                                </th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-700">Role</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-700">Agency</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Login</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-700">Join Date</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userData.map((user, index) => (
                                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-3 px-4">
                                                        <div className="flex items-center">
                                                            <input type="checkbox" className="mr-3" />
                                                            <div>
                                                                <div className="font-medium text-gray-900">{user.name}</div>
                                                                <div className="text-sm text-gray-500">{user.email}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        <span className={`px-2 py-1 text-xs rounded-full ${getRoleColor(user.role)}`}>
                                                            {user.role}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 px-4 text-gray-600">{user.agency}</td>
                                                    <td className="py-3 px-4">
                                                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(user.status)}`}>
                                                            {user.status}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 px-4 text-gray-600">{user.lastLogin}</td>
                                                    <td className="py-3 px-4 text-gray-600">{user.joinDate}</td>
                                                    <td className="py-3 px-4">
                                                        <div className="flex space-x-2">
                                                            <button className="p-1 text-gray-400 hover:text-gray-600">
                                                                <Eye className="h-4 w-4" />
                                                            </button>
                                                            <button className="p-1 text-gray-400 hover:text-gray-600">
                                                                <Edit className="h-4 w-4" />
                                                            </button>
                                                            <button className="p-1 text-gray-400 hover:text-red-600">
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
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-700 mb-4 sm:mb-0">
                                        Showing 1 to 10 of 1,847 results
                                    </p>
                                    <div className="flex items-center space-x-2">
                                        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled>
                                            Previous
                                        </button>
                                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">1</button>
                                        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">2</button>
                                        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">3</button>
                                        <span className="px-2 text-gray-500">...</span>
                                        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">185</button>
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

export default UserDashboard;