import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-image: linear-gradient(#a5abbd, #456aaa);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;
    gap: 10px;
    padding: 30px;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        width: 100%;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        color: #00265d;
        margin: 15px 0;
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        
        input {
            width: 20px;
            height: 20px;
        }
        label {
            font-size: 14px;
            font-weight: 700;
            text-align: center;
            color: #00265d;
        }
    }
    button {
        width: 150px;
        height: 30px;
        border: none;
        border-radius: 15px;
        background-color: #00265d;
        font-family: 'Poppins', sans-serif;
        font-weight: 900;
        color: #ffffff;
        cursor: pointer;
    }
`;

export const Input = styled.input `
    width: 100%;
    height: 40px;
    border: none;   
    border-radius: 15px;
    padding: 0 10px;
    background-color: #ffffff;
    margin-bottom: 10px;
`;