import { createSupabaseClient } from "../server";

export function getAuth() {
  const { auth } = createSupabaseClient();
  return auth;
}

export const getUser = async () => {
  const auth = getAuth();
  const user = (await auth.getUser()).data.user;

  return user;
};
