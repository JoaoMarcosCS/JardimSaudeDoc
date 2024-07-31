import { AnimatedBeamMultipleOutputDemo } from "./stacksComponent"
import { Section, SubTitle, Title } from "./style"

export const StacksSection = () => {
    return(
        <Section >
            <Title>
                STACKS
            </Title>
            <SubTitle>
                Todas as stacks utilizadas no backend e frontend do projeto Jardim Saúde.
            </SubTitle>
            <AnimatedBeamMultipleOutputDemo/>
        </Section>
    )
}