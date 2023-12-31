import { useContext } from "react";
import { userInfoStateContext } from "../Context/UserInfoContext";

const useAuth = () => {
  const userInfo = useContext(userInfoStateContext);

  return {
    accessToken: userInfo?.accessToken,
    checkIsSignIn: userInfo?.checkIsSignIn,
  };
};
export default useAuth;
