import router from "../router/router";
import store from "../store/index";
import { RESET_STAFF } from "../helpers/mutationConstants";

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  store.commit(RESET_STAFF);
  console.log("logged out successfully");
  router.push("/staff/login");
};

export default logout;
