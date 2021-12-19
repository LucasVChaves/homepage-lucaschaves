import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article"

const Project = () => {
    return (
        <Layout title="Snake Game Evolution">
            <Container>
                <Title>
                    Snake Game Evolution <Badge>2021</Badge>
                </Title>
                    <P>Clone of the classic Snake Game, but infected with a malware.</P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Github Page</Meta>
                            <Link href="https://github.com/LucasVChaves/SnakeGameEvolution">
                            https://github.com/LucasVChaves/SnakeGameEvolution <ExternalLinkIcon mx="3px"/>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Platform</Meta>
                            <span>Win10</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>Python 3, Pygame, PowerShell, Reverse Shell</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Features</Meta>
                            <span>This rather evil Snake Game punishes the player after loosing by playing some Rick Astley and setting up a reverse TCP connection between the victim's computer and my Raspberry Pi. <em>This project was built for a Coding Jam and has no bad intents</em></span>
                        </ListItem>
                    </List>
                    <ProjectImage src="/images/thumbnails/thumbnailSnakegameev.png" alt="Snake Game Evolution Snippet"/>
                    <ProjectImage src="/images/projects/snakegameev.png" alt="Gameplay of the project"/>
            </Container>
        </Layout>
    )
}

export default Project;