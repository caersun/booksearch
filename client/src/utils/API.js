import axios from "axios";

const API = {
    searchBook: (query) => {
        const url = "https://www.googleapis.com/books/v1/volumes?q=" + query;
        console.log("searching url:", url);
        return axios.get(url);
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