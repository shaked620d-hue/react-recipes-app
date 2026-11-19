import { useState } from "react";
import { useNavigate } from "react-router";
import DemoCredentials from "../components/DemoCredentials";
import { validateLogin } from "../data/users";

export default function UncontrolledLogin() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const loginError = validateLogin(formData.get("email"), formData.get("password"));
    setError(loginError);
    if (loginError) return;
    navigate("/recipes");
  }

  return (
    <section>
      <h1>התחברות - טופס לא מבוקר</h1>
      <DemoCredentials />
      <form onSubmit={handleSubmit}>
        <label>
          אימייל
          <input name="email" type="email" autoComplete="username" required />
        </label>
        <label>
          סיסמה
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            minLength={6}
            required
          />
        </label>
        <button type="submit">התחברות</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </section>
  );
}
