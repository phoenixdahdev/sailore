import { Bell, Calendar, ArrowRight, Bookmark, Share2 } from "lucide-react";

const news = [
  {
    id: 1,
    date: "Jan 12, 2026",
    category: "Regulation",
    title: "New IMO 2026 Carbon Intensity Standards Released",
    excerpt:
      "The latest MARPOL amendments come into effect this June. Here is how it impacts Chief Engineers...",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    date: "Jan 08, 2026",
    category: "Exam Alert",
    title: "UK MCA Oral Exam Booking Slots for Q2 Open",
    excerpt:
      "The Maritime and Coastguard Agency has updated their availability for OOW and Master orals. Early booking is advised.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    date: "Jan 05, 2026",
    category: "Technical",
    title: "Understanding High Voltage Switchboard Safety",
    excerpt:
      "A deep dive into the most common faults found during engine room safety audits this year.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Updates() {
  return (
    <div className="pt-32 pb-20 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 border-b border-gray-200 pb-12">
          <div className="flex items-center gap-3 text-blue-600 font-black mb-4 uppercase tracking-[0.3em] text-xs">
            <Bell size={16} /> Stay Informed
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#002147] tracking-tighter italic">
            Maritime <span className="text-blue-600">Pulse.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {news.map((a) => (
              <article
                key={a.id}
                className="group bg-white rounded-[3rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-widest">
                        {a.category}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400 text-xs font-bold">
                        <Calendar size={14} /> {a.date}
                      </span>
                    </div>
                    <h2 className="text-2xl font-black text-[#002147] mb-4 group-hover:text-blue-600 transition-colors">
                      {a.title}
                    </h2>
                    <p className="text-gray-500 font-medium mb-8 leading-relaxed">{a.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-sm font-black text-[#002147] group-hover:gap-4 transition-all">
                        Read Full Brief <ArrowRight size={18} />
                      </button>
                      <div className="flex gap-4 text-gray-300">
                        <Bookmark size={20} className="hover:text-blue-600 cursor-pointer" />
                        <Share2 size={20} className="hover:text-blue-600 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-10">
            <div className="bg-[#002147] p-8 rounded-[2.5rem] text-white">
              <h3 className="text-xl font-black mb-4 italic">Newsletter</h3>
              <p className="text-blue-100/60 text-sm mb-6 font-medium leading-relaxed">
                Get the weekly captain&apos;s briefing delivered to your inbox.
              </p>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm mb-4 outline-none focus:border-blue-400"
              />
              <button className="w-full bg-blue-600 py-4 rounded-xl font-black text-xs uppercase tracking-widest">
                Subscribe
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
