import Link from "next/link";

export function WelcomeActions() {
  return (
    <div className="actions">
      <Link className="primary-button" href="/family/new">
        Начать
      </Link>
      <button className="secondary-button" type="button">
        Войти
      </button>
    </div>
  );
}
