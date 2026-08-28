"use client";

import { useRouter } from "next/navigation";

export default function NewFamilyPage() {
  const router = useRouter();

  return (
    <main className="family-page">
      <section className="family-card" aria-labelledby="family-title">
        <button
          className="back-button"
          type="button"
          aria-label="Назад"
          onClick={() => router.back()}
        >
          ←
        </button>

        <div className="family-content">
          <div>
            <p className="eyebrow">Новая семья</p>
            <h1 id="family-title">Создание новой семьи</h1>
            <p className="family-description">
              Создайте семью, чтобы вместе управлять домашним бюджетом.
            </p>
          </div>

          <div className="family-actions">
            <button className="primary-button" type="button">
              Создать семью
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
