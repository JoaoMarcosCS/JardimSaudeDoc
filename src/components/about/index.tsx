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
                    de saúde que permite gerenciar <Reference href="#tratamentos">tratamentos</Reference>, funcionários e 
                    estoque de <Reference href="#medicamentos">medicamentos</Reference>.
                    Nesta plataforma, há dois tipos de usuários, <Reference href="#medicos">médicos</Reference> e <Reference href="#secretarias">secretárias</Reference>, com diferentes ações a autorizações.
                    Se logando como um <Reference href="#medicos">médico</Reference> você poderá controlar os tratamentos atribuidos a você. Já se o seu login for
                    de uma <Reference href="#secretarias">secretária</Reference>, você terá ações relativas a criar tratamentos e atribui-los aos médicos, poderá
                    administrar o estoque de medicamentos, comprando mais medicamentos caso acabe, terá autorização para
                    contratar um funcionário novo, sendo um <Reference href="#medicos">médico</Reference> ou <Reference href="#secretarias">secretária</Reference> e por fim, terá acesso ao orçamento
                    da clínica, que aumentará com o recebimento dos tratamentos finalizados ou cancelados
                     e diminuirá de acordo com a compra 
                    de medicamentos ou pagamento do salário dos funcionários. 
                </Text>
            </ContainerText>
        </Section>
    )
}