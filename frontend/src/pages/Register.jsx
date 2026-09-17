import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Car,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend registration will be connected later.
    console.log("Registration data:", formData);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-950 to-slate-950" />

        <div className="relative z-10 p-12 flex flex-col justify-between w-full">

          <Link to="/" className="flex items-center gap-3 w-fit">

            <div className="bg-blue-600 p-2.5 rounded-xl">
              <Car size={24} />
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Park<span className="text-blue-400">Flow</span>
              </h1>

              <p className="text-xs text-slate-500">
                Garage Management
              </p>
            </div>

          </Link>

          <div className="max-w-lg">

            <p className="text-blue-400 text-sm font-semibold mb-5">
              GET STARTED
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Run your parking
              <span className="text-blue-400"> smarter.</span>
            </h2>

            <p className="text-slate-400 text-lg leading-8 mt-6">
              Create your attendant account and get access to
              vehicle management, parking availability and
              automated billing.
            </p>

            <div className="space-y-4 mt-8">

              <Benefit text="Manage vehicle check-ins and check-outs" />

              <Benefit text="Track Compact, Standard and EV spots" />

              <Benefit text="Search parking sessions by plate number" />

              <Benefit text="Calculate accurate parking fees" />

            </div>

          </div>

          <p className="text-slate-600 text-sm">
            © 2026 ParkFlow
          </p>

        </div>

      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center p-6 py-12">

        <div className="w-full max-w-md">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">

            <div className="bg-blue-600 p-2 rounded-xl">
              <Car size={22} />
            </div>

            <span className="text-xl font-bold">
              Park<span className="text-blue-400">Flow</span>
            </span>

          </div>

          <div className="mb-8">

            <h1 className="text-3xl font-bold">
              Create your account
            </h1>

            <p className="text-slate-400 mt-2">
              Set up your parking attendant account.
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>

              <label className="block text-sm font-medium mb-2">
                Full name
              </label>

              <div className="relative">

                <User
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-slate-600"
                />

              </div>

            </div>

            {/* Email */}
            <div>

              <label className="block text-sm font-medium mb-2">
                Email address
              </label>

              <div className="relative">

                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-slate-600"
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="block text-sm font-medium mb-2">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                  minLength={6}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3.5 pl-12 pr-12 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-slate-600"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 text-sm text-slate-400 cursor-pointer">

              <input
                type="checkbox"
                required
                className="mt-1 accent-blue-600"
              />

              <span>
                I agree to use ParkFlow for authorized parking
                management operations.
              </span>

            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 py-3.5 rounded-xl font-semibold transition"
            >
              Create Account
            </button>

          </form>

          <div className="flex items-center gap-4 my-7">

            <div className="h-px bg-slate-800 flex-1" />

            <span className="text-slate-600 text-sm">
              OR
            </span>

            <div className="h-px bg-slate-800 flex-1" />

          </div>

          <p className="text-center text-slate-400 text-sm">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-blue-400 font-semibold hover:text-blue-300"
            >
              Sign in
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

function Benefit({ text }) {
  return (
    <div className="flex items-center gap-3">

      <CheckCircle2
        size={19}
        className="text-blue-400 shrink-0"
      />

      <span className="text-slate-300">
        {text}
      </span>

    </div>
  );
}

export default Register;
