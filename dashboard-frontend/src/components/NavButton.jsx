import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react"

const NavButton = ({ icon, active, label, ...props }) => {
  const bg = useColorModeValue("white", "element_bg_dark")
  const color = useColorModeValue("gray.700", "gray.300")
  const hoverBg = useColorModeValue("dark_gray", "light_gray")

  return (
    <Button
      position="relative"
      width="100%"
      borderRadius={0}
      height="50px"
      fontWeight="normal"
      paddingLeft={7}
      leftIcon={icon({ size: 24 })}
      background={active ? hoverBg : bg}
      color={active ? "brand" : color}
      sx={{ _hover: { background: hoverBg, color: !active && "black" } }}
      {...props}
    >
      <Box
        bg={active && "brand"}
        height="50px"
        width="8px"
        position="absolute"
        left={0}
      />
      <Text fontSize="13px" width="100%" textAlign="left">
        {label}
      </Text>
    </Button>
  )
}

export default NavButton
