import { ImageLogo, LoginButton, NavBarContainer, NavBarItem, NavBarItemsContainer, NavBarLogo, TextLogo } from "./style"
import Logo from "../../assets/img/logoJardimSaude.png"
import { ExternalLink } from "lucide-react"
import { SideMenu } from "./sideMenu"

export const NavBar = () => {
    return(
        <NavBarContainer>
            <NavBarLogo>
                <ImageLogo src={Logo}/>
                <TextLogo>Jardim Sáude</TextLogo>
            </NavBarLogo>
            <div className="max-sm:flex hidden">
                <SideMenu/>
            </div>

            <NavBarItemsContainer>
                <NavBarItem href="#">Sobre</NavBarItem>
                <NavBarItem href="#">Médicos</NavBarItem>
                <NavBarItem href="#">Secretárias</NavBarItem>
                <NavBarItem href="#">Tratamentos</NavBarItem>
                <NavBarItem href="#">Medicamentos</NavBarItem>
                <NavBarItem href="#">Limitações</NavBarItem>
                <NavBarItem href="#">Próximas melhorias</NavBarItem>
            </NavBarItemsContainer>

            <LoginButton href="https://jardim-saude.vercel.app/login" target="_blank">
                Login<ExternalLink/>
            </LoginButton>
        </NavBarContainer>
    )
}