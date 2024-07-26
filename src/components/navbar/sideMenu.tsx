import { CircleHelp, ClipboardPlus, MenuIcon, Settings2, SquareUserRound, Stethoscope, Syringe, TrendingUp } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../sheet/sheet"
import { NavBarItemsContainer, NavBarItem } from "./style"

export const SideMenu = () => {
    return (
        <Sheet >
            <SheetTrigger>
                <MenuIcon />
            </SheetTrigger>
            <SheetContent className=" bg-white flex-col gap-4 flex">
                <NavBarItem href="#"><CircleHelp size={18}/> Sobre</NavBarItem>
                <NavBarItem href="#"><ClipboardPlus size={18} />Médicos</NavBarItem>
                <NavBarItem href="#"><SquareUserRound size={18} />Secretárias</NavBarItem>
                <NavBarItem href="#"><Stethoscope size={18} />Tratamentos</NavBarItem>
                <NavBarItem href="#"><Syringe size={18} />Medicamentos</NavBarItem>
                <NavBarItem href="#"><Settings2 size={18} />Limitações</NavBarItem>
                <NavBarItem href="#"><TrendingUp size={18} />Próximas melhorias</NavBarItem>
            </SheetContent>
        </Sheet>
    )
}