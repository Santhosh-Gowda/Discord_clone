import axios from "axios";

const instance = axios.create({
  baseURL: "https://discordbackendclone.herokuapp.com",
});

export default instance;
