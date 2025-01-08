import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { LoginState } from "../../data/slices/login";

const Profile: React.FC = () => {
  const { userDetails } = useSelector<RootState, LoginState>((s) => s.login);

  return userDetails ? (
    <div>{JSON.stringify(userDetails)}</div>
  ) : (
    <div>No user data available.</div>
  );
};

export default Profile;
