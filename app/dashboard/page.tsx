"use client";

import { useEffect, useRef, useState } from "react";

const tabs = [
  { label: "Главная", icon: "⌂" },
  { label: "Операции", icon: "↘" },
  { label: "Цели", icon: "✓" },
  { label: "Профиль", icon: "●" },
];

const operationItems = [
  { label: "Расходы", icon: "↘" },
  { label: "Доходы", icon: "↗" },
];

const profileItems = [
  { label: "Профиль", icon: "●" },
  { label: "Семья", icon: "♧" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Главная");
  const [menuOpen, setMenuOpen] = useState<"operations" | "profile" | null>(null);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressTriggered = useRef(false);

  const startLongPress = (menu: "operations" | "profile") => {
    longPressTriggered.current = false;
    pressTimer.current = setTimeout(() => {
      longPressTriggered.current = true;
      setMenuOpen(menu);
    }, 450);
  };

  const endLongPress = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  useEffect(() => () => endLongPress(), []);

  const handleLongPressTabClick = (label: string) => {
    if (!longPressTriggered.current) setActiveTab(label);
    longPressTriggered.current = false;
  };

  const menuItems = menuOpen === "operations" ? operationItems : profileItems;
  const menuPosition = menuOpen === "operations"
    ? "left-[calc(25%-95px)]"
    : "right-[calc(25%-95px)]";

  return (
    <main className="min-h-dvh bg-[#f7f9fa] text-slate-950">
      <div className="mx-auto min-h-dvh w-full max-w-md px-5 pb-28 pt-8 sm:px-8">
        <div className="flex min-h-[calc(100dvh-7rem)] items-center justify-center">
          <p className="text-sm text-slate-400">{activeTab}</p>
        </div>
      </div>

      {menuOpen && <button type="button" aria-label="Закрыть меню" onClick={() => setMenuOpen(null)} className="fixed inset-0 z-30 h-full w-full cursor-default bg-transparent" />}

      {menuOpen && (
        <div className={`fixed bottom-[92px] z-40 w-[190px] overflow-hidden rounded-[20px] border border-slate-100 bg-white p-1.5 shadow-[0_14px_45px_rgba(15,23,42,0.16)] ${menuPosition}`}>
          {menuItems.map((item) => (
            <button key={item.label} type="button" onClick={() => { setActiveTab(item.label); setMenuOpen(null); }} className="flex w-full items-center gap-3 rounded-[14px] px-4 py-3 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-[#67D1DE]/10 active:scale-[0.98]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#67D1DE]/12 text-lg text-[#67D1DE]">{item.icon}</span>{item.label}
            </button>
          ))}
        </div>
      )}

      <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-md px-4 pb-4">
        <div className="relative flex h-[76px] items-center justify-between rounded-[28px] border border-slate-100 bg-white px-5 shadow-[0_12px_40px_rgba(15,23,42,0.10)] backdrop-blur-xl">
          <div className="flex w-full items-center justify-between pr-10">
            {tabs.slice(0, 2).map((tab) => (
              <button key={tab.label} type="button" onClick={tab.label === "Операции" ? () => handleLongPressTabClick(tab.label) : () => setActiveTab(tab.label)} onPointerDown={tab.label === "Операции" ? () => startLongPress("operations") : undefined} onPointerUp={tab.label === "Операции" ? endLongPress : undefined} onPointerCancel={tab.label === "Операции" ? endLongPress : undefined} onPointerLeave={tab.label === "Операции" ? endLongPress : undefined} className={`flex min-w-[64px] flex-col items-center gap-1.5 rounded-2xl px-2 py-2 transition-all duration-200 active:scale-90 ${activeTab === tab.label ? "text-[#67D1DE]" : "text-slate-400 hover:text-[#67D1DE]"}`}>
                <span className="text-[23px] leading-none">{tab.icon}</span><span className="text-[10px] font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>

          <button type="button" aria-label="Добавить" className="absolute left-1/2 top-1/2 flex h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#67D1DE] text-[30px] font-light text-white shadow-[0_10px_25px_rgba(103,209,222,0.40)] transition-transform duration-200 hover:scale-105 active:scale-90">+</button>

          <div className="flex w-full items-center justify-between pl-10">
            {tabs.slice(2).map((tab) => (
              <button key={tab.label} type="button" onClick={tab.label === "Профиль" ? () => handleLongPressTabClick(tab.label) : () => setActiveTab(tab.label)} onPointerDown={tab.label === "Профиль" ? () => startLongPress("profile") : undefined} onPointerUp={tab.label === "Профиль" ? endLongPress : undefined} onPointerCancel={tab.label === "Профиль" ? endLongPress : undefined} onPointerLeave={tab.label === "Профиль" ? endLongPress : undefined} className={`flex min-w-[64px] flex-col items-center gap-1.5 rounded-2xl px-2 py-2 transition-all duration-200 active:scale-90 ${activeTab === tab.label ? "text-[#67D1DE]" : "text-slate-400 hover:text-[#67D1DE]"}`}>
                <span className="text-[23px] leading-none">{tab.icon}</span><span className="text-[10px] font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </main>
  );
}
