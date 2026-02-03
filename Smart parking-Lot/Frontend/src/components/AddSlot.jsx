import { useState } from "react";
import { addSlot } from "../services/api";

export default function AddSlot({ fetchSlots, setMessage }) {
  const [slotNo, setSlotNo] = useState("");
  const [isCovered, setIsCovered] = useState(false);
  const [isEVCharging, setIsEVCharging] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addSlot({ slotNo, isCovered, isEVCharging });

      setMessage(res.data.message); // Show in Output Panel
      fetchSlots(); // Auto refresh table

      setSlotNo("");
      setIsCovered(false);
      setIsEVCharging(false);
    } catch (error) {
      setMessage("Error: Slot already exists");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Add Parking Slot</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="border p-2 w-full"
          placeholder="Slot No"
          value={slotNo}
          onChange={(e) => setSlotNo(e.target.value)}
          required
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isCovered}
            onChange={(e) => setIsCovered(e.target.checked)}
          />
          Covered
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isEVCharging}
            onChange={(e) => setIsEVCharging(e.target.checked)}
          />
          EV Charging
        </label>

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Add Slot
        </button>
      </form>
    </div>
  );
}
