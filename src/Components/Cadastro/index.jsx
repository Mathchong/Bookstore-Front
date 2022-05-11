import styled from 'styled-components';
import { useState } from 'react';

export default function CadastroPage() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')
    return (
        <Container>
            <form onSubmit={(e)=>{}}>
                <input required type="text" placeholder=" Nome" value={nome} onChange={(e) => { setNome(e.target.value) }} />
                <input required type="email" placeholder=" E-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input required type="number" placeholder=" CPF" value={cpf} onChange={(e) => { setCpf(e.target.value) }} />
                <input required type="password" placeholder=" Senha" value={senha} onChange={(e) => { setSenha(e.target.value) }} />
                <input required type="password" placeholder=" Repita a Senha" value={confirmaSenha} onChange={(e) => { setConfirmaSenha(e.target.value) }} />
                <button type='submit'>Cadastrar</button>
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

    input{
        width: 305px;
        height: 40px;
        border: 4px solid #272643;    
        border-radius: 15px;
        margin-top: 12px;
    }

    button{ 
        width: 305px;
        height: 40px;
        border: 4px solid #272643;    
        border-radius: 15px;
        margin-top: 12px;
        background-color: #e3f6f5;
    }
`