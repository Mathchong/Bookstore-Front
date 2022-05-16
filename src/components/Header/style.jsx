import styled from "styled-components";

export const Container = styled.header`
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
z-index: 2;
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
cursor: pointer;
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
z-index: 2;

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
z-index: 2;

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
export const OverlayScreen = styled.div `
    width: 100vw;
    height: 100vh;
    display: ${props => props.displayNone ? "none" : "flex"};
    position: fixed;
    top: 50px;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
`;