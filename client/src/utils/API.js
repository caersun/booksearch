import axios from "axios";

const API = {
    searchBook: (query) => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },
    getSavedBooks: () => {
        return axios.get("/api/books");
    },
    saveBook: (bookData) => {
        return axios.post("/api/books", bookData);
    },
    deleteBook: (id) => {
        return axios.delete("/api/books/" + id);
    }
    
};

export default API;