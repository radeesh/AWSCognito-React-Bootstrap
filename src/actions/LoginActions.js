import history from "../components/history"

export const loginUser = (username, password) => {
  console.log("Logging in as user: ", username);
  if (username=="radeesh" && password=="password"){
    history.push('/homepage')
    return { type: "LOGIN_SUCCESS", payload: username }
  }
  else {
    return { type: "LOGIN_FAILED", payload: "Invalid username or password" }
  }
};


export const logoutUser = () => {
  console.log("Logging out");
    history.push('/login')
    return { type: "LOGOUT_SUCCESS", payload: "" }
};
