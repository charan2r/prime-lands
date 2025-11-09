import React, { useState } from 'react';
import {
    Bell,
    User,
    Shield,
    CreditCard,
    Database,
    Settings,
    Mail,
    Eye,
    EyeOff,
    Save,
    Camera,
    Smartphone,
    Globe,
    Users,
} from 'lucide-react';
const SettingsPage = () => {
    const [activeSettingsTab, setActiveSettingsTab] = useState('profile');
    const [showPassword, setShowPassword] = useState(false);
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        sms: true,
        marketing: false
    });

    const settingsTabs = [
        { id: 'profile', label: 'Profile Settings', icon: User },
        { id: 'security', label: 'Security & Privacy', icon: Shield },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'billing', label: 'Billing & Plans', icon: CreditCard },
        { id: 'integrations', label: 'Integrations', icon: Database },
        { id: 'preferences', label: 'Preferences', icon: Settings }
    ];

    const toggleNotification = (type) => {
        setNotifications(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    const renderProfileSettings = () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                            type="text"
                            defaultValue="John"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                            type="text"
                            defaultValue="Doe"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            defaultValue="john@agency.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                            type="tel"
                            defaultValue="+1 (555) 123-4567"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Picture</h3>
                <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                        JD
                    </div>
                    <div>
                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            <Camera className="h-4 w-4 mr-2" />
                            Upload New Photo
                        </button>
                        <p className="text-sm text-gray-500 mt-1">JPG, PNG or GIF. Max size 2MB.</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSecuritySettings = () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Password & Authentication</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
                <div className="bg-gray-50 border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-900">SMS Authentication</p>
                            <p className="text-sm text-gray-600">Receive verification codes via SMS</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderNotificationSettings = () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>
                <div className="space-y-4">
                    {[
                        { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email', icon: Mail },
                        { key: 'push', label: 'Push Notifications', desc: 'Browser push notifications', icon: Smartphone },
                        { key: 'sms', label: 'SMS Notifications', desc: 'Text message alerts', icon: Smartphone },
                        { key: 'marketing', label: 'Marketing Updates', desc: 'Product news and updates', icon: Globe }
                    ].map(({ key, label, desc, icon: Icon }) => (
                        <div key={key} className="bg-gray-50 border rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <Icon className="w-5 h-5 text-gray-600" />
                                    <div>
                                        <p className="font-medium text-gray-900">{label}</p>
                                        <p className="text-sm text-gray-600">{desc}</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={notifications[key]}
                                        onChange={() => toggleNotification(key)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderBillingSettings = () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Current Plan</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="text-xl font-semibold text-blue-900">Professional Plan</h4>
                            <p className="text-blue-700">$99/month • Billed monthly</p>
                            <p className="text-sm text-blue-600 mt-2">Next billing date: July 4, 2025</p>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Upgrade Plan
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
                <div className="bg-gray-50 border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                                VISA
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                                <p className="text-sm text-gray-600">Expires 12/26</p>
                            </div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeSettingsTab) {
            case 'profile':
                return renderProfileSettings();
            case 'security':
                return renderSecuritySettings();
            case 'notifications':
                return renderNotificationSettings();
            case 'billing':
                return renderBillingSettings();
            case 'integrations':
                return (
                    <div className="text-center py-12">
                        <Database className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Integrations</h3>
                        <p className="text-gray-600">Connect your favorite tools and services.</p>
                    </div>
                );
            case 'preferences':
                return (
                    <div className="text-center py-12">
                        <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Preferences</h3>
                        <p className="text-gray-600">Customize your experience.</p>
                    </div>
                );
            default:
                return renderProfileSettings();
        }
    };

    return (
        <div className="flex-1 flex flex-col overflow-hidden">
            {/* Mobile Header */}
            <header className="lg:hidden bg-white shadow-sm border-b px-4 py-3">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-semibold text-gray-900">Settings</h1>
                </div>
            </header>

            {/* Page Content */}
            <main className="flex-1 overflow-auto p-4 lg:p-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6 hidden lg:block">Settings</h1>

                    {/* Settings Layout */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Settings Navigation - Mobile */}
                        <div className="lg:hidden">
                            <div className="bg-white rounded-lg shadow-sm border mb-6">
                                <div className="p-4">
                                    <select
                                        value={activeSettingsTab}
                                        onChange={(e) => setActiveSettingsTab(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {settingsTabs.map((tab) => (
                                            <option key={tab.id} value={tab.id}>
                                                {tab.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Settings Navigation - Desktop */}
                        <div className="hidden lg:block w-80">
                            <div className="bg-white rounded-lg shadow-sm border">
                                <div className="p-4 border-b">
                                    <h2 className="text-lg font-medium text-gray-900">Settings Menu</h2>
                                </div>
                                <nav className="p-4">
                                    {settingsTabs.map((tab) => {
                                        const Icon = tab.icon;
                                        return (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveSettingsTab(tab.id)}
                                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors mb-2 ${activeSettingsTab === tab.id
                                                    ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-700'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                                    }`}
                                            >
                                                <Icon className="w-5 h-5" />
                                                <span className="font-medium">{tab.label}</span>
                                            </button>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>

                        {/* Settings Content */}
                        <div className="flex-1">
                            <div className="bg-white rounded-lg shadow-sm border">
                                <div className="p-4 lg:p-6 border-b">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-900">
                                                {settingsTabs.find(tab => tab.id === activeSettingsTab)?.label}
                                            </h2>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Manage your {settingsTabs.find(tab => tab.id === activeSettingsTab)?.label.toLowerCase()}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 lg:p-6">
                                    {renderContent()}

                                    {/* Save Button */}
                                    <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
                                        <button className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                            <Save className="w-4 h-4" />
                                            <span>Save Changes</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default SettingsPage;