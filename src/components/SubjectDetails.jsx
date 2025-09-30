import AttendanceChart from "./AttendanceChart";
import AssignmentList from "../components/AssignmentList";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AttendanceCalendar({ attendanceData = [] }) {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-7 gap-2 text-center text-sm">
      {days.map((day) => {
        const status = attendanceData[day % (attendanceData.length || 1)];
        const isPresent = status?.present ?? Math.random() > 0.5;
        return (
          <div
            key={day}
            className={`w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition ${
              isPresent
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
}

export default function SubjectDetails({ subject }) {
  if (!subject)
    return (
      <div className="mt-8 text-center text-gray-500 italic">
        📚 Select a subject to view detailed insights
      </div>
    );

  return (
    <div className="mt-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-extrabold tracking-tight">
          {subject.name}
        </h2>
        <p className="text-sm opacity-90 mt-1">
          👨‍🏫 Instructor:{" "}
          <span className="font-medium">{subject.teacher}</span>
        </p>
      </div>

      {/* Attendance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Calendar View */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            📅 Attendance Calendar
          </h3>
          <AttendanceCalendar attendanceData={subject.attendanceData || []} />
        </div>

        {/* Graph View */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            📊 Attendance Graph
          </h3>
          <AttendanceChart data={subject.attendanceData || []} />
        </div>
      </div>

      {/* Scores Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mid Sem */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition border border-blue-100">
          <h3 className="text-lg font-semibold mb-4">📈 Mid Sem</h3>
          <div className="w-24 h-24">
            <CircularProgressbar
              value={subject.midSem || 0}
              text={`${subject.midSem || 0}%`}
              styles={buildStyles({
                textSize: "16px",
                textColor: "#2563eb",
                pathColor: "#3b82f6",
                trailColor: "#e5e7eb",
              })}
            />
          </div>
        </div>

        {/* End Sem */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition border border-green-100">
          <h3 className="text-lg font-semibold mb-4">🎯 End Sem</h3>
          <div className="w-24 h-24">
            <CircularProgressbar
              value={subject.endSem || 0}
              text={`${subject.endSem || 0}%`}
              styles={buildStyles({
                textSize: "16px",
                textColor: "#16a34a",
                pathColor: "#22c55e",
                trailColor: "#e5e7eb",
              })}
            />
          </div>
        </div>

        {/* Last Semester Result */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-md p-6 text-white flex flex-col items-center justify-center hover:shadow-2xl transition">
          <h3 className="text-lg font-semibold mb-3">🏆 Last Semester</h3>
          <p className="text-4xl font-extrabold">
            {subject.lastSem ? `${subject.lastSem}%` : "70%"}
          </p>
          <p className="mt-2 text-sm font-medium opacity-90">
            {subject.lastSem
              ? subject.lastSem >= 75
                ? "🎉 Distinction"
                : subject.lastSem >= 50
                ? "✅ Passed"
                : "⚠️ Needs Improvement"
              : "✅ Passed"}
          </p>
        </div>
      </div>

      {/* Past Semester Trend */}
      {subject.pastSems?.length > 0 && (
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            📊 Past Semester Performance
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subject.pastSems}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="sem" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar
                  dataKey="percentage"
                  fill="#6366f1"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Assignments */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          📝 Assignments
        </h3>
        <AssignmentList assignments={subject.assignments || []} />
      </div>

      {/* Extra Insights Section */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          🔍 Subject Insights
        </h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
          <li>
            Strengths:{" "}
            {subject.midSem > 70
              ? "Good grasp on core concepts"
              : "Needs better preparation"}
            .
          </li>
          <li>
            Weak Areas:{" "}
            {subject.attendanceData?.some((a) => a.attendance < 75)
              ? "Low attendance may affect performance"
              : "Attendance consistent"}
            .
          </li>
          <li>
            Assignments:{" "}
            {subject.assignments?.length > 0
              ? `${subject.assignments.length} pending`
              : "All cleared"}
            .
          </li>
        </ul>
      </div>

      {/* Upcoming Exams */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          📅 Upcoming Exams
        </h3>
        <p className="text-sm text-gray-600">
          Mid-term exams scheduled for <b>15th October</b>. Prepare modules 1–3
          thoroughly.
        </p>
      </div>
    </div>
  );
}
