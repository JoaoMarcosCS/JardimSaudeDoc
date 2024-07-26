import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    width:100%;
    padding-top: 70px;
    height:100vh;
    background-color: var(--primary-color);
`

export const TextArea = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: start;
    padding-left: 5%;
    width: 40%;
    height: 100%;
    background-color: var(--primary-color);
    @media (max-width: 1100px){
        width: 100%;
        align-items: center;
        justify-content: cneter;
        padding-left:0%;
        height: 100vh;
    }
`

export const SubTitle = styled.h3`
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: 500;
    color:var(--dark-color);
`

export const Title = styled.h1`
    font-size: 3.75rem; 
    line-height: 1; 
    font-weight: 700;
    color:var(--secondary-color);
`

export const SubText = styled.p`
    font-size:16px;
    letter-spacing: 1.5px;
    font-weight: 500;
    padding-left: 6px;
    color:inherit;
`

export const ImageContainer = styled.div`
    display: flex;
    width: 60%;
    height: 100%;
    align-items: center;
    padding: 0px 1%;
    justify-content: center;
    background-color: var(--primary-color);
    @media (max-width: 1100px){
        display:none;
    }
`

export const ImageBanner = styled.img`
    height:330px;
    width:700px;
    border-radius: 12px;
    display: flex;
    box-shadow: 0 1px 3px 0 var(--secondary-color), 0 1px 2px -1px var(--secondary-color);

    @media (max-width: 1100px){
        display: none; 
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 15px;
    gap:15px;
`

export const LinkText = styled.p`
    color:var(--secondary-color);
    text-decoration:underline;
    font-size:18px;
    font-weight: 500;
    display:flex;
    flex-direction: row;
`

export const GitHubButton = styled.button`
    padding: 12px 10px;
    background-color: var(--dark-color);
    color: var(--primary-color);
    font-weight: 300;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: all ease 0.1s;
    border-radius: 8px;
`