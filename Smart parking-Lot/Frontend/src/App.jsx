import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AddSlot from "./components/AddSlot";
import SlotList from "./components/SlotList";
import ParkVehicle from "./components/ParkVehicle";
import RemoveVehicle from "./components/RemoveVehicle";
import OutputPanel from "./components/OutputPanel";
import { getSlots } from "./services/api";

function App() {
  const [slots, setSlots] = useState([]);
  const [message, setMessage] = useState("System messages will appear here");

  const fetchSlots = async () => {
    const res = await getSlots();
    setSlots(res.data);
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">
        <AddSlot fetchSlots={fetchSlots} setMessage={setMessage} />
        <ParkVehicle fetchSlots={fetchSlots} setMessage={setMessage} />
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <SlotList slots={slots} />
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <RemoveVehicle fetchSlots={fetchSlots} setMessage={setMessage} />
      </div>

      {/* Popup Notification */}
      <OutputPanel message={message} />

    </div>
  );
}

export default App;
