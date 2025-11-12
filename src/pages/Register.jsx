import { useState } from "react";
import {
  Mail,
  Lock,
  AlertCircle,
  UserCircle,
  Users,
  Briefcase,
  Check,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [role, setRole] = useState("CANDIDATE");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPasswordHints, setShowPasswordHints] = useState(false);

  // Password validation checks
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[@#$%^&*!]/.test(password);
  const hasMinLength = password.length >= 8;
  const startsWithCapital = password.length > 0 && /[A-Z]/.test(password[0]);

  const allConditionsMet =
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSymbol &&
    hasMinLength &&
    startsWithCapital;

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        // Success simulation
        console.log("Registration successful");
      } else {
        setErr("Please fill in all fields");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg mb-4">
            <UserCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-600 mt-2">
            Join us and start your journey today
          </p>
        </div>

        {/* Register Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPwd(e.target.value)}
                  onFocus={() => setShowPasswordHints(true)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Password Strength Indicator */}
              {showPasswordHints && password.length > 0 && (
                <div className="mt-3 p-4 bg-orange-50 border border-orange-200 rounded-lg space-y-2">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Password Requirements:
                  </p>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      {startsWithCapital ? (
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          startsWithCapital ? "text-green-700" : "text-gray-600"
                        }`}
                      >
                        Starts with a capital letter
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {hasUpperCase ? (
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          hasUpperCase ? "text-green-700" : "text-gray-600"
                        }`}
                      >
                        Contains uppercase letter
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {hasLowerCase ? (
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          hasLowerCase ? "text-green-700" : "text-gray-600"
                        }`}
                      >
                        Contains lowercase letter
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {hasNumber ? (
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          hasNumber ? "text-green-700" : "text-gray-600"
                        }`}
                      >
                        Contains a number (0-9)
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {hasSymbol ? (
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          hasSymbol ? "text-green-700" : "text-gray-600"
                        }`}
                      >
                        Contains a symbol (@, #, $, %, ^, &, *, !)
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {hasMinLength ? (
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          hasMinLength ? "text-green-700" : "text-gray-600"
                        }`}
                      >
                        At least 8 characters long
                      </span>
                    </div>
                  </div>

                  {allConditionsMet && (
                    <div className="mt-3 pt-3 border-t border-orange-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">
                          Password meets all requirements!
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                I'm registering as a
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole("CANDIDATE")}
                  className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all ${
                    role === "CANDIDATE"
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-300 hover:border-orange-300"
                  }`}
                >
                  <Users
                    className={`w-8 h-8 mb-2 ${
                      role === "CANDIDATE" ? "text-orange-600" : "text-gray-400"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      role === "CANDIDATE" ? "text-orange-700" : "text-gray-700"
                    }`}
                  >
                    Candidate
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("RECRUITER")}
                  className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all ${
                    role === "RECRUITER"
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-300 hover:border-orange-300"
                  }`}
                >
                  <Briefcase
                    className={`w-8 h-8 mb-2 ${
                      role === "RECRUITER" ? "text-orange-600" : "text-gray-400"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      role === "RECRUITER" ? "text-orange-700" : "text-gray-700"
                    }`}
                  >
                    Recruiter
                  </span>
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mt-1"
                defaultChecked
              />
              <label className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <button
                  onClick={(e) => e.preventDefault()}
                  className="text-orange-600 hover:underline"
                >
                  Terms of Service
                </button>{" "}
                and{" "}
                <button
                  onClick={(e) => e.preventDefault()}
                  className="text-orange-600 hover:underline"
                >
                  Privacy Policy
                </button>
              </label>
            </div>

            {/* Error Message */}
            {err && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-700">{err}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={onSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 focus:ring-4 focus:ring-orange-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-500/30"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Creating account...
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">
                Or sign up with
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                Facebook
              </span>
            </button>
          </div>

          {/* Login Link */}

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-600 hover:text-orange-700 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center mt-6 text-sm text-gray-500">
          By signing up, you agree to our terms and conditions
        </p>
      </div>
    </div>
  );
}
