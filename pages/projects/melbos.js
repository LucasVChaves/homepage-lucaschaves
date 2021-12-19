import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article"

const Project = () => {
    return (
        <Layout title="MelbOS">
            <Container>
                <Title>
                    MelbOs <Badge>2021</Badge>
                </Title>
                    <P>A Rust based UNIX-like operational system. It's currently bare-bores but I'm working on it.</P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Github Page</Meta>
                            <Link href="https://github.com/LucasVChaves/MelbOS">
                                https://github.com/LucasVChaves/MelbOS <ExternalLinkIcon mx="3px"/>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Platform</Meta>
                            <span>PC / Linux / Mac</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>Rust, Cargo, Qemu</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Features</Meta>
                            <span>Has its own std library and panic handler; memory pagination and CPU fault handlers; started implementing asynchronicity and cooperative multitasking</span>
                        </ListItem>
                    </List>
                    <ProjectImage src="/images/thumbnails/thumbnailMelbos.png" alt="MelbOS Logo"/>
            </Container>
        </Layout>
    )
}

export default Project;