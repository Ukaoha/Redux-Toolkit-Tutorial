/** @format */

"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from "@/Redux/authSlice";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const displayName = useSelector((state) => state.auth.displayName);

  const signInWithGoogle = async () => {
    setLoading(true);

    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(SET_ACTIVE_USER({ displayName: user.displayName }));
    } catch (error) {
      console.error("Error signing in with Google", error);
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      dispatch(REMOVE_ACTIVE_USER());
    } catch (error) {
      console.error("Error signing out", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : isLoggedIn ? (
        <div>
          <p>Welcome, {displayName}!</p>
          <button className="text-center mt-8" onClick={signOutUser}>
            Sign Out
          </button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      )}
    </div>
  );
};

export default Auth;
