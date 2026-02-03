import { useEffect, useState } from "react";

export default function OutputPanel({ message }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message && message !== "System messages will appear here") {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!visible) return null;

  const isError = message.toLowerCase().includes("error") || message.toLowerCase().includes("no slot");

  return (
    <div
      className={`fixed top-5 right-5 px-6 py-3 rounded-lg shadow-lg text-white transition-all duration-300 ${
        isError ? "bg-orange-500" : "bg-blue-500"
      }`}
    >
      {message}
    </div>
  );
}
