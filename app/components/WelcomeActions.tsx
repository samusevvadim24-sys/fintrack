"use client";

import { useRouter } from "next/navigation";

export function WelcomeActions() {
  const router = useRouter();

  return (
    <div className="actions">
      <button
        className="primary-button"
        type="button"
        onClick={() => router.push("/family/new")}
      >
        Начать
      </button>
      <button className="secondary-button" type="button">
        Войти
      </button>
    </div>
  );
}
