import Logo from "../../assets/img/logoJardimSaude.png"
import { Copyright, Github, GithubIcon, Linkedin, LinkedinIcon } from "lucide-react"
import { Content, CopyrightSection, CopyrightText, Link, LogoSection, Section, Text, Title } from "./style"
import { ImageLogo } from "../navbar/style"

export const Footer = () => {
    return (
        <Section>
            <Content>
                <LogoSection>
                    <ImageLogo src={Logo} />
                    <Link href="https://jardim-saude.vercel.app/login">
                        Jardim Saúde
                    </Link>
                </LogoSection>
                <Text >
                    MVP de clínica médica
                </Text>
            </Content>

            <Content>
                <Title>
                    Navegação
                </Title>
                <Link href="#sobre">
                    Sobre
                </Link>
                <Link href="#medicos">
                    Médicos
                </Link>
                <Link href="#secretarias">
                    Secretárias
                </Link>
                <Link href="#tratamentos">
                    Tratamentos
                </Link>
                <Link href="#medicamentos">
                    Medicamentos
                </Link>
                <Link href="#limitacoes">
                    Limitações
                </Link>
                <Link href="#melhorias">
                    Próximas melhorias
                </Link>
            </Content>

            <Content>
                <Title>
                    Conteúdos citados
                </Title>

                <Link href="https://docs.docker.com/guides/" target="_blank">
                    Docker
                </Link>
                <Link href="https://nextjs.org/docs" target="_blank">
                    NextJS
                </Link>
                <Link href="https://nodejs.org/docs/latest/api/" target="_blank">
                    NodeJS
                </Link>
                <Link href="https://react-hook-form.com/get-started" target="_blank">
                    React Hook Form
                </Link>
                <Link href="https://tanstack.com/query/latest/docs/framework/react/overview" target="_blank">
                    React Query
                </Link>
            </Content>

            <Content>
                <Title>Nota do desenvolvedor</Title>

                <Text>
                    Esse sistema foi desenvolvido com o
                    intuito de consolidar meus conhecimentos em NextJS,
                    NodeJS e Banco de dados, aprimorando, dessa forma, minhas habilidades
                    nesses ambientes para me consolidar como um desenvolvedor fullstack.
                    Como o sistema não possui usuários ativos e foi um projeto para aplicação
                    de conhecimento, o Jardim Saúde possui vários pontos de melhorias, como
                    padronizar nomes de funções, distribuir melhor a responsabilidade entre os
                    módulos, realizar teste unitários (já que a API foi testada utilizando Postman)
                    e outros tópicos. Em breve serão corrigidos ou aprimorados como visto na documentação.
                </Text>
            </Content>

            <CopyrightSection>
                <CopyrightText>
                    Jardim Saúde <Copyright /> 2024 Desenvoldido por 
                    <Link href="https://www.linkedin.com/in/jo%C3%A3o-marcos-c%C3%A2ndido-da-silva-58b29227a/">
                        João Marcos
                    </Link>
     
                </CopyrightText>

            </CopyrightSection>
        </Section>
    )
}