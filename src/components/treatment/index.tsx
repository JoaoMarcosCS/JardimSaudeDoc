import { ContainerImage, ContainerText, Image, Section, SubTitle, Text, Title } from "./style"
import ImageTreatement from "../../assets/img/treatment-image.svg"
import { Reference } from "../../styles/reference"


export const Treatments = () => {
    return (
        <Section id="tratamentos">
            <ContainerImage>
                <Image src={ImageTreatement} />
            </ContainerImage>

            <ContainerText>
                <SubTitle>
                    Entenda o que são os tratamentos
                </SubTitle>
                <Title >
                    TRATAMENTOS
                </Title>

                <Text>
                    Os tratamentos no Jardim Saúde são o meio por onde o orçamento aumenta. Eles são
                    criados pelas secretárias e gerenciados pelos médicos responsáveis. A secretária
                    irá preencher o formulário de criação com o CPF do paciente e atribuir a um médico. A partir disso,
                    o médico irá ver, quando realizar login, um novo tratamento em andamento com os respectivos dados
                    que a secretária preencheu.
                </Text>
            </ContainerText>
        </Section>
    )
}