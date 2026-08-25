import { Mail, Phone, Send } from "lucide-react";
import { Instagram, Linkedin, Twitter } from "@/components/BrandIcons";

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h1 className="text-5xl font-black text-[#002147] tracking-tighter mb-6 italic">
                Get in <span className="text-blue-600">Touch.</span>
              </h1>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Have questions about our courses or mentorship? Our crew is here to help you
                navigate.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Mail />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Email Us
                  </p>
                  <p className="text-xl font-black text-[#002147]">support@thesailore.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Global Hotline
                  </p>
                  <p className="text-xl font-black text-[#002147]">+44 (7539) 852384 </p>
                </div>
              </div>
            </div>
            <div className="pt-12 border-t border-gray-100 flex gap-6">
              <Instagram className="text-gray-300 hover:text-[#002147] cursor-pointer transition-colors" />
              <Linkedin className="text-gray-300 hover:text-[#002147] cursor-pointer transition-colors" />
              <Twitter className="text-gray-300 hover:text-[#002147] cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="flex-1">
            <form className="bg-[#F8FAFC] p-10 md:p-16 rounded-[4rem] space-y-8 shadow-inner border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-[#002147] uppercase tracking-widest ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border-none rounded-2xl px-6 py-5 text-sm font-medium focus:ring-2 focus:ring-blue-500 shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-[#002147] uppercase tracking-widest ml-2">
                    Rank / Position
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border-none rounded-2xl px-6 py-5 text-sm font-medium focus:ring-2 focus:ring-blue-500 shadow-sm"
                    placeholder="OOW Deck"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-[#002147] uppercase tracking-widest ml-2">
                  How can we help?
                </label>
                <textarea
                  className="w-full bg-white border-none rounded-3xl px-6 py-5 text-sm font-medium focus:ring-2 focus:ring-blue-500 shadow-sm h-40"
                  placeholder="Type your message here..."
                />
              </div>
              <button className="w-full bg-[#002147] text-white py-6 rounded-3xl font-black flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
