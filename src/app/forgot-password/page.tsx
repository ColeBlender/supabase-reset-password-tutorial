import ForgotPasswordForm from "./ForgotPasswordForm";

function ForgotPasswordPage() {
  return (
    <main className="w-full flex-col min-h-screen">
      <div className="rounded-lg bg-slate-500 p-8 max-w-sm mx-auto mt-10">
        <h1 className="mb-8 text-center text-2xl font-semibold">
          Forgot Password
        </h1>

        <ForgotPasswordForm />
      </div>
    </main>
  );
}

export default ForgotPasswordPage;
