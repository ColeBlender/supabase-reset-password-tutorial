import Link from "next/link";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <main className="w-full flex-col min-h-screen">
      <div className="rounded-lg bg-slate-500 p-8 max-w-sm mx-auto mt-10">
        <h1 className="mb-8 text-center text-2xl font-semibold">Login</h1>

        <LoginForm />

        <Link
          href="/forgot-password"
          className="underline text-center block mt-8"
        >
          Forgot Password?
        </Link>
      </div>
    </main>
  );
}

export default LoginPage;
