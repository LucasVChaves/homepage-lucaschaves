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
                    <P>Vanilla Evolved is a Fabric API based Minecraft mod that aims to increase the game&apos;s quality of life, without removing its essence.</P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Github Page</Meta>
                            <Link href="https://github.com/LucasVChaves/VanillaEvolved">
                            https://github.com/LucasVChaves/VanillaEvolved <ExternalLinkIcon mx="3px"/>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Platform</Meta>
                            <span>Windows - Minecraft 1.17.1</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>Java, Fabric API, Gradle</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Features</Meta>
                            <span>Adds crafting to itens that previously had none, increases the variety of blocks: dyed lanterns, concrete stairs, slabs and walls, bookshelves based on their wood type and more. Check the idea list in the GitHub repo for more information</span>
                        </ListItem>
                    </List>
                    <ProjectImage src="/images/projects/vanillaevo_1.png" alt="Mod&apos;s inventory tabs"/>
                    <ProjectImage src="/images/projects/vanillaevo_2.png" alt="Some of the new blocks"/>
                    <ProjectImage src="/images/projects/vanillaevo_3.png" alt="Some of the concrete variants"/>
            </Container>
        </Layout>
    )
}

export default Project;