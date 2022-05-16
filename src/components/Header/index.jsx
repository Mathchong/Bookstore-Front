import { Container, MenuOptions, OverlayScreen, Title, UserOptions } from "./style";
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
    function closedMenus() {
        setMenuOptions(false);
        setMenuUser(false);
    }

    function toCategotyPage (category) {
        setMenuOptions(false);
        navigate(`/category/${category}`);
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
                    {categories?.map((category, i) => <p key={i} 
                    onClick={() => toCategotyPage(category)}>+ {category}</p>)}
                </MenuOptions>
            }
            <OverlayScreen displayNone={menuOptions===false && menuUser===false}
            onClick={closedMenus}/>
        </Container>
    );

}