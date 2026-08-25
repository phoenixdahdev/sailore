"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Anchor,
  BookOpen,
  House,
  Zap,
  Compass,
  Bell,
  Users,
  Mail,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const logo = "/thesailore-logo.jpeg";

export default function Navbar() {
  const [studyOpen, setStudyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const study = [
    { name: "Past Questions", href: "/past-questions", icon: <Anchor size={16} /> },
    { name: "Courses", href: "/courses", icon: <BookOpen size={16} /> },
  ];

  const nav = [
    { name: "Home", href: "/", icon: <House size={20} /> },
    { name: "Become a Sailor", href: "/become-a-sailor", icon: <Zap size={20} /> },
    { name: "Blueprint", href: "/blueprint", icon: <Compass size={20} /> },
    { name: "Updates", href: "/updates", icon: <Bell size={20} /> },
    { name: "Mentorship", href: "/mentorship", icon: <Users size={20} /> },
    { name: "Contact", href: "/contact", icon: <Mail size={20} /> },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="The Sailore Logo" className="h-12 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold tracking-widest text-[#002147]">
          <Link href="/" className="hover:text-blue-600 transition">
            HOME
          </Link>
          <Link href="/become-a-sailor" className="hover:text-blue-600 transition">
            BECOME A SAILOR
          </Link>

          <div
            className="relative h-full py-2 cursor-pointer"
            onMouseEnter={() => setStudyOpen(true)}
            onMouseLeave={() => setStudyOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-600 transition uppercase">
              STUDY <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {studyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full -left-4 w-56 bg-white shadow-2xl rounded-xl py-3 border-t-4 border-blue-600"
                >
                  {study.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      className="block px-6 py-2.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition font-bold"
                    >
                      {p.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/updates" className="hover:text-blue-600 transition">
            UPDATES
          </Link>
          <Link
            href="/quiz"
            className="bg-[#002147] text-white px-5 py-2 rounded-lg hover:bg-blue-600 shadow-md transition"
          >
            QUIZ
          </Link>
          <Link href="/blueprint" className="hover:text-blue-600 transition">
            BLUEPRINT
          </Link>
          <Link
            href="/mentorship"
            className="hover:text-blue-600 transition border-l pl-8 border-gray-200"
          >
            MENTORSHIP
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            CONTACT
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-[#002147] transition-transform active:scale-90"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-[#002147]/40 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt="Logo" className="h-10 w-auto" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 bg-gray-50 rounded-full text-[#002147]"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-2">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                  Main Navigation
                </p>
                {nav.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${
                      pathname === p.href
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className={pathname === p.href ? "text-blue-600" : "text-gray-400"}>
                      {p.icon}
                    </span>
                    {p.name}
                  </Link>
                ))}

                <div className="pt-6 mt-4">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                    Study Zone
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {study.map((p) => (
                      <Link
                        key={p.name}
                        href={p.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex flex-col gap-2 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors"
                      >
                        <div className="text-blue-600">{p.icon}</div>
                        <span className="text-xs font-black text-[#002147]">{p.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <Link
                  href="/quiz"
                  onClick={() => setMobileOpen(false)}
                  className="w-full bg-[#002147] text-white py-4 rounded-xl font-black text-center block shadow-lg shadow-blue-900/20"
                >
                  TAKE THE QUIZ
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
