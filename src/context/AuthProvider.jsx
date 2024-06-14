import PropTypes from 'prop-types';
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("user");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
// Add prop types validation
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
export const useAuth = () => useContext(AuthContext);
