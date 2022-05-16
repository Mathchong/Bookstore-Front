import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    background-image: linear-gradient(#a5abbd, #456aaa);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: center;
    gap: 10px;
`;

export const Categories = styled.article`
    margin: 65px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    
    ::-webkit-scrollbar {
        display: none;
    }

    h1 {
        font-size: 18px;
        font-weight: 700;
        color: #ffffff;
        padding: 20px 0;
    }
`;
export const Category = styled.section`
    display: flex;
    overflow-x: scroll;
    margin-bottom: 15px;
    gap: 20px;
`;