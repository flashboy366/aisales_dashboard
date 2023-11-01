import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: "#6650d7",
    secondary_violet: "#a24cc7",
    secondary_blue: "#5551e3",
    light_gray: "#e6e6ed",
    dark_gray: "#eaeaf4",
    bg: "#f0f0f8",
    bg_dark: "#121212",
    element_bg_dark: "#1A1A1A",
  },
  fonts: {
    heading: `'Noto Sans KR', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "normal", // Normally, it is "semibold"
      },
      defaultProps: {
        size: "sm",
      },
    },
  },
  initialColorMode: "light",
  useSystenColorMode: false,
  styles: {
    global: (props) => ({
      "html, body": {
        color: props.colorMode === "dark" ? "white" : "black",
        background: props.colorMode === "dark" ? "bg_dark" : "bg",
        width: "100%",
        height: "100%",
        overflowY: "hidden",
      },
    }),
  },
})

export default theme
