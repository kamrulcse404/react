import axios from "axios";
// const apiUrl = "http://localhost:4000/";

export function register(user){
    return axios.post("http://localhost:4000/users/register", user);
    // return axios.post(`${apiUrl}/users/register`, user);
}

export function login(user) {
  return axios.post("http://localhost:4000/users/authenticate", user);
}