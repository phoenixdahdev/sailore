"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

export default function Home() {
  return (
    <div className="relative w-full">
      <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#002147]">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://img1.wsimg.com/isteam/getty/1081659644"
            alt="Nautical background"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <motion.div
          className="relative z-10 pt-24 px-6 text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={item}
            className="text-blue-100 text-2xl md:text-3xl font-bold tracking-[0.3em] uppercase drop-shadow-lg italic"
          >
            The Sailore
          </motion.h1>
          <motion.div variants={item} className="h-[1px] w-24 bg-blue-500 mx-auto my-4" />
          <motion.h2
            variants={item}
            className="text-blue-100 text-4xl md:text-4xl font-medium tracking-tighter italic drop-shadow-2xl"
          >
            Be more than a Sailor, <span className="text-blue-100">Be a Sailore!</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="relative z-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />

        <motion.div
          className="relative z-20 pb-12 px-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p className=" text-blue-100 text-lg md:text-xl font-medium tracking-[0.2em] italic mb-2">
            Wabi-sabi loading...
          </p>
          <p className="text-blue-100 text-sm md:text-base font-bold tracking-[0.5em] uppercase opacity-80">
            Putting wind in the sails
          </p>
          <div className="mt-8 flex justify-center animate-bounce text-white/50">
            <ChevronDown size={32} />
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-20 px-6 border-t border-gray-100">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-[#002147] text-2xl font-bold mb-4">
            Charting a New Course in Maritime Education
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Welcome to the premier hub for aspiring and professional mariners. We combine
            traditional wisdom with modern technology to help you master the seas.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
