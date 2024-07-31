import styled from "styled-components";

export const ImageLogo = styled.img`
    width: 45px;
    height:45px;
`

export const Section = styled.section`
    display: flex;
    width:100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--primary-white);
    @media (max-width: 1100px){
        padding: 0px 1.3rem;
        padding-top:30vh;
    }
`

export const Title = styled.h1`
    text-align: center;
    font-size:2.65rem;
    letter-spacing: 2px;
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: var(--primary-green);
`
export const SubTitle = styled.h3`
    color:var(--secondary-dark);
    font-size:1rem;
    letter-spacing: 1px;
    font-weight: 600;
    opacity: 0.9;
`