import { Box, ChakraProvider, HStack, Spinner, Text } from "@chakra-ui/react"
import theme from "./theme"
import NavBar from "./components/NavBar"
import Stats from "./components/Stats"
import SideBar from "./components/SideBar"
import axios from "axios"
import { BACKEND_URL } from "./const"
import { useEffect, useState } from "react"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingError, setLoadingError] = useState(false)
  const [salesArray, setSalesArray] = useState()

  const [selectedDates, setSelectedDates] = useState([new Date(), new Date()])
  const [selectedSales, setSelectedSales] = useState([])
  const [salesSummary, setSalesSummary] = useState()
  const [lossesSummary, setLossesSummary] = useState()
  const [skillsSummary, setSkillsSummary] = useState()

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/sales`)
      .then((res) => {
        setSalesArray(res.data)
        setIsLoading(false)
      })
      .catch(() => setLoadingError(true))
  }, [])

  const updateSelection = () => {
    const newSelectedSales = salesArray.filter((sale) => {
      const saleDate = new Date(sale.date)

      saleDate.setHours(0, 0, 0, 0)
      selectedDates[0].setHours(0, 0, 0, 0)
      selectedDates[1].setHours(0, 0, 0, 0)

      return saleDate >= selectedDates[0] && saleDate <= selectedDates[1]
    })
    setSelectedSales(newSelectedSales)

    const newSalesSummary = newSelectedSales.reduce(
      (sum, sale) => sum + sale.sales_sum,
      0
    )
    setSalesSummary(newSalesSummary)

    const newLossesSummary = newSelectedSales.reduce(
      (sum, sale) => sum + sale.losses,
      0
    )
    setLossesSummary(newLossesSummary)

    const skillsSum = newSelectedSales.reduce(
      (sum, sale) => sum + sale.skills,
      0
    )
    const newSkillsSummary = skillsSum / newSelectedSales.length
    setSkillsSummary(newSkillsSummary)
  }

  return (
    <ChakraProvider theme={theme}>
      <HStack
        justifyContent="space-between"
        minW="1450px"
        h="93vh"
        gap="20px"
        margin="20px"
        marginBottom={0}
      >
        {isLoading ? (
          <Box width="100%" display="flex" justifyContent="center">
            <Spinner />
          </Box>
        ) : loadingError ? (
          <Box width="100%" display="flex" justifyContent="center">
            <Text>Ошибка загрузки</Text>
          </Box>
        ) : (
          <>
            <NavBar />
            <Stats
              salesArray={selectedSales}
              updateSelection={updateSelection}
              salesSummary={salesSummary}
              lossesSummary={lossesSummary}
              skillsSummary={skillsSummary}
              selectedDates={selectedDates}
              setSelectedDates={setSelectedDates}
            />
            <SideBar salesArray={selectedSales} selectedDates={selectedDates} />
          </>
        )}
      </HStack>
    </ChakraProvider>
  )
}

export default App
