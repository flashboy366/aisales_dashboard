import { Button, HStack, useColorModeValue } from "@chakra-ui/react"
import { RangeDatepicker } from "chakra-dayzed-datepicker"

const StatsDate = ({ updateSelection, selectedDates, setSelectedDates }) => {
  const bg = useColorModeValue("white", "element_bg_dark")

  const handleUpdateClick = () => {
    updateSelection()
  }

  return (
    <HStack gap="20px">
      <RangeDatepicker
        selectedDates={selectedDates}
        onDateChange={setSelectedDates}
        configs={{
          dateFormat: "dd.MM.yyyy",
          monthNames: [
            "Янв",
            "Февр",
            "Март",
            "Апр",
            "Май",
            "Июнь",
            "Июль",
            "Авг",
            "Сент",
            "Окт",
            "Нояб",
            "Дек",
          ],
          dayNames: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        }}
        propsConfigs={{
          dateNavBtnProps: {
            colorScheme: "white",
            variant: "outline",
          },
          dayOfMonthBtnProps: {
            isInRangeBtnProps: {
              background: "light_gray",
              color: "black",
            },
            selectedBtnProps: {
              background: "brand",
              color: "white",
            },
            todayBtnProps: {
              background: "#ffa67a",
              color: "black",
            },
            defaultBtnProps: {
              background: bg,
            },
          },
          inputProps: {
            color: "black",
            size: "sm",
            background: "white",
            borderRadius: "10px",
            width: "fit-content",
            textAlign: "center",
            borderColor: "gray.300",
            _hover: { background: "dark_gray" },
            _active: { background: "light_gray" },
          },
          calendarPanelProps: {
            contentProps: {
              borderWidth: 0,
              background: bg,
            },
            wrapperProps: {
              background: bg,
            },
            headerProps: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "body",
            },
          },
          popoverCompProps: {
            popoverBodyProps: {
              background: bg,
            },
            popoverContentProps: {
              background: bg,
              borderWidth: 1,
              borderRadius: 10,
              overflow: "hidden",
            },
          },
        }}
      />
      <Button
        bg="white"
        borderRadius="10px"
        borderColor="gray.300"
        borderStyle="solid"
        borderWidth={1}
        color="black"
        _hover={{ background: "dark_gray" }}
        _active={{ background: "light_gray" }}
        onClick={handleUpdateClick}
      >
        Обновить
      </Button>
    </HStack>
  )
}

export default StatsDate
