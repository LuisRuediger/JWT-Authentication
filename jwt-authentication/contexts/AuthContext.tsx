import { createContext, ReactNode } from "react";

 type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  sigIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false

  async function sigIn({ email, password }: SignInCredentials) {
    console.log({ email, password })
  }

  return (
    <AuthContext.Provider value={{ sigIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}