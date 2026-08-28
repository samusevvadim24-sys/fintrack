import Image from "next/image";
import { WelcomeActions } from "./components/WelcomeActions";

export default function WelcomePage() {
  return (
    <main className="welcome-screen">
      <section className="welcome-content" aria-labelledby="welcome-title">
        <div className="illustration-wrap">
          <Image
            src="/images/welcome.jpg"
            alt="Иллюстрация совместного управления семейным бюджетом"
            width={813}
            height={613}
            priority
            sizes="(max-width: 599px) calc(100vw - 48px), 390px"
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

        <WelcomeActions />
      </section>
    </main>
  );
}
