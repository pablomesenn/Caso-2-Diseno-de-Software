import React from "react";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Profile({ user }) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/signin");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="profile-container">
      <h2>Bienvenido, {user.email}</h2>
      <button 
        onClick={handleSignOut}
        className="button-primary"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Profile;