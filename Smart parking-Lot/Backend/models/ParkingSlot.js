import mongoose from "mongoose";

const ParkingSlotSchema = new mongoose.Schema({
  slotNo: { type: String, required: true, unique: true },
  isCovered: { type: Boolean, required: true },
  isEVCharging: { type: Boolean, required: true },
  isOccupied: { type: Boolean, default: false }
});

export default mongoose.model("ParkingSlot", ParkingSlotSchema);
