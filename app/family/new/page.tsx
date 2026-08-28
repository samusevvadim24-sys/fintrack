"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function NewFamilyPage() {
  useEffect(() => {
    const viewport = window.visualViewport;
    let keyboardOpen = false;

    const syncViewport = () => {
      const height = viewport?.height ?? window.innerHeight;
      const top = viewport?.offsetTop ?? 0;
      const keyboardVisible = height < window.innerHeight - 120;
      keyboardOpen = keyboardVisible;

      document.documentElement.style.setProperty("--app-height", `${height}px`);
      document.documentElement.style.setProperty("--app-top", `${top}px`);
      document.documentElement.classList.toggle("keyboard-open", keyboardVisible);
    };

    const preventDocumentScroll = () => {
      if (keyboardOpen) window.scrollTo(0, 0);
    };

    syncViewport();
    viewport?.addEventListener("resize", syncViewport);
    viewport?.addEventListener("scroll", syncViewport);
    window.addEventListener("resize", syncViewport);
    window.addEventListener("scroll", preventDocumentScroll, { passive: true });

    return () => {
      viewport?.removeEventListener("resize", syncViewport);
      viewport?.removeEventListener("scroll", syncViewport);
      window.removeEventListener("resize", syncViewport);
      window.removeEventListener("scroll", preventDocumentScroll);
      document.documentElement.classList.remove("keyboard-open");
    };
  }, []);

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
          <Image src="/images/create.jpg" alt="Иллюстрация создания семьи" width={813} height={613} priority sizes="(max-width: 599px) calc(100vw - 48px), 390px" />
        </div>

        <form className="family-form">
          <label><span>Ваше имя</span><input name="name" type="text" autoComplete="name" placeholder="Введите ваше имя" /></label>
          <label><span>Название семьи</span><input name="family" type="text" autoComplete="organization" placeholder="Введите название семьи" /></label>
          <button className="primary-button" type="submit">Создать семью</button>
        </form>

        <div className="family-divider" aria-hidden="true"><span /><strong>или</strong><span /></div>
        <button className="secondary-button family-join" type="button">Присоединиться по коду</button>
        <p className="family-login">У вас уже есть аккаунт? <button type="button">Войти</button></p>
      </section>
    </main>
  );
}
