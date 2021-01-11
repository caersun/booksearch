import { CardDeck, Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col } from "reactstrap";

function SearchResult({ book }) {
    console.log("incoming query for", book);

    return <CardDeck>
        <Card>
            <CardBody>
                <CardTitle tag="h5">{book.volumeInfo.title}</CardTitle>
                {/* TODO: Fix multiple authors to show with comma */}
                <CardSubtitle tag="h6" className="mb-2 text-muted">Author(s): {book.volumeInfo.authors}</CardSubtitle>
                <CardText>{book.volumeInfo.description}</CardText>
            </CardBody>
        </Card>
    </CardDeck>
}

export default SearchResult;