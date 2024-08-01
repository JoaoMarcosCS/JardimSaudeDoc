import styled from "styled-components"

export const Section = styled.section`
    display:flex;
    width:100%;
    background-color: var(--primary-white);
    flex-wrap:wrap;
    padding:20vh 0px;
    align-items: center;
    justify-content: space-around;
`

export const TitleSection = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

export const SubTitle = styled.h1`
    color:var(--secondary-dark);
    font-size:0.9rem;
    letter-spacing: 1px;
    font-weight: 600;
    opacity: 0.9;
    text-align:center;
`

export const AccordionTitle = styled.h1`
    text-align: center;
    font-size:1.4rem;
    letter-spacing: 1px;
    font-weight: 600;
    color:var(--primary-dark);
`

export const Text = styled.p`
    color:var(--secondary-dark);
    font-size:1rem;
    letter-spacing: 1px;
    text-align: left;
    font-weight: 600;
    opacity: 0.9;
`

export const AccordionSection = styled.div`
    width:30%;
    margin-top: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1100px){
        padding: 0px 1rem;
        width: 100%;
    }
`;


export const AccordionText = styled.p`
    color:var(--secondary-dark);
    font-size:0.9rem;
    letter-spacing: 1px;
    text-align: left;
    font-weight: 500;
    /* opacity: 0.9; */
`