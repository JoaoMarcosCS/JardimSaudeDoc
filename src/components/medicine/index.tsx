import { ContainerImage, ContainerText, Image, Section, SubTitle, Text, Title } from "./style"
import ImageMedicine from "../../assets/img/medicine-image.svg"



export const Medicines = () => {
    return (
        <Section id="medicamentos">

            <ContainerText>
                <SubTitle>
                    Veja o que são os medicamentos 
                </SubTitle>
                <Title >
                    Medicamentos
                </Title>

                <Text>
                    Os medicamentos são uma das formas de movimentar o orçamento do Jardim Saúde. Os medicamentos
                    podem ser adquiridos no shooping, que possui todos os medicamentos, e quando comprados, ficam no
                    estoque. Os medicamentos que se deseja adquirir ficam no carrinho, onde será finalizada a compra.
                    O carrihno só pode ser acessado por secretárias e cada secretária possui um carrinho. Os medicamentos
                    são usados apenas pelos médicos que os aplicam em tratamentos.
                </Text>
            </ContainerText>

            <ContainerImage>
                <Image src={ImageMedicine} />
            </ContainerImage>
        </Section>
    )
}