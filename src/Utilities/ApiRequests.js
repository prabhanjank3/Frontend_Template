import axios from "axios";

const Server_URL = "https://0f97w.sse.codesandbox.io";
const AuthenticateUser = (credentials) => {
  return axios.get(
    Server_URL +
      "/auth?email=" +
      credentials.email +
      "&password=" +
      credentials.password
  );
};

export { AuthenticateUser };
