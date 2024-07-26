import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    width:100%;
    height:100vh;
    background-color: var(--primary-color);
    flex-wrap: wrap;
    @media(max-width: 1100px){
        height:50vh;
    }
`

export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background-color: var(--primary-color);
    @media (max-width: 1100px){
        display:none;
    }
`

export const Image = styled.img`
    border-radius: 12px;
    display: flex;
    width:450px;
    height:450px;
    background-color: var(--secondary-color);
    border-radius: 100%;
`

export const ContainerText = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    align-items: start;
    flex-direction: column;
    padding:0px 5px;
    justify-content: center;
    background-color: var(--primary-color);
    @media (max-width: 1100px){
        width: 100%;
    }
`

export const Title = styled.h1`
    color:var(--dark-color);
    font-size:2.65rem;
    letter-spacing: 2px;
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: var(--secondary-color);
`

export const SubTitle = styled.h3`
    color:var(--dark-color);
    font-size:0.9rem;
    letter-spacing: 1px;
    font-weight: 600;
    opacity: 0.9;
`

export const Text = styled.p`
    color:var(--dark-color);
    font-size:1.1rem;
    letter-spacing: 1px;
    font-weight: 600;
    margin-top: 1rem;
`
