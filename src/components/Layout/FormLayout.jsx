import React from "react";
import Button from "../Buttons/MainBtn";
import GoogleBtn from "../Buttons/GoogleBtn";
import { Link } from "react-router-dom";

const FormLayout = ({
  forgotPassword,
  formTitle,
  btnText,
  onClick,
  signInwithGoogle,
  googleBtn,
  children,
  welcomeMessage,
  fromLogin,
}) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 py-8">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8
        w-full max-w-md sm:mb-4 flex flex-col justify-center"
      >
        <div className=" mb-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center ">
            {formTitle}
          </h2>
          <p className=" text-dak_20 mt-2 text-center">{welcomeMessage}</p>
        </div>

        {children}
        <Button type={"primary"} onClick={onClick}>
          {btnText}
        </Button>

        {googleBtn && (
          <div className="flex flex-col items-center mt-3 mb-3">
            <p className="font-semibold text-dak_20">Or</p>
            <GoogleBtn onClick={signInwithGoogle}>
              {fromLogin ? "Login" : "Sign Up"}
            </GoogleBtn>
          </div>
        )}
        {forgotPassword && (
          <div>
            <p className="text-dak_20 text-center mt-2 cursor-pointer text-sm">
              <Link to={"/reset-password"}>Forgot Password?</Link>
            </p>
            <p className="  font-semibold text-center text-violet_100 cursor-pointer mt-2">
              Don’t have an account yet?
              <span className="  underline">
                <Link to={"/sign-up"}>Sign Up</Link>
              </span>
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormLayout;
