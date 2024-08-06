import styled from "styled-components"

export const Section = styled.footer`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-around;
    background-color: var(--primary-green);
    flex-wrap: wrap;

`

export const Content = styled.div`
    display: flex;
    padding-top: 2rem;
    flex-direction: column;
    align-items: start;
    width: 250px;

`
export const LogoSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`

export const Title = styled.h1`
    font-size:1.2rem;
    letter-spacing: 1.5px;
    font-weight: 500;
    color:var(--primary-white);

`

export const Link = styled.a`
    font-size:0.9rem;
    letter-spacing: 1px;
    font-weight: 500;
    color:var(--secondary-white);
    transition: all ease 0.2s;
    &:hover{
        color: var(--secondary-dark);
    }
`

export const Text = styled.p`
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--secondary-white);
`

export const CopyrightSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem 0px;
`

export const CopyrightText = styled.p`
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--secondary-white);
    display: flex;
    gap: 4px;
`