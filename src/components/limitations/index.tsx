import { LimitationAccordion } from "./limitationAccordion"
import { AccordionSection, Section, SubTitle, Title, TitleSection, AccordionTitle, Text, AccordionText } from "./style"

export const Limitations = () => {
    return (
        <Section id="limitacoes">
            <TitleSection>
                <Title>
                    Limitações
                </Title>
                <SubTitle>
                    Veja as limitações atuais do Jardim Saúde
                </SubTitle>
            </TitleSection>

            <AccordionSection>
                <LimitationAccordion title="Acesso apenas com credenciais">
                    Como o Jardim Saúde é um sistema fechado e protegido com autenticações e autorizaçãos,
                    foi decidido que não deveria ser usado a ferramenta OAuth para fazer a autenticação e autorização
                    do usuário, uma vez que a plataforma utiliza de email e senha para fazer login. E como a plataforma
                    não permite se cadastrar, apenas uma secretária pode cadastrar um funcionário novo, não teria muita
                    necessidade de implementar o OAuth.
                </LimitationAccordion>
            </AccordionSection>
            <AccordionSection>
                <LimitationAccordion title="Poucos tipos de usuários">
                    Devido ao fato da plataforma não ter usuários ativos e ter sido desenvolvida
                    com o intuito didático, foi decidido que todos as outras responsabilidades, sem serem
                    as dos médicos, seriam incumbidas à entidade secretária. Todavia, em um sistema crítico,
                    que seria a de uma clínica de saúde, obviamente, as autorizações e responsábilidades devem
                    ser distribuidas a mais tipos de usuários.
                </LimitationAccordion>
            </AccordionSection>
            <AccordionSection>
                <LimitationAccordion title="Sobre os pagamentos">
                    Os pagamentos dos funcionários do Jardim Saúde são realizados
                    por uma função que é executada todo dia 5 do mês usando a biblioteca
                    "node-schedule". Entretanto, depois que foi realizado o deploy
                    na vercel, o backend deixou de realizar os Jobs agendados por essa
                    biblioteca e os pagamentos não são mais realizados automaticamente. Por enquanto,
                    essa feature está aguardando ser consertada.
                </LimitationAccordion>

            </AccordionSection>
        </Section>
    )
}