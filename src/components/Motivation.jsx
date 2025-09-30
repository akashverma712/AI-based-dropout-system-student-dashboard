export default function Motivation() {
    const quotes = [
      "🌟 Success is the sum of small efforts, repeated daily.",
      "📖 Learning never exhausts the mind.",
      "🚀 Believe you can, and you're halfway there."
    ];
    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
    return (
      <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 p-4 rounded-xl shadow-md text-black">
        <h3 className="font-semibold">✨ Daily Motivation</h3>
        <p className="mt-2 italic">{todayQuote}</p>
      </div>
    );
  }
  