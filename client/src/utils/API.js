import axios from "axios";

export default {
  // Gets all books
  getPost: function(id) {
    return axios.get("/api/post/" + id);
  },
  // Gets the book with the given id
  getAllPost: function() {
    return axios.get("/api/post");
  },
  updatePost: function(id) {
    return axios.put("/api/post/" + id);
  },
  // Deletes the book with the given id
  deletePost: function(id) {
    return axios.delete("/api/post/" + id);
  },
  // Saves a book to the database
  createPost: function(post) {
    return axios.post("/api/post", post);
  }
};