import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import API from "../utils/API";

function SavedBook({ book }) {
    const deleteBook = () => {
        API.deleteBook(book._id).then(window.location.reload());
    };

    return <Card>
                <CardBody>
                    <CardTitle tag="h5">{book.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Author(s): {book.authors}</CardSubtitle>
                    <CardText>{book.description}</CardText>
                    <Button>View</Button>
                    <Button onClick={() => deleteBook()}>Delete</Button>
                </CardBody>
            </Card>
};

export default SavedBook;