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
                <NavBarItem href="#sobre"><CircleHelp size={18}/> Sobre</NavBarItem>
                <NavBarItem href="#medicos"><ClipboardPlus size={18} />Médicos</NavBarItem>
                <NavBarItem href="#secretarias"><SquareUserRound size={18} />Secretárias</NavBarItem>
                <NavBarItem href="#tratamentos"><Stethoscope size={18} />Tratamentos</NavBarItem>
                <NavBarItem href="#medicamentos"><Syringe size={18} />Medicamentos</NavBarItem>
                <NavBarItem href="#limitacoes"><Settings2 size={18} />Limitações</NavBarItem>
                <NavBarItem href="#melhorias"><TrendingUp size={18} />Próximas melhorias</NavBarItem>
            </NavBarItemsContainer>

            <LoginButton href="https://jardim-saude.vercel.app/login" target="_blank">
                Login
            </LoginButton>
        </NavBarContainer>
    )
}