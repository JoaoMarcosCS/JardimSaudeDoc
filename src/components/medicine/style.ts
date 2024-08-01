import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    width:100%;
    background-color: var(--primary-white);
    flex-wrap: wrap;
    padding:4rem 0px;
    @media (max-width: 1100px){
        padding: 0px 0.5rem;
        padding-top:30vh;
    }
`

export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    @media (max-width: 1100px){
        display:none;
    }
`

export const Image = styled.img`
    border-radius: 12px;
    display: flex;
    width:450px;
    height:450px;
    background-color: var(--secondary-green);
    border-radius: 100%;
`

export const ContainerText = styled.div`
    display: flex;
    width: 50%;
    align-items: start;
    flex-direction: column;
    padding-left:4rem;
    justify-content: center;
    @media (max-width: 1100px){
        width: 100%;
        padding:0px 1rem;
    }
`

export const Title = styled.h1`
    color:var(--primary-dark);
    font-size:2.65rem;
    letter-spacing: 2px;
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: var(--primary-green);
`

export const SubTitle = styled.h3`
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
    font-weight: 600;
    opacity: 0.9;
    margin-top: 1rem;
 
`
