import { getUser } from "@/supabase/auth/server";
import SignOutButton from "./components/SignOutButton";
import Link from "next/link";

async function HomePage() {
  const user = await getUser();

  return (
    <main className="w-full min-h-screen justify-center items-center flex flex-col gap-8">
      {user ? (
        <>
          <p>Logged in as {user.email}</p>
          <SignOutButton />
        </>
      ) : (
        <Link href="/login" className="bg-slate-300 rounded-md p-2">
          Login
        </Link>
      )}
    </main>
  );
}

export default HomePage;
