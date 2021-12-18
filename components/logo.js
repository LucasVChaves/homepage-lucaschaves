import Link from "next/link";
import Image from "next/image";
import {Text, useColorModeValue} from "@chakra-ui/react";

import styled from "@emotion/styled";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img{
        transform: scale(120%);
    }
`

const Logo = () => {
    const skullImg = `/images/logo${useColorModeValue('','-dark')}.png`;

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={skullImg} width={25} height={25} alt="logo"/>
                    <Text color={useColorModeValue('gray.800', 'whitAlpha.900')} fontFamily='Nunito' fontWeight="bold" ml={3}>Lucas Chaves - Y3T</Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;