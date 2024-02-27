import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { userState } = useContext(UserContext);

  if (!userState) return <div>Please Login</div>;

  return <div>Welcome {userState.username}</div>;
}

export default Profile;
