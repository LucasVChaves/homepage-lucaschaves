import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article"

const Project = () => {
    return (
        <Layout title="CHIPeight">
            <Container>
                <Title>
                    CHIPeight <Badge>2020</Badge>
                </Title>
                    <P>A CHIP-8 emulator made in Rust and compiled to Web Assembly, so it runs in virtualy any up to date browser.</P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Github Page</Meta>
                            <Link href="https://github.com/LucasVChaves/chipeight">
                                https://github.com/LucasVChaves/chipeight <ExternalLinkIcon mx="3px"/>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Platform</Meta>
                            <span>Any up to date computer browser</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>Rust, Cargo, WASM, DOM, Javascript, CPU and Memory architectures</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Features</Meta>
                            <span>Extreme similar to the real 80's system CHIP-8; runs in the browser; 10 different ROMs to play with</span>
                        </ListItem>
                    </List>
                    <ProjectImage src="/images/thumbnails/thumbnailChipeight.png" alt="CHIPeight Logo"/>
                    <ProjectImage src="/images/projects/chipeight.png" alt="CHIPeight Print"/>
            </Container>
        </Layout>
    )
}

export default Project;