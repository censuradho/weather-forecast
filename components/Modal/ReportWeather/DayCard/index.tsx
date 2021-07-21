import { format } from 'lib/date-fns-wrapper'

import Icon from 'components/Icon'

import * as Styles from './styles'
import { Box } from 'theme/GlobalStyles'

interface DayCardData {
  minTemperature: string,
  maxTemperature: string,
  date: string,
  icon: string,
  iconAlt?: string
  
}

interface DayCardProps {
  data: DayCardData,
}

function DayCard ({ data, ...props}: DayCardProps) {
  return (
    <Styles.Container>
      <Styles.Day>{format(new Date(data.date), 'EEEEEE')}</Styles.Day>
      <Icon 
        src={data.icon} 
        size={3} 
        alt={data.iconAlt || 'icon weather'} 
      />
      <Box gap={.5}>
        <Styles.MinTemperature>{data.minTemperature}</Styles.MinTemperature>
        <Styles.MaxTemperature>{data.maxTemperature}</Styles.MaxTemperature>
      </Box>
    </Styles.Container>
  )
}

export default DayCard
