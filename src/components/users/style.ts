import styled from "styled-components";

export const Section = styled.section`
    display:flex;
    width:100%;
    background-color: var(--primary-white);
    flex-wrap:wrap;
    padding-top: 20vh;
`;

export const TitleSection = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const UserSection = styled.div`
    width:50%;
    margin-top: 10vh;
    display: flex;
    justify-content: center;
    align-items: start;
    @media (max-width: 1100px){
        padding: 0px 1rem;
        width: 100%;
        justify-content: start;
    }
`

export const UserCard = styled.div`
    display: flex;
    box-shadow:  5px 5px 10px #d9d9d9,
             -5px -5px 10px #e7e7e7;
    border-radius: 12px;
    flex-direction:column;
    padding:1.5rem;
    width:60%;
    @media (max-width: 1100px){
        width: 100%;
        box-shadow:none;
        padding:0px;
    }
`

export const Title = styled.h1`
    text-align: center;
    font-size:2.65rem;
    letter-spacing: 2px;
    font-weight: 700;
    text-decoration: underline var(--primary-green);
    display: flex;
    align-items:center;
    justify-content:center;

`

export const Title2 = styled.h1`
    text-align: center;
    font-size:2rem;
    letter-spacing: 2px;
    font-weight: 700;
    text-decoration: underline var(--primary-green);
    @media (max-width: 1100px){
        text-align: left;
    }
`

export const SubTitle = styled.h1`
    color:var(--secondary-dark);
    font-size:0.9rem;
    letter-spacing: 1px;
    font-weight: 600;
    opacity: 0.9;
`

export const Text = styled.p`
    color:var(--secondary-dark);
    font-size:1rem;
    letter-spacing: 1px;
    text-align: left;
    font-weight: 600;
    opacity: 0.9;
`

export const LoginSection = styled.div`
    display: flex;
    flex-direction:column;
    align-items:start;
    margin-top: 5vh;
    
`
export const LoginTitle = styled.h1`
    color:var(--primary-dark);
    font-size:1.1rem;
    letter-spacing: 1px;
    font-weight: 600;
    margin-bottom:2vh;
`
export const LoginFieldData = styled.div`
    display: flex;
    width:100%;
    justify-content: start;
    gap:5px;
`

export const LoginLabel = styled.p`
    color:var(--secondary-dark);
    font-size:1rem;
    letter-spacing: 1px;
    text-align: left;
    font-weight: 600;
    opacity: 0.9;
`

export const LoginData = styled.p`
    color:var(--primary-dark);
    font-size:1rem;
    letter-spacing: 1px;
    font-weight: 600;
`