import { ClipboardPlus } from "lucide-react"
import { Section, SubTitle, Text, Title, Title2, TitleSection, UserCard, UserSection } from "./style"

export const Users = () => {
    return (
        <Section>
            <TitleSection>
                <Title>
                    Tipos de Usuários
                </Title>
                <SubTitle>
                    Tipos de usuários do Jardim Saúde.
                </SubTitle>
            </TitleSection>

            <UserSection  id="secretarias">
                <UserCard>
                    <Title2>
                        Secretária(o)
                    </Title2>
                    <Text>
                        Esse é o usuário que representa várias entidades da vida real como RH, secretários,
                        almoxarifado e time financeiro. O RH porque o secretário vai poder contratar funcionários,
                        almoxarifado devido a ação de poder comprar medicamentos e ver os que estão em estoque. Secretário
                        em relação ao poder de criar e atribuir tratamentos a um médico de acordo com uma especialidade.
                        E por fim,
                        o time financeiro porque ele pode ver o orçamento disponível para compra de medicamentos e pagamento
                        de funcionários.
                    </Text>
                </UserCard>
            </UserSection>

            <UserSection id="medicos">
                <UserCard>
                    <Title2>
                        Médico(a)
                    </Title2>
                    <Text>
                        Esse é o usuário que representa um médico da vida real. Ao fazer login como médico,
                        você terá acesso aos tratamentos atribuidos a você e decidirá o que fazer com eles. As ações
                        do médico incluem cancelar ou finalizar um tratamento e aplicar medicamentos
                        no paciente do tratamento. Esse é o usuário com menos ações, e foi decidido que as outras
                        entidades serão
                        representadas na secretária, pois se as autorizações fossem divididas de acordo com a função
                        de cada entidade da vida real, a plataforma teria vários tipos de usuários e ficaria difícil
                        de realizar uma demonstração de todas as funcionalidade que a plataforma oferece.                  
                    </Text>
                </UserCard>
            </UserSection>
        </Section>
    )
}