// import { useSelector } from "react-redux";
// import { checkObj } from "../service/checkObj";
import { TOKEN } from "../service/const";

const useIsAuth = () => {
  // const { user } = useSelector((state) => state.app);
  const jwt = localStorage.getItem(TOKEN);

  // if (checkObj(user) && jwt !== null) {
  if (jwt !== null) {
    return true;
  }

  return false;
};
export default useIsAuth;
