import axios from 'axios';
import { useState,  useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import TokenContext from '../../contexts/TokenContext';
import loading from './../../assets/loading.gif';
import { Button, Container, Form, Input, Register, Title } from './style';

export default function LoginPage(){
    const navigate = useNavigate();
    const { setToken } = useContext(TokenContext);
    const [ loginData, setLoginData ] = useState({email: "", hash: ""});
    const [ disabled , setDisabled ] = useState(false);

    function login(e) {    
        e.preventDefault();
        const URL_LOGIN = `${process.env.REACT_APP_URL_API}/login`;
        const request = axios.post(URL_LOGIN, loginData);
        setDisabled(true);
        request.then(resposta => {setToken(resposta.data);
                                    navigate("/");}
        );
        request.catch(error => {setDisabled(false);
                                alert("Preencha os campos corretamente");}
        );
    }

    return (
        <Container>
            <Title onClick={() => navigate("/")}>BookStore</Title>
            <Form onSubmit={login}>
                <Input required type="email" placeholder=" E-mail" value={loginData.email} 
                onChange={e => setLoginData({...loginData, email: e.target.value})} 
                pattern="^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$" 
                title="Digite um endereço de email válido." disabled={disabled} />
                <Input required type="password" placeholder="Senha" value={loginData.hash} 
                onChange={e => setLoginData({...loginData, hash: e.target.value})} 
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" disabled={disabled}
                title="Mínimo de 8 caracterese pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número" />
                <Button type='submit' disabled={disabled}>
                    {disabled ? <img src={loading} alt="carregando..."/> : "Entrar"}
                </Button>
            </Form>
            <Register to="/register" disabled={disabled}>Não tem uma conta? Registre-se!</Register>
            </Container>
    );
}