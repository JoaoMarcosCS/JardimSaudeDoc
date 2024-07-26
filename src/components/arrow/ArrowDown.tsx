import { ArrowDown01, ArrowDownIcon } from "lucide-react"
import { Container } from "./style";
import { Topics } from "../../types/Topics";


export interface ArrowDownProps {
    id: Topics;
}

export const ArrowDown = ({ id }: ArrowDownProps) => {
    return (
        <Container>
            <a href={id}>
                <ArrowDownIcon className="animate-bounce text-green-500 border-green-500 border-2 rounded-full" size={30} />
            </a>
        </Container>
    )
}