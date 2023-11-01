import {
  Button,
  HStack,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import SideBarChart from "./SideBarChart"

const SideBar = ({ salesArray, selectedDates }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue("white", "element_bg_dark")

  let domain = [selectedDates[0], selectedDates[1]]

  if (salesArray.length !== 0) {
    salesArray.forEach((sale) => {
      sale.date = new Date(sale.date).getTime()
    })
  }

  return (
    <VStack minW="300px" height="100%" gap="20px">
      <HStack width="100%" justifyContent="space-around">
        <Button
          colorScheme="orange"
          bgGradient="linear(to-b, #ff7363, #ff9561)"
        >
          С чего начать?
        </Button>
        <DarkModeSwitch
          checked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
      </HStack>
      <VStack
        width="100%"
        height="100%"
        bg={bg}
        borderRadius="20px"
        justifyContent="space-around"
      >
        <SideBarChart
          salesArray={salesArray}
          label="Потери"
          valuePostfix="шт"
          dataKey="losses"
          domain={domain}
        />
        <SideBarChart
          salesArray={salesArray}
          label="Навыки 1-й звонок"
          valuePostfix="%"
          dataKey="skills"
          domain={domain}
        />
        <SideBarChart
          salesArray={salesArray}
          label="Продажи"
          dataKey="sales_sum"
          domain={domain}
        />
      </VStack>
    </VStack>
  )
}

export default SideBar
