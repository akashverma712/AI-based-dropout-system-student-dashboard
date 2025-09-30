export default function AssignmentList({ assignments }) {
    return (
      <div className="bg-white rounded-2xl shadow p-6 mt-4">
        <h2 className="font-bold mb-2">📑 Assignments</h2>
        <ul className="space-y-2">
          {assignments.map((a, i) => (
            <li
              key={i}
              className="p-2 bg-gray-100 rounded flex justify-between items-center"
            >
              <span>{a.title}</span>
              <span className="text-sm text-gray-500">Due: {a.due}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  