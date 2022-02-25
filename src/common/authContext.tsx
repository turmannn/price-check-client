import { createContext } from "react";

// interface IAuthContext {
//   authenticated: boolean;
//   setAuthenticated?: ():boolean => void;
// }

// const AuthContext = createContext<IAuthContext>({
  const AuthContext = createContext({
  authenticated: false,
  setAuthenticated: (b: boolean) => {}
});

export default AuthContext;