import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ onToggleNotifications }) {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      {/* Left: Logo/Title */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">🎓</span>
        <div>
          <h1 className="text-lg sm:text-xl font-extrabold leading-tight">
            Student Dashboard
          </h1>
          <p className="text-xs text-purple-200 hidden sm:block">
            Manage your academics smartly
          </p>
        </div>
      </div>

      {/* Right: Navigation + Actions */}
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:underline font-medium">Dashboard</Link>
        <Link to="/connect" className="hover:underline font-medium">Student Connect</Link>
        <Link to="/reports" className="hover:underline font-medium">Reports</Link>

        {/* Notifications */}
        <button
          onClick={onToggleNotifications}
          className="relative bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
        >
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
        </button>

        {/* Profile Avatar */}
        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-md cursor-pointer hover:scale-105 transition-transform">
          <img
            src="/me.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}
