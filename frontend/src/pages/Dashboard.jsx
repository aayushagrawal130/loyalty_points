import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Car,
  CircleParking,
  Zap,
  Search,
  LogIn,
  LogOut,
  Clock3,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function Dashboard() {
  const [search, setSearch] = useState("");

  const vehicles = [
    {
      plate: "RJ14AB1234",
      type: "Standard",
      spot: "L1-S024",
      entry: "10:32 AM",
      status: "Parked",
    },
    {
      plate: "RJ14CD5678",
      type: "EV",
      spot: "L2-E008",
      entry: "10:18 AM",
      status: "Parked",
    },
    {
      plate: "RJ14EF9012",
      type: "Compact",
      spot: "L1-C014",
      entry: "09:54 AM",
      status: "Parked",
    },
    {
      plate: "RJ14GH3456",
      type: "Standard",
      spot: "L2-S019",
      entry: "09:21 AM",
      status: "Parked",
    },
  ];

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.plate.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <header className="bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3">

            <div className="bg-blue-600 p-2.5 rounded-xl">
              <Car size={22} />
            </div>

            <div>
              <h1 className="font-bold text-lg">
                Park<span className="text-blue-400">Flow</span>
              </h1>

              <p className="text-xs text-slate-500">
                Garage Management
              </p>
            </div>

          </Link>

          <div className="flex items-center gap-5">

            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium">
                Parking Attendant
              </p>

              <p className="text-xs text-green-400">
                ● System Online
              </p>
            </div>

            <Link
              to="/"
              className="text-sm text-slate-400 hover:text-white"
            >
              Logout
            </Link>

          </div>

        </div>

      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div>
            <p className="text-sm text-slate-500">
              Parking Operations
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-1">
              Today's Dashboard
            </h2>

            <p className="text-slate-500 text-sm mt-2">
              Monitor your garage and manage parking sessions.
            </p>
          </div>

          <div className="flex gap-3">

            <Link
              to="/check-in"
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700"
            >
              <LogIn size={18} />
              Check In
            </Link>

            <Link
              to="/check-out"
              className="flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50"
            >
              <LogOut size={18} />
              Check Out
            </Link>

          </div>

        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

          <Stat
            title="Total Spots"
            value="100"
            subtitle="Across all levels"
            icon={<CircleParking size={22} />}
          />

          <Stat
            title="Occupied"
            value="72"
            subtitle="72% occupancy"
            icon={<Car size={22} />}
          />

          <Stat
            title="Available"
            value="28"
            subtitle="Ready for vehicles"
            icon={<CircleParking size={22} />}
            positive
          />

          <Stat
            title="EV Available"
            value="8"
            subtitle="Charging spots"
            icon={<Zap size={22} />}
            positive
          />

        </div>

        {/* Search */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 mt-6">

          <div className="flex items-center gap-2 mb-4">

            <Search size={20} className="text-blue-600" />

            <div>
              <h3 className="font-bold">
                Find a Vehicle
              </h3>

              <p className="text-xs text-slate-500">
                Search by license plate
              </p>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row gap-3">

            <div className="relative flex-1">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g. RJ14AB1234"
                className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-500"
              />

            </div>

            <button className="bg-slate-950 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800">
              Search
            </button>

          </div>

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-6">

          {/* Sessions */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl overflow-hidden">

            <div className="p-5 border-b border-slate-100 flex justify-between items-center">

              <div>
                <h3 className="font-bold text-lg">
                  Active Parking Sessions
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Vehicles currently inside the garage
                </p>
              </div>

              <Link
                to="/sessions"
                className="text-sm text-blue-600 hover:underline"
              >
                View all
              </Link>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="text-xs text-slate-500 border-b border-slate-100">

                    <th className="text-left px-5 py-4">
                      Vehicle
                    </th>

                    <th className="text-left px-5 py-4">
                      Type
                    </th>

                    <th className="text-left px-5 py-4">
                      Spot
                    </th>

                    <th className="text-left px-5 py-4">
                      Entry
                    </th>

                    <th className="text-left px-5 py-4">
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredVehicles.map((vehicle) => (

                    <tr
                      key={vehicle.plate}
                      className="border-b border-slate-50 hover:bg-slate-50"
                    >

                      <td className="px-5 py-4">

                        <p className="font-semibold text-sm">
                          {vehicle.plate}
                        </p>

                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600">
                        {vehicle.type}
                      </td>

                      <td className="px-5 py-4">

                        <span className="font-medium text-sm">
                          {vehicle.spot}
                        </span>

                      </td>

                      <td className="px-5 py-4 text-sm text-slate-500">
                        {vehicle.entry}
                      </td>

                      <td className="px-5 py-4">

                        <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                          {vehicle.status}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            {/* Pagination */}
            <div className="px-5 py-4 border-t border-slate-100 flex items-center justify-between">

              <p className="text-xs text-slate-500">
                Showing 1–4 of 72 sessions
              </p>

              <div className="flex gap-2">

                <button className="border border-slate-200 p-2 rounded-lg">
                  <ChevronLeft size={16} />
                </button>

                <button className="border border-slate-200 p-2 rounded-lg">
                  <ChevronRight size={16} />
                </button>

              </div>

            </div>

          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">

            <h3 className="font-bold text-lg">
              Quick Actions
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Common garage operations
            </p>

            <div className="space-y-3 mt-5">

              <Action
                to="/check-in"
                icon={<LogIn size={19} />}
                title="Vehicle Check-In"
                text="Register vehicle and assign spot"
              />

              <Action
                to="/check-out"
                icon={<LogOut size={19} />}
                title="Vehicle Check-Out"
                text="Calculate fee and release spot"
              />

              <Action
                to="/spots"
                icon={<Zap size={19} />}
                title="Spot Availability"
                text="Check available parking spots"
              />

              <Action
                to="/sessions"
                icon={<Search size={19} />}
                title="Search Sessions"
                text="Find a vehicle by plate"
              />

            </div>

            {/* Garage Status */}
            <div className="bg-slate-50 rounded-xl p-4 mt-5">

              <div className="flex items-center gap-2">

                <Clock3 size={18} className="text-blue-600" />

                <span className="font-semibold text-sm">
                  Garage Status
                </span>

              </div>

              <div className="flex justify-between mt-3 text-sm">

                <span className="text-slate-500">
                  Operating normally
                </span>

                <span className="text-green-600 font-medium">
                  Online
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Spot Overview */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-6">

          <div className="flex justify-between items-center">

            <div>
              <h3 className="font-bold text-lg">
                Parking Overview
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Current availability by spot type
              </p>
            </div>

            <Link
              to="/spots"
              className="text-sm text-blue-600"
            >
              Manage spots →
            </Link>

          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">

            <SpotOverview
              title="Compact"
              total="30"
              available="12"
            />

            <SpotOverview
              title="Standard"
              total="60"
              available="16"
            />

            <SpotOverview
              title="EV"
              total="10"
              available="8"
              ev
            />

          </div>

        </div>

      </main>

    </div>
  );
}

function Stat({ title, value, subtitle, icon, positive }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5">

      <div className="flex justify-between items-start">

        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <p className="text-3xl font-bold mt-2">
            {value}
          </p>
        </div>

        <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
          {icon}
        </div>

      </div>

      <p className={`text-xs mt-4 ${positive ? "text-green-600" : "text-slate-400"}`}>
        {subtitle}
      </p>

    </div>
  );
}

function Action({ to, icon, title, text }) {
  return (
    <Link
      to={to}
      className="flex gap-3 items-center p-4 border border-slate-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition"
    >

      <div className="bg-blue-50 text-blue-600 p-2.5 rounded-lg">
        {icon}
      </div>

      <div>
        <p className="font-semibold text-sm">
          {title}
        </p>

        <p className="text-xs text-slate-500 mt-1">
          {text}
        </p>
      </div>

    </Link>
  );
}

function SpotOverview({ title, total, available, ev }) {
  return (
    <div className="border border-slate-200 rounded-xl p-5">

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <div className={`p-2 rounded-lg ${
            ev
              ? "bg-blue-50 text-blue-600"
              : "bg-slate-100 text-slate-600"
          }`}>
            {ev ? <Zap size={19} /> : <Car size={19} />}
          </div>

          <span className="font-semibold">
            {title}
          </span>

        </div>

        <ArrowUpDown size={16} className="text-slate-400" />

      </div>

      <div className="flex justify-between mt-5">

        <div>
          <p className="text-xs text-slate-500">
            Total
          </p>

          <p className="text-xl font-bold mt-1">
            {total}
          </p>
        </div>

        <div className="text-right">

          <p className="text-xs text-slate-500">
            Available
          </p>

          <p className="text-xl font-bold text-green-600 mt-1">
            {available}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
