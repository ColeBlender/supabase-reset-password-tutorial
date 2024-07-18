"use client";

import { signOutAction } from "@/actions/auth";

function SignOutButton() {
  return (
    <button
      className="bg-slate-300 rounded-md p-2"
      onClick={() => signOutAction()}
    >
      Sign Out
    </button>
  );
}

export default SignOutButton;
