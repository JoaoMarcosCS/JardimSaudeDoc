import styled from "styled-components"


export const Section = styled.section`
    display: flex;
    width:100%;
    align-items: start;
    flex-wrap:wrap;
    justify-content: space-around;
    padding:5vh 0vh;
    @media (max-width: 1100px){
        gap:2vh;
        padding:5vh 1vh;
    }
`

export const Container = styled.section`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 25%;
    @media (max-width: 1100px){
        width: 100%;
    }
`
export const ImageLogo = styled.img`
    width: 35px;
    height:35px;
`
export const LogoContent = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
`


export const TextLogo = styled.p`
    color:var(--primary-white);
    font-size: 1.500rem; 
    line-height: 1.75rem;
    font-weight: 600;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 4px;
    @media (max-width: 1100px){
        width: 100%;
        align-items: center;
    }
`

export const IconsSection = styled.section`
    display:flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap:10px;
    margin-top:5vh;
`

export const Title = styled.h1`
    color:var(--primary-white);
    font-size:1.1rem;
    letter-spacing: 2px;
    font-weight: 700;
`
export const SubTitle = styled.h3`
    color:var(--secondary-white);
    font-size:0.7rem;
    letter-spacing: 1px;
    text-align: center;
    font-weight: 600;
    margin-top: 1vh;
    opacity: 0.9;
`


export const Text = styled.p`
    color:var(--secondary-white);
    font-size:0.9rem;
    letter-spacing: 1px;
    text-align: left;
    font-weight: 500;
    transition: all ease 0.3s;
    &:hover{
        color:var(--secondary-green);
    }
`

export const CopyrightSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2vh 0;
    gap:4px;
`

export const EditorNote = styled.p`
    color:var(--secondary-white);
    font-size:0.8rem;
    letter-spacing: 1px;
    text-align: left;
    font-weight: 500;
`