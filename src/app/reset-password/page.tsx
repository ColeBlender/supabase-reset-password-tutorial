import { updatePasswordAction } from "@/actions/auth";

function ResetPasswordPage() {
  return (
    <main className="w-full flex-col min-h-screen">
      <div className="rounded-lg bg-slate-500 p-8 max-w-sm mx-auto mt-10">
        <h1 className="mb-8 text-center text-2xl font-semibold">
          Reset Password
        </h1>

        <form
          action={updatePasswordAction}
          className="flex w-full flex-col gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="p-2 rounded-md"
            required
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            className="p-2 rounded-md"
            required
          />

          <button className="mt-5 bg-slate-400 p-2 rounded-md">
            Reset Password
          </button>
        </form>
      </div>
    </main>
  );
}

export default ResetPasswordPage;
