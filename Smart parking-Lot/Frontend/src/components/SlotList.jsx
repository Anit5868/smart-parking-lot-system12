export default function SlotList({ slots }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-4 text-gray-800">All Slots</h2>
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-blue-100 text-gray-700">
          <tr>
            <th className="py-2 px-4">Slot No</th>
            <th className="py-2 px-4">Covered</th>
            <th className="py-2 px-4">EV</th>
            <th className="py-2 px-4">Occupied</th>
          </tr>
        </thead>
        <tbody>
          {slots.map((s) => (
            <tr
              key={s.slotNo}
              className={`text-center border-b border-gray-200 ${
                s.isPremium ? "bg-gradient-to-r from-yellow-200 to-yellow-300 font-semibold" : ""
              }`}
            >
              <td className="py-2 px-4">{s.slotNo}</td>
              <td className="py-2 px-4">{s.isCovered ? "Yes" : "No"}</td>
              <td className="py-2 px-4">{s.isEVCharging ? "Yes" : "No"}</td>
              <td className="py-2 px-4">{s.isOccupied ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
