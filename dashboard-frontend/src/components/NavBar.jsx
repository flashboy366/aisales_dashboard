import { Heading, VStack, useColorModeValue } from "@chakra-ui/react"
import { PiSquaresFourFill } from "react-icons/pi"
import { MdGavel } from "react-icons/md"
import { TbChecklist } from "react-icons/tb"
import { FaMoneyBills } from "react-icons/fa6"
import { BiRun } from "react-icons/bi"
import { RxExit } from "react-icons/rx"
import NavButton from "./NavButton"

const NavBar = () => {
  const bg = useColorModeValue("white", "element_bg_dark")

  return (
    <VStack minW="210px" height="100%" gap="30px">
      <Heading
        bgGradient="linear(to-l, secondary_blue, brand, secondary_violet)"
        bgClip="text"
        fontSize="40px"
      >
        LostSales
      </Heading>
      <VStack
        width="100%"
        height="100%"
        justifyContent="space-between"
        borderBottomRadius={15}
        bg={bg}
      >
        <VStack width="100%" gap={0}>
          <NavButton icon={PiSquaresFourFill} active label="Показатели" />
          <NavButton icon={MdGavel} label="Потери" />
          <NavButton icon={TbChecklist} label="Навыки" />
          <NavButton icon={FaMoneyBills} label="Продажи NEW" />
          <NavButton icon={FaMoneyBills} label="Продажи" />
          <NavButton icon={BiRun} label="Вечерний отчет" />
        </VStack>
        <NavButton icon={RxExit} label="Выход" marginBottom="50px" />
      </VStack>
    </VStack>
  )
}

export default NavBar
