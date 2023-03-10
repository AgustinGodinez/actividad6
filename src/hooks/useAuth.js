import React, { useState, useContext, createContext } from 'react'
import apiClient from '../apiClient/index'
import Cookie from 'js-cookie'

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data: access_token } = await apiClient.post('/authenticate', { email, password }, options);
    if (access_token) {
      const token = access_token.user;
      Cookie.set('token', token, { expires: 5 });
      // axios.defaults.headers.Authorization = `Bearer ${token}`;
      // const { data: user } = await axios.get(endPoints.auth.profile);
      const usr = access_token.user;
      console.log(usr)
      setUser('login');
      console.log(user)
    }
  };

  return {
    user,
    signIn,
  };
}