import { createContext, useContext, useState, useEffect } from "react";

const UsernameContext = createContext();

export function UserProvider({ children }) {
  // Initialize from localStorage
  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username') || '';
  });

  // Sync to localStorage whenever userEmail changes
  useEffect(() => {
    if (username) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username'); // Clear on logout
    }
  }, [username]);

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
}

// Custom hook so you can do `useUserEmail()` easily
export function useUsername() {
  return useContext(UsernameContext);
}
