import React, { useState } from "react";
import FormLayout from "../../components/Layout/FormLayout";
import { toast } from "sonner";
import {
  useSignInWithGoogle,
  useSignUpWithEmailPassword,
} from "../../utils/firebaseSdk/ReactHooks";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const signUpMutation = useSignUpWithEmailPassword();
  const signInWithGoogleMutation = useSignInWithGoogle();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (!isChecked) {
      toast.error("You must agree to the Terms of Service and Privacy Policy!");
      return;
    }

    signUpMutation.mutate({ email, password, displayName });
  };
  const handleSignInWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogleMutation.mutate();
  };

  return (
    <FormLayout
      formTitle={"Sign Up"}
      btnText={"Sign Up"}
      onClick={handleSignUp}
      googleBtn={true}
      welcomeMessage={"Sign Up and Take Charge Over your finance Today"}
      signInwithGoogle={handleSignInWithGoogle}
    >
      <input
        type="text"
        placeholder="Display Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      {/* <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      /> */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="flex items-center gap-2 mt-1 mb-3">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <p className="w-full text-xs">
          By signing up, you agree to the{" "}
          <span className="text-violet_100 cursor-pointer ">
            Terms of Service and Privacy Policy
          </span>
        </p>
      </div>
    </FormLayout>
  );
};

export default SignUp;
