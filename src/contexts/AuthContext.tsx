import { createContext, ReactNode, useContext, useState } from "react";

type User = {
  email: string;
  password: string;
};

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  //user: User | null,
  setEmailState: (email: string) => void;
  setPasswordState: (password: string) => void;
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function setEmailState(email: string) {
    setEmail(email);
  }

  function setPasswordState(password: string) {
    setPassword(password);
  }

  return (
    <AuthContext.Provider
      value={{ email, password, setEmailState, setPasswordState }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
