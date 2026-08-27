"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const AUTH_KEY = "fintrack_authenticated";

export default function Home() {
  const [pin, setPin] = useState("");
  const router = useRouter();

  const login = () => {
    if (pin.length !== 6) return;
    window.localStorage.setItem(AUTH_KEY, "1");
    router.replace("/dashboard");
  };

  const addDigit = (digit: string) => {
    setPin((current) => {
      if (current.length >= 6) return current;
      const next = current + digit;
      if (next.length === 6) window.setTimeout(login, 180);
      return next;
    });
  };

  const removeDigit = () => setPin((current) => current.slice(0, -1));

  return (
    <main className="login-shell min-h-dvh bg-[radial-gradient(circle_at_15%_5%,rgba(103,209,222,0.22),transparent_30%),radial-gradient(circle_at_90%_12%,rgba(250,125,104,0.20),transparent_32%),#f7f9fa] text-slate-950">
      <div className="login-container mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-[calc(1.5rem+env(safe-area-inset-top))] sm:px-8">
        <header className="flex shrink-0 items-center gap-3">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[18px] shadow-[0_10px_30px_rgba(15,23,42,0.10)] ring-1 ring-white/80">
            <Image src="/logo.svg" alt="FinTrack" width={1024} height={1024} className="h-full w-full scale-[2.1] object-cover" priority />
          </div>
          <div className="text-[26px] font-semibold leading-none tracking-[-0.045em]">
            <span className="text-[#FA7D68]">F</span><span className="text-slate-900">in</span><span className="text-[#67D1DE]">T</span><span className="text-slate-900">rack</span>
          </div>
        </header>

        <section className="login-content flex min-h-0 flex-1 flex-col items-center justify-center px-1 py-6">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold text-[#67D1DE]">Добро пожаловать</p>
            <h1 className="text-[30px] font-semibold leading-tight tracking-[-0.04em]">Введите PIN-код</h1>
            <p className="mt-2 text-sm leading-6 text-slate-500">Чтобы продолжить работу с FinTrack</p>
          </div>

          <div className="my-6 flex h-5 items-center justify-center gap-3 sm:my-8" aria-label="Введено символов">
            {Array.from({ length: 6 }).map((_, index) => <span key={index} className={`h-3 w-3 rounded-full border transition-[transform,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${index < pin.length ? "scale-110 border-[#FA7D68] bg-[#FA7D68] shadow-[0_0_0_4px_rgba(250,125,104,0.10)]" : "scale-100 border-slate-300 bg-white/50 shadow-none"}`} />)}
          </div>

          <div className="grid w-full max-w-[300px] grid-cols-3 gap-x-5 gap-y-3 sm:gap-y-4">
            {keys.map((key) => <button key={key} type="button" onClick={() => addDigit(key)} className="login-key flex h-[62px] items-center justify-center rounded-full border border-white/70 bg-white/35 text-[25px] font-medium text-slate-900 shadow-none backdrop-blur-sm transition duration-200 hover:bg-white/60 active:scale-95 active:bg-[#67D1DE]/15" aria-label={`Цифра ${key}`}>{key}</button>)}
            <div />
            <button type="button" onClick={() => addDigit("0")} className="login-key flex h-[62px] items-center justify-center rounded-full border border-white/70 bg-white/35 text-[25px] font-medium text-slate-900 shadow-none backdrop-blur-sm transition duration-200 hover:bg-white/60 active:scale-95 active:bg-[#67D1DE]/15" aria-label="Цифра 0">0</button>
            <button type="button" onClick={removeDigit} disabled={!pin.length} className="login-key flex h-[62px] items-center justify-center rounded-full text-sm font-semibold text-slate-500 transition-[transform,background-color,box-shadow,opacity] duration-200 ease-out hover:bg-white/50 active:scale-[0.88] active:bg-[#67D1DE]/15 active:shadow-[0_5px_16px_rgba(103,209,222,0.18)] disabled:opacity-25" aria-label="Удалить последнюю цифру">⌫</button>
          </div>

          <button type="button" disabled={pin.length !== 6} onClick={login} className="mt-5 h-12 w-full max-w-[300px] rounded-full bg-[#FA7D68] px-6 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(250,125,104,0.28)] transition hover:brightness-105 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-25 disabled:shadow-none sm:mt-7">Войти</button>
        </section>

        <button type="button" className="login-biometric mx-auto mt-1 flex shrink-0 items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-slate-500 transition hover:text-slate-800 active:bg-white/70 sm:mt-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#67D1DE]/15 text-[#3faeba]" aria-hidden="true">◉</span>
          Войти с помощью Face ID
        </button>
      </div>
    </main>
  );
}
