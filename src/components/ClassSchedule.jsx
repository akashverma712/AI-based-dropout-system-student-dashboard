import { CalendarDays, Clock, BookOpen, User, BarChart } from "lucide-react";
import { motion } from "framer-motion";

export default function ClassSchedule({ schedule }) {
  if (!schedule || schedule.length === 0) {
    return (
      <p className="text-gray-500 italic">No schedule available right now.</p>
    );
  }

  // Group by day
  const grouped = schedule.reduce((acc, cls) => {
    if (!acc[cls.day]) acc[cls.day] = [];
    acc[cls.day].push(cls);
    return acc;
  }, {});

  // Attendance color helper
  const getAttendanceColor = (att) => {
    if (att < 50) return "bg-red-100 text-red-700 border-red-300";
    if (att < 75) return "bg-orange-100 text-orange-700 border-orange-300";
    return "bg-green-100 text-green-700 border-green-300";
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-md p-5 backdrop-blur">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <CalendarDays className="w-6 h-6 text-indigo-700" />
        <h3 className="text-xl font-bold text-gray-800">
          Weekly Class Schedule
        </h3>
      </div>

      {/* Days */}
      <div className="space-y-6">
        {Object.keys(grouped).map((day, i) => (
          <motion.div
            key={day}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="space-y-3"
          >
            {/* Day Heading */}
            <h4 className="text-base font-semibold text-indigo-600 flex items-center gap-2">
              📅 {day}
            </h4>

            {/* Classes */}
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-left text-xs">
                    <th className="p-2">⏰ Time</th>
                    <th className="p-2">📖 Subject</th>
                    <th className="p-2">📊 Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {grouped[day].map((cls, j) => (
                    <tr
                      key={j}
                      className="hover:bg-gray-50 transition border-b last:border-0"
                    >
                      {/* Time */}
                      <td className="p-2 text-gray-700 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-indigo-500" /> {cls.time}
                      </td>

                      {/* Subject + Teacher (subtitle) */}
                      <td className="p-2">
                        <div className="flex items-center gap-2 font-medium text-gray-800">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          {cls.subject}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 ml-6">
                          <User className="w-3 h-3" /> {cls.teacher}
                        </div>
                      </td>

                      {/* Attendance */}
                      <td className="p-2">
                        <span
                          className={`px-2 py-1 rounded-md text-xs font-semibold border inline-flex items-center gap-1 ${getAttendanceColor(
                            cls.attendance
                          )}`}
                        >
                          <BarChart className="w-3 h-3" />
                          {cls.attendance}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
