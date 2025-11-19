import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIssignin] = useState(true);

  const handleSignIn = () => {
    setIssignin(!isSignIn);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/IN-en-20251110-TRIFECTA-perspective_46e74acc-70aa-4691-988a-dbcf958149d1_large.jpg"
        alt=""
        className="w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/20"></div>
      <Header />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black/70 px-16 py-10 rounded-md w-[550px]">
          <div className="text-white text-4xl font-extrabold">
            {isSignIn ? "Sign In" : "Sign up"}
          </div>
          <form className="flex flex-col space-y-4 py-8">
            {!isSignIn && (
              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="peer w-full p-4 bg-black/70 text-white rounded outline text-xl"
                />
              </div>
            )}

            <input
              type="text"
              placeholder="Email or mobile number"
              className="p-4 bg-black/70 text-white rounded outline placeholder:text-gray-400 placeholder:text-xl"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 bg-black/70 text-white rounded outline placeholder:text-gray-400 placeholder:text-xl"
            />

            <button
              type="submit"
              className="p-3 bg-red-600 text-white rounded font-bold"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex flex-col text-white space-y-6">
              <div className="underline mt-auto cursor-pointer text-end">
                Forgot Password?
              </div>
              {/* Top Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span className="text-lg">Remember me</span>
                </div>

                <div className="text-gray-400 text-lg">
                  {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
                  <span
                    onClick={handleSignIn}
                    className="font-semibold text-white cursor-pointer underline"
                  >
                    {isSignIn ? "Sign Up now" : "Sign In"}
                  </span>
                </div>
              </div>
              <div className="text-gray-400 text-sm">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <div className="text-blue-400 underline text-md">
                  Learn more.
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
