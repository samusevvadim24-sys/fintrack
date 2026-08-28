import Image from "next/image";

export default function WelcomePage() {
  return (
    <main className="welcome-screen">
      <section className="welcome-content" aria-labelledby="welcome-title">
        <div className="illustration-wrap">
          <Image
            src="/images/welcome.jpg"
            alt="Иллюстрация совместного управления семейным бюджетом"
            width={360}
            height={580}
            priority
            sizes="(max-width: 599px) 90vw, 360px"
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
