import Image from 'next/image'

import Modal from '../index'
import Header from './Header'
import Linechart from './Linechart'
import DayCard from './DayCard'
import Icon from 'components/Icon'

import CloudSvg from 'public/cloud.svg'
import HotSvg from 'public/hot.svg'
import ColdSvg from 'public/cold.svg'
import SunriseSvg from 'public/sunrise.svg'
import SunsetSvg from 'public/sunset.svg'
import ClearCloudy from 'public/clear-cloudy.svg'
// import Drizzle from 'public/drizzle.svg'
// import Hail from 'public/hail.svg'
// import IsolatedThunderStorms from 'public/isolated-thunderstroms.svg'
// import MostlyCloudy from 'public/mostly-cloudy.svg'
// import PartlyCloudy from 'public/partly-cloudy.svg'
import Showers from 'public/showers.svg'
// import Sleet from 'public/sleet.svg'
// import SnowFlurries from 'public/snow-flurries.svg'
// import Snow from 'public/snow.svg'
import Sunny from 'public/sunny.svg'
// import Thunderstorms from 'public/thunderstorms.svg'
// import Tornado from 'public/tornado.svg'

import * as Styles from './styles'
import { Box } from 'theme/GlobalStyles'

import { format } from 'lib/date-fns-wrapper'

import { ResponseData as WeatherResponseData } from '_interfaces/weather'

interface ReportWeatherProps {
  isVisible?: boolean,
  onClose?: () => void,
  data: WeatherResponseData
}

const mapIcons = {
  1: CloudSvg,
  3: ColdSvg,
  Sol: Sunny,
  Chuvisco: Showers,
  'Aguaceiros fracos': Showers
}


function ReportWeather ({ data, ...props}: ReportWeatherProps) {
  const date = format(new Date(), "'Hoje - 'EEEE dd")
  const icon = mapIcons[data?.current?.condition?.text as keyof typeof mapIcons] || CloudSvg
  
  const renderWeekData = data?.forecast?.forecastday?.map(value => (
    <DayCard
      key={value.date}
      data={{
        date: value.date,
        icon: ClearCloudy,
        maxTemperature: `${value.day?.maxtemp_c}ºC`,
        minTemperature: `${value.day?.mintemp_c}ºc`,
      }} 
    />
  ))
  
  const areaChartData = data?.forecast?.forecastday?.[0].hour.map(value => ({
    temperature: value.temp_c,
    day: format(new Date(value.time), 'H')
  }))

  if (!props.isVisible) return null

  return (
    <Modal isVisible={props.isVisible}>
      <Header 
        onBack={props?.onClose} 
        favoriteData={{
          longitude: data.location.lon,
          latitude: data.location.lat
        }}
      />
      <Styles.Container>
        <Styles.Section>
          <Styles.SectionTitle>{date}</Styles.SectionTitle>
          <Box justifyContent="space-between">
            <Box column gap={2}>
              <Box column gap={.5}>
                <span>{data?.location?.name}</span>
                <Styles.Temperature>{`${data?.current?.feelslike_c}ºC`}</Styles.Temperature>
              </Box>
              <Box gap={.5} >
                <Box column gap={.5}>
                  <Styles.Label>Vento</Styles.Label>
                  <Styles.Value>{data?.current?.wind_kph} Km/h</Styles.Value>
                </Box>
                <Box column gap={.5}>
                  <Styles.Label>Humid.</Styles.Label>
                  <Styles.Value>{data?.current?.humidity}%</Styles.Value>
                </Box>
              </Box>
            </Box>
            <Box column alignItems="center" gap={1}> 
              <Styles.IconWeather>
                <Image src={icon} layout="fill" alt="icon weather" />
              </Styles.IconWeather>
              <Box>
                <Box>
                  <Styles.TemperatureMinMaxIcon>
                    <Image src={HotSvg} layout="fill" alt="hot" />
                  </Styles.TemperatureMinMaxIcon>
                  <Box column gap={.5}>
                    <Styles.Label>max</Styles.Label>
                    <Styles.Value>{data?.forecast?.forecastday?.[0]?.day?.maxtemp_c}ºC</Styles.Value>
                  </Box>
                </Box>
                <Box>
                  <Styles.TemperatureMinMaxIcon>
                    <Image src={ColdSvg} layout="fill" alt="hot" />
                  </Styles.TemperatureMinMaxIcon>
                  <Box column gap={.5}>
                    <Styles.Label>min</Styles.Label>
                    <Styles.Value>{data?.forecast?.forecastday?.[0]?.day?.mintemp_c}ºC</Styles.Value>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box 
            gap={1} 
            alignItems="flex-start" 
            marginTop={2}
            justifyContent="space-between"
          >
            <Box column gap={.5}>
              <Box gap={.5} alignItems="center">
                <Icon src={SunriseSvg} size={3} alt="sunrise" />
                <Styles.Label>Nascer do sol</Styles.Label>
              </Box>
              <Styles.Value>{data?.forecast?.forecastday?.[0].astro?.sunrise}</Styles.Value>
            </Box>
            <Box column gap={.5}>
              <Box gap={.5} alignItems="center">
                <Icon src={SunsetSvg} size={3} alt="sunrise" />
                <Styles.Label>Pôr do sol</Styles.Label>
              </Box>
              <Styles.Value>{data?.forecast?.forecastday?.[0].astro?.sunset}</Styles.Value>
            </Box>
          </Box>
        </Styles.Section>
        <section>
          <Styles.SectionTitle style={{ padding: '0 1rem'}}>Ao londo do dia</Styles.SectionTitle>
          <Linechart data={areaChartData} />
        </section>
        <Styles.Section>
          <Styles.SectionTitle style={{ padding: '0 1rem'}}>Previsão da semana</Styles.SectionTitle>
          <Styles.WeekContainer>
            {renderWeekData}
          </Styles.WeekContainer>
        </Styles.Section>
      </Styles.Container>
    </Modal>
  )
}

export default ReportWeather
