"use client";

import { useRouter } from "next/navigation";

export function WelcomeActions() {
  const router = useRouter();

  const goToNewFamily = () => {
    router.push("/family/new");
  };

  return (
    <div className="actions">
      <button
        className="primary-button"
        type="button"
        onClick={goToNewFamily}
        onTouchEnd={goToNewFamily}
      >
        Начать
      </button>
      <button className="secondary-button" type="button">
        Войти
      </button>
    </div>
  );
}
