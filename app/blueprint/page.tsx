import { cloneElement, type ReactElement } from "react";
import { Anchor, Compass, Ship, Star, Clock, FileText } from "lucide-react";

const steps = [
  {
    id: 1,
    rank: "Deck Cadet",
    level: "Entry Level",
    time: "12-36 Months",
    salary: "$1,200 - $2,500",
    desc: "The foundation of your maritime career. Focus on basic seamanship, safety, and lookout duties.",
    requirements: ["STCW Basic Safety", "Medical Fitness (ENG1)", "Discharge Book"],
    icon: <Anchor className="text-blue-500" size={32} />,
    color: "border-blue-200",
  },
  {
    id: 2,
    rank: "Officer of the Watch (OOW)",
    level: "Operational Level",
    time: "Unlimited",
    salary: "$4,500 - $7,000",
    desc: "Responsible for safe navigation and cargo operations. Your first major Certificate of Competency (CoC).",
    requirements: ["OOW Unlimited Exams", "GMDSS Radio", "Advanced Firefighting"],
    icon: <Compass className="text-emerald-500" size={32} />,
    color: "border-emerald-200",
  },
  {
    id: 3,
    rank: "Chief Officer",
    level: "Management Level",
    time: "12-24 Months Seatime",
    salary: "$8,000 - $12,000",
    desc: "The Master's right hand. Responsible for cargo, deck maintenance, and crew management.",
    requirements: ["Chief Mate CoC", "Medical Care", "Ship Stability Specialist"],
    icon: <Ship className="text-indigo-500" size={32} />,
    color: "border-indigo-200",
  },
  {
    id: 4,
    rank: "Captain / Master Mariner",
    level: "Command Level",
    time: "Ultimate",
    salary: "$14,000 - $20,000+",
    desc: "Supreme authority on board. Responsible for the ship, crew, cargo, and environment.",
    requirements: ["Master Unlimited CoC", "Command Course", "Strategic Leadership"],
    icon: <Star className="text-yellow-500" size={32} />,
    color: "border-yellow-200",
  },
];

export default function Blueprint() {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm">
              Career Trajectory
            </span>
            <h1 className="text-5xl font-black text-[#002147] mt-2 italic">
              The Maritime Blueprint.
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              A comprehensive roadmap for Deck Officers. Track your voyage from a Cadet to the
              Command of a vessel.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#002147] text-white px-6 py-2 rounded-md font-bold text-sm shadow-lg">
              DECK
            </button>
            <button className="bg-white text-gray-400 px-6 py-2 rounded-md font-bold text-sm border border-gray-200 hover:text-blue-600">
              ENGINE
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-emerald-500 to-yellow-500 hidden md:block" />
          <div className="space-y-20">
            {steps.map((a, i) => (
              <div
                key={a.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-[#002147] z-10 flex items-center justify-center shadow-xl hidden md:flex">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <div className="w-full md:w-1/2 px-4 md:px-12">
                  <div
                    className={`bg-white p-8 rounded-3xl shadow-sm border-t-8 ${a.color} hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
                  >
                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
                      {cloneElement(a.icon as ReactElement<{ size?: number }>, { size: 120 })}
                    </div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-slate-50 rounded-xl">{a.icon}</div>
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">
                        Step 0{a.id}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-[#002147] mb-1">{a.rank}</h3>
                    <p className="text-blue-600 font-bold text-sm mb-4">{a.level}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed font-medium">{a.desc}</p>
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-50">
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase mb-2 flex items-center gap-1">
                          <Clock size={12} /> Typical Seatime
                        </p>
                        <p className="text-sm font-bold text-[#002147]">{a.time}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase mb-2 flex items-center gap-1">
                          <FileText size={12} /> Key Requirements
                        </p>
                        <ul className="text-[11px] font-bold text-gray-500 leading-tight">
                          {a.requirements.map((s, r) => (
                            <li key={r} className="flex items-center gap-1 text-blue-900 mb-1">
                              <div className="w-1 h-1 rounded-full bg-blue-400" /> {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-[#002147] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">
              Ready to start your watch?
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Access our solved past questions and mentorship programs to clear your exams on the
              first attempt.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full font-black shadow-xl transition-all">
              JOIN THE SAILORE ACADEMY
            </button>
          </div>
          <Anchor size={200} className="absolute -bottom-10 -right-10 text-white/5 rotate-12" />
        </div>
      </div>
    </div>
  );
}
