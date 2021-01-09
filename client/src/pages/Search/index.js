import { Container, Form, FormGroup, Label, Input, Button } from "bootstrap";
import React, { useState, useEffect, useRef } from "react";
import SearchResult from "../../components/SearchResult";
import API from "../../utils/API";

function Search() {
    const [books, setBooks] = useState([]);
    const bookQuery = useRef();

    function bookSearch(event) {
        event.preventDefault();
        console.log("bookQuery", bookQuery);
        console.log("bookQuery.current", bookQuery.current);
        API.searchBook(bookQuery.current.value)
            .then(data => {
                console.log("search book data", data);
                setBooks(data.data.items);
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Container>
                <Form onSubmit={bookSearch}>
                    <FormGroup>
                        <Label for="searchbook">Search</Label>
                        <Input type="string" ref={bookQuery} name="search" id="searchbook" required />
                    </FormGroup>
                    <Button type="submit">Search</Button>
                </Form>
            </Container>
            <Container>
                <h6>Results</h6>
                {books.length ? (
                    books.map((book) => {
                        return <SearchResult bookOject={book} />;
                    })
                ) : (
                    <h3>No results to display</h3>
                )}
            </Container>
        </div>
    );
};

export default Search;