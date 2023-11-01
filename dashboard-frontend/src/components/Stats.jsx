import {
  HStack,
  Heading,
  Link,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react"
import { BsFillFileBarGraphFill } from "react-icons/bs"
import { BsPlayCircle } from "react-icons/bs"
import { VscGraph } from "react-icons/vsc"
import { MdAutoGraph } from "react-icons/md"
import StatCard from "./StatCard"
import StatTable from "./StatTable"
import StatsDate from "./StatsDate"

const Stats = ({
  salesArray,
  updateSelection,
  salesSummary,
  lossesSummary,
  skillsSummary,
  selectedDates,
  setSelectedDates,
}) => {
  const statCardExtraColor = useColorModeValue(
    "gray.600",
    "var(--chakra-colors-chakra-border-color)"
  )

  return (
    <VStack width="100%" height="100%" alignItems="flex-start" gap="20px">
      <Heading size="sm" fontFamily="body">
        Выберите дату отчета и нажмите кнопку обновить
      </Heading>
      <StatsDate
        updateSelection={updateSelection}
        selectedDates={selectedDates}
        setSelectedDates={setSelectedDates}
      />
      <HStack gap="20px" width="100%" justifyContent="space-between">
        <StatCard
          label="Продажи"
          icon={BsFillFileBarGraphFill}
          iconColor="brand"
          extraContent={
            <VStack alignItems="flex-start" color={statCardExtraColor}>
              <Link fontSize="10px">Планирование</Link>
              <Link fontSize="10px">Отчет по продажам</Link>
            </VStack>
          }
          auxIcon={BsPlayCircle}
          summary={salesSummary}
        />
        <StatCard
          label="Потери, шт"
          icon={VscGraph}
          iconColor="#fe7781"
          summary={lossesSummary}
        />
        <StatCard
          label="Навыки, %"
          icon={MdAutoGraph}
          iconColor="#4ff2bb"
          summary={skillsSummary && Number(skillsSummary.toFixed(1))}
        />
      </HStack>
      <StatTable salesArray={salesArray} />
    </VStack>
  )
}

export default Stats
