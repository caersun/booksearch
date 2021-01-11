import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SavedBook from "../../components/SavedBook";
import API from "../../utils/API";

function Saved() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    loadSaved();
  }, []);

  function loadSaved() {
    console.log("I'm inside loadSaved()!");
    API.getSavedBooks()
      .then((res) => {
          console.log("Currently saved:", res.data);
          setSaved(res.data);
        })
      .catch((err) => console.log(err));
  }

//   function deleteBook(id) {
//     API.deleteBook(id)
//       .then((res) => loadSaved())
//       .catch((err) => console.log(err));
//   }

  return (
    <Container>
      <h6>Saved Books</h6>
      {saved.length ? (
        saved.map((savedBook, key) => {
          return <SavedBook key={key} book={savedBook} loadSaved={loadSaved} />;
        })
      ) : (
        <h3>Search for some books, save them, and they will appear here!</h3>
      )}
    </Container>
  );
}

export default Saved;
