import { memo } from 'react'
import { format } from 'date-fns'
import { Box } from 'theme/GlobalStyles'

import * as Styles from './styles'

interface FavoriteCardProps {
  city: string,
  minTemperature: string,
  maxTemperature: string,
  meanTemperature: string,
  onClick?: () => void
}

function FavoriteCard (props: FavoriteCardProps) {

  return (
    <Styles.Container onClick={props?.onClick}>
      <Box gap={.4}>
        <Box column gap={.4} flex={1}>        
          <Styles.City>{props.city}</Styles.City>
          <Styles.MeanTemperature>{props.meanTemperature}</Styles.MeanTemperature>
        </Box>
        <Box column gap={1}>
          <Box column gap={.4}>
            <Styles.MinMaxLabelTemperature>Min</Styles.MinMaxLabelTemperature>
            <Styles.MinMaxValueTemperature>{props.minTemperature}</Styles.MinMaxValueTemperature>
          </Box>
          <Box column gap={.4}>
            <Styles.MinMaxLabelTemperature>Max</Styles.MinMaxLabelTemperature>
            <Styles.MinMaxValueTemperature>{props.maxTemperature}</Styles.MinMaxValueTemperature>
          </Box>
        </Box>
      </Box>
      <Styles.Date>{format(new Date(), 'dd MMM, yyyy')}</Styles.Date>
    </Styles.Container>
  )
}

export default memo(FavoriteCard)
