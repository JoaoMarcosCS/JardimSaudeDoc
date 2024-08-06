import { ButtonContainer, Container, GitHubButton, ImageBanner, ImageContainer, LinkText, SubText, TextArea, Title } from "./style"
import Banner from "../../assets/img/banner-home.png"
import { ExternalLink, Github } from "lucide-react"
import { ArrowDown } from "../arrow/ArrowDown"

export const Header = () => {
    return (
        <Container>
            <TextArea>
                <Title>
                    JARDIM SAÚDE
                </Title>
                <SubText>
                    Plataforma Fullstack desenvolvida com NodeJS, NextJS e Postgres
                </SubText>
                <ButtonContainer>

                    <LinkText>
                        <a href="https://jardim-saude.vercel.app/login" target="_blank">
                            Acessar
                        </a>
                        <ExternalLink />
                    </LinkText>

                    <GitHubButton>
                        <p><Github /> </p>
                        <a href="https://github.com/JoaoMarcosCS/JardimSaude" target="_blank">Frontend</a>
                    </GitHubButton>
                    <GitHubButton>
                        <p><Github /> </p>
                        <a href="https://github.com/JoaoMarcosCS/JardimSaudeAPI" target="_blank">Backend</a>
                    </GitHubButton>
                </ButtonContainer>

            </TextArea>
            <ImageContainer>
                <ImageBanner src={Banner} />
            </ImageContainer>
        </Container >
    )
}