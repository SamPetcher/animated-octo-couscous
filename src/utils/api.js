import axios from "axios";

const myApi = axios.create({
  baseURL: "https://news-2p18.onrender.com/api",
});
export const fetchTopics = () => {
  return myApi.get(`/topics/`).then( (res) => {
    return res.data
  })
};
export const fetchArticles = () => {
  return myApi.get(`/articles/`).then( (res) => {
    return res.data
  })
}
export const fetchArticle = (id) => {
  return myApi.get(`/articles/${id}`).then( (res) => {
    return res.data
  })
};
export const fetchComments = (id) => {
  return myApi.get(`/articles/${id}/comments`).then( (res) => {
    return res.data
  })
};
