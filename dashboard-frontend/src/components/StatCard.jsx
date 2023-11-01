import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react"
import { BsQuestionCircle } from "react-icons/bs"

const StatCard = ({
  label,
  icon,
  iconColor,
  auxIcon,
  extraContent,
  summary,
}) => {
  const bg = useColorModeValue("white", "element_bg_dark")

  return (
    <Box
      bg={bg}
      borderRadius="30px"
      height="100%"
      width="100%"
      padding="20px"
      position="relative"
    >
      <Button
        position="absolute"
        right={3}
        top={3}
        padding={0}
        colorScheme="white"
        color="var(--chakra-colors-chakra-border-color)"
      >
        {auxIcon ? auxIcon({ size: 21 }) : <BsQuestionCircle size={21} />}
      </Button>
      <HStack
        height="100%"
        justifyContent="space-between"
        gap="20px"
        alignItems="center"
      >
        <VStack
          height="170px"
          width="105px"
          alignItems="flex-start"
          justifyContent="flex-start"
          alignSelf="flex-start"
          gap="12px"
        >
          <Box bg={iconColor} padding="8px" borderRadius="25px" color={bg}>
            {icon({ size: "25px", bg: bg })}
          </Box>
          <Text fontWeight="bold">{label}</Text>
          <Text fontWeight="bold" fontSize="20px">
            {summary ? summary : "−"}
          </Text>
          {extraContent}
        </VStack>
        <Box
          height="70px"
          width="110px"
          borderRadius="15px"
          bgGradient="linear(to-l, secondary_blue, secondary_violet)"
          color="white"
        >
          <VStack justifyContent="space-around" height="100%" padding="10px">
            <Text fontSize="10px">Прогноз</Text>
            <Text>-</Text>
          </VStack>
        </Box>
      </HStack>
    </Box>
  )
}

export default StatCard
