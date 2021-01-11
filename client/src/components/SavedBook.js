import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import API from "../utils/API";
// import Saved from "../pages/Saved";

function SavedBook({ book, loadSaved }) {
       // TODO: Refreshes but the not the current, the previous?
    const deleteBook = () => {
        API.deleteBook(book._id)
            .then(loadSaved());
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