import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidateData from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIssignin] = useState(true);
  const [isFocused, setisfocused] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleSignIn = () => {
    setIssignin(!isSignIn);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const fullName = !isSignIn ? name.current?.value : null;

    const message = checkValidateData({
      email: email.current.value,
      password: password.current.value,
      name: fullName,
    });
    setErrorMessage(message);
    if (message === null) {
      if (isSignIn) {
        //sign in
        const auth = getAuth();
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
            console.log(errorCode, errorMessage);
          });
      } else {
        //sign up

        const auth = getAuth();
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            navigate("/browse");
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
            // ..
          });
      }
    } else return;
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
      <Header />
      <div className="absolute inset-0 bg-gradient-to-b z-0 from-black/60 via-black/50 to-black/20"></div>

      <div className="absolute inset-0 flex pt-28 justify-center">
        <div className="bg-black/80 px-16 py-10 rounded-md w-[520px] mb-5">
          <div className="text-white text-4xl font-extrabold pt-4 mb-2">
            {isSignIn ? "Sign In" : "Sign up"}
          </div>
          <form className="flex flex-col space-y-4 py-6">
            {!isSignIn && (
              <div className="relative">
                <input
                  ref={name}
                  type="text"
                  onFocus={() => setisfocused({ ...isFocused, name: true })}
                  onBlur={() => setisfocused({ ...isFocused, name: false })}
                  required
                  placeholder="Full Name"
                  className={`w-full p-4 bg-black/70 text-white text-xl rounded-md outline transition-all ${
                    isFocused.name ? "border-2" : "border-0"
                  }`}
                />
              </div>
            )}

            <input
              ref={email}
              type="text"
              onFocus={() => setisfocused({ ...isFocused, email: true })}
              onBlur={() => setisfocused({ ...isFocused, email: false })}
              required
              placeholder="Email or mobile number"
              className={`p-4 bg-black/70 text-white rounded-md outline placeholder:text-gray-400 text-xl ${
                isFocused.email ? "border-2" : ""
              }`}
            />
            <input
              ref={password}
              type="password"
              onFocus={() => setisfocused({ ...isFocused, password: true })}
              onBlur={() => setisfocused({ ...isFocused, password: false })}
              placeholder="Password"
              required
              className={`p-4 bg-black/70 text-white rounded outline placeholder:text-gray-400 placeholder:text-xl ${
                isFocused.password ? "border-2" : ""
              }`}
            />
            <p className="text-red-500 text-lg mt-2">{errorMessage}</p>

            <button
              type="submit"
              className="p-3 bg-red-600 text-white rounded font-bold cursor-pointer w-full"
              onClick={handleButtonClick}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex flex-col text-white space-y-6">
              <div className="underline mt-auto cursor-pointer text-center font-bold text-md">
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
                <div className="text-blue-400 underline text-md cursor-pointer">
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
