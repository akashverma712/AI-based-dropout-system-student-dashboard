import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { week: "W1", marks: 65 },
  { week: "W2", marks: 70 },
  { week: "W3", marks: 60 },
  { week: "W4", marks: 80 },
];

export default function PerformanceChart() {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl w-full h-64">
      <h3 className="font-semibold mb-4">Performance Trend</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="marks" stroke="#facc15" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
