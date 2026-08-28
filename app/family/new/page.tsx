import Image from "next/image";

export default function NewFamilyPage() {
  return (
    <main className="family-page">
      <section className="family-card" aria-labelledby="family-title">
        <div className="family-header">
          <h1 id="family-title">Регистрация семьи</h1>
          <p>
            Создайте группу или присоединитесь к существующей, чтобы начать
            отслеживать совместные расходы.
          </p>
        </div>

        <div className="family-illustration">
          <Image
            src="/images/create.jpg"
            alt="Иллюстрация создания семьи"
            width={813}
            height={613}
            priority
            sizes="(max-width: 599px) calc(100vw - 48px), 390px"
          />
        </div>

        <form className="family-form">
          <label>
            <span>Ваше имя</span>
            <input name="name" type="text" autoComplete="name" placeholder="Введите ваше имя" />
          </label>

          <label>
            <span>Название семьи</span>
            <input name="family" type="text" autoComplete="organization" placeholder="Введите название семьи" />
          </label>

          <button className="primary-button" type="submit">
            Создать семью
          </button>
        </form>

        <div className="family-divider" aria-hidden="true">
          <span />
          <strong>или</strong>
          <span />
        </div>

        <button className="secondary-button family-join" type="button">
          Присоединиться по коду
        </button>

        <p className="family-login">
          У вас уже есть аккаунт? <button type="button">Войти</button>
        </p>
      </section>
    </main>
  );
}
