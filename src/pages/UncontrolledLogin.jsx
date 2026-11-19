import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import DemoCredentials from "../components/DemoCredentials";
import { demoUser, validateLogin } from "../data/users";

export default function UncontrolledLogin() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const formRef = useRef(null);

  function handleAction(formData) {
    const { email, password } = Object.fromEntries(new Map(formData));
    const loginError = validateLogin(email, password);
    setError(loginError);
    if (loginError) {
      // Form actions reset uncontrolled fields after returning; update their reset values to preserve this submission.
      formRef.current.elements.namedItem("email").defaultValue = email;
      formRef.current.elements.namedItem("password").defaultValue = password;
      return;
    }
    navigate("/recipes");
  }

  return (
    <section>
      <h1>התחברות - טופס לא מבוקר</h1>
      <DemoCredentials />
      <form ref={formRef} action={handleAction}>
        <label>
          אימייל
          <input
            name="email"
            type="email"
            autoComplete="username"
            defaultValue={demoUser.email}
            required
          />
        </label>
        <label>
          סיסמה
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            defaultValue=""
            minLength={6}
            required
          />
        </label>
        <button type="submit">התחברות</button>
      </form>
      {error && <p role="alert">{error}</p>}
      {/* בטופס הזה בדיקת המשתמש נעשית בשליחה בתוך action; אפשר לבדוק בזמן הקלדה דרך input events או ref, בלי לשמור ערכים ב-state. */}
    </section>
  );
}
