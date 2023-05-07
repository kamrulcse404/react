import axios from "axios";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  const { data } = await axios.get(apiUrl);
  return data;
}

async function createPost() {
  const { data } = await axios.post(apiUrl, post);
  return data;
}
