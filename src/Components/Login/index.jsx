import axios from 'axios';
import { useState,  useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import TokenContext from '../../contexts/TokenContext';
import loading from './../../assets/loading.gif';
import { Button, Container, Form, Input, Registra, Title } from './style';

export default function LoginPage(){
    const navigate = useNavigate();
    const { setToken } = useContext(TokenContext);
    const [ dadosLogin, setDadosLogin ] = useState({email: "", hash: ""});
    const [ desativado , setDesativado ] = useState(false);

    function login(e) {    
        e.preventDefault();
        const URL_LOGIN = `${process.env.REACT_APP_URL_API}/login`;
        const promessa = axios.post(URL_LOGIN, dadosLogin);
        setDesativado(true);
        promessa.then(resposta => {setToken(resposta.data);
                                    navigate("/");}
        );
        promessa.catch(error => {setDesativado(false);
                                alert("Preencha os campos corretamente");}
        );
    }

    return (
        <Container>
            <Title>BookStore</Title>
            <Form onSubmit={login}>
                <Input required type="email" placeholder=" E-mail" value={dadosLogin.email} 
                onChange={e => setDadosLogin({...dadosLogin, email: e.target.value})} 
                pattern="^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$" 
                title="Digite um endereço de email válido." disabled={desativado} />
                <Input required type="password" placeholder="Senha" value={dadosLogin.hash} 
                onChange={e => setDadosLogin({...dadosLogin, hash: e.target.value})} 
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" disabled={desativado}
                title="Mínimo de 8 caracterese pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número" />
                <Button type='submit' disabled={desativado}>
                    {desativado ? <img src={loading} alt="carregando..."/> : "Entrar"}
                </Button>
            </Form>
            <Registra to="/register" disabled={desativado}>Não tem uma conta? Registre-se!</Registra>
            </Container>
    );
}