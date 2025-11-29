import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Browse = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <div className="relative w-full h-screen">
      {/* Header stays normally */}
      <Header />

      {/* Top-right button on the top-most layer */}
      <button
        className="absolute top-4 right-4 z-50 
                   text-white font-bold text-xl 
                   bg-amber-500 p-3 rounded-md cursor-pointer"
        onClick={handleSignOut}
      >
        Logout
      </button>
    </div>
  );
};

export default Browse;
