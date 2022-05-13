import { Container, Header, Title, UserOptions} from "./style";
import { IoMdPerson, IoMdCart, IoMdMenu, IoMdClose } from "react-icons/io";
import { useContext,  useState } from "react";
import TokenContext from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    const { token, setToken } = useContext(TokenContext);
    const [ menuUser, setMenuUser ] = useState(false);

    function logout(){
        setToken("");
        setMenuUser(false);
    }

    return (
        <Container>
            <Header>
                <section>
                    <IoMdMenu size={20} color={"#00265d"} />
                </section>
                <Title>BookStore</Title>
                <section>
                    {(token!=="") &&<IoMdCart size={20} color={"#00265d"}  onClick={() => navigate("/shopping-cart")}/>} 
                    {(menuUser===false) && <IoMdPerson size={20} color={"#00265d"}  onClick={() => setMenuUser(true)}/>}
                    {(menuUser===true) && <IoMdClose size={20} color={"#00265d"}  onClick={() => setMenuUser(false)}/>}
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
        </Container>
    )
}