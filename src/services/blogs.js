import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}


const createBlog = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

}


export default { getAll }