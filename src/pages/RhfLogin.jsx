import { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate } from "react-router";
import DemoCredentials from "../components/DemoCredentials";
import { validateLogin } from "../data/users";
import schema from "../utils/schema";

export default function RhfLogin() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({ resolver: joiResolver(schema), mode: "onTouched" });

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
            aria-invalid={Boolean(touchedFields.email && errors.email)}
            {...register("email")}
          />
        </label>
        {touchedFields.email && errors.email && (
          <p role="alert">{errors.email.message}</p>
        )}
        <label>
          סיסמה
          <input
            type="password"
            autoComplete="current-password"
            aria-invalid={Boolean(touchedFields.password && errors.password)}
            {...register("password")}
          />
        </label>
        {touchedFields.password && errors.password && (
          <p role="alert">{errors.password.message}</p>
        )}
        <button type="submit">התחברות</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </section>
  );
}
