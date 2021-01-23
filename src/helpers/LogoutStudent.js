const logout = () => {
  localStorage.removeItem("student_token");
  localStorage.removeItem("student_id");
  console.log("logged out successfully");
  window.location.reload();
};

export default logout;
