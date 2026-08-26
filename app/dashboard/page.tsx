export default function Dashboard() {
  return (
    <main className="min-h-dvh bg-[#f7f9fa] px-5 py-8 text-slate-950">
      <div className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-md flex-col">
        <header>
          <p className="text-sm font-semibold text-[#67D1DE]">FinTrack</p>
          <h1 className="mt-2 text-[30px] font-semibold tracking-[-0.04em]">Главная</h1>
        </header>
        <section className="mt-8 rounded-[28px] bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
          <p className="text-sm text-slate-500">Баланс</p>
          <p className="mt-2 text-4xl font-semibold tracking-tight">₽ 0</p>
        </section>
      </div>
    </main>
  );
}
