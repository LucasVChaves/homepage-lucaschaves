import { forwardRef } from "react";
import {Box, Spinner} from "@chakra-ui/react";

export const ComputerSpinner = () => (
    <Spinner size="x1" position="absolute" left="50%" top="50%" ml="calc(0px - var(--spiner-size) / 2)" mt="calc(0px - var(--spinner-size))"/>
);

export const ComputerContainer = forwardRef(({children}, ref) => (
    <Box ref={ref} className="voxel-computer" m="auto" mt={['-20px', '-60px', '-120px']} mb={['-40px','-140px', '-200px']} w={[280, 480, 640]} h={[280, 480, 640]} position="relative">
        {children}
    </Box>
));

const loader = () => {
    return (
        <ComputerContainer>
            <ComputerSpinner/>
        </ComputerContainer>
    )
}

export default loader;