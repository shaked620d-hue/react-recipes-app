import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import DemoCredentials from "../components/DemoCredentials";
import { validateLogin } from "../data/users";

export default function RhfLogin() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit({ email, password }) {
    const loginError = validateLogin(email, password);
    setError(loginError);
    if (!loginError) navigate("/recipes");
  }

  return (
    <section>
      <h1>התחברות - React Hook Form</h1>
      <DemoCredentials />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          אימייל
          <input
            type="email"
            autoComplete="username"
            aria-invalid={Boolean(errors.email)}
            {...register("email", {
              required: "שדה האימייל הוא חובה.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "יש להזין כתובת אימייל תקינה.",
              },
            })}
          />
        </label>
        {errors.email && <p role="alert">{errors.email.message}</p>}
        <label>
          סיסמה
          <input
            type="password"
            autoComplete="current-password"
            aria-invalid={Boolean(errors.password)}
            {...register("password", {
              required: "שדה הסיסמה הוא חובה.",
              minLength: {
                value: 6,
                message: "הסיסמה חייבת להכיל לפחות 6 תווים.",
              },
            })}
          />
        </label>
        {errors.password && <p role="alert">{errors.password.message}</p>}
        <button type="submit">התחברות</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </section>
  );
}
