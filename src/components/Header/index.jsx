import { Container, MenuOptions, Notification, Title, UserOptions } from "./style";
import { IoMdPerson, IoMdCart, IoMdMenu, IoMdClose } from "react-icons/io";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import axios from "axios";

export default function Header() {
    const navigate = useNavigate();
    const { token, setToken, categories, setCategories } = useContext(TokenContext);
    const [ menuUser, setMenuUser ] = useState(false);
    const [ menuOptions, setMenuOptions ] = useState(false);
    const [ shoppingCart, setShoppingCart ] = useState([]);

    useEffect(() => {
        if (token === "") return;

        const URL_SHOPPINGCART = `${process.env.REACT_APP_URL_API}/user/shoppingCart`;
        const config = {headers: { Authorization: `Bearer ${token}`}};
        const request = axios.get(URL_SHOPPINGCART, config);
        request.then(response => setShoppingCart(response.data.shoppingCart))
        request.catch(error => console.log(error));
    },[token, shoppingCart]);


    useEffect(() => {
        const URL_CATEGORIES = `${process.env.REACT_APP_URL_API}/categories`;
        const request = axios.get(URL_CATEGORIES);
        request.then(response => setCategories(response.data.sort()))
        request.catch(error => console.log(error));
    },[setCategories]);

    function logout(){
        const URL_LOGOUT = `${process.env.REACT_APP_URL_API}/logout`;
        const config = {headers: { Authorization: `Bearer ${token}`}};
        const request = axios.delete(URL_LOGOUT, config);
        request.then(() => {setToken("");
                            setMenuUser(false);
                            navigate("/");
        });
        request.catch(error => console.log(error));
    }

    return (
        <Container>
                <section>
                    {(menuOptions===false) && <IoMdMenu size={20} color={"#00265d"}  
                    onClick={() => setMenuOptions(true)} />}
                    {(menuOptions===true) && <IoMdClose size={20} color={"#00265d"}  
                    onClick={() => setMenuOptions(false)} />}
                </section>
                <Title onClick={() => navigate("/")}>BookStore</Title>
                <section>
                    {(token!=="") && <IoMdCart size={20} color={"#00265d"}  
                    onClick={() => navigate("/user/shopping-cart")}/>} 
                    {(token!=="" && shoppingCart.length>0) && <Notification/>} 

                    {(menuUser===false) && <IoMdPerson size={20} color={"#00265d"} 
                    onClick={() => setMenuUser(true)}/>}
                    {(menuUser===true) && <IoMdClose size={20} color={"#00265d"}  
                    onClick={() => setMenuUser(false)}/>}
                </section>
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
        </Container>
    );

}