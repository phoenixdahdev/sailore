import {
  Zap,
  Compass,
  ArrowRight,
  CircleCheck,
  Anchor,
  Eye,
  Stethoscope,
  Ruler,
  CircleQuestionMark,
  ShieldCheck,
  BookOpen,
  Award,
  Ship,
} from "lucide-react";

const phases = [
  {
    id: "01",
    title: "Educational Foundation",
    desc: "Complete 10+2 with Physics, Chemistry, and Mathematics (PCM). A minimum aggregate of 60% is generally required for Deck and Engine departments.",
    icon: <BookOpen className="text-blue-500" />,
  },
  {
    id: "02",
    title: "Entrance Examinations",
    desc: "Clear the IMU-CET (Indian Maritime University Common Entrance Test) or equivalent national maritime exams to qualify for top-tier academies.",
    icon: <Award className="text-blue-500" />,
  },
  {
    id: "03",
    title: "Pre-Sea Training",
    desc: "Enroll in a DGS-approved course: DNS (Diploma in Nautical Science) for Deck or GME (Graduate Marine Engineering) for the Engine side.",
    icon: <Ship className="text-blue-500" />,
  },
];

const medical = [
  { label: "BMI Range", val: "18.5 - 25.0", icon: <Ruler size={20} /> },
  { label: "Hearing", val: "Normal (without aids)", icon: <CircleQuestionMark size={20} /> },
  { label: "Stability", val: "Good Motor Balance", icon: <ShieldCheck size={20} /> },
];

export default function BecomeASailor() {
  return (
    <div className="pt-20 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              <Zap size={16} className="text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                Global Career Guide 2026
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-[#002147] tracking-tighter leading-none italic">
              Chart Your <br />
              Course.
            </h1>
            <p className="text-gray-500 text-xl font-medium max-w-xl leading-relaxed">
              Transitioning from civilian life to a Merchant Navy officer is a journey of discipline
              and skill. Here is your definitive roadmap to the sea.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#002147] text-white px-8 py-5 rounded-3xl font-black hover:bg-blue-600 transition-all flex items-center gap-3">
                Download Entry Guide <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-blue-600 rounded-[4rem] rotate-3 -z-10 opacity-10" />
            <div className="bg-[#F8FAFC] p-12 rounded-[4rem] border border-gray-100 shadow-inner">
              <h4 className="text-[#002147] font-black text-2xl mb-6 flex items-center gap-3 italic">
                <Compass className="text-blue-600" /> Quick Eligibility Check
              </h4>
              <ul className="space-y-6">
                {[
                  "Age: 17 to 25 years",
                  "Physics, Chemistry, Maths (60%+)",
                  "Vision: 6/6 (Unaided for Deck)",
                  "Valid Passport Holder",
                ].map((a, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-600 font-bold">
                    <CircleCheck className="text-emerald-500" size={20} /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-[#002147] uppercase tracking-tighter italic">
              The 3-Phase Entry Process
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10" />
            {phases.map((a) => (
              <div
                key={a.id}
                className="bg-white p-10 rounded-[3rem] border border-gray-100 hover:border-blue-500 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {a.icon}
                </div>
                <span className="text-5xl font-black text-gray-100 mb-4 block group-hover:text-blue-50 transition-colors">
                  {a.id}
                </span>
                <h3 className="text-xl font-black text-[#002147] mb-4">{a.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#002147] rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
          <Anchor className="absolute -right-20 -bottom-20 text-white/5" size={400} />
          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-4xl font-black italic mb-8">
                Medical & Physical <br />
                Standards.
              </h2>
              <p className="text-blue-100/60 mb-12 font-medium">
                The sea is a demanding environment. All candidates must pass the DGS Approved Medical
                Examination.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-blue-400 font-black uppercase text-xs tracking-widest">
                    <Eye size={18} /> Vision
                  </div>
                  <p className="text-sm font-medium text-blue-100/80">
                    6/6 vision in each eye. No color blindness allowed for Deck Department.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-blue-400 font-black uppercase text-xs tracking-widest">
                    <Stethoscope size={18} /> General Health
                  </div>
                  <p className="text-sm font-medium text-blue-100/80">
                    No history of asthma, fits, or major psychiatric disorders.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              {medical.map((a, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-blue-400">{a.icon}</div>
                    <span className="font-bold uppercase text-xs tracking-widest text-blue-200">
                      {a.label}
                    </span>
                  </div>
                  <span className="font-black italic text-lg">{a.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-black text-[#002147] mb-6 italic">
            Still confused about the route?
          </h3>
          <p className="text-gray-500 mb-10 font-medium">
            Our career consultants offer free 15-minute guidance calls for aspiring cadets and their
            parents.
          </p>
          <button className="bg-white border-2 border-[#002147] text-[#002147] px-12 py-5 rounded-[2rem] font-black hover:bg-[#002147] hover:text-white transition-all shadow-lg flex items-center gap-3 mx-auto">
            Book a Guidance Call <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
