export const demoUser = {
  email: "cook@example.com",
  password: "recipe123",
};

const users = [demoUser];

export function validateLogin(email, password) {
  if (typeof email !== "string" || typeof password !== "string") {
    return "יש להזין אימייל וסיסמה.";
  }

  const normalizedEmail = email.trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return "יש להזין כתובת אימייל תקינה.";
  }
  if (password.length < 6) {
    return "הסיסמה חייבת להכיל לפחות 6 תווים.";
  }
  if (!users.some((user) => user.email === normalizedEmail && user.password === password)) {
    return "האימייל או הסיסמה שגויים.";
  }

  return "";
}
