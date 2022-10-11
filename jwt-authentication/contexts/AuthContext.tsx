import { createContext, ReactNode } from "react";
import { api } from "../services/api";

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
    try {
      const response = await api.post('sessions', {
        email,
        password,
      })
  
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ sigIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}