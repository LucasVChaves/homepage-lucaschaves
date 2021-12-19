import { Container, Heading, SimpleGrid} from "@chakra-ui/react";
import { ProjectGridItem } from "../components/grid-item";
import Section from "../components/section";

import thumbnailMelbos from "../public/images/thumbnails/thumbnailMelbos.png";
import thumbnailChipeight from "../public/images/thumbnails/thumbnailChipeight.png";
import wip from "../public/images/thumbnails/wip.png";
import thumbnailGhostlyfetch from "../public/images/thumbnails/thumbnailGhostlyfetch.png";
import thumbnailSnakegameev from "../public/images/thumbnails/thumbnailSnakegameev.png";
import thumbnailBubesos from "../public/images/thumbnails/thumbnailBubesos.png";

const Projects = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4} marginTop={5}>Projects</Heading>
            <SimpleGrid gap={6}>
                <Section>
                    <ProjectGridItem id="melbos" title="MelbOS" thumbnail={thumbnailMelbos}>
                        A Rust based Unix-like operational system. Currently bare-bones, but evolving.
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="chipeight" title="CHIPeight" thumbnail={thumbnailChipeight}>
                        CHIP-8 emulator made in Rust in compiled in Web Assemly, so it runs in virtually any browser.
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="vanillaevolved" title="Vanilla Evolved" thumbnail={wip}>
                        Minecraft mod that make minor tweaks to Vanilla Minecraft without loosing the game's default feel.  
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="ghostlyfetch" title="GhostlyFetch" thumbnail={thumbnailGhostlyfetch}>
                        Simple Linux data fetching program. Fetching programs are usually present in distro ricing demonstrations.
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="snakegameev" title="Snake Game Evolved" thumbnail={thumbnailSnakegameev}>
                        Classil Snake Game clone, but infected with a malware. Made for a coding jam.
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="bubesos" title="BubesOS" thumbnail={thumbnailBubesos}>
                        My first try at building my own OS. It's discontinued but the ruin are still there to explore.
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects;