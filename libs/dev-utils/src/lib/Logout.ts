import Router from "next/router";
import axios from "axios";
import { env } from "./EnvironmentVariables";

const Logout = () => {
  axios
    .get(`${env().STRAPI_URL}/auth/logout`, { withCredentials: true })
    .then(() => {
      Router.reload();
    });
};

export default Logout;
