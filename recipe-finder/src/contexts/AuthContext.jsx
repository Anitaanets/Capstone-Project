import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig"; // Ensure you're importing from firebase.js
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Import Firestore methods

// Initialize Firestore
const db = getFirestore();

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential;
    } catch (error) {
      console.error("Login Error: ", error.message);
      throw error; // Propagate error for handling in UI
    }
  };

  const signup = async (email, password, username) => {
    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user information (username) in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: user.email,
        uid: user.uid,
      });

      return userCredential;
    } catch (error) {
      console.error("Signup Error: ", error.message);
      throw error; // Propagate error for handling in UI
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error: ", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
