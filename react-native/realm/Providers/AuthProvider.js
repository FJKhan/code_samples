import React, {useContext, useState, useEffect, useRef} from 'react';
import Realm from 'realm';
import {getRealmApp} from '../getRealmApp';

import {storeData} from '@lib/services/localStorage';

import NavigationServiceProvider from '@providers/NavigationServiceProvider';
import { Alert } from 'react-native';

// Access the Realm App.
const app = getRealmApp();

// Create a new Context object that will be provided to descendants of
// the AuthProvider.
const AuthContext = React.createContext(null);

// The AuthProvider is responsible for user management and provides the
// AuthContext value to its descendants. Components under an AuthProvider can
// use the useAuth() hook to access the auth value.
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(app.currentUser);
  const realmRef = useRef(null);
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    if (!user) {
      return;
    }

    // Manage user realm etc 
  }, [user]);

  const emailSignIn = async (email, password) => {
    try {
      const creds = Realm.Credentials.emailPassword(email, password);
      const newUser = await app.logIn(creds);
      storeData('accessToken', app.currentUser.accessToken);
      setUser(newUser);
    } catch (e) {
      if(e?.code === 50){
        Alert.alert('Incorrect email or password. Try again')
      }
      console.error(
        `Caught error while attempting to sign in user:`,
        JSON.stringify(e)
      );
    }
  };

  const signUp = async (email, password) => {
    try {
      await app.emailPasswordAuth.registerUser(email, password);
      await emailSignIn(email, password);
    } catch (e) {
      console.error(
        `Caught error while attempting to sign up user: ${JSON.stringify(e)}`
      );
    }
  };

  const signOut = async () => {
    if (!user) {
      console.warn("Not logged in, can't log out!");
      NavigationServiceProvider.navigate('AuthLoading');
      return;
    }
    try {
      await user.logOut();
      setUser(null);
    } catch (e) {
      console.error(
        `Caught error while attempting to sign out user: ${JSON.stringify(e)}`
      );
    } finally {
      NavigationServiceProvider.navigate('AuthLoading');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        emailSignIn,
        signOut,
        user
      }}>
      {children}
    </AuthContext.Provider>
  );
};

// The useAuth hook can be used by components under an AuthProvider to
// access the auth context value.
const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth == null) {
    throw new Error('useAuth() called outside of a AuthProvider?');
  }
  return auth;
};

export {AuthProvider, useAuth};
