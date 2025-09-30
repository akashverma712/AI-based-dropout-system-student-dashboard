import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export default function Reports() {
  // Example Data
  const subjects = [
    { name: "Mathematics", midSem: 68, endSem: 74, practical: 28, attendance: 82 },
    { name: "Physics", midSem: 72, endSem: 81, practical: 30, attendance: 68 },
    { name: "Chemistry", midSem: 65, endSem: 70, practical: 25, attendance: 75 },
    { name: "Programming", midSem: 77, endSem: 83, practical: 27, attendance: 92 },
    { name: "Data Visualization", midSem: 71, endSem: 79, practical: 29, attendance: 74 },
  ];

  const fees = {
    tuition: 45000,
    hostel: 20000,
    exam: 5000,
    total: 70000,
    paid: 60000,
    due: 10000,
  };

  // Export to Excel
  const downloadReport = () => {
    const subjectSheet = XLSX.utils.json_to_sheet(subjects);
    const feesSheet = XLSX.utils.json_to_sheet([fees]);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, subjectSheet, "Subjects");
    XLSX.utils.book_append_sheet(workbook, feesSheet, "Fees");

    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    saveAs(new Blob([wbout], { type: "application/octet-stream" }), "Student_Report.xlsx");
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">📊 Student Reports</h1>

      {/* Subject Marks */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">Subject Marks</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-100">
              <th className="border p-2">Subject</th>
              <th className="border p-2">Mid Sem</th>
              <th className="border p-2">End Sem</th>
              <th className="border p-2">Practical</th>
              <th className="border p-2">Attendance %</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((s, i) => (
              <tr key={i} className="text-center hover:bg-gray-50">
                <td className="border p-2">{s.name}</td>
                <td className="border p-2">{s.midSem}</td>
                <td className="border p-2">{s.endSem}</td>
                <td className="border p-2">{s.practical}</td>
                <td className="border p-2">{s.attendance}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fees Details */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">Fees Details</h2>
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="border p-2 font-medium">Tuition</td>
              <td className="border p-2">₹{fees.tuition}</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Hostel</td>
              <td className="border p-2">₹{fees.hostel}</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Exam Fees</td>
              <td className="border p-2">₹{fees.exam}</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2 font-bold">Total</td>
              <td className="border p-2 font-bold">₹{fees.total}</td>
            </tr>
            <tr>
              <td className="border p-2">Paid</td>
              <td className="border p-2">₹{fees.paid}</td>
            </tr>
            <tr>
              <td className="border p-2 text-red-600">Due</td>
              <td className="border p-2 text-red-600">₹{fees.due}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadReport}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
      >
        ⬇️ Download Report (Excel)
      </button>
    </div>
  );
}
