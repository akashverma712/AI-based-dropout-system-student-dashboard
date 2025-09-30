export default function Gamification() {
    const badges = ["🏆 Consistency Star", "📚 Quick Learner", "🔥 Streak Master"];
    return (
      <div className="bg-white shadow-md p-4 rounded-xl">
        <h3 className="font-semibold mb-4">Gamified Rewards</h3>
        <ul className="space-y-2">
          {badges.map((badge, i) => (
            <li key={i} className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg">
              {badge}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  