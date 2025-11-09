import React, { useState } from 'react';
import login from '../assets/img14.png'; // Your image import

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchMode, setSearchMode] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (password !== confirmPassword) {
            setMessage("Passwords don't match!");
            setLoading(false);
            return;
        }

        // Simulate API call
        setTimeout(() => {
            setMessage("Password reset successfully!");
            setLoading(false);
        }, 2000);
    };

    const handleSearch = () => {
        setSearchMode(true);
        setMessage("Searching for your account...");
        setTimeout(() => {
            setMessage("Account found. Enter new password.");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex">
            {/* Image Section - Half desktop width */}
            <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-100 lg:w-1/2">
                {/* Background overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-gray-900/20"></div>

                {/* Your Image */}
                <img
                    src={login}
                    alt="loginimg"
                    className="w-full h-full object-cover object-center"
                />

                {/* Optional: Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/10"></div>

            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Reset Your Password</h1>

                    {!searchMode ? (
                        <div className="space-y-6">
                            <button
                                onClick={handleSearch}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Search Password
                            </button>
                            <p className="text-center text-gray-500">
                                Can't remember your account? Search by email.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            {message && (
                                <div className={`p-3 rounded-lg text-sm ${message.includes('success') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                    {message}
                                </div>
                            )}

                            <div className="flex space-x-4 pt-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:bg-indigo-400"
                                >
                                    {loading ? 'Processing...' : 'Reset Password'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSearchMode(false)}
                                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-4 rounded-lg font-medium transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Remember your password?{' '}
                            <a href="/login" className="text-indigo-600 hover:text-indigo-800 font-medium">
                                Login here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;