import { createContext, useState, ReactNode } from "react";
import { User } from "../types/user";
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  handleSetUser: (user: User) => void;
  handleRemoveUser: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSetUser = (user: User) => {
    setUser(user);
    setIsAuthenticated(true);
  };
  const handleRemoveUser = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        setUser,
        handleSetUser,
        handleRemoveUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
