import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(#456aaa, #a5abbd);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;
export const Input = styled.input`
    width: 305px;
    height: 40px;
    border: none;   
    border-radius: 15px;
    padding: 0 10px;
    background-color: ${props => props.disabled ? '#dadada' : '#ffffff'};

    &&::placeholder{
        font-family: 'Poppins', sans-serif;
        font-weight: 900;
        color: ${props => props.disabled ? '#537373' : '#324b4b'}
    }
`;
export const Button = styled.button` 
    width: 305px;
    height: 40px;
    border: none;    
    border-radius: 15px;
    background-color: #00265d;
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    color: #ffffff;
    cursor: pointer;
    ${props => props.disabled && 'opacity: 1.5' };

    img{
        height: 40px;
    }
`;
export const Title = styled.h1`
    font-size: 55px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 10px;
    cursor: pointer;
`;
export const Registra = styled(Link)`
    font-size: 12px;
    font-weight: 700;
    color: #124783;
    cursor: pointer;
`;