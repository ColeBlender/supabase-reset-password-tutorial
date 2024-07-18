"use server";

import { getAuth } from "@/supabase/auth/server";
import { getErrorMessage } from "@/lib/utils";

export const loginAction = async (formData: FormData) => {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const auth = getAuth();

    const { error } = await auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
};

export const signOutAction = async () => {
  try {
    const auth = getAuth();

    const { error } = await auth.signOut();

    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
};

export const sendResetPasswordEmailAction = async (formData: FormData) => {
  try {
    const email = formData.get("email") as string;

    const auth = getAuth();

    const { error } = await auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/reset-password",
    });

    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
};

export const updatePasswordAction = async (formData: FormData) => {
  try {
    const email = formData.get("email") as string;
    const newPassword = formData.get("newPassword") as string;

    const auth = getAuth();

    const { error } = await auth.updateUser({
      email,
      password: newPassword,
    });

    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
};
