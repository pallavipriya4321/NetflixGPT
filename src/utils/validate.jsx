import React from "react";

const checkValidateData = ({ email, password, name }) => {
  const emailCheck =
    /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
  const passwordCheck =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  const trimmedName = name?.trim() || "";
  const nameCheck = !name || /^[A-Za-z ]{2,40}$/.test(trimmedName);

  if (name && !nameCheck) {
    return "Name is not valid";
  }

  if (!emailCheck) return "Email not valid";
  if (!passwordCheck) return "Password not valid";

  return null;
};

export default checkValidateData;
