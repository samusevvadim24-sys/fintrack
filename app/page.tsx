import Image from "next/image";

export default function WelcomePage() {
  return (
    <main className="welcome-screen">
      <section className="welcome-content" aria-labelledby="welcome-title">
        <div className="illustration-wrap">
          <Image
            src="/images/welcome.jpg"
            alt="Иллюстрация совместного управления семейным бюджетом"
            width={400}
            height={320}
            priority
            quality={70}
            sizes="(max-width: 599px) 360px, 400px"
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
