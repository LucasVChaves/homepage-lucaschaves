import NextLink from 'next/link';
import { Box, Heading, Text, Image, Container, Divider, Button, useColorModeValue } from "@chakra-ui/react";

const NotFound = () => {
    return (
        <Container>
            <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                <Image borderWidth={1} maxWidth="125px" marginTop={20} display="inline-block" borderRadius="lg" src={`/images/danger${useColorModeValue('','-dark')}.png`} alt="404 error image" />
            </Box>
            <Heading as="h1">Not Found</Heading>
            <Text>The page you&apos;re looking for could not be found. Now you are entering the wasteland of <em>the internet</em>.</Text>
            <Divider my={6}/>
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="red">Return to Safety</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound;