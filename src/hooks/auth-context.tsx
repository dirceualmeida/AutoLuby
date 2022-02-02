import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';
import { useHistory } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  vehicles: any;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@AutoLuby:token');
    const user = localStorage.getItem('@AutoLuby:user');
    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    console.log('dentro do context');
    const response = await api.post('login', { email, password });
    const { token } = response.data;
    const { user } = response.data;
    localStorage.setItem('@AutoLuby:token', token);
    localStorage.setItem('@AutoLuby:user', JSON.stringify(user));
    setData({ token, user });
  }, []);
  const signOut = useCallback(async () => {
   await localStorage.removeItem('@AutoLuby:token');
   await localStorage.removeItem('@AutoLuby:user');
    history.push('/')
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
