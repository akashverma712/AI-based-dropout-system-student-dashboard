import { useState } from "react";

export default function ProfileCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [profile, setProfile] = useState({
    name: "Akash Verma",
    regNo: "24030480014",
    year: "2nd Year",
    branch: "Information Technology",
    batch: "2024–2028",
    email: "akash@example.com",
    phone: "+91 9876543210",
    skills: "React, Node.js, Tailwind CSS",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setSaving(true);
    setSaved(false);

    // simulate API call / save delay
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setIsEditing(false);

      // hide success after 2 sec
      setTimeout(() => setSaved(false), 2000);
    }, 2000);
  };

  return (
    <div className="max-w-md sm:max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6">
        
        {/* Profile Image */}
        <div className="relative">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-md">
            <img
              src="/me.jpg"
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full shadow">
            Student
          </span>
        </div>

        {/* Profile Details */}
        <div className="flex-1 text-center sm:text-left w-full">
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mb-2"
              />
              <input
                type="text"
                name="regNo"
                value={profile.regNo}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mb-2"
              />
              <input
                type="text"
                name="year"
                value={profile.year}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mb-2"
              />
              <input
                type="text"
                name="branch"
                value={profile.branch}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mb-2"
              />
              <input
                type="text"
                name="batch"
                value={profile.batch}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mb-4"
              />

              <button
                onClick={handleSave}
                disabled={saving}
                className={`w-full sm:w-auto px-5 py-2 rounded-lg font-semibold transition 
                  ${saving ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"}`}
              >
                {saving ? "Saving..." : "Save"}
              </button>

              {/* Loader */}
              {saving && (
                <div className="mt-3 flex justify-center items-center text-green-600">
                  <div className="w-6 h-6 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="ml-2 font-medium">Saving...</span>
                </div>
              )}

              {/* ✅ Save Success Animation */}
              {saved && (
                <div className="mt-3 text-green-600 font-semibold animate-bounce">
                  ✅ Profile Saved Successfully!
                </div>
              )}
            </>
          ) : (
            <>
              <h2 className="text-2xl font-extrabold text-gray-900">{profile.name}</h2>
              <p className="text-sm text-gray-500 mb-4">🎓 {profile.branch}</p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-yellow-50 px-3 py-2 rounded-lg shadow-sm">
                  <p className="text-gray-600 font-medium">Reg. No</p>
                  <p className="text-gray-900 font-semibold">{profile.regNo}</p>
                </div>
                <div className="bg-blue-50 px-3 py-2 rounded-lg shadow-sm">
                  <p className="text-gray-600 font-medium">Year</p>
                  <p className="text-gray-900 font-semibold">{profile.year}</p>
                </div>
                <div className="bg-green-50 px-3 py-2 rounded-lg shadow-sm">
                  <p className="text-gray-600 font-medium">Branch</p>
                  <p className="text-gray-900 font-semibold">{profile.branch}</p>
                </div>
                <div className="bg-purple-50 px-3 py-2 rounded-lg shadow-sm">
                  <p className="text-gray-600 font-medium">Batch</p>
                  <p className="text-gray-900 font-semibold">{profile.batch}</p>
                </div>
              </div>

              {/* View More Section */}
              {showMore && (
                <div className="mt-4 text-sm space-y-2 animate-fadeIn">
                  <p><span className="font-medium">📧 Email:</span> {profile.email}</p>
                  <p><span className="font-medium">📞 Phone:</span> {profile.phone}</p>
                  <p><span className="font-medium">💡 Skills:</span> {profile.skills}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full sm:w-auto px-5 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
                >
                  Edit Profile
                </button>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="w-full sm:w-auto px-5 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition"
                >
                  {showMore ? "Hide Details" : "View More"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
