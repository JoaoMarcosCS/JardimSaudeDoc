import styled from "styled-components"

export const Container = styled.div`
    background-color: var(--primary-white);
    width:100%;
    display: flex;
    height: 30px;
    justify-content: center;
    @media(max-width:600px){
        display:none;
    }
`