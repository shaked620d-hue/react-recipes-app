import { demoUser } from "../data/users";

export default function DemoCredentials() {
  return (
    <p>
      משתמש לדוגמה: {demoUser.email} / {demoUser.password}
    </p>
  );
}
