import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article"

const Project = () => {
    return (
        <Layout title="BubesOS">
            <Container>
                <Title>
                    BubesOS <Badge>2019</Badge>
                </Title>
                    <P>An old idea of mine: A OS built 100% from scratch.</P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Github Page</Meta>
                            <Link href="https://github.com/LucasVChaves/BubesOS">
                            https://github.com/LucasVChaves/BubesOS <ExternalLinkIcon mx="3px"/>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Platform</Meta>
                            <span>PC / Linux</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>x86 Assembly, C, MakeFile, Docker, Qemu</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Features</Meta>
                            <span>This project was descontinued a while ago but anyone who has the courage to fiddle around can do so. It has only a bootloader and the very beginning of a kernel built in C</span>
                        </ListItem>
                    </List>
                    <ProjectImage src="/images/thumbnails/thumbnailBubesos.png" alt="BubesOs Screenshot"/>
            </Container>
        </Layout>
    )
}

export default Project;