import Link from "next/link";
import Image from "next/image";
import {Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 25px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img{
        transform: scale(110%);
    }
`

const Logo = () => {
    const skullImg = `/images/logo${useColorModeValue('','-dark')}.png`;

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={skullImg} width={30} height={30} alt="logo"/>
                    <Text color={useColorModeValue('gray.800', 'whitAlpha.900')} fontFamily='Nunito' fontWeight="bold" ml={3}>Lucas Chaves - Y3T</Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;