import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: props => ({
        body: {
            bg: mode('#DDC6BE', '#13141C')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 24,
                textUnderlineOffset: 6,
                textDecorationColor: '#6CAF56',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4 
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#7A50C0', '#CAF7D5')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "M PLUS Rounded 1c"
}

const colors = {
    lightGreen: '#73D592'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config, styles, components, colors, fonts
});

export default theme;