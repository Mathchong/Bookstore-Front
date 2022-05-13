import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(#a5abbd, #456aaa);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        width: 50px;
        height: 20px;
        display: flex;
        gap: 10px;
        cursor: pointer;        
    }
`;
export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    color: #00265d;
`;
// export const Input = styled.input`
//     width: 305px;
//     height: 40px;
//     border: none;   
//     border-radius: 15px;
//     padding: 0 10px;
//     background-color: ${props => props.disabled ? '#dadada' : '#ffffff'};

//     &&::placeholder{
//         font-family: 'Poppins', sans-serif;
//         font-weight: 900;
//         color: ${props => props.disabled ? '#537373' : '#324b4b'}
//     }
// `;
// export const Button = styled.button` 
//     width: 305px;
//     height: 40px;
//     border: none;    
//     border-radius: 15px;
//     background-color: #00265d;
//     font-family: 'Poppins', sans-serif;
//     font-weight: 900;
//     color: #ffffff;
//     cursor: pointer;
//     ${props => props.disabled && 'opacity: 1.5' };

//     img{
//         height: 40px;
//     }
// `;
// export const Title = styled.h1`
//     font-size: 55px;
//     font-weight: 700;
//     color: #ffffff;
//     margin-bottom: 10px;
// `;