import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Car,
  ArrowLeft,
  MapPin,
  Zap,
  Clock3,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

function CheckIn() {
  const [formData, setFormData] = useState({
    plate: "",
    vehicleType: "standard",
    level: "1",
    spot: "",
  });

  const [message, setMessage] = useState("");

  const spots = {
    compact: ["L1-C014", "L1-C015", "L1-C016", "L2-C021"],
    standard: ["L1-S024", "L1-S025", "L2-S019", "L2-S020"],
    ev: ["L1-E003", "L1-E004", "L2-E008"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "vehicleType" ? { spot: "" } : {}),
    }));

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.spot) {
      setMessage("Please select a parking spot.");
      return;
    }

    setMessage(
      `Vehicle ${formData.plate.toUpperCase()} is ready for check-in.`
    );
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <header className="bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link to="/dashboard" className="flex items-center gap-3">

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

          <Link
            to="/dashboard"
            className="text-sm text-slate-400 hover:text-white"
          >
            Dashboard
          </Link>

        </div>

      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-10">

        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <div className="mt-6 mb-8">

          <p className="text-sm text-blue-600 font-semibold">
            PARKING OPERATION
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-1">
            Vehicle Check-In
          </h2>

          <p className="text-slate-500 mt-2">
            Register a vehicle and assign an appropriate parking spot.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Form */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6">

            <div className="flex items-center gap-3 pb-5 border-b border-slate-100">

              <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
                <Car size={22} />
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Vehicle Details
                </h3>

                <p className="text-sm text-slate-500">
                  Enter the vehicle information below.
                </p>
              </div>

            </div>

            <form onSubmit={handleSubmit} className="space-y-6 mt-6">

              {/* Plate */}
              <div>

                <label className="block text-sm font-semibold mb-2">
                  License Plate
                </label>

                <input
                  type="text"
                  name="plate"
                  value={formData.plate}
                  onChange={handleChange}
                  placeholder="e.g. RJ14AB1234"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 uppercase outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />

                <p className="text-xs text-slate-400 mt-2">
                  Enter the vehicle registration number.
                </p>

              </div>

              {/* Vehicle Type */}
              <div>

                <label className="block text-sm font-semibold mb-3">
                  Vehicle Type
                </label>

                <div className="grid sm:grid-cols-3 gap-3">

                  <VehicleType
                    value="compact"
                    selected={formData.vehicleType === "compact"}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        vehicleType: "compact",
                        spot: "",
                      })
                    }
                    title="Compact"
                    description="Small vehicles"
                    icon={<Car size={20} />}
                  />

                  <VehicleType
                    value="standard"
                    selected={formData.vehicleType === "standard"}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        vehicleType: "standard",
                        spot: "",
                      })
                    }
                    title="Standard"
                    description="Regular vehicles"
                    icon={<Car size={20} />}
                  />

                  <VehicleType
                    value="ev"
                    selected={formData.vehicleType === "ev"}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        vehicleType: "ev",
                        spot: "",
                      })
                    }
                    title="EV"
                    description="Charging required"
                    icon={<Zap size={20} />}
                  />

                </div>

              </div>

              {/* Level + Spot */}
              <div className="grid sm:grid-cols-2 gap-5">

                <div>

                  <label className="block text-sm font-semibold mb-2">
                    Garage Level
                  </label>

                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 bg-white"
                  >
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                    <option value="4">Level 4</option>
                  </select>

                </div>

                <div>

                  <label className="block text-sm font-semibold mb-2">
                    Parking Spot
                  </label>

                  <select
                    name="spot"
                    value={formData.spot}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 bg-white"
                  >

                    <option value="">
                      Select available spot
                    </option>

                    {spots[formData.vehicleType].map((spot) => (
                      <option key={spot} value={spot}>
                        {spot}
                      </option>
                    ))}

                  </select>

                </div>

              </div>

              {/* Entry Time */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center gap-3">

                <Clock3
                  size={20}
                  className="text-blue-600"
                />

                <div>

                  <p className="text-sm font-semibold">
                    Entry Time
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Recorded automatically when the vehicle is checked in.
                  </p>

                </div>

                <span className="ml-auto text-sm font-medium text-slate-700">
                  Now
                </span>

              </div>

              {/* Message */}
              {message && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 flex items-center gap-3">

                  <CheckCircle2 size={20} />

                  <p className="text-sm font-medium">
                    {message}
                  </p>

                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold transition"
              >
                Check In Vehicle
              </button>

            </form>

          </div>

          {/* Information */}
          <div className="space-y-5">

            <div className="bg-slate-950 text-white rounded-2xl p-6">

              <div className="flex items-center gap-3">

                <MapPin className="text-blue-400" size={21} />

                <h3 className="font-bold">
                  Spot Rules
                </h3>

              </div>

              <div className="space-y-4 mt-5">

                <Rule
                  title="Compact"
                  text="For compact vehicles."
                />

                <Rule
                  title="Standard"
                  text="For regular-sized vehicles."
                />

                <Rule
                  title="EV"
                  text="Only electric vehicles can use EV spots."
                />

              </div>

            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">

              <div className="flex items-center gap-3">

                <Zap className="text-blue-600" size={21} />

                <h3 className="font-bold">
                  EV Availability
                </h3>

              </div>

              <div className="mt-5">

                <p className="text-3xl font-bold">
                  8
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  EV spots currently available
                </p>

              </div>

              <div className="mt-5 h-2 bg-slate-100 rounded-full overflow-hidden">

                <div className="h-full bg-blue-500 w-4/5 rounded-full" />

              </div>

            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3">

              <AlertCircle
                size={20}
                className="text-amber-600 shrink-0"
              />

              <p className="text-sm text-amber-800">
                The same parking spot must never be assigned to
                two active vehicles.
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

function VehicleType({
  selected,
  onClick,
  title,
  description,
  icon,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left border rounded-xl p-4 transition ${
        selected
          ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500"
          : "border-slate-200 hover:border-blue-300"
      }`}
    >

      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          selected
            ? "bg-blue-600 text-white"
            : "bg-slate-100 text-slate-500"
        }`}
      >
        {icon}
      </div>

      <p className="font-semibold text-sm mt-3">
        {title}
      </p>

      <p className="text-xs text-slate-500 mt-1">
        {description}
      </p>

    </button>
  );
}

function Rule({ title, text }) {
  return (
    <div>

      <p className="font-semibold text-sm">
        {title}
      </p>

      <p className="text-xs text-slate-400 mt-1">
        {text}
      </p>

    </div>
  );
}

export default CheckIn;
