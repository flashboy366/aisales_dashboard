import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { format } from "date-fns"

const SideBarChart = ({
  salesArray,
  label,
  dataKey,
  domain,
  valuePostfix = "",
}) => {
  const graphLabelColor = useColorModeValue("gray.500", "whiteAlpha.500")
  const tooltipBgColor = useColorModeValue(
    "rgba(255, 255, 255, .8)",
    "rgba(20, 20, 20, .8)"
  )
  const tooltipItemColor = useColorModeValue("#3457D5", "#0CAFFF")

  const dateFormatter = (date) => {
    return format(new Date(date), "dd.MM.yy")
  }

  const tooltipFormatter = (value) => [`${value} ${valuePostfix}`, ""]

  return (
    <VStack gap="12px">
      <Text color={graphLabelColor}>{label}</Text>
      <Box marginRight="50px" height="100%">
        <LineChart data={salesArray} height={210} width={230}>
          <CartesianGrid strokeDasharray="1 7" />
          <XAxis
            dataKey="date"
            fontSize="11px"
            hasTick
            scale="time"
            tickFormatter={dateFormatter}
            type="number"
            domain={domain}
          />
          <YAxis fontSize="11px" width={50} />
          <Tooltip
            labelFormatter={dateFormatter}
            formatter={tooltipFormatter}
            labelStyle={{ fontSize: "12px" }}
            contentStyle={{
              fontSize: "13px",
              borderWidth: 0,
              borderRadius: "13px",
              background: tooltipBgColor,
              padding: 7,
            }}
            itemStyle={{ color: tooltipItemColor }}
            allowEscapeViewBox={{ y: true }}
            separator=""
          />
          <Line dataKey={dataKey} fill="#8884d8" />
        </LineChart>
      </Box>
    </VStack>
  )
}

export default SideBarChart
