import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import API from "../../utils/API";

function Saved() {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        loadSaved()
    }, []);

    function loadSaved() {
        API.getSavedBooks()
            .then(res => setSaved(res.data))
            .catch(err => console.log(err));
    };

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadSaved())
            .catch(err => console.log(err));
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Saved Books</h3>
                    <p>Need to come back and add logic!</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Saved;