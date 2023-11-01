import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react"
import { BsQuestionCircle } from "react-icons/bs"

const StyledTh = ({ children }) => {
  const color = useColorModeValue("black", "white")

  return (
    <Th
      textAlign="center"
      fontWeight="extrabold"
      fontSize="11px"
      color={color}
      fontFamily="body"
      borderColor="var(--chakra-colors-chakra-border-color)"
      height="50px"
    >
      {children}
    </Th>
  )
}

const StyledTd = ({ children }) => (
  <Td
    textAlign="center"
    width="25%"
    borderColor="var(--chakra-colors-chakra-border-color)"
    fontSize="13px"
  >
    {children}
  </Td>
)

const StatTable = ({ salesArray }) => {
  const bg = useColorModeValue("white", "element_bg_dark")

  const tableRows = salesArray.map((sale, index) => (
    <Tr key={index}>
      <StyledTd>{sale.manager}</StyledTd>
      <StyledTd>{sale.sales_sum}</StyledTd>
      <StyledTd>{sale.losses} шт</StyledTd>
      <StyledTd>{sale.skills} %</StyledTd>
    </Tr>
  ))

  return (
    <TableContainer
      width="100%"
      bg={bg}
      borderLeftRadius="30px"
      position="relative"
      overflowY="scroll"
    >
      <Table variant="simple">
        <Thead position="sticky" top={0} background={bg}>
          <Tr>
            <StyledTh>Менеджер</StyledTh>
            <StyledTh>Продажи</StyledTh>
            <StyledTh>Потери</StyledTh>
            <StyledTh>Навыки</StyledTh>
          </Tr>
          <Button
            position="absolute"
            right={2}
            top={2}
            padding={0}
            colorScheme="white"
            color="var(--chakra-colors-chakra-border-color)"
          >
            <BsQuestionCircle size={21} />
          </Button>
        </Thead>
        <Tbody>
          {tableRows.length !== 0 ? (
            tableRows
          ) : (
            <>
              <StyledTd>-</StyledTd>
              <StyledTd>-</StyledTd>
              <StyledTd>-</StyledTd>
              <StyledTd>-</StyledTd>
            </>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default StatTable
