import { Container, Heading, SimpleGrid, Image, Box, useColorModeValue} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
//import { GridItem } from "../components/grid-item";

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} my={4}>
                Posts
            </Heading>
            <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                <Image borderWidth={1} maxWidth="125px" marginTop={20} marginBottom={10} display="inline-block" borderRadius="lg" src={`/images/building${useColorModeValue('','-dark')}.png`} alt="Work in progress icon" />
            </Box>
            <span>This section is currently work in progress. I do intend to write articles and blogs about pen-testing and cyber security</span>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts;