import { Category, Categories, Container } from "./style.jsx";
import { Fragment,  useState, useEffect, useContext } from "react";
import TokenContext from "../../contexts/TokenContext.js";
import axios from "axios";
import Book from "./../Book/index.jsx";
import Header from "./../Header/index.jsx";

export default function HomePage() {
    const { categories } = useContext(TokenContext);
    const [ booksData, setBooksData ] = useState([]);

    useEffect(() => {
        const URL_BOOKS = `${process.env.REACT_APP_URL_API}/books`;
        const request = axios.get(URL_BOOKS);
        request.then(response => setBooksData(response.data))
        request.catch(error => console.log(error));
    },[]);

    
    return (
        <Container>
            <Header />
            <Categories>
                {categories?.map((category, i) => 
                    <Fragment key = {i}>
                        <h1>{category.toUpperCase()}</h1>
                        <Category>
                            {booksData?.filter(book => book.genero.includes(category)).map((book, key) => 
                                <Book key={key} book={book}/>
                            )}
                        </Category>
                    </Fragment>
                    )}
            </Categories>

        </Container>
    )
}