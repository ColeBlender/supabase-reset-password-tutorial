"use client";

import { sendResetPasswordEmailAction } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

function ForgotPasswordForm() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleClickResetButton = async (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await sendResetPasswordEmailAction(formData);
      if (!errorMessage) {
        router.replace("/");
        toast.success("Your link has been sent!");
      } else {
        toast.error(errorMessage);
      }
    });
  };

  return (
    <form
      className="flex w-full flex-col gap-4"
      action={handleClickResetButton}
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-2 rounded-md"
        required
        disabled={isPending}
      />

      <button disabled={isPending} className="mt-5 bg-slate-400 p-2 rounded-md">
        {isPending ? "Sending Link..." : "Send Password Reset Link"}
      </button>
    </form>
  );
}

export default ForgotPasswordForm;
