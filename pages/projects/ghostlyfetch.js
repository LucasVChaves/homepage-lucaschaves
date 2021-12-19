import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article"

const Project = () => {
    return (
        <Layout title="GhostlyFetch">
            <Container>
                <Title>
                    GhostlyFetch <Badge>2021</Badge>
                </Title>
                    <P>A simple Linux information fetching program. Runs in the terminal.</P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Github Page</Meta>
                            <Link href="https://github.com/LucasVChaves/ghostlyfetch">
                            https://github.com/LucasVChaves/ghostlyfetch <ExternalLinkIcon mx="3px"/>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Platform</Meta>
                            <span>Linux / Other Unix based systems</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>Rust, Cargo, Shell</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Features</Meta>
                            <span>Gathers info about the current distro, kernel version, uptime and memory usage</span>
                        </ListItem>
                    </List>
                    <ProjectImage src="/images/thumbnails/thumbnailGhostlyfetch.png" alt="GhostlyFetch in use"/>
            </Container>
        </Layout>
    )
}

export default Project;