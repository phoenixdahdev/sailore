"use client";

import { useState } from "react";
import {
  Search,
  FileText,
  BookOpen,
  Clock,
  HardDrive,
  Download,
  Lock,
  ExternalLink,
} from "lucide-react";

const subjects = [
  "All Subjects",
  "Navigation",
  "Stability",
  "Meteorology",
  "Cargo Ops",
  "Signals",
  "Engineering",
];

const resources = [
  { id: 1, title: "OOW Navigation: Full Solved Paper 2024", subject: "Navigation", rank: "OOW Unlimited", difficulty: "Advanced", time: "45 min read", status: "Free", size: "2.4 MB", downloads: "1.2k" },
  { id: 2, title: "Ship Stability & Construction - Master Level", subject: "Stability", rank: "Master Mariner", difficulty: "Expert", time: "2 hour read", status: "Premium", size: "8.1 MB", downloads: "850" },
  { id: 3, title: "Celestial Navigation: Sight Reduction Tables", subject: "Navigation", rank: "OOW / Second Mate", difficulty: "Expert", time: "1.5 hour read", status: "Free", size: "5.2 MB", downloads: "940" },
  { id: 4, title: "Meteorology: Tropical Revolving Storms (TRS)", subject: "Meteorology", rank: "All Ranks", difficulty: "Intermediate", time: "35 min read", status: "Free", size: "1.9 MB", downloads: "3.1k" },
  { id: 5, title: "COLREGs Mnemonic Master Guide", subject: "Signals", rank: "All Ranks", difficulty: "Beginner", time: "20 min read", status: "Free", size: "0.8 MB", downloads: "5.4k" },
  { id: 6, title: "GMDSS Radio Logbook Procedures", subject: "Signals", rank: "OOW", difficulty: "Intermediate", time: "40 min read", status: "Premium", size: "2.1 MB", downloads: "420" },
  { id: 7, title: "Oil Tanker Cargo Operations (OTCO)", subject: "Cargo Ops", rank: "Chief Officer", difficulty: "Advanced", time: "3 hour read", status: "Premium", size: "12.4 MB", downloads: "610" },
  { id: 8, title: "Dry Cargo: Grain Code & Stowage Factors", subject: "Cargo Ops", rank: "Second Officer", difficulty: "Intermediate", time: "50 min read", status: "Free", size: "3.7 MB", downloads: "1.1k" },
  { id: 9, title: "Marine Diesel Engines: Maintenance 101", subject: "Engineering", rank: "Fourth Engineer", difficulty: "Intermediate", time: "1 hour read", status: "Free", size: "6.5 MB", downloads: "2.8k" },
];

export default function PastQuestions() {
  const [subject, setSubject] = useState("All Subjects");
  const [search, setSearch] = useState("");

  const filtered = resources.filter(
    (f) =>
      (subject === "All Subjects" || f.subject === subject) &&
      f.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-64 space-y-8">
            <div>
              <h4 className="text-[#002147] font-black uppercase text-xs tracking-[0.2em] mb-6">
                Library Filter
              </h4>
              <div className="space-y-2">
                {subjects.map((f) => (
                  <button
                    key={f}
                    onClick={() => setSubject(f)}
                    className={`w-full text-left px-5 py-3 rounded-xl font-bold text-sm transition-all flex justify-between items-center
                                ${
                                  subject === f
                                    ? "bg-white shadow-md text-blue-600 border border-blue-50"
                                    : "text-gray-400 hover:text-[#002147]"
                                }`}
                  >
                    {f}
                    {subject === f && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2rem] border border-blue-100">
              <p className="text-[#002147] font-bold text-sm mb-2 italic underline underline-offset-4">
                Need specific papers?
              </p>
              <p className="text-gray-500 text-[11px] mb-4 font-medium leading-relaxed">
                Our team sources papers from global maritime authorities.
              </p>
              <button className="text-blue-600 font-black text-[10px] uppercase flex items-center gap-1 group">
                Submit Request{" "}
                <ExternalLink size={12} className="group-hover:translate-x-1 transition" />
              </button>
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-10 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by subject, year, or rank..."
                className="w-full bg-white border border-gray-100 rounded-2xl py-5 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-blue-500 transition-all font-medium text-[#002147]"
                onChange={(f) => setSearch(f.target.value)}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.length > 0 ? (
                filtered.map((f) => (
                  <div
                    key={f.id}
                    className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 group border-b-4 border-b-transparent hover:border-b-blue-600"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-slate-50 rounded-2xl text-[#002147] group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                        <FileText size={24} />
                      </div>
                      <span
                        className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          f.status === "Free"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-amber-50 text-amber-600"
                        }`}
                      >
                        {f.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-[#002147] mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                      {f.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8">
                      <div className="flex items-center gap-2 text-gray-400 font-bold text-[11px] uppercase tracking-wider">
                        <BookOpen size={14} className="text-blue-400" /> {f.rank}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 font-bold text-[11px] uppercase tracking-wider">
                        <Clock size={14} className="text-blue-400" /> {f.time}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 font-bold text-[11px] uppercase tracking-wider">
                        <HardDrive size={14} className="text-blue-400" /> {f.size}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 font-bold text-[11px] uppercase tracking-wider">
                        <Download size={14} className="text-blue-400" /> {f.downloads}
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 bg-[#F8FAFC] group-hover:bg-[#002147] group-hover:text-white text-[#002147] py-4 rounded-2xl font-black transition-all">
                      {f.status === "Premium" ? (
                        <>
                          <Lock size={18} /> Purchase Access
                        </>
                      ) : (
                        <>
                          <Download size={18} /> Download Asset
                        </>
                      )}
                    </button>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 shadow-sm border border-gray-100">
                    <Search size={32} />
                  </div>
                  <h3 className="text-xl font-black text-[#002147]">No resources found</h3>
                  <p className="text-gray-500 font-medium">
                    Try adjusting your filters or search terms.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
