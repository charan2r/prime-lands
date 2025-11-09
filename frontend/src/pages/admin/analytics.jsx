import React, { useState } from 'react';
import {
    Search,
    Filter,
    Download,
    Menu,
    X,
    Home,
    Users,
    BarChart3,
    Settings,
    HelpCircle,
    Bell,
    TrendingUp,
    TrendingDown,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    DollarSign,
    UserPlus,
    Activity
} from 'lucide-react';
// Using CSS-based charts instead of recharts

const AnalyticsDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTimeRange, setActiveTimeRange] = useState('7d');

    const sidebarItems = [
        { icon: Home, label: 'Dashboard', active: false },
        { icon: Users, label: 'Agencies', active: false },
        { icon: Users, label: 'Users', active: false },
        { icon: BarChart3, label: 'Analytics', active: true },
        { icon: Settings, label: 'Settings', active: false },
        { icon: HelpCircle, label: 'Help', active: false }
    ];

    const timeRanges = [
        { label: '7D', value: '7d' },
        { label: '30D', value: '30d' },
        { label: '90D', value: '90d' },
        { label: '1Y', value: '1y' }
    ];

    // Sample data for charts
    const revenueData = [
        { name: 'Jan', revenue: 65000, agencies: 180 },
        { name: 'Feb', revenue: 70000, agencies: 195 },
        { name: 'Mar', revenue: 85000, agencies: 220 },
        { name: 'Apr', revenue: 78000, agencies: 210 },
        { name: 'May', revenue: 92000, agencies: 245 },
        { name: 'Jun', revenue: 88000, agencies: 235 }
    ];

    const agencyGrowthData = [
        { name: 'Week 1', active: 200, trial: 45, suspended: 15 },
        { name: 'Week 2', active: 215, trial: 52, suspended: 18 },
        { name: 'Week 3', active: 230, trial: 48, suspended: 20 },
        { name: 'Week 4', active: 245, trial: 56, suspended: 23 }
    ];

    const regionDistribution = [
        { name: 'North America', value: 35, color: '#3B82F6' },
        { name: 'Europe', value: 28, color: '#10B981' },
        { name: 'Asia Pacific', value: 22, color: '#F59E0B' },
        { name: 'South America', value: 10, color: '#EF4444' },
        { name: 'Africa', value: 5, color: '#8B5CF6' }
    ];

    const subscriptionData = [
        { name: 'Mon', subscriptions: 12, cancellations: 3 },
        { name: 'Tue', subscriptions: 19, cancellations: 5 },
        { name: 'Wed', subscriptions: 15, cancellations: 2 },
        { name: 'Thu', subscriptions: 22, cancellations: 4 },
        { name: 'Fri', subscriptions: 18, cancellations: 6 },
        { name: 'Sat', subscriptions: 8, cancellations: 1 },
        { name: 'Sun', subscriptions: 10, cancellations: 2 }
    ];

    const topPerformingAgencies = [
        { name: 'TechCorp Solutions', revenue: '$15,420', growth: '+12%', status: 'growing' },
        { name: 'Digital Marketing Pro', revenue: '$12,850', growth: '+8%', status: 'growing' },
        { name: 'Creative Agency Hub', revenue: '$11,200', growth: '-3%', status: 'declining' },
        { name: 'Business Innovators', revenue: '$9,780', growth: '+15%', status: 'growing' },
        { name: 'Strategic Partners', revenue: '$8,950', growth: '+5%', status: 'growing' }
    ];

    const MetricCard = ({ title, value, change, changeType, icon: Icon, trend }) => (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
                        <p className="text-2xl font-bold text-gray-900">{value}</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className={`flex items-center ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                        {changeType === 'positive' ? (
                            <ArrowUpRight className="h-4 w-4 mr-1" />
                        ) : (
                            <ArrowDownRight className="h-4 w-4 mr-1" />
                        )}
                        <span className="text-sm font-medium">{change}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{trend}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Page Content */}
                <main className="flex-1 overflow-auto p-4 lg:p-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Page Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Analytics Overview</h1>
                                <p className="text-gray-600 mt-1">Track performance and growth metrics</p>
                            </div>

                            <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                                <div className="flex items-center space-x-1 bg-white border rounded-lg p-1">
                                    {timeRanges.map((range) => (
                                        <button
                                            key={range.value}
                                            onClick={() => setActiveTimeRange(range.value)}
                                            className={`px-3 py-1 text-sm rounded ${activeTimeRange === range.value
                                                ? 'bg-blue-600 text-white'
                                                : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            {range.label}
                                        </button>
                                    ))}
                                </div>
                                <button className="flex items-center px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                    <Download className="h-4 w-4 mr-2" />
                                    Export Report
                                </button>
                            </div>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <MetricCard
                                title="Total Revenue"
                                value="$92,450"
                                change="+12.5%"
                                changeType="positive"
                                icon={DollarSign}
                                trend="vs last month"
                            />
                            <MetricCard
                                title="Active Agencies"
                                value="245"
                                change="+8.2%"
                                changeType="positive"
                                icon={Users}
                                trend="vs last month"
                            />
                            <MetricCard
                                title="New Signups"
                                value="56"
                                change="+15.3%"
                                changeType="positive"
                                icon={UserPlus}
                                trend="this month"
                            />
                            <MetricCard
                                title="Churn Rate"
                                value="2.4%"
                                change="-0.8%"
                                changeType="positive"
                                icon={Activity}
                                trend="vs last month"
                            />
                        </div>

                        {/* Charts Row 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            {/* Revenue Trend */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                                            Revenue
                                        </div>
                                    </div>
                                </div>
                                <div className="h-64 flex items-end justify-between space-x-2 px-4">
                                    {revenueData.map((item, index) => (
                                        <div key={index} className="flex flex-col items-center flex-1">
                                            <div
                                                className="w-full bg-blue-600 rounded-t-md hover:bg-blue-700 transition-colors cursor-pointer relative group"
                                                style={{ height: `${(item.revenue / 100000) * 200}px` }}
                                            >
                                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                    ${item.revenue.toLocaleString()}
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-600 mt-2">{item.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Agency Growth */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Agency Status Distribution</h3>
                                    <div className="flex items-center space-x-4 text-sm">
                                        <div className="flex items-center"><div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>Active</div>
                                        <div className="flex items-center"><div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>Trial</div>
                                        <div className="flex items-center"><div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>Suspended</div>
                                    </div>
                                </div>
                                <div className="h-64 flex items-end justify-between space-x-4 px-4">
                                    {agencyGrowthData.map((week, index) => (
                                        <div key={index} className="flex flex-col items-center flex-1">
                                            <div className="w-full flex flex-col space-y-1">
                                                <div
                                                    className="w-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer relative group"
                                                    style={{ height: `${(week.active / 300) * 180}px` }}
                                                >
                                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                        Active: {week.active}
                                                    </div>
                                                </div>
                                                <div
                                                    className="w-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer relative group"
                                                    style={{ height: `${(week.trial / 300) * 180}px` }}
                                                >
                                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                        Trial: {week.trial}
                                                    </div>
                                                </div>
                                                <div
                                                    className="w-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer relative group"
                                                    style={{ height: `${(week.suspended / 300) * 180}px` }}
                                                >
                                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                        Suspended: {week.suspended}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-600 mt-2">{week.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Charts Row 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                            {/* Regional Distribution */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Distribution</h3>
                                <div className="h-48 flex items-center justify-center mb-4">
                                    <div className="relative w-32 h-32">
                                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                                            <path
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="#E5E7EB"
                                                strokeWidth="3"
                                            />
                                            {/* North America - 35% */}
                                            <path
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="#3B82F6"
                                                strokeWidth="3"
                                                strokeDasharray="35, 65"
                                                strokeDashoffset="0"
                                            />
                                            {/* Europe - 28% */}
                                            <path
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="#10B981"
                                                strokeWidth="3"
                                                strokeDasharray="28, 72"
                                                strokeDashoffset="-35"
                                            />
                                            {/* Asia Pacific - 22% */}
                                            <path
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="#F59E0B"
                                                strokeWidth="3"
                                                strokeDasharray="22, 78"
                                                strokeDashoffset="-63"
                                            />
                                            {/* South America - 10% */}
                                            <path
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="#EF4444"
                                                strokeWidth="3"
                                                strokeDasharray="10, 90"
                                                strokeDashoffset="-85"
                                            />
                                            {/* Africa - 5% */}
                                            <path
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="#8B5CF6"
                                                strokeWidth="3"
                                                strokeDasharray="5, 95"
                                                strokeDashoffset="-95"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {regionDistribution.map((region, index) => (
                                        <div key={index} className="flex items-center justify-between text-sm">
                                            <div className="flex items-center">
                                                <div
                                                    className="w-3 h-3 rounded-full mr-2"
                                                    style={{ backgroundColor: region.color }}
                                                ></div>
                                                <span className="text-gray-600">{region.name}</span>
                                            </div>
                                            <span className="font-medium text-gray-900">{region.value}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Subscription Activity */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border lg:col-span-2">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Subscription Activity</h3>
                                    <div className="flex items-center space-x-4 text-sm">
                                        <div className="flex items-center"><div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>New Subscriptions</div>
                                        <div className="flex items-center"><div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>Cancellations</div>
                                    </div>
                                </div>
                                <div className="h-48 relative">
                                    <div className="absolute inset-0 flex items-end justify-between px-4">
                                        {subscriptionData.map((day, index) => (
                                            <div key={index} className="flex flex-col items-center flex-1 relative">
                                                {/* Subscription line point */}
                                                <div
                                                    className="w-2 h-2 bg-green-500 rounded-full absolute z-10 hover:w-3 hover:h-3 transition-all cursor-pointer"
                                                    style={{ bottom: `${(day.subscriptions / 25) * 180}px` }}
                                                    title={`${day.subscriptions} subscriptions`}
                                                ></div>
                                                {/* Cancellation line point */}
                                                <div
                                                    className="w-2 h-2 bg-red-500 rounded-full absolute z-10 hover:w-3 hover:h-3 transition-all cursor-pointer"
                                                    style={{ bottom: `${(day.cancellations / 25) * 180}px` }}
                                                    title={`${day.cancellations} cancellations`}
                                                ></div>
                                                {/* Connecting lines */}
                                                {index > 0 && (
                                                    <>
                                                        <div className="absolute w-full bg-green-500 h-0.5 transform origin-left z-0"
                                                            style={{
                                                                bottom: `${(subscriptionData[index - 1].subscriptions / 25) * 180}px`,
                                                                transform: `rotate(${Math.atan2(
                                                                    (day.subscriptions - subscriptionData[index - 1].subscriptions) * 180 / 25,
                                                                    100 / subscriptionData.length
                                                                )}rad)`
                                                            }}></div>
                                                        <div className="absolute w-full bg-red-500 h-0.5 transform origin-left z-0"
                                                            style={{
                                                                bottom: `${(subscriptionData[index - 1].cancellations / 25) * 180}px`,
                                                                transform: `rotate(${Math.atan2(
                                                                    (day.cancellations - subscriptionData[index - 1].cancellations) * 180 / 25,
                                                                    100 / subscriptionData.length
                                                                )}rad)`
                                                            }}></div>
                                                    </>
                                                )}
                                                <div className="text-xs text-gray-600 absolute -bottom-6">{day.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Top Performing Agencies */}
                        <div className="bg-white rounded-lg shadow-sm border">
                            <div className="p-6 border-b">
                                <h3 className="text-lg font-semibold text-gray-900">Top Performing Agencies</h3>
                                <p className="text-sm text-gray-600 mt-1">Based on monthly revenue and growth</p>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {topPerformingAgencies.map((agency, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                                    <span className="text-blue-600 font-semibold">{index + 1}</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">{agency.name}</h4>
                                                    <p className="text-sm text-gray-600">Monthly Revenue: {agency.revenue}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className={`flex items-center ${agency.status === 'growing' ? 'text-green-600' : 'text-red-600'}`}>
                                                    {agency.status === 'growing' ? (
                                                        <TrendingUp className="h-4 w-4 mr-1" />
                                                    ) : (
                                                        <TrendingDown className="h-4 w-4 mr-1" />
                                                    )}
                                                    <span className="text-sm font-medium">{agency.growth}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;