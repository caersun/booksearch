import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import API from "../utils/API";

function SearchResult({ book }) {
    // console.log("incoming query for", book);
    // TODO: Need to active/inactive buttons once saved

    const saveBook = () => {
        API.saveBook({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.previewLink
        })
            .then(res => console.log("after API.saveBook in then res", res))
            .catch(err => console.log(err));
        console.log("in saveBook, after API");
        API.getSavedBooks().then(saved => console.log("saved", saved));
    };

    return <Card>
            <CardBody>
                <CardTitle tag="h5">{book.volumeInfo.title}</CardTitle>
                {/* TODO: Fix multiple authors to show with comma */}
                <CardSubtitle tag="h6" className="mb-2 text-muted">Author(s): {book.volumeInfo.authors}</CardSubtitle>
                <CardText>{book.volumeInfo.description}</CardText>
                <Button>View</Button>
                <Button onClick={() => saveBook()}>Save</Button>
            </CardBody>
        </Card>
};

export default SearchResult;