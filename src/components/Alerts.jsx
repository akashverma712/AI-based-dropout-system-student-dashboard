export default function Alerts() {
    return (
      <div className="bg-red-100 p-4 rounded-xl shadow-md">
        <h3 className="font-bold text-red-600">⚠ Alerts</h3>
        <ul className="mt-2 space-y-2 text-sm">
          <li>Attendance below 75% in Mathematics</li>
          <li>Low marks trend in Physics (last 2 tests)</li>
        </ul>
      </div>
    );
  }
  