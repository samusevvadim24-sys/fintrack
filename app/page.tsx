const illustration = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 320'%3E%3Crect width='400' height='320' fill='white'/%3E%3Cg stroke='%230a1945' stroke-width='7' stroke-linecap='round' stroke-linejoin='round' fill='none'%3E%3Cpath d='M85 220c10-65 38-105 80-105s70 40 80 105'/%3E%3Cpath d='M150 145l-15-55m60 55 15-55'/%3E%3Cpath d='M115 170c-18-10-42-5-55 12'/%3E%3Cpath d='M250 170c18-10 42-5 55 12'/%3E%3Cpath d='M170 205h60v55h-60z' fill='%23e8f1ff'/%3E%3Cpath d='M200 205v-25c0-17 25-17 25 0v25'/%3E%3C/g%3E%3Ccircle cx='130' cy='115' r='28' fill='%231a73e8'/%3E%3Ccircle cx='270' cy='115' r='28' fill='%239ec5ff'/%3E%3Cpath d='M200 55c18 0 32 14 32 32h-64c0-18 14-32 32-32z' fill='%23f4c7a1'/%3E%3C/svg%3E`;

export default function WelcomePage() {
  return (
    <main className="welcome-screen">
      <section className="welcome-content" aria-labelledby="welcome-title">
        <div className="illustration-wrap">
          <img
            src={illustration}
            alt="Иллюстрация совместного управления семейным бюджетом"
          />
        </div>

        <div className="copy">
          <h1 id="welcome-title">
            Добро
            <br />
            пожаловать
          </h1>

          <p>
            Упростите совместное ведение
            <br />
            домашнего бюджета
          </p>
        </div>

        <div className="actions">
          <button className="primary-button" type="button">
            Начать
          </button>

          <button className="secondary-button" type="button">
            Войти
          </button>
        </div>
      </section>
    </main>
  );
}
