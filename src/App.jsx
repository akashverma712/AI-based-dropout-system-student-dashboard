import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import NotificationBar from "./components/NotificationBar";
import SubjectSelector from "./components/SubjectSelector";
import SubjectDetails from "./components/SubjectDetails";
import ClassSchedule from "./components/ClassSchedule";
import StudentConnect from "./components/StudentConnect";
import ReportCard from "./components/ReportCard"; // 🆕 Added

function Dashboard() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // 🔔 Notifications
  const notifications = [
    "Low attendance in Programming for Problem Solving.",
    "Assignment due tomorrow in Engineering Physics.",
    "Mid-sem results published.",
  ];

  // 📚 Subjects
  const subjects = [
    {
      name: "Engineering Mathematics",
      teacher: "Aparna Das",
      midSem: 68,
      endSem: 74,
      practical: 30,
      attendance: 82,
    },
    {
      name: "Engineering Physics",
      teacher: "Sadanand Bimal",
      midSem: 72,
      endSem: 81,
      practical: 28,
      attendance: 79,
    },
    {
      name: "Programming for Problem Solving",
      teacher: "Vijay Besra",
      midSem: 65,
      endSem: 70,
      practical: 32,
      attendance: 70,
    },
    {
      name: "EDCG",
      teacher: "N. Pratap",
      midSem: 77,
      endSem: 83,
      practical: 29,
      attendance: 87,
    },
    {
      name: "Data Visualisation and Processing",
      teacher: "Tapan Kumar",
      midSem: 71,
      endSem: 79,
      practical: 30,
      attendance: 76,
    },
  ];

  // 🗓️ Schedule with attendance
  const schedule = [
    { day: "Monday", time: "9:00 - 10:00 AM", subject: "Mathematics", teacher: "Aparna Das", attendance: 82 },
    { day: "Monday", time: "10:00 - 11:00 AM", subject: "Physics", teacher: "Sadanand Bimal", attendance: 68 },
    { day: "Monday", time: "11:30 - 12:30 PM", subject: "Chemistry", teacher: "Dr. Mehta", attendance: 45 },
    { day: "Tuesday", time: "9:00 - 10:00 AM", subject: "Programming", teacher: "Vijay Besra", attendance: 92 },
    { day: "Tuesday", time: "10:15 - 11:15 AM", subject: "English", teacher: "Dr. Roy", attendance: 55 },
    { day: "Wednesday", time: "11:00 - 12:00 PM", subject: "EDCG", teacher: "N. Pratap", attendance: 87 },
    { day: "Thursday", time: "1:00 - 2:00 PM", subject: "Data Visualization", teacher: "Tapan Kumar", attendance: 74 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar onToggleNotifications={() => setShowNotifications(!showNotifications)} />

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Left Panel */}
        <div className="space-y-6">
          <ProfileCard />

          {showNotifications && <NotificationBar notifications={notifications} />}

          <SubjectSelector
            subjects={subjects}
            onSelect={(name) => setSelectedSubject(subjects.find((s) => s.name === name))}
          />

          <ClassSchedule schedule={schedule} />

          {/* 🔗 Student Detail Form Card */}
          <div className="bg-gradient-to-r from-indigo-50 to-white p-5 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2 text-indigo-800 flex items-center gap-2">
              📝 Student Detail Form
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Fill out your details for academic tracking
            </p>
            <a
              href="https://akash-jeager14.app.n8n.cloud/form-test/2059daa8-5818-4219-87f0-dfe194672193"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Open Form
            </a>
          </div>
        </div>

        {/* Right Panel */}
        <div className="col-span-2">
          <SubjectDetails subject={selectedSubject} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/connect" element={<StudentConnect />} />
        <Route path="/reports" element={<ReportCard />} /> {/* ✅ Fixed route */}
      </Routes>
    </Router>
  );
}

export default App;
