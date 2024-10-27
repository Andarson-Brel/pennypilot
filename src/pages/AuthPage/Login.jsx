import React, { useState } from "react";
import FormLayout from "../../components/Layout/FormLayout";
import {
  useSignInWithEmailPassword,
  useSignInWithGoogle,
} from "../../utils/firebaseSdk/ReactHooks";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const signInWithGoogleMutation = useSignInWithGoogle();
  const loginMutation = useSignInWithEmailPassword();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      loginMutation.mutate({ email, password });
    } catch (error) {
      // Handle sign in error
      setError("Failed to sign in. Please check your email and password.");
      console.error("Sign in error:", error);
    }
  };

  const handleSignInWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogleMutation.mutate();
  };

  return (
    <FormLayout
      formTitle={"Login"}
      btnText={"Login"}
      onClick={handleLogin}
      googleBtn
      forgotPassword={true}
      welcomeMessage={"Welcome Back"}
      fromLogin
      signInwithGoogle={handleSignInWithGoogle}
    >
      <div className="flex justify-center flex-col items-center">
        <img
          src="./assets/illustrations/login.svg"
          alt="login illustration"
          className="lg:w-2/5 sm:w-full"
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
      {error && <p className="error-message">{error}</p>}
    </FormLayout>
  );
};

export default Login;
