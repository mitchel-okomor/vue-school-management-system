import router from "../router/router";
import store from "../store/index";
import { RESET_STUDENT } from "../helpers/mutationConstants";

const logout = () => {
  localStorage.removeItem("student_token");
  localStorage.removeItem("student_id");
  store.commit(RESET_STUDENT);
  console.log("logged out successfully");
  router.push("/student/login");
};

export default logout;
