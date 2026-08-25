"use client";

import { useEffect, useState } from "react";
import {
  Trophy,
  RefreshCcw,
  BookOpen,
  Timer,
  CircleCheck,
  CircleX,
  CircleAlert,
  ArrowRight,
} from "lucide-react";

const questions = [
  {
    category: "COLREGs",
    question: "A vessel 'constrained by her draft' shall exhibit which day signal?",
    options: ["A black ball", "A cylinder", "Two black diamonds", "A cone apex down"],
    correct: 1,
    explanation:
      "Under COLREGs Rule 28, a vessel constrained by her draft may exhibit a cylinder where it can best be seen.",
  },
  {
    category: "Signals",
    question: "What does the flag 'Alpha' signify when flown alone?",
    options: [
      "I am taking in cargo",
      "I have a diver down; keep well clear",
      "My vessel is healthy",
      "I require a pilot",
    ],
    correct: 1,
    explanation:
      "Alpha flag indicates a diver is down and the vessel should be passed at slow speed.",
  },
  {
    category: "Navigation",
    question:
      "What is the 'Rule of the Road' for two power-driven vessels meeting on reciprocal courses?",
    options: [
      "Both turn to Port",
      "Both turn to Starboard",
      "Stand-on vessel maintains course",
      "Give-way vessel turns Port",
    ],
    correct: 1,
    explanation:
      "Rule 14 states each shall alter course to starboard so each passes on the port side of the other.",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft > 0 && !answered && !finished) {
      const t = setInterval(() => setTimeLeft((o) => o - 1), 1000);
      return () => clearInterval(t);
    } else if (timeLeft === 0 && !answered) {
      setAnswered(true);
    }
  }, [timeLeft, answered, finished]);

  const handleSelect = (v: number) => {
    if (!answered) {
      setSelected(v);
      setAnswered(true);
      if (v === questions[current].correct) setScore(score + 1);
    }
  };

  const handleNext = () => {
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setSelected(null);
      setAnswered(false);
      setTimeLeft(30);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setSelected(null);
    setAnswered(false);
    setTimeLeft(30);
  };

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-6">
        {finished ? (
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-center border border-blue-100 animate-in zoom-in-95 duration-500">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
              <Trophy size={48} />
            </div>
            <h2 className="text-4xl font-black text-[#002147] mb-2 uppercase tracking-tighter">
              Quiz Result
            </h2>
            <div className="text-6xl font-black text-blue-600 mb-6 italic">
              {Math.round((score / questions.length) * 100)}%
            </div>
            <p className="text-gray-500 mb-10 text-lg font-medium">
              You correctly answered {score} out of {questions.length} questions.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="bg-[#002147] text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-all"
              >
                <RefreshCcw size={20} /> Retake Quiz
              </button>
              <button className="bg-white text-[#002147] border-2 border-[#002147] px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">
                Download Study Guide
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-2xl text-white">
                  <BookOpen size={24} />
                </div>
                <div>
                  <span className="text-blue-600 font-black uppercase text-[10px] tracking-[0.3em]">
                    Current Section
                  </span>
                  <h1 className="text-2xl font-black text-[#002147] uppercase italic">
                    {questions[current].category}
                  </h1>
                </div>
              </div>
              <div
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl bg-white shadow-sm border ${
                  timeLeft < 10
                    ? "border-red-500 text-red-500 animate-pulse"
                    : "border-gray-100 text-[#002147]"
                }`}
              >
                <Timer size={20} />
                <span className="font-mono text-xl font-black">{timeLeft}s</span>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-100">
                <div
                  className="h-full bg-blue-600 transition-all duration-1000"
                  style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-12 leading-tight">
                {questions[current].question}
              </h2>
              <div className="grid gap-4">
                {questions[current].options.map((v, o) => {
                  const isCorrect = o === questions[current].correct;
                  const isWrongPick = selected === o && !isCorrect;
                  const showCorrect = answered && isCorrect;
                  const showWrong = answered && isWrongPick;
                  return (
                    <button
                      key={o}
                      onClick={() => handleSelect(o)}
                      className={`group w-full p-6 rounded-2xl border-2 text-left font-bold transition-all flex justify-between items-center
                        ${
                          answered
                            ? showCorrect
                              ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                              : showWrong
                                ? "border-red-500 bg-red-50 text-red-800"
                                : "border-gray-50 text-gray-400"
                            : "border-gray-100 hover:border-blue-600 hover:bg-blue-50 text-[#002147]"
                        }`}
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-colors ${
                            answered
                              ? "bg-transparent"
                              : "bg-gray-100 group-hover:bg-blue-600 group-hover:text-white"
                          }`}
                        >
                          {String.fromCharCode(65 + o)}
                        </span>
                        {v}
                      </span>
                      {showCorrect && <CircleCheck size={24} className="text-emerald-600" />}
                      {showWrong && <CircleX size={24} className="text-red-600" />}
                    </button>
                  );
                })}
              </div>
              {answered && (
                <div className="mt-10 p-6 bg-blue-50 rounded-2xl border-l-8 border-blue-600 animate-in slide-in-from-left-4 duration-300">
                  <div className="flex items-center gap-2 mb-2 text-blue-900">
                    <CircleAlert size={18} />
                    <span className="font-black uppercase text-xs tracking-widest">
                      Master&apos;s Explanation
                    </span>
                  </div>
                  <p className="text-blue-800 text-sm leading-relaxed font-medium italic">
                    &quot;{questions[current].explanation}&quot;
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center">
              <p className="text-gray-400 font-bold text-sm">
                Question {current + 1} of {questions.length}
              </p>
              <button
                onClick={handleNext}
                disabled={!answered}
                className={`flex items-center gap-3 px-9 py-3 rounded-full font-black transition-all shadow-lg
                    ${
                      answered
                        ? "bg-[#002147] text-white hover:bg-blue-800 hover:-translate-y-1"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
              >
                {current + 1 === questions.length ? "Finish Quiz" : "Next Question"}
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
