import { Container, Box, Heading, Image, Link, useColorModeValue, Button, List, ListItem, Icon } from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import { BsDiscord, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
import { FiBox } from "react-icons/fi";

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" marginTop={3} mb={6} p={3} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
                    Olá! I&apos;m a CS student that should study more often...
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">Lucas Chaves</Heading>
                        <p>Programmer, Hacker and sometime funny</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Image borderColor="whiteAlpha.700" borderWidth={2} borderStyle="solid" maxWidth="125px" display="inline-block" borderRadius="full" src="/images/eu.png" alt="Profile Image" />
                    </Box>
                </Box>
                <Section delay={0.25}>
                    <Heading as="h3" variant="section-title">About</Heading>
                    <Paragraph>
                        Hello! I&apos;m a programmer and pen-testing student based in Brazil. Passionate about computers and how they work I&apos;ve been studying code since 2016. Most of the time I use low-level languages like C, C++ and Rust; but I also explore high-level as Python and JS. The project I&apos;ve been spending the most time in is {' '}<NextLink href="/projects/melbos"><Link>MelbOS</Link></NextLink>.
                    </Paragraph>

                    <Box align="center" my={4}>
                        <NextLink href="/projects">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="green">My Portfolio</Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.35}>
                    <Heading as="h3" variant="section-title">Bio</Heading>
                    <BioSection>
                        <BioYear>2004</BioYear>
                        Born in Juiz de Fora, MG, Brazil. 🙃
                    </BioSection>
                    <BioSection>
                        <BioYear>2008</BioYear>
                        My first contact with computers. Got instantly amazed by them. 💻
                    </BioSection>
                    <BioSection>
                        <BioYear>2016</BioYear>
                        Found a Python class on Youtube, and here started my coding adventures. 🐍
                    </BioSection>
                    <BioSection>
                        <BioYear>2016</BioYear>
                        Still in 2016 I enrolled in a Unity game development course. C# will always be in my heart. 👾
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Got an Arduino as a gift and started playing around with low-level languages and eletronics. 🤖
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        After years of dreaming about hacking I bought an ethical hacking course in Udemy, and fell in love with it. 👨‍💻
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Started studying reverse engineering; I always loved solving puzzles, and joining it with hacking just seemed perfect. ⚙️
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Graduated at high school and, hopefully, got into college. Beginning my computer scientist journey. 👨🏻‍🎓
                    </BioSection>
                </Section>

                <Section delay={0.45}>
                    <Heading as="h3" variant="section-title">Passions</Heading>
                    <Paragraph>
                        Punk rock and metal (ask me about my playlists); japanese cuisine, puzzles, horror genre, supernatural, arachnids and learning new technologies and cultures.
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Let&apos;s chat!
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/LucasVChaves" target="_blank">
                                <Button variant="ghost" colorScheme="green" leftIcon={<Icon as={BsGithub} />}>
                                    @LucasVChaves
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Button variant="ghost" colorScheme="green" leftIcon={<Icon as={BsDiscord} />}>
                                f(x)et#6654
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button variant="ghost" colorScheme="green" leftIcon={<Icon as={BsFillEnvelopeFill} />}>
                                y3tsec@protonmail.com
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Link href="https://app.hackthebox.com/profile/456566" target="_blank">
                                <Button variant="ghost" colorScheme="green" leftIcon={<Icon as={FiBox} />}>
                                    Y3T
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page;