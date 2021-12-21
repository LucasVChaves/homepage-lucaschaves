import Head from "next/head";
import Navbar from "../navbar"
import { Box, Container} from "@chakra-ui/react";
import NoSsr from "../no-ssr";
import VoxelComputer from "../voxel-computer";

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" type="image/x-icon" href="/images/danger.png"/>
                <title>Lucas Chaves - Homepage</title>
            </Head>

            <Navbar path={router.asPath}></Navbar>

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <VoxelComputer/>
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main;