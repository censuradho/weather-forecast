
import * as Styles from './styles'
import { 
  Area,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  ResponsiveContainer
 } from 'recharts'

import  useTheme from 'hooks/useTheme'

interface AreaChartData {
  temperature: string,
  day: string
}
interface LinechartProps {
 data: AreaChartData[]
}

function Linechart ({ data }: LinechartProps) {
  const { colors } = useTheme()

  return (
    <Styles.Container>
      <ResponsiveContainer width="100%" height={200}>
      <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="day" 
            stroke={colors.color} 
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide  />
          <Tooltip />
          <Area type="monotone" dataKey="temperature" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
      </ResponsiveContainer>
    </Styles.Container>
  )
}

export default Linechart