import { Bell } from "lucide-react";
import { useState } from "react";

export default function NotificationBar({ notifications: initialNotifications }) {
  const [notifications, setNotifications] = useState(initialNotifications);

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-4 rounded-xl shadow-lg w-full max-w-md animate-slideDown">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <Bell className="w-5 h-5 text-yellow-600" />
        <h2 className="font-bold text-yellow-800 text-lg">Notifications</h2>
      </div>

      {/* Notifications List */}
      {notifications.length > 0 ? (
        <>
          <ul className="space-y-2 max-h-48 overflow-y-auto pr-2">
            {notifications.map((note, i) => (
              <li
                key={i}
                className="bg-white shadow-sm rounded-md p-2 text-sm text-gray-700 hover:bg-yellow-50 transition-colors"
              >
                {note}
              </li>
            ))}
          </ul>

          {/* Clear All Button */}
          <div className="flex justify-end mt-3">
            <button
              onClick={clearAll}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1.5 rounded-lg shadow-md text-sm font-medium hover:opacity-90 transition-all"
            >
              Clear All
            </button>
          </div>
        </>
      ) : (
        <p className="text-sm text-gray-500">No new notifications</p>
      )}
    </div>
  );
}
