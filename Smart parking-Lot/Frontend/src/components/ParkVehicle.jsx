import { useState } from "react";
import { parkVehicle } from "../services/api";

export default function ParkVehicle({ fetchSlots, setMessage }) {
  const [needsEV, setNeedsEV] = useState(false);
  const [needsCover, setNeedsCover] = useState(false);

  const handlePark = async () => {
    const res = await parkVehicle({ needsEV, needsCover });
    setMessage(res.data.message);
    fetchSlots();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/parking.jpg')", // <-- your image name here
          opacity: 0.2, // dim the image
          filter: "blur(1px)" // optional: makes text more readable
        }}
      ></div>

      {/* Park Card */}
      <div className="relative z-10 bg-gray-50 p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Park</h2>

        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            onChange={(e) => setNeedsEV(e.target.checked)}
            className="accent-blue-500"
          />
          Needs EV Charging
        </label>

        <label className="flex gap-2 mt-2 items-center">
          <input
            type="checkbox"
            onChange={(e) => setNeedsCover(e.target.checked)}
            className="accent-teal-500"
          />
          Needs Covered Slot
        </label>

        <button
          onClick={handlePark}
          className="mt-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-3xl w-full font-semibold hover:from-blue-600 hover:to-teal-600 transition-colors"
        >
          Park
        </button>
      </div>
    </div>
  );
}
