"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function WelcomeActions() {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);

  const goToNewFamily = () => {
    if (isLeaving) return;

    setIsLeaving(true);
    window.setTimeout(() => router.push("/family/new"), 180);
  };

  return (
    <div className="actions">
      <button className="primary-button" type="button" onClick={goToNewFamily}>
        Начать
      </button>
      <button className="secondary-button" type="button">
        Войти
      </button>
    </div>
  );
}
