import { Container, Content, CopyrightSection, EditorNote, IconsSection, ImageLogo, LogoContent, Section, SubTitle, Text, TextLogo, Title } from "./style"
import Logo from "../../assets/img/logoJardimSaude.png"
import { Copyright, Github, Linkedin } from "lucide-react"
import { NavBarItem } from "../navbar/style"

export const Footer = () => {
    return (
        <>
            <Section>
                <Container>
                    <Content>
                        <LogoContent>
                            <ImageLogo src={Logo} />
                            <TextLogo>
                                Jardim Sáude
                            </TextLogo>
                        </LogoContent>
                    </Content>
                    <SubTitle>
                        MVP de clínica de saúde
                    </SubTitle>

                    {/* <IconsSection>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-marcos-c%C3%A2ndido-da-silva-58b29227a/">
                            <Linkedin />
                        </a>
                        <a href="https://github.com/JoaoMarcosCS/">
                            <Github />
                        </a>
                    </IconsSection> */}
                </Container>

                <Container>
                    <Content>
                        <Title>
                            Navegação
                        </Title>

                        <Text>
                            <a href="#sobre">Sobre</a>
                        </Text>
                        <Text>
                            <a href="#medicos">Médicos</a>
                        </Text>
                        <Text>
                            <a href="#secretarias">Secretárias</a>
                        </Text>
                        <Text>
                            <a href="#tratamentos">Tratamentos</a>
                        </Text>
                        <Text>
                            <a href="#medicamentos">Medicamentos</a>
                        </Text>
                        <Text>
                            <a href="#limitacoes">Limitações</a>
                        </Text>
                        <Text>
                            <a href="#melhorias">Próximas melhorias</a>
                        </Text>

                    </Content>
                </Container>

                <Container>
                    <Content>
                        <Title>
                            Links úteis
                        </Title>

                        <Text>
                            <a href="https://docs.docker.com/guides/">Docker</a>
                        </Text>
                        <Text>
                            <a href="https://nextjs.org/docs">
                                NextJS
                            </a>
                        </Text>
                        <Text>
                            <a href="https://nodejs.org/docs/latest/api/">
                                NodeJS</a>
                        </Text>
                        <Text>
                            <a href="https://react-hook-form.com/get-started">
                                React Hook Form
                            </a>
                        </Text>
                        <Text>
                            <a href="https://tanstack.com/query/latest/docs/framework/react/overview">
                                React Query
                            </a>
                        </Text>

                    </Content>

                </Container>

                <Container>
                    <Content>
                        <Title>
                            Nota do desenvolvedor
                        </Title>

                        <EditorNote>
                            Esse sistema foi desenvolvido com o intuito de consolidar
                            meus conhecimentos em NextJS, NodeJS e Banco de dados,
                            aprimorando assim minhas habilidades nesses ambientes para me
                            consolidar um desenvolvedor fullstack. Como o sistema não possui
                            usuários ativos e foi um projeto para aplicação
                            de conhecimento, o Jardim Saúde possui vários pontos
                            de melhorias, como padronizar nomes de funções, distribuir melhor
                            a responsabilidade entre os módulos, realizar teste unitários (já
                            que a API foi testada utilizando Postman) e outros tópicos. Em breve
                            serão corrigidos ou aprimorados como visto na documentação.
                        </EditorNote>
                    </Content>
                </Container>
            </Section>
            <CopyrightSection>
                <Copyright color="var(--primary-white)" />
                <Text>
                    Copyright 2024 Jardim Saúde. Desenvolvido por
                </Text>
                <NavBarItem>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-marcos-c%C3%A2ndido-da-silva-58b29227a/"> João Marcos
                    </a>
                </NavBarItem>
            </CopyrightSection>
        </>
    )
}