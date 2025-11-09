import React, { useState, useEffect } from 'react';
import { Shield, Smartphone, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Authentication = () => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
    const [isExpired, setIsExpired] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Timer countdown
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setIsExpired(true);
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleCodeChange = (index, value) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Auto-focus next input
            if (value && index < 5) {
                const nextInput = document.getElementById(`code-${index + 1}`);
                if (nextInput) nextInput.focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            const prevInput = document.getElementById(`code-${index - 1}`);
            if (prevInput) prevInput.focus();
        }
    };

    const handleVerify = async () => {
        const fullCode = code.join('');
        if (fullCode.length === 6) {
            setIsVerifying(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsVerifying(false);
            setShowSuccess(true);
        }
    };

    const handleResend = () => {
        setTimeLeft(300);
        setIsExpired(false);
        setCode(['', '', '', '', '', '']);
    };

    return (
        <div className="h-screen flex flex-col lg:flex-row overflow-hidden">
            {/* Left Side - Cybersecurity Visual */}
            <div className="relative lg:w-1/2 h-48 lg:h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden flex-shrink-0">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-cyan-400 animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 rounded-full border border-pink-400 animate-bounce"></div>
                    <div className="absolute bottom-20 left-32 w-20 h-20 rounded-full border border-purple-400 animate-pulse"></div>
                    <div className="absolute bottom-40 right-32 w-16 h-16 rounded-full border border-blue-400 animate-bounce"></div>
                </div>

                {/* Main visual elements */}
                <div className="relative z-10 text-center">
                    {/* Lock and fingerprint visual */}
                    <div className="relative mb-8">
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/30">
                            <Shield className="w-16 h-16 text-white" />
                        </div>

                        {/* Fingerprint lines */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-40 h-40 border-2 border-cyan-400/30 rounded-full animate-ping"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-48 h-48 border border-pink-400/20 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Secure Access
                    </h1>
                    <p className="text-cyan-200 text-lg max-w-md mx-auto px-4">
                        Your security is our priority. Complete two-factor authentication to access your account.
                    </p>
                </div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, cyan 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}>
                </div>
            </div>

            {/* Right Side - Authentication Form */}
            <div className="flex-1 lg:w-1/2 flex items-center justify-center p-4 lg:p-6 bg-gray-50 overflow-y-auto">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <div className="flex justify-center mb-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                        </div>
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                            Two-Factor Authentication
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Enter the 6-digit code from your authenticator app
                        </p>
                    </div>

                    {/* Success Message */}
                    {showSuccess && (
                        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span className="text-green-700 text-sm">Authentication successful!</span>
                        </div>
                    )}

                    {/* Code Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Authentication Code
                        </label>
                        <div className="flex space-x-2 justify-center">
                            {code.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`code-${index}`}
                                    type="text"
                                    value={digit}
                                    onChange={(e) => handleCodeChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-10 h-10 text-center text-lg font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    maxLength="1"
                                    disabled={isExpired || showSuccess}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Timer */}
                    <div className="text-center mb-4">
                        {!isExpired ? (
                            <div className="flex items-center justify-center text-gray-600 text-sm">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>Code expires in {formatTime(timeLeft)}</span>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center text-red-600 text-sm">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                <span>Code has expired</span>
                            </div>
                        )}
                    </div>

                    {/* QR Code Section */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center mb-2 p-1">
                                {/* Real QR Code Image */}
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=otpauth://totp/YourApp:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=YourApp"
                                    alt="QR Code for Two-Factor Authentication"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <p className="text-xs text-gray-600">
                                Scan with your authenticator app
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <button
                            onClick={handleVerify}
                            disabled={code.join('').length !== 6 || isExpired || isVerifying || showSuccess}
                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                        >
                            {isVerifying ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Verifying...
                                </>
                            ) : (
                                'Verify Code'
                            )}
                        </button>

                        <button
                            onClick={handleResend}
                            className="w-full text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
                        >
                            <Smartphone className="w-4 h-4 mr-2" />
                            Resend Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authentication;