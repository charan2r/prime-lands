import React from 'react';

const DashboardLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen bg-gray-50 lg:ml-64">
            {/* Dashboard Header */}
            <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                            {subtitle && (
                                <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
                            )}
                        </div>

                        {/* User info section */}
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">U</span>
                                    </div>
                                    <span className="hidden md:block text-sm font-medium">User</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboard Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;