import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

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
        const promise = axios.post(`${process.env.REACT_APP_API_URL}/api/register`, user)
            .then((response) => {
                alert('Conta criada com sucesso!')
                navigate('/login')
            })
            .catch((error) => {
                console.error(process.env.REACT_APP_API_URL)
                alert("Erro na criação da conta senha!")
                setConectando(false)
            })
    }


    return (
        <Container>
            <form onSubmit={(e) => { register(e) }}>
                <input required disabled={conectando ? true : false} type="text" placeholder=" Nome" value={nome} onChange={(e) => { setNome(e.target.value) }} />
                <input required disabled={conectando ? true : false} type="email" placeholder=" E-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input required disabled={conectando ? true : false} type="number" placeholder=" CPF" value={cpf} onChange={(e) => { setCpf(e.target.value) }} />
                <input required disabled={conectando ? true : false} type="password" placeholder=" Senha" value={senha} onChange={(e) => { setSenha(e.target.value) }} />
                <input required disabled={conectando ? true : false} type="password" placeholder=" Repita a Senha" value={confirmaSenha} onChange={(e) => { setConfirmaSenha(e.target.value) }} />
                <button disabled={conectando ? true : false} type='submit'>Cadastrar</button>
                <Link to='/login'>
                    <p>Já possui uma conta? Faça Login!</p>
                </Link>
            </form>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #2c698d;

    display: flex;
    flex-direction: column;
    align-items: center;

    form{ 
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button{ 
        width: 305px;
        height: 40px;
        border: 4px solid #272643;    
        border-radius: 15px;
        margin-top: 12px;
        background-color: #e3f6f5;
    }

    input{
        width: 305px;
        height: 40px;
        border: 4px solid #272643;    
        border-radius: 15px;
        margin-top: 12px;
    }
    
    p{
        margin-top: 7px;
        color:#ffffff
    }
`