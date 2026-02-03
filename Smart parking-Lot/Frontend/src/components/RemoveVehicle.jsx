import { useState } from "react";
import { removeVehicle } from "../services/api";

export default function RemoveVehicle({ fetchSlots, setMessage }) {
  const [slotNo, setSlotNo] = useState("");

  const handleRemove = async () => {
    try {
      const res = await removeVehicle({ slotNo });
      setMessage(res.data.message);
      fetchSlots();
      setSlotNo("");
    } catch (error) {
      setMessage("Error: Slot not found");
    }
  };

  return (
    <div className="bg-sky-400 text-white p-6 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Remove Vehicle</h2>
      <input
        className="border p-2 w-full text-black"
        placeholder="Enter Slot No"
        value={slotNo}
        onChange={(e) => setSlotNo(e.target.value)}
      />
      <button
        onClick={handleRemove}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded w-full"
      >
        Remove Vehicle
      </button>
    </div>
  );
}
