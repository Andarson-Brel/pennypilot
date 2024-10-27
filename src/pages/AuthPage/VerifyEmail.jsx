import React from "react";

const VerifyEmail = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Please verify your email
        </h1>
        <p className="text-gray-600">
          We have sent a verification email to your address. Please check your
          inbox and verify your email to access the application.
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
