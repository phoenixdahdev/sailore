import {
  CirclePlay,
  Star,
  CircleCheckBig,
  ChevronRight,
  Clock,
  Users,
  ChartNoAxesColumnIncreasing,
  Ship,
  Anchor,
  ShieldCheck,
  Compass,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Mastering COLREGs: The Oral Exam Guide",
    instructor: "Capt. Sarah Jenkins",
    rating: 4.9,
    students: "1.2k",
    duration: "12 Hours",
    level: "Advanced",
    price: "$0",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    modules: ["Rule of the Road Basics", "Lights & Shapes Mastery", "Situational Awareness", "Mock Oral Sessions"],
  },
  {
    id: 2,
    title: "Ship Stability for Chief Officers",
    instructor: "Chief Off. David Chen",
    rating: 4.8,
    students: "850",
    duration: "25 Hours",
    level: "Management",
    price: "$0",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=800",
    modules: ["Initial Stability", "Damage Stability", "Grain Loading Code", "Dry Docking Calculations"],
  },
  {
    id: 3,
    title: "ECDIS & Electronic Navigation",
    instructor: "Capt. Marcus Vane",
    rating: 4.7,
    students: "2.1k",
    duration: "10 Hours",
    level: "Intermediate",
    price: "$0",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    modules: ["System Configuration", "Passage Planning", "Alarm Management", "Sensor Integration"],
  },
  {
    id: 4,
    title: "High Voltage Training for Engineers",
    instructor: "Ch. Eng. Robert Miller",
    rating: 4.9,
    students: "540",
    duration: "15 Hours",
    level: "Engineers",
    price: "$0",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    modules: ["Switchboard Safety", "Fault Diagnosis", "HV Distribution", "Emergency Procedures"],
  },
  {
    id: 5,
    title: "Tanker Cargo Ops (Advanced)",
    instructor: "Capt. Elena Rossi",
    rating: 4.8,
    students: "720",
    duration: "30 Hours",
    level: "Advanced",
    price: "$0",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800",
    modules: ["Pumping Systems", "Inert Gas Systems", "Crude Oil Washing", "Cargo Planning"],
  },
  {
    id: 6,
    title: "Maritime English for Officers",
    instructor: "Prof. James Wilson",
    rating: 4.6,
    students: "3.4k",
    duration: "8 Hours",
    level: "Beginner",
    price: "$0",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    modules: ["SMCP Standard Phrases", "VHF Communication", "Bridge Command Language", "Reporting Formats"],
  },
];

const perks = [
  {
    icon: <Clock />,
    title: "Lifetime Access",
    desc: "Pay once, learn forever. High-quality offline viewing for when you're at sea.",
  },
  {
    icon: <Users />,
    title: "Expert Community",
    desc: "Access private forums to discuss real exam scenarios with fellow officers.",
  },
  {
    icon: <ChartNoAxesColumnIncreasing />,
    title: "Exam Simulation",
    desc: "Timed practice tests and mock orals to ensure you are 100% ready.",
  },
];

export default function Courses() {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">
              The Sailore Academy
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-[#002147] tracking-tighter mt-4 italic">
              Professional <br />
              Maritime Training.
            </h1>
            <p className="text-gray-500 text-lg mt-6 font-medium">
              Go beyond PDFs. Our video courses are designed by active officers to help you clear
              your Certificate of Competency (CoC) on the first attempt.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-right hidden md:block">
              <p className="text-2xl font-black text-[#002147]">4,500+</p>
              <p className="text-xs font-bold text-gray-400 uppercase">Seafarers Trained</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {courses.map((a) => (
            <div
              key={a.id}
              className="group flex flex-col md:flex-row bg-[#F8FAFC] rounded-[3rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg">
                  <CirclePlay className="text-white" size={16} />
                  <span className="text-xs font-bold text-white tracking-widest uppercase">
                    Video Course
                  </span>
                </div>
              </div>
              <div className="flex-1 p-8 md:p-10 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                    {a.level}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star size={14} fill="currentColor" /> {a.rating}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-[#002147] mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                  {a.title}
                </h3>
                <p className="text-gray-400 text-xs font-bold mb-6 italic">
                  Instructor: {a.instructor}
                </p>
                <div className="space-y-3 mb-8">
                  {a.modules.map((i, s) => (
                    <div
                      key={s}
                      className="flex items-center gap-3 text-sm font-semibold text-gray-600"
                    >
                      <CircleCheckBig size={16} className="text-emerald-500" />
                      {i}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-6 border-t border-gray-200 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Enrollment Fee</p>
                    <p className="text-2xl font-black text-[#002147]">{a.price}</p>
                  </div>
                  <button className="bg-[#002147] text-white p-4 rounded-2xl hover:bg-blue-600 transition-all">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
          {perks.map((a, i) => (
            <div
              key={i}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-gray-100 hover:border-blue-200 transition-colors"
            >
              <div className="inline-flex p-4 bg-white rounded-2xl text-blue-600 mb-6 shadow-sm">
                {a.icon}
              </div>
              <h4 className="text-lg font-black text-[#002147] mb-2 uppercase italic">{a.title}</h4>
              <p className="text-gray-500 text-sm font-medium">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 flex flex-wrap justify-center gap-12 opacity-30 grayscale contrast-125">
          <Ship size={48} />
          <Anchor size={48} />
          <ShieldCheck size={48} />
          <Compass size={48} />
        </div>
      </div>
    </div>
  );
}
