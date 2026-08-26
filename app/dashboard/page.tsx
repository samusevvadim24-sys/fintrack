"use client";

import { useState } from "react";

const tabs = [
  { label: "Главная", icon: "⌂" },
  { label: "Расходы", icon: "↘" },
  { label: "Цели", icon: "◎" },
  { label: "Профиль", icon: "♙" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Главная");

  return (
    <main className="min-h-dvh bg-[#f7f9fa] text-slate-950">
      <div className="mx-auto min-h-dvh w-full max-w-md px-5 pb-28 pt-8 sm:px-8">
        <div className="flex min-h-[calc(100dvh-7rem)] items-center justify-center">
          <p className="text-sm text-slate-400">{activeTab}</p>
        </div>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-md px-4 pb-4">
        <div className="relative flex h-[76px] items-center justify-between rounded-[28px] border border-slate-100 bg-white px-5 shadow-[0_12px_40px_rgba(15,23,42,0.10)] backdrop-blur-xl">
          <div className="flex w-full items-center justify-between pr-10">
            {tabs.slice(0, 2).map((tab) => (
              <button key={tab.label} type="button" onClick={() => setActiveTab(tab.label)} className={`flex min-w-[64px] flex-col items-center gap-1.5 rounded-2xl px-2 py-2 transition-all duration-200 active:scale-90 ${activeTab === tab.label ? "text-[#67D1DE]" : "text-slate-400 hover:text-[#67D1DE]"}`}>
                <span className="text-[23px] leading-none">{tab.icon}</span>
                <span className="text-[10px] font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>

          <button type="button" aria-label="Добавить" className="absolute left-1/2 top-1/2 flex h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FA7D68] text-[30px] font-light text-white shadow-[0_10px_25px_rgba(250,125,104,0.40)] transition-transform duration-200 hover:scale-105 active:scale-90">+</button>

          <div className="flex w-full items-center justify-between pl-10">
            {tabs.slice(2).map((tab) => (
              <button key={tab.label} type="button" onClick={() => setActiveTab(tab.label)} className={`flex min-w-[64px] flex-col items-center gap-1.5 rounded-2xl px-2 py-2 transition-all duration-200 active:scale-90 ${activeTab === tab.label ? "text-[#67D1DE]" : "text-slate-400 hover:text-[#67D1DE]"}`}>
                <span className="text-[23px] leading-none">{tab.icon}</span>
                <span className="text-[10px] font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </main>
  );
}
