import { useState } from "react";
import { useNavigate } from "react-router";
import DemoCredentials from "../components/DemoCredentials";
import { validateLogin } from "../data/users";

export default function ControlledLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const loginError = validateLogin(email, password);
    setError(loginError);
    if (!loginError) navigate("/recipes");
  }

  return (
    <section>
      <h1>התחברות - טופס מבוקר</h1>
      <DemoCredentials />
      <form onSubmit={handleSubmit}>
        <label>
          אימייל
          <input
            type="email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          סיסמה
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
