import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Title } from "./style";
import Header from "./../Header/index.jsx";
import Book from "../Book";

export default function Category(){
    const {categoryName} = useParams();
    const [ booksOfcategory, setBookOfCategory ] = useState();

    useEffect(() => {
        const URL_CATEGORY = `${process.env.REACT_APP_URL_API}/category/${categoryName}`;
        const request = axios.get(URL_CATEGORY);
        request.then(response => setBookOfCategory(response.data))
        request.catch(error => console.log(error));
    },[categoryName]);

    return (
        <Container>
            <Header />
            <Title>{categoryName.toUpperCase()}</Title>
            {booksOfcategory?.map((book, key) => <Book key={key} book={book}/>)}
        </Container>
    );
}