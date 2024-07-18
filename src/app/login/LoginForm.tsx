"use client";

import { loginAction } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

function LoginForm() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleClickLoginButton = async (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await loginAction(formData);
      if (!errorMessage) {
        router.replace("/");
        toast.success("Successfully logged in!");
      } else {
        toast.error(errorMessage);
      }
    });
  };

  return (
    <form
      className="flex w-full flex-col gap-4"
      action={handleClickLoginButton}
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-2 rounded-md"
        required
        disabled={isPending}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="p-2 rounded-md"
        required
        disabled={isPending}
      />

      <button disabled={isPending} className="mt-5 bg-slate-400 p-2 rounded-md">
        {isPending ? "Logging in..." : "Login With Email"}
      </button>
    </form>
  );
}

export default LoginForm;
