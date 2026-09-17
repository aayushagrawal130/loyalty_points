import { Link } from "react-router-dom";
import {
  Car,
  ShieldCheck,
  Zap,
  Search,
  Clock3,
  ArrowRight,
} from "lucide-react";

function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3">
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

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold"
            >
              Get Started
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
              <ShieldCheck size={17} />
              Smart Parking Management
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mt-6">
              Manage your garage
              <span className="text-blue-400"> smarter.</span>
            </h2>

            <p className="text-slate-400 text-lg leading-8 mt-6 max-w-xl">
              ParkFlow helps parking attendants manage vehicle
              check-ins, check-outs, parking spots, availability,
              vehicle searches and accurate parking fees from one
              simple system.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/register"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3.5 rounded-xl font-semibold"
              >
                Start Managing
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/login"
                className="px-6 py-3.5 rounded-xl border border-slate-700 hover:bg-slate-900"
              >
                Sign In
              </Link>

            </div>

          </div>

          {/* Dashboard Preview */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">

            <div className="flex items-center justify-between mb-6">

              <div>
                <p className="text-sm text-slate-500">
                  Garage Overview
                </p>

                <h3 className="text-2xl font-bold mt-1">
                  Today's Parking
                </h3>
              </div>

              <span className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-2 rounded-lg text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Live
              </span>

            </div>

            <div className="grid grid-cols-3 gap-3">

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-xs text-slate-500">
                  Total
                </p>

                <p className="text-2xl font-bold mt-2">
                  100
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-xs text-slate-500">
                  Occupied
                </p>

                <p className="text-2xl font-bold mt-2">
                  72
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-xs text-slate-500">
                  Free
                </p>

                <p className="text-2xl font-bold text-green-400 mt-2">
                  28
                </p>
              </div>

            </div>

            <div className="mt-5 space-y-3">

              <ParkingRow
                name="Compact"
                available="12 available"
              />

              <ParkingRow
                name="Standard"
                available="16 available"
              />

              <ParkingRow
                name="EV Charging"
                available="8 available"
                ev
              />

            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="bg-slate-900 border-y border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-blue-400 text-sm font-semibold tracking-wider">
              KEY FEATURES
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Everything attendants need
            </h2>

            <p className="text-slate-400 mt-4">
              Manage the complete parking lifecycle from one
              reliable dashboard.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

            <Feature
              icon={<Car size={22} />}
              title="Vehicle Check-In"
              text="Quickly register vehicles and assign suitable parking spots."
            />

            <Feature
              icon={<Clock3 size={22} />}
              title="Accurate Billing"
              text="Calculate parking charges based on duration and rate cards."
            />

            <Feature
              icon={<Search size={22} />}
              title="Vehicle Search"
              text="Find active and completed parking sessions using plate numbers."
            />

            <Feature
              icon={<Zap size={22} />}
              title="EV Support"
              text="Ensure electric vehicles are assigned only to EV spots."
            />

          </div>

        </div>

      </section>

      {/* Audience */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-blue-400 text-sm font-semibold">
              BUILT FOR PARKING OPERATIONS
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Less manual work.
              <br />
              More control.
            </h2>

            <p className="text-slate-400 leading-7 mt-5">
              ParkFlow is designed for parking attendants and
              garage operators who need to track every vehicle,
              every parking spot and every parking session without
              double-parking or billing mistakes.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <InfoCard
              title="100%"
              text="Digital session tracking"
            />

            <InfoCard
              title="EV"
              text="Dedicated charging spots"
            />

            <InfoCard
              title="24h"
              text="Automated session handling"
            />

            <InfoCard
              title="API"
              text="REST-based architecture"
            />

          </div>

        </div>

      </section>

      {/* Future Features */}
      <section className="bg-slate-900">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <p className="text-blue-400 text-sm font-semibold">
            FUTURE ROADMAP
          </p>

          <h2 className="text-3xl font-bold mt-2">
            What's next?
          </h2>

          <div className="grid md:grid-cols-3 gap-5 mt-8">

            <Roadmap
              number="01"
              title="Analytics Dashboard"
              text="Monitor occupancy, revenue and garage performance."
            />

            <Roadmap
              number="02"
              title="Online Payments"
              text="Allow customers to pay parking fees digitally."
            />

            <Roadmap
              number="03"
              title="Mobile Attendant App"
              text="Manage check-ins and spot availability from mobile."
            />

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-500">

          <p>
            © 2026 ParkFlow. Parking Garage Management System.
          </p>

          <div className="flex gap-5">
            <Link to="/login" className="hover:text-white">
              Login
            </Link>

            <Link to="/register" className="hover:text-white">
              Register
            </Link>
          </div>

        </div>

      </footer>

    </div>
  );
}

function ParkingRow({ name, available, ev }) {
  return (
    <div className="flex items-center justify-between bg-slate-800 rounded-xl px-4 py-3">

      <div className="flex items-center gap-3">

        <div className={`p-2 rounded-lg ${ev ? "bg-blue-500/10 text-blue-400" : "bg-slate-700 text-slate-300"}`}>
          {ev ? <Zap size={17} /> : <Car size={17} />}
        </div>

        <span className="text-sm font-medium">
          {name}
        </span>

      </div>

      <span className="text-xs text-green-400">
        {available}
      </span>

    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">

      <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
        {icon}
      </div>

      <h3 className="font-bold text-lg mt-5">
        {title}
      </h3>

      <p className="text-slate-400 text-sm leading-6 mt-2">
        {text}
      </p>

    </div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="border border-slate-800 rounded-2xl p-6">

      <p className="text-3xl font-bold text-blue-400">
        {title}
      </p>

      <p className="text-sm text-slate-400 mt-2">
        {text}
      </p>

    </div>
  );
}

function Roadmap({ number, title, text }) {
  return (
    <div className="border border-slate-800 rounded-2xl p-6">

      <span className="text-blue-400 font-bold">
        {number}
      </span>

      <h3 className="text-xl font-bold mt-4">
        {title}
      </h3>

      <p className="text-slate-400 text-sm leading-6 mt-2">
        {text}
      </p>

    </div>
  );
}

export default Landing;
