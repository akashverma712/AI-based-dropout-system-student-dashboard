export default function DashboardCard({ title, value, color }) {
    return (
      <div className={`p-6 rounded-xl shadow-md text-white ${color}`}>
        <h3 className="text-lg">{title}</h3>
        <p className="text-3xl font-bold mt-2">{value}</p>
      </div>
    );
  }
  