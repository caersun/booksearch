import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import React, { useState, useRef } from "react";
import SearchResult from "../../components/SearchResult";
import API from "../../utils/API";

function Search() {
    const [books, setBooks] = useState([]);
    const queryRef = useRef();

    function bookSearch(event) {
        event.preventDefault();
        API.searchBook(queryRef.current.value)
            .then(data => setBooks(data.data.items))
            .catch(err => console.log(err));
    };

    return <Container>
                <Form onSubmit={bookSearch}>
                    <FormGroup>
                        <Label for="search">Search</Label>
                        <Input 
                            // reactstrap uses innerRef to acces DOM instead of ref
                            innerRef={queryRef} 
                            id="search" />
                    </FormGroup>
                    <Button type="submit">Search</Button>
                </Form>
                <h6>Results</h6>
                {books.length ? (
                    books.map((book, key) => { 
                        // console.log("in Search page ~ in results ~ book", book);
                        return <SearchResult key={key} book={book} /> 
                    })) : (
                    <h3>No results to display</h3>
                )}
    </Container>;
};

export default Search;