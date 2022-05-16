import { Container } from "./style";
import { IoMdCart } from "react-icons/io";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import TokenContext from "../../contexts/TokenContext";
import axios from "axios";

export default function Book({book: {_id: bookId, urlImagem, titulo, autor, preco}}){
    const navigate = useNavigate();
    const { token } = useContext(TokenContext);

    function addToShoppingCart() {
        if (token==="") {
            const modal = swal("Você não está logado!", 
            {icon: "warning",
            buttons: {register: "Registre-se", login: "Entrar"}}
            );
            modal.then(value => value!==null && navigate(`/${value}`));
            return;
        }

        const modal = swal("Tem certeza que quer adicionar esse item ao seu carinho?", {
            buttons: {false: "Não", true: "Claro"} 
        });
        modal.then(value => {
            if(value==="true") {
                const URL_ADDBOOK = `${process.env.REACT_APP_URL_API}/user/shoppingCart`;
                const config = {headers: { Authorization: `Bearer ${token}`}};
                const body = {bookId};
                const request = axios.post(URL_ADDBOOK, body, config);
                request.then(() => console.log("Novo livro adicionado"));
                request.catch(error => console.log(error));
            }
        })
    }

    return (
        <Container>
            <img src={urlImagem} alt={titulo}/>
            <h2>{titulo}</h2>
            <h3>{autor}</h3>
            <div>
                <h4>{preco}</h4>
                <IoMdCart size={18} color={"#00265d"} cursor={"pointer"} onClick={addToShoppingCart}/>
            </div>
        </Container>
    );
}