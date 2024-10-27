import { toast } from "sonner";
import {
  signInWithEmailPassword,
  signInWithGoogle,
  signOutUser,
  signUpWithEmailPassword,
} from "./firebaseSdk";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { login } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";

export const useSignInWithGoogle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: () => signInWithGoogle(),
    onSuccess: (data) => {
      const token = data.user.stsTokenManager;
      const emailVerified = data.user.emailVerified;
      const userData = {
        uid: data.user.uid,
        email: data.user.email,
      };
      const { accessToken } = data.user.stsTokenManager;
      if (token) {
        navigate("/dashboard");
      }
      dispatch(login({ userData, accessToken, emailVerified }));
      toast.success("Signed in with Google successfully!");
    },
    onError: (error) => {
      toast.error("Error signing in with Google: " + error.message);
    },
  });
};

export const useSignOut = () => {
  return useMutation({
    mutationFn: () => signOutUser(),
    onSuccess: () => {
      toast.success("Signed out successfully!");
    },
    onError: (error) => {
      toast.error("Error signing out: " + error.message);
    },
  });
};

export const useSignUpWithEmailPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: (data) =>
      signUpWithEmailPassword(
        data.email,
        data.password,
        data.displayName,
        data.phoneNumber
      ),
    onSuccess: (user) => {
      const token = user.stsTokenManager;
      const emailVerified = user.emailVerified;
      const userData = {
        uid: user.uid,
        email: user.email,
      };
      const { accessToken } = user.stsTokenManager;
      if (token) {
        navigate("/dashboard");
      }
      dispatch(login({ userData, accessToken, emailVerified }));
      toast.success(
        "Sign up successful! Please check your email for verification."
      );
    },
    onError: (error) => {
      toast.error("Error signing up: " + error.message);
    },
  });
  return mutation;
};

export const useSignInWithEmailPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) => signInWithEmailPassword(data.email, data.password),
    onSuccess: (userData) => {
      const { accessToken } = userData.stsTokenManager;
      if (accessToken) {
        navigate("/dashboard");
      }
      const emailVerified = userData.emailVerified;
      const user = {
        uid: userData.uid,
        email: userData.email,
      };
      dispatch(login({ user, accessToken, emailVerified }));

      toast.success("Sign in successful!");
      console.log("User signed in:", userData);
    },
    onError: (error) => {
      toast.error("Error signing in: " + error.message);
    },
  });
};
