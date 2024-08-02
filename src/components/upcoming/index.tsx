import {LimitationAccordion as UpcomingAccordion} from "../limitations/limitationAccordion"
import { AccordionSection, SubTitle, Title, TitleSection } from "../limitations/style"
import { Section } from "./style"

export const Upcoming = () => {
    return(
        <Section id="melhorias">
            <TitleSection>
                <Title>
                    Próximas melhorias
                </Title>
                <SubTitle>
                    Saiba das próximas melhorias e features que serão desenvolvidas
                </SubTitle>
            </TitleSection>

            <AccordionSection>
                <UpcomingAccordion title="Refresh Token">
                    Implementar à plataforma a técnica de refresh token para que o usuário não tenha que
                    ficar fazendo login a cada trinta minutos.
                </UpcomingAccordion>
            </AccordionSection>

            <AccordionSection>
                <UpcomingAccordion title="Adicionar Docker">
                   Uma das melhorias na arquitetura dos ambientes de desenvolvimento que será adicionada
                   é o docker. Implementando essa ferramenta, todos os ambientes (frontend, backend e base de dados),
                    estarão em seus respectivos containers, assim, o deploy e possíveis migrações serão muito
                   mais fáceis de serem realizadas.
                </UpcomingAccordion>
            </AccordionSection>

            <AccordionSection>
                <UpcomingAccordion title="Agendamento de consultas">
                   Uma feature interessante são os agendamentos de consultas. Se uma secretária iniciar
                   um tratamento, ainda no formulário de criação, terá a opção de já marcar uma consulta 
                   com o médico responsável para ele acompanhar a evolução do paciente. Assim, nas telas dos
                   médicos, eles poderão ver as consultas agendadas. Além disso, as consultas poderão ser pagas, 
                   dessa forma, o Jardim Saúde terá mais uma fonte de renda.
                </UpcomingAccordion>
            </AccordionSection>

            <AccordionSection>
                <UpcomingAccordion title="Planos de Saúde">
                    Adicionar a possibilidade do paciente utilizar um plano de saúde para receber desconto
                    nos tratamentos. Cada paciente poderá ter um plano de saúde informado na hora do cadastro
                    do paciente no Jardim Saúde, o que poderá mudar posteriormente. Dessa maneira, quando a secretária
                    for criar um tratamento novo, e informar o paciente do tratamento, aperecerá a opção de desconto
                    caso tenha algum plano de saúde cadastrado no registro do paciente.
                </UpcomingAccordion>

            </AccordionSection>

            <AccordionSection>
                <UpcomingAccordion title="Movimentações financeiras">
                    Outra feature interessante de se implementar são as de movimentações financeiras, que permitirá
                    que a secretária veja todas as movimentações em um dashboard interativo. Assim, a secretária terá
                    controle sobre com que o orçamento do Jardim Saúde está sendo gasto, como o valor em estoque,
                    além de ver as receitas de forma detalhada, como a última entrada de capital. 
                </UpcomingAccordion>
            </AccordionSection>

            <AccordionSection>
                <UpcomingAccordion title="Correção dos pagamentos">
                    No serviço de hospedagem da Vercel é necessário configurar, assim como as variáveis de ambiente,
                    os cron-jobs da aplicação. Logo, configurando corretamente os cron-jobs do Jardim Saúde, a função
                    que efetua o pagamento dos funcionários (médicos e secretárias) deverá funcionar novamente.
                </UpcomingAccordion>
            </AccordionSection>

            <AccordionSection>
                <UpcomingAccordion title="Relatórios em PDF">
                    Utilizando a biblioteca PDFMake e Nodemailer,
                     as secretárias poderão receber em seus emails relatórios sobre as movimentações financeiras,
                    estado atual do estoque, tratamentos e funcionários. Já os médicos poderão receber um relatório
                    com os tratamentos em andamento, os que foram cancelas e finalizados. E todos o funcionários poderão
                    receber também um comprovante de pagamento. Ademais, é possível utilizar a biblioteca Redis para lidar
                    com background jobs e cache de requisições, deixando o backend mais performático.

                </UpcomingAccordion>
            </AccordionSection>

            <AccordionSection>
                <UpcomingAccordion title="Scroll infinito">
                    No shopping, a parte onde a secretária adiciona medicamentos ao carrinho, podemos adicionar o
                    efeito de scroll infinito para melhorar a usabilidade da interface e para tembém, não carregar todos
                    os medicamentos de uma vez. Uma outra solução seria fazer uma paginação no serviço do backend que traz os
                    medicamentos, já que os a quantidade de medicamentos pode escalar e causar lentidão.
                </UpcomingAccordion>
            </AccordionSection>
        </Section>
    )
}