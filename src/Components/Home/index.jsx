import { Book, Category, Categories, Container, Header, MenuOptions, Title, UserOptions} from "./style";
import { IoMdPerson, IoMdCart, IoMdMenu, IoMdClose } from "react-icons/io";
import { Fragment, useContext,  useState, useEffect } from "react";
import TokenContext from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
    const navigate = useNavigate();
    const { token, setToken } = useContext(TokenContext);
    const [ menuUser, setMenuUser ] = useState(false);
    const [ menuOptions, setMenuOptions ] = useState(false);
    const [ categories, setCategories ] = useState([]);
    const [ booksData, setbooksData ] = useState([]);

    useEffect(() => {
        const URL_CATEGORIES = `${process.env.REACT_APP_URL_API}/categories`;
        const request = axios.get(URL_CATEGORIES);
        request.then(response => setCategories(response.data.sort()))
        request.catch(error => console.log(error));
    },[]);

    useEffect(() => {
        const URL_BOOKS = `${process.env.REACT_APP_URL_API}/books`;
        const request = axios.get(URL_BOOKS);
        request.then(response => {console.log(response.data);
                                setbooksData(response.data)})
        request.catch(error => console.log(error));
    },[]);

    function logout(){
        setToken("");
        setMenuUser(false);
    }

    return (
        <Container>
            <Header>
                <section>
                    {(menuOptions===false) && <IoMdMenu size={20} color={"#00265d"}  
                    onClick={() => setMenuOptions(true)} />}
                    {(menuOptions===true) && <IoMdClose size={20} color={"#00265d"}  
                    onClick={() => setMenuOptions(false)} />}
                </section>
                <Title>BookStore</Title>
                <section>
                    {(token!=="") &&<IoMdCart size={20} color={"#00265d"}  
                    onClick={() => navigate("/shopping-cart")}/>} 
                    {(menuUser===false) && <IoMdPerson size={20} color={"#00265d"} 
                    onClick={() => setMenuUser(true)}/>}
                    {(menuUser===true) && <IoMdClose size={20} color={"#00265d"}  
                    onClick={() => setMenuUser(false)}/>}
                </section>
            </Header>
            {(token==="" && menuUser===true) &&
                <UserOptions>
                    <p onClick={() => navigate("/login")}>Entrar</p>
                    <p onClick={() => navigate("/register")}>Registre-se</p>
                </UserOptions>
            }
            {(token!=="" && menuUser===true) &&
                <UserOptions>
                    <p onClick={logout}>Sair</p>
                </UserOptions>
            }
            {(menuOptions===true) && 
                <MenuOptions>
                    <h1>Categorias: </h1>
                    {categories?.map((categories, i) => <p key={i} 
                    onClick={() => navigate(`/category/${categories}`)}>+ {categories}</p>)}
                </MenuOptions>
            }
            <Categories>
                {categories?.map((category, i) => 
                    <Fragment key = {i}>
                        <h1>{category.toUpperCase()}</h1>
                        <Category>
                            {booksData?.filter(book => book.genero.includes(category)).map((book, key) => 
                                <Book key={key}>
                                    <img src={book.urlImagem} alt={book.titulo}/>
                                    <h2>{book.titulo}</h2>
                                    <h3>{book.autor}</h3>
                                    <h4>{book.preco}</h4>
                                </Book>
                                
                            )}
                        </Category>
                    </Fragment>
                    )}
            </Categories>

        </Container>
    )
}