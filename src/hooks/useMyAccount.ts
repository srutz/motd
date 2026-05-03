import { atom, useAtom } from "jotai";


export type UserType = {
  email: string;
}

export const serverStateAtom = atom({
  loggedIn: false,
  user: null as UserType | null
})


export function useMyAccount() {
  const [serverState] = useAtom(serverStateAtom);
  return serverState.user;
}

