import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-image: linear-gradient(#a5abbd, #456aaa);
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    justify-content: center;
    padding: 80px 50px 50px 50px;
    gap: 10px;
`;

export const Title = styled.h1`
    width: 100%;
    font-size: 25px;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;