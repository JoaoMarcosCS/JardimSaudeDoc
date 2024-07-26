import { ImageLogo, LoginButton, NavBarContainer, NavBarItem, NavBarItemsContainer, NavBarLogo, SideMenuContainer, TextLogo } from "./style"
import Logo from "../../assets/img/logoJardimSaude.png"
import { CircleHelp, ClipboardPlus, ExternalLink, Milestone, Settings2, ShieldEllipsis, SquareUserRound, Stethoscope, Syringe, TrendingUp } from "lucide-react"
import { SideMenu } from "./sideMenu"

export const NavBar = () => {
    return(
        <NavBarContainer>
            <NavBarLogo>
                <ImageLogo src={Logo}/>
                <TextLogo>Jardim Sáude</TextLogo>
            </NavBarLogo>

            <SideMenuContainer>
                <SideMenu/>
            </SideMenuContainer>

            <NavBarItemsContainer>
                <NavBarItem href="#"><CircleHelp size={18}/> Sobre</NavBarItem>
                <NavBarItem href="#"><ClipboardPlus size={18} />Médicos</NavBarItem>
                <NavBarItem href="#"><SquareUserRound size={18} />Secretárias</NavBarItem>
                <NavBarItem href="#"><Stethoscope size={18} />Tratamentos</NavBarItem>
                <NavBarItem href="#"><Syringe size={18} />Medicamentos</NavBarItem>
                <NavBarItem href="#"><Settings2 size={18} />Limitações</NavBarItem>
                <NavBarItem href="#"><TrendingUp size={18} />Próximas melhorias</NavBarItem>
            </NavBarItemsContainer>

            <LoginButton href="https://jardim-saude.vercel.app/login" target="_blank">
                Login
            </LoginButton>
        </NavBarContainer>
    )
}