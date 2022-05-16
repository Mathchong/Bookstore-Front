import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-image: linear-gradient(#a5abbd, #456aaa);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;
    padding: 80px 30px 50px 30px;
    gap: 10px;
`;

export const Title = styled.h1`
    width: 100%;
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    margin-bottom: 20px;
`;

export const BookData = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

    img {
        width: 70px;
        object-fit: cover;
        margin: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    }
    section {
        width: 65%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #00265d;
        gap: 5px;
    }
    h1 {
        font-size: 16px;
        font-weight: 700;
    }
    h2 {
        font-size: 14px;
    }
    h3 {
        font-size: 16px;
        font-weight: 700;
    }
`;
export const Footer = styled.footer`
    width: 100vw;
    height: 50px;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    padding: 0 20px;

    h1 {
        font-size: 16px;
        font-weight: 700;
        color: #00265d;
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