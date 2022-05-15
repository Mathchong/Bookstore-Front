import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding: 10px;
    gap: 5px;

    img {
        width: 150px;
        object-fit: cover;
        margin: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

    }
    h2 {
        width: 150px;
        font-size: 15px;
        font-weight: 600;
        text-align: center;
        word-wrap: break-word;
        color: #00265d;
    }

    h3 {
        font-size: 12px;
        color: #00265d;
    }
    div {
        width: 100%;
        gap: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h4 {
        font-size: 18px;
        font-weight: 700;
        color: #00265d;
    }

`;