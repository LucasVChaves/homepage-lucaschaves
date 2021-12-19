import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article"

const Project = () => {
    return (
        <Layout title="Vanilla Evolved">
            <Container>
                <Title>
                    Vanilla Evolved <Badge>2021</Badge>
                </Title>
                    <P>WIP</P>
                    <List ml={4} my={4}>
                    </List>
            </Container>
        </Layout>
    )
}

export default Project;