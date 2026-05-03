import { useSetAtom } from "jotai";
import { useState } from "react";
import { serverStateAtom, type UserType } from "./useMyAccount";

/*
 * this file simulates a login mutation hook that you might find in a real application.
 * it provides a login function that accepts user credentials and updates the server state atom.
 * it also manages the mutation status and error state, and allows for callbacks on success or error.
 */

type ServerState = {
  loggedIn: boolean;
  user: UserType | null;
};

type MutationCallbacks = {
  onSuccess?: (data: ServerState) => void;
  onError?: (error: Error) => void;
  onSettled?: () => void;
};

type MutationStatus = "idle" | "pending" | "success" | "error";

export function useLogin() {
  const setServerState = useSetAtom(serverStateAtom);
  const [status, setStatus] = useState<MutationStatus>("idle");
  const [error, setError] = useState<Error | null>(null);

  const loginAsync = async (variables: ServerState): Promise<ServerState> => {
    setStatus("pending");
    setError(null);
    try {
      // a little fake delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 400));
      setServerState(variables);
      setStatus("success");
      return variables;
    } catch (err) {
      const e = err instanceof Error ? err : new Error(String(err));
      setError(e);
      setStatus("error");
      throw e;
    }
  };

  const login = (variables: ServerState, callbacks?: MutationCallbacks) => {
    loginAsync(variables)
      .then(data => {
        callbacks?.onSuccess?.(data);
        callbacks?.onSettled?.();
      })
      .catch(err => {
        callbacks?.onError?.(err);
        callbacks?.onSettled?.();
      });
  };

  const reset = () => {
    setStatus("idle");
    setError(null);
  };

  return {
    login,
    loginAsync,
    isPending: status === "pending",
    isSuccess: status === "success",
    isError: status === "error",
    isIdle: status === "idle",
    error,
    reset,
  };
}
