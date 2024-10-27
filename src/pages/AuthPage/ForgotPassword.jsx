import React, { useState } from "react";
import FormLayout from "../../components/Layout/FormLayout";
import { resetPassword } from "../../utils/firebaseSdk/firebaseSdk";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      toast.success("Password reset email sent! Please check your inbox.");
      setError(""); // Clear any previous errors
    } catch (error) {
      setError(error);
    }
  };

  return (
    <FormLayout
      formTitle={"Forgot Password"}
      btnText={"Send Reset Email"}
      onClick={handleResetPassword}
      welcomeMessage={"Enter your email to reset your password"}
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
      {/* {message && <p className="success-message">{message}</p>} */}
      {error && <p className="error-message text-red-500">{error}</p>}
    </FormLayout>
  );
};

export default ForgotPassword;
