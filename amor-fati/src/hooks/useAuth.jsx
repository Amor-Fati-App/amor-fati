import { createContext, useContext, useState, useEffect } from "react";
import client from "../config/supabase";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth} displayName="Auth">
      {children}
    </authContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

    const handleSignUp = async ({ name, email, password }) => {
    setError(null);

    setIsLoading(true);

    try {
      const { error } = await client.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name,
          },
        },
      });

      if (error) {
        throw error;
      }
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
    };
    
    const handleLogIn = async ({email, password}) => {
        setIsLoading(true)
        setError(null)

        try {
            const { error } = await client.auth.signInWithPassword({
                email, 
                password
            })

            if (error) throw error;
            location.href = '/app'
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

  return {
      handleSignUp,
      handleLogIn,
      error,
      isLoading,
      success
  };
}
