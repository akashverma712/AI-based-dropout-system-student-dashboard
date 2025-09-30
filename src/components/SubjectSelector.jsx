import { BookOpen, ChevronDown } from "lucide-react";

export default function SubjectSelector({ subjects, onSelect }) {
  return (
    <div className="w-full mt-6">
      {/* Label */}
      <label
        htmlFor="subject"
        className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
      >
        <BookOpen className="w-5 h-5 text-blue-600" />
        Choose a Subject
      </label>

      {/* Select Box */}
      <div className="relative group">
        <select
          id="subject"
          onChange={(e) => onSelect(e.target.value)}
          className="w-full p-3 pr-10 rounded-2xl border border-gray-200 
            bg-gradient-to-r from-white to-blue-50 shadow-md cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400
            text-gray-800 font-medium transition-all group-hover:shadow-lg"
        >
          <option value="">-- Select Subject --</option>
          {subjects.map((s, i) => (
            <option key={i} value={s.name}>
              📘 {s.name} — {s.teacher}
            </option>
          ))}
        </select>

        {/* Dropdown Icon */}
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none transition group-hover:text-blue-600" />
      </div>

      {/* Helper Text */}
      <p className="mt-3 text-xs text-gray-500 italic">
        Select a subject to view <span className="font-semibold text-blue-600">attendance</span> &{" "}
        <span className="font-semibold text-green-600">assessments</span>.
      </p>
    </div>
  );
}
