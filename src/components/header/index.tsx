import { ButtonContainer, Container, GitHubButton, ImageBanner, ImageContainer, LinkText, SubText, SubTitle, TextArea, Title } from "./style"
import Banner from "../../assets/img/banner-home.png"
import { ExternalLink, Github } from "lucide-react"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export const Header = () => {
    return (
        <Container>
            <TextArea>
                <Title>
                    JARDIM SAÚDE
                </Title>
                <SubText>
                    MVP de clínica médica
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
                        <a href="https://github.com/JoaoMarcosCS/JardimSaude">Frontend</a>
                    </GitHubButton>
                    <GitHubButton>
                        <p><Github /> </p>
                        <a href="https://github.com/JoaoMarcosCS/JardimSaudeAPI">Backend</a>
                    </GitHubButton>
                </ButtonContainer>

            </TextArea>
            <ImageContainer>
                <ImageBanner src={Banner} />
            </ImageContainer>
        </Container >
    )
}