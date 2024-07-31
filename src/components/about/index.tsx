import { ContainerImage, ContainerText, Image, Section, SubTitle, Text, Title } from "./style"
import ImageAbout from "../../assets/img/about-image.svg"
import { Reference } from "../../styles/reference"


export const About = () => {
    return (
        <Section>
            <ContainerImage>
                <Image src={ImageAbout} />
            </ContainerImage>

            <ContainerText>
                <SubTitle>
                    O que é e do que se trata o Jardim Saúde?
                </SubTitle>
                <Title id="sobre">
                    SOBRE
                </Title>

                <Text>
                    O Jardim Saúde é um MVP (Produto Mínimo Viável) de uma clínica
                    médica que permite gerenciar <Reference href="#tratamentos">tratamentos</Reference>,
                     funcionários e 
                    estoque de <Reference href="#medicamentos">medicamentos</Reference>.
                </Text>
            </ContainerText>
        </Section>
    )
}