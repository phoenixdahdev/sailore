"use client";

import { useState } from "react";
import { Star, Briefcase, Globe, Anchor, Search, Calendar, Video } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Capt. Jose ",
    rank: "Master Mariner",
    specialty: "Oral Exam Prep & Career Strategy",
    experience: "22 Years (Maersk, MSC)",
    rating: 5,
    reviews: 124,
    price: "$80/hr",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    tags: ["Deck", "Management", "Container"],
  },
  {
    id: 2,
    name: "Ch. Eng. John",
    rank: "Chief Engineer",
    specialty: "High Voltage & Engine Room Management",
    experience: "18 Years (Shell, BP)",
    rating: 4.9,
    reviews: 98,
    price: "$75/hr",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    tags: ["Engine", "Tankers", "Safety"],
  },
  {
    id: 3,
    name: "Chief Off. Emmanuel",
    rank: "Chief Officer",
    specialty: "Stability & Cargo Operations",
    experience: "12 Years (Hapag-Lloyd)",
    rating: 4.9,
    reviews: 86,
    price: "$60/hr",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    tags: ["Deck", "Stability", "OOW Prep"],
  },
];

export default function Mentorship() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-[#002147] tracking-tighter mb-6">
              Learn from the <br />
              <span className="text-blue-600 italic font-medium">Commanders.</span>
            </h1>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              Connect 1-on-1 with active Captains and Chief Engineers. Get the real-world insight you
              won&apos;t find in textbooks.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-[3rem] border border-gray-100 flex gap-10">
            <div className="text-center">
              <p className="text-3xl font-black text-[#002147]">15+</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Active Mentors
              </p>
            </div>
            <div className="w-[1px] bg-gray-200" />
            <div className="text-center">
              <p className="text-3xl font-black text-[#002147]">500+</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Calls Completed
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          {["All", "Deck", "Engine", "Tankers", "Exam Prep"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-8 py-3 rounded-2xl font-black text-sm transition-all
                    ${filter === s ? "bg-[#002147] text-white" : "bg-slate-50 text-gray-400 hover:bg-gray-100"}`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((s) => (
            <div
              key={s.id}
              className="group bg-white rounded-[3rem] border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-24 h-24 rounded-[2rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 border-4 border-white w-6 h-6 rounded-full" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#002147] leading-tight">{s.name}</h3>
                  <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">
                    {s.rank}
                  </p>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star size={14} fill="currentColor" /> {s.rating}{" "}
                    <span className="text-gray-300 font-medium">({s.reviews})</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <Briefcase className="text-gray-400 mt-1" size={16} />
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{s.specialty}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="text-gray-400 mt-1" size={16} />
                  <p className="text-sm text-gray-600 font-medium">{s.experience}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {s.tags.map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1 bg-slate-50 text-gray-500 rounded-lg text-[10px] font-black uppercase tracking-tighter"
                  >
                    #{r}
                  </span>
                ))}
              </div>
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                <div className="text-[#002147] font-black text-xl">
                  {s.price}
                  <span className="text-xs text-gray-400 font-medium">/session</span>
                </div>
                <button className="bg-[#002147] text-white px-8 py-3 rounded-2xl font-black text-sm hover:bg-blue-600 transition-all shadow-lg">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 md:p-20 bg-[#002147] rounded-[4rem] text-white relative overflow-hidden">
          <Anchor className="absolute -right-10 -bottom-10 text-white/5" size={300} />
          <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto text-blue-400">
                <Search size={24} />
              </div>
              <h4 className="text-xl font-black italic">1. Select Mentor</h4>
              <p className="text-blue-100/60 text-sm font-medium">
                Filter by rank, department, or specific exam topic.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto text-blue-400">
                <Calendar size={24} />
              </div>
              <h4 className="text-xl font-black italic">2. Pick a Slot</h4>
              <p className="text-blue-100/60 text-sm font-medium">
                Choose a time that works for you, anywhere in the world.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto text-blue-400">
                <Video size={24} />
              </div>
              <h4 className="text-xl font-black italic">3. Connect Live</h4>
              <p className="text-blue-100/60 text-sm font-medium">
                Join a 1-on-1 video call to accelerate your career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
