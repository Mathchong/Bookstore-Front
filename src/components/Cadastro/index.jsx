import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loading from './../../assets/loading.gif';
import { Button, Container, Form, Input, Logar, Title } from './style';

export default function CadastroPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [conectando, setConectando] = useState(false);
    const navigate = useNavigate();

    function register(e) {
        e.preventDefault()
        setConectando(true)
        if (senha !== confirmaSenha) {
            alert("As senhas não são iguais")
            setConectando(false)
            return
        }
        const user = {
            nome,
            cpf,
            email,
            senha
        }
        axios.post(`${process.env.REACT_APP_URL_API}/register`, user)
            .then((response) => {
                alert('Conta criada com sucesso!')
                navigate('/login')
            })
            .catch((error) => {
                console.error(process.env.REACT_APP_URL_API)
                alert("Erro na criação da conta!")
                setConectando(false)
            })
    }


    return (
        <Container>
            <Title>BookStore</Title>
            <Form onSubmit={(e) => { register(e) }}>
                <Input required disabled={conectando ? true : false}
                    type="text" placeholder=" Nome" value={nome}
                    onChange={(e) => { setNome(e.target.value) }} />

                <Input required disabled={conectando ? true : false}
                    type="email" placeholder=" E-mail" value={email}
                    onChange={(e) => { setEmail(e.target.value) }} />

                <Input required disabled={conectando ? true : false}
                    type="text" placeholder=" CPF" value={cpf}
                    onChange={(e) => { setCpf(e.target.value) }} />

                <Input required disabled={conectando ? true : false}
                    type="password" placeholder=" Senha" value={senha}
                    onChange={(e) => { setSenha(e.target.value) }}
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                    title="Mínimo de 8 caracterese pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número" />

                <Input required disabled={conectando ? true : false}
                    type="password" placeholder=" Repita a Senha" value={confirmaSenha}
                    onChange={(e) => { setConfirmaSenha(e.target.value) }}
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                    title="Mínimo de 8 caracterese pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número" />

                <Button disabled={conectando ? true : false} type='submit'>
                    {conectando ? <img src={loading} alt="carregando..." /> : "Cadastrar"}
                </Button>
                <Logar to='/login' disabled={conectando ? true : false}>
                    <p>Já possui uma conta? Faça Login!</p>
                </Logar>
            </Form>
        </Container>
    )
}