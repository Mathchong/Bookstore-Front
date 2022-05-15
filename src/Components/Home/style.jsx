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
export const Header = styled.header`
    width: 100vw;
    height: 50px;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 0 20px;
    gap: 10px;

    section {
        height: 20px;
        display: flex;
        justify-content: center;
        gap: 10px;
        cursor: pointer;  
    }
`;
export const Title = styled.h1`
    font-size: 22px;
    font-weight: 700;
    color: #00265d;
`;
export const UserOptions = styled.aside`
    background-color: #ffffff;
    position: fixed;
    top: 52px;
    right: 20px;
    gap: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;

    p {
        font-size: 16px;
        color: #00265d;
        cursor: pointer;
    } 
    p:hover{
        opacity: 0.7;
    }
`;
export const MenuOptions = styled.aside`
    background-color: #ffffff;
    position: fixed;
    top: 52px;
    left: 20px;
    gap: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    
    h1 {
        font-size: 16px;
        font-weight: 700;
        color: #00265d;
    }
    p {
        font-size: 16px;
        color: #00265d;
        cursor: pointer;
    } 
    p:hover{
        opacity: 0.7;
    }
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
export const Notification = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #ff0000;
    position: fixed;
    top: 10px;
    right: 50px;
`;