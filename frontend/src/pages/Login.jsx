import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Car, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
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

    // Backend authentication will be connected later.
    console.log("Login data:", formData);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-950 to-slate-950" />

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">

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

            <div className="flex items-center gap-3 mb-6">

              <div className="h-px w-10 bg-blue-500" />

              <span className="text-blue-400 text-sm font-semibold">
                SMART PARKING
              </span>

            </div>

            <h2 className="text-5xl font-bold leading-tight">
              Your garage.
              <br />
              <span className="text-blue-400">
                Under control.
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-8 mt-6">
              Manage parking sessions, spot availability and
              accurate billing from one powerful dashboard.
            </p>

          </div>

          <p className="text-slate-600 text-sm">
            © 2026 ParkFlow
          </p>

        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-6">

        <div className="w-full max-w-md">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="mb-8">

            <div className="lg:hidden flex items-center gap-3 mb-8">

              <div className="bg-blue-600 p-2 rounded-xl">
                <Car size={22} />
              </div>

              <span className="text-xl font-bold">
                Park<span className="text-blue-400">Flow</span>
              </span>

            </div>

            <h1 className="text-3xl font-bold">
              Welcome back
            </h1>

            <p className="text-slate-400 mt-2">
              Sign in to manage your parking garage.
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

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
                  placeholder="Enter your password"
                  required
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

            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-slate-400">

                <input
                  type="checkbox"
                  className="accent-blue-600"
                />

                Remember me

              </label>

              <button
                type="button"
                className="text-blue-400 hover:text-blue-300"
              >
                Forgot password?
              </button>

            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 py-3.5 rounded-xl font-semibold transition"
            >
              Sign In
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

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-blue-400 font-semibold hover:text-blue-300"
            >
              Create account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;
