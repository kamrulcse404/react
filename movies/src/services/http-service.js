import axios from "axios";
import jwtDecode from "jwt-decode";
// const apiUrl = "http://localhost:4000/";

export function register(user){
    return axios.post("http://localhost:4000/users/register", user);
    // return axios.post(`${apiUrl}/users/register`, user);
}

export async function login(user) {
  try {
    const res = await axios.post("http://localhost:4000/users/authenticate", user);
    localStorage.setItem('accessToken', res.data.accessToken);
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

export function getCurrentUser() {
  try {
    const accessToken = localStorage.getItem('accessToken');
    return jwtDecode(accessToken);
  } catch (error) {
    return null;
  }
}