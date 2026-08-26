"use client";

import { useState } from "react";

const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export default function Home() {
  const [pin, setPin] = useState("");

  function addDigit(digit: string) {
    if (pin.length < 6) setPin((current) => current + digit);
  }

  function removeDigit() {
    setPin((current) => current.slice(0, -1));
  }

  return (
    <main className="min-h-dvh overflow-hidden bg-[#f6f7f9] text-slate-950">
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-6 pb-8 pt-10 sm:px-8">
        <header className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-slate-950 text-sm font-bold tracking-tight text-white shadow-lg shadow-slate-950/15">
            F
          </div>
          <span className="text-lg font-semibold tracking-[-0.03em]">FinTrack</span>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center pb-4 pt-10">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-medium text-slate-500">Добро пожаловать</p>
            <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.04em]">
              Введите PIN-код
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Чтобы продолжить работу с FinTrack
            </p>
          </div>

          <div className="mb-10 flex h-5 items-center justify-center gap-3" aria-label="Введено символов">
            {Array.from({ length: 6 }).map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full border transition-all duration-200 ${
                  index < pin.length
                    ? "scale-110 border-slate-950 bg-slate-950"
                    : "border-slate-300 bg-transparent"
                }`}
              />
            ))}
          </div>

          <div className="grid w-full max-w-[300px] grid-cols-3 gap-x-5 gap-y-4">
            {keys.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => addDigit(key)}
                className="flex h-[68px] items-center justify-center rounded-full bg-white text-[25px] font-medium shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition active:scale-95 active:bg-slate-100"
                aria-label={`Цифра ${key}`}
              >
                {key}
              </button>
            ))}
            <div />
            <button
              type="button"
              onClick={() => addDigit("0")}
              className="flex h-[68px] items-center justify-center rounded-full bg-white text-[25px] font-medium shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition active:scale-95 active:bg-slate-100"
              aria-label="Цифра 0"
            >
              0
            </button>
            <button
              type="button"
              onClick={removeDigit}
              disabled={!pin.length}
              className="flex h-[68px] items-center justify-center rounded-full text-sm font-medium text-slate-500 transition active:scale-95 disabled:opacity-30"
              aria-label="Удалить последнюю цифру"
            >
              ←
            </button>
          </div>

          <button
            type="button"
            disabled={pin.length !== 6}
            className="mt-8 h-12 w-full max-w-[300px] rounded-full bg-slate-950 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-25"
          >
            Войти
          </button>
        </section>

        <button
          type="button"
          className="mx-auto flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-slate-500 transition active:bg-white"
        >
          <span aria-hidden="true">⌁</span>
          Войти с помощью Face ID
        </button>
      </div>
    </main>
  );
}
