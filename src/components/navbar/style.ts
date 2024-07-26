import styled from "styled-components";

export const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    position:fixed;
    background-color:#ffffff;
    width:100%;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    @media (max-width: 1100px){
        padding: 0px 12px;
        justify-content: space-between;
    }
`

export const NavBarLogo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
`

export const ImageLogo = styled.img`
    width: 35px;
    height:35px;
`

export const TextLogo = styled.p`
    color:rgb(34 197 94);
    font-size: 1.500rem; 
    line-height: 1.75rem;
    font-weight: 600;
`

export const NavBarItemsContainer = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap:30px;
    @media (max-width: 1100px){
        display: none;
        
    }
`;

export const NavBarItem = styled.a`
    font-size: 0.975rem;
    line-height: 1.25rem;
    color: var(--dark-color);
    font-weight: 500;
    display:flex;
    align-items: center;
    flex-direction: row;
    gap:1px;
    transition: all ease 0.1s;
    &:hover{
        color: rgb(22 163 74);
    }
`

export const LoginButton = styled.a`
    padding: 10px 8px;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    font-weight: 500;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: all ease 0.1s;
    border-radius: 8px;
    &:hover{
        background-color: rgb(22 163 74);
    }
`

export const SideMenuContainer = styled.div`
   display:none;
   
   @media (max-width: 1100px){
        display: flex; 
    }
`