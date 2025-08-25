import React from "react";
import { Trophy } from "lucide-react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

const games = [
  {
    id: "coding",
    title: "Coding Challenges",
    category: "Programming",
    difficulty: "Easy - Expert",
    desc: "Test your programming logic and problem-solving skills with diverse coding puzzles.",
    img: "/game1.jpg",
    rewardXP: 100,
  },
  {
    id: "quizzes",
    title: "Skill Quizzes",
    category: "Knowledge",
    difficulty: "All Levels",
    desc: "Prove your knowledge in various fields with engaging quizzes.",
    img: "/game2.jpg",
    rewardXP: 80,
  },
  {
    id: "word",
    title: "Word Puzzles",
    category: "Language",
    difficulty: "Medium",
    desc: "Sharpen vocabulary and word association skills with crosswords, anagrams, and more.",
    img: "/game3.jpg",
    rewardXP: 70,
  },
  {
    id: "logic",
    title: "Logic & Strategy",
    category: "Strategy",
    difficulty: "Hard",
    desc: "Engage your brain with games requiring critical thinking and planning.",
    img: "/game4.jpg",
    rewardXP: 120,
  },
  {
    id: "memory",
    title: "Memory Match",
    category: "Memory",
    difficulty: "Easy",
    desc: "Improve your memory with fun matching games designed for recall.",
    img: "/game5.jpg",
    rewardXP: 60,
  },
  {
    id: "math",
    title: "Quick Math",
    category: "Math",
    difficulty: "Medium",
    desc: "Brush up arithmetic with speed-based math challenges that scale in difficulty.",
    img: "/game6.jpg",
    rewardXP: 90,
  },
];

const leaderboard = [
  { rank: 1, name: "Alice Smith", xp: 5200, avatar: "/ply1.jpg", country: "USA" },
  { rank: 2, name: "Bob Johnson", xp: 4800, avatar: "/ply2.jpg", country: "UK" },
  { rank: 3, name: "Charlie Brown", xp: 4500, avatar: "/ply3.jpg", country: "Canada" },
  { rank: 4, name: "Diana Prince", xp: 4100, avatar: "/ply4.jpg", country: "India" },
  { rank: 5, name: "Ethan Hunt", xp: 3900, avatar: "/ply5.jpg", country: "Germany" },
];

const badges = [
  { id: 1, title: "First Quest", desc: "Completed your very first mini-game!", earned: true, image: "/bdg1.jpg" },
  { id: 2, title: "Quiz Master", desc: "Achieved top score in 5 skill quizzes.", earned: true, image: "/bdg2.jpg" },
  { id: 3, title: "Code Conqueror", desc: "Solved 10 coding challenges.", earned: false, image: "/bdg3.jpg" },
  { id: 4, title: "Word Whiz", desc: "Perfect score in 5 word puzzles.", earned: false, image: "/bdg4.jpg" },
  { id: 5, title: "Daily Streak", desc: "7 days of consecutive play.", earned: true, image: "/bdg5.jpg" },
  { id: 6, title: "Elite Player", desc: "Ranked in top 10 on any leaderboard.", earned: false, image: "/bdg6.jpg" },
  { id: 7, title: "Skill Explorer", desc: "Played at least one game in every category.", earned: true, image: "/bdg7.jpg" },
  { id: 8, title: "Strategist", desc: "Won 3 strategy-based mini-games.", earned: false, image: "/bdg8.jpg" },
];

const userProgress = {
  level: 7,
  currentXP: 1250,
  nextLevelXP: 2000,
};

const dailyChallenge = {
  id: "daily-coding-sprint",
  title: "Daily Coding Sprint: Arrays",
  desc: "Solve 5 array manipulation problems in 15 minutes to test logic and speed.",
  rewardXP: 150,
  img: "/dailychlg.jpg",
};

export default function Minigames() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* ✅ Navbar at top */}
      {/* <Navbar /> */}

      <div className="flex flex-1">
        {/* ✅ Sidebar (hidden on small screens, visible on md+) */}
        {/* <div className="hidden md:block w-64">
          <Sidebar />
        </div> */}

        {/* ✅ Main Content */}
        <div className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8">
          {/* Hero Section */}
          <section className="relative bg-blue-50 rounded-lg px-6 sm:px-8 py-8 sm:py-10 flex flex-col lg:flex-row items-center justify-between mb-10 gap-6">
            {/* Left Text */}
            <div className="max-w-xl text-center lg:text-left">
              <h1 className="font-outfit text-[26px] sm:text-[30px] font-bold leading-tight text-[#19191F] mb-4">
                Master Your Skills, Play & Earn!
              </h1>
              <p className="font-open-sans text-[16px] sm:text-[18px] leading-relaxed text-[#19191F] mb-6">
                Dive into engaging quizzes, coding challenges, and word puzzles.
                Sharpen your mind, compete on leaderboards, and unlock exclusive badges.
              </p>
              <button className="px-6 py-2 bg-[#3892E5] text-white text-[16px] sm:text-[18px] font-semibold rounded-md shadow hover:bg-[#155FA4] transition">
                Explore Games
              </button>
            </div>

            {/* Right Image */}
            <div className="shrink-0">
              <img
                src="/main.jpg"
                alt="Hero Illustration"
                className="w-60 sm:w-72 lg:w-[404px] object-contain rounded-md"
              />
            </div>
          </section>

          {/* Progress + Daily Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Progress */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.174L12 18.897l-7.336 3.854 1.402-8.174L.132 9.21l8.2-1.192z" />
                </svg>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Your Progress</h3>
              </div>
              <div className="flex justify-between items-center mb-3 text-sm sm:text-base">
                <p className="text-gray-800 font-medium">Level {userProgress.level}</p>
                <p className="text-blue-600 font-semibold">{userProgress.currentXP} / {userProgress.nextLevelXP} XP</p>
              </div>
              <div className="w-full bg-blue-100 h-3 rounded-full overflow-hidden mb-2">
                <div className="h-3 bg-blue-600 rounded-full" style={{ width: `${(userProgress.currentXP / userProgress.nextLevelXP) * 100}%` }}></div>
              </div>
              <p className="text-sm text-gray-500">
                Earn <span className="font-semibold text-blue-600">{userProgress.nextLevelXP - userProgress.currentXP} XP</span> to reach Level {userProgress.level + 1}
              </p>
            </div>

            {/* Daily Challenge */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 11V7a5 5 0 00-10 0v4m-.5 0h11a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 0117.5 21h-11A1.5 1.5 0 015 19.5v-7A1.5 1.5 0 016.5 11z" />
                </svg>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Daily Challenge</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Complete this challenge to earn bonus XP!</p>
              <img src={dailyChallenge.img} alt="Daily Challenge" className="w-full h-28 object-cover rounded-lg mb-4" />
              <p className="text-base sm:text-lg font-semibold text-gray-800">{dailyChallenge.title}</p>
              <p className="text-sm text-gray-600 mt-1">{dailyChallenge.desc}</p>
              <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
                ⭐ Earn {dailyChallenge.rewardXP} XP
              </a>
              <div className="border-t border-gray-200 my-4"></div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition">
                Start Challenge
              </button>
            </div>
          </div>

          {/* Explore Games */}
          <h2 className="font-outfit text-[30px] leading-9 font-bold text-neutral-900 mb-6">Explore Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {games.map((g) => (
              <div key={g.id} className="bg-white rounded-[10px] shadow-sm p-4 flex flex-col">
                <img src={g.img} alt={g.title} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="font-outfit text-lg font-semibold text-neutral-900 mb-2">{g.title}</h3>
                <p className="text-sm text-neutral-600 mb-2">Category: {g.category} | Difficulty: {g.difficulty}</p>
                <p className="text-sm text-neutral-600 mb-4 flex-1">{g.desc}</p>
                <button className="w-full py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition">
                  Play Now (⭐ {g.rewardXP} XP)
                </button>
              </div>
            ))}
          </div>

          {/* Top Players */}
          <h2 className="font-outfit text-[30px] leading-9 font-bold text-neutral-900 mb-6">Top Players</h2>
          <div className="bg-white rounded-[10px] shadow-sm p-6 mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <h3 className="font-outfit text-2xl font-bold text-neutral-900">Global Leaderboard</h3>
            </div>
            <table className="w-full rounded-md">
              <thead>
                <tr className="text-neutral-600 text-left border-b">
                  <th className="pb-3 font-medium">Rank</th>
                  <th className="pb-3 font-medium">Player</th>
                  <th className="pb-3 text-right font-medium">XP</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((p) => (
                  <tr key={p.rank} className="border-b last:border-0 hover:bg-gray-50 transition">
                    <td className="py-3 text-gray-700">{p.rank}</td>
                    <td className="py-3 flex items-center gap-3">
                      <img src={p.avatar} alt={p.name} className="w-8 h-8 rounded-full object-cover" />
                      <span className="font-medium text-gray-900">{p.name}</span>
                      <span className="text-xs text-gray-500">({p.country})</span>
                    </td>
                    <td className="py-3 text-right font-semibold text-blue-600">{p.xp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ✅ Your Badges */}
          <h2 className="font-outfit text-[30px] leading-9 font-bold text-neutral-900 mb-6">Your Badges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {badges.map((b) => (
              <div key={b.id} className={`relative flex flex-col items-center bg-white rounded-[10px] shadow-sm w-full min-h-[246px] p-4 ${b.earned ? "opacity-100" : "bg-gray-50 opacity-60"}`}>
                <img src={b.image} alt={b.title} loading="lazy" className="w-20 h-20 object-cover rounded-full mt-4" />
                <h4 className="mt-3 font-outfit text-[16px] leading-6 font-semibold text-neutral-900">{b.title}</h4>
                <p className="mt-1 font-open-sans text-[14px] leading-5 text-neutral-600 text-center flex-1">{b.desc}</p>
                <span className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-semibold ${b.earned ? "bg-blue-500 text-white" : "bg-neutral-200 text-neutral-700"}`}>
                  {b.earned ? "Earned" : "Locked"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
