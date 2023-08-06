import React, {createContext, PropsWithChildren} from 'react';
import Loading from '../Loading';

interface AuthContextType {
  status: {
    isLoading: boolean;
    isAuthenticated: boolean;
  };
  setStatus?: React.Dispatch<
    React.SetStateAction<{
      isLoading: boolean;
      isAuthenticated: boolean;
    }>
  >;
}

export const AuthContext = createContext<AuthContextType>({
  status: {
    isLoading: true,
    isAuthenticated: false,
  },
});

export default function AuthenticationProvider({children}: PropsWithChildren) {
  const [status, setStatus] = React.useState({
    isLoading: false,
    isAuthenticated: false,
  });

  if (status.isLoading === true) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{status, setStatus}}>
      {children}
    </AuthContext.Provider>
  );
}
