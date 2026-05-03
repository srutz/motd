import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/Button";
import { Dialog } from "../components/Dialog";
import { PasswordInput } from "../components/PasswordInput";
import { useLogin } from "../hooks/useLogin";

export function LoginDialog() {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const { login, isPending } = useLogin();

  const handleSubmit = () => {
    const password = passwordRef.current;
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    const validEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (!validEmail) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("Login clicked", { email, password });
    login(
      { loggedIn: true, user: { email } },
      { onSuccess: () => setOpen(false) }
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      title="Login"
      description="Please enter your credentials to log in."
    >
      <input
        type="text"
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <PasswordInput
        placeholder="Password"
        onChange={(value) => passwordRef.current = value}
        onKeyDown={handleKeyDown}
      />
      <div className="flex gap-2 justify-end mt-2">
        <Button
          onClick={() => navigate("/")}
          className="bg-white hover:bg-gray-100 text-black border border-gray-300"
        >
          Cancel
        </Button>
        <Button
          disabled={isPending}
          onClick={handleSubmit}
        >
          Login
        </Button>
      </div>
    </Dialog >
  );
}