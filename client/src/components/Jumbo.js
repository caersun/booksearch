import { Jumbotron, Container } from "reactstrap";

function Jumbo() {
    return <Jumbotron fluid>
        <Container fluid>
            <h1 className="display-3">Search Gooogle Books</h1>
            <p className="lead">Search the Google Books API for books that interest you and save them!</p>
        </Container>
    </Jumbotron>
};

export default Jumbo;