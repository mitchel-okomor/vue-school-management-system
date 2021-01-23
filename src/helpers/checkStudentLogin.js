import jwt_decode from "jwt-decode";

const confirm = () => {
  const token = localStorage.getItem("student_token");

  if (token) {
    const decoded = jwt_decode(token);
    const { exp } = decoded;
    if (Date.now() >= exp * 1000) {
      localStorage.removeItem("student_token");
      localStorage.removeItem("student_id");
      return false;
    }
    return true;
  }
  return false;
};

export default confirm;
