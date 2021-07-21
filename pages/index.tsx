import queryString from 'querystring'

import Header from 'components/Header'
import FavoriteCard from 'components/FavoriteCard'
import Button from 'components/Button'
import ReportWeather from 'components/Modal/ReportWeather'

import * as Styles from 'styles'
import { useState } from 'react'

import { ResponseData as WeatherResponseData } from '_interfaces/weather'

import localAPI from 'services/local'
import { useRouter } from 'next/dist/client/router'

interface Report {
  isVisible?: boolean,
  data: WeatherResponseData | null
}

const baseReport: Report = {
  isVisible: false,
  data: null
}

function  Home () {
  const router = useRouter()

  const [report, setReport] = useState<Report>(baseReport)

  const dataStorage = [
    {
      id: '2',
      city: 'Porto Alegre',
      meanTemperature: '12ºC',
      maxTemperature: '25ºC',
      minTemperature: '25ºC'
    },
    {
      id: '3',
      city: 'Canoas',
      meanTemperature: '11ºC',
      maxTemperature: '30ºC',
      minTemperature: '29ºC'
    },
    {
      id: '4',
      city: 'Brasília, Distrito Federal',
      meanTemperature: '11ºC',
      maxTemperature: '30ºC',
      minTemperature: '29ºC'
    },
    {
      id: '5',
      city: 'Canoas',
      meanTemperature: '11ºC',
      maxTemperature: '30ºC',
      minTemperature: '29ºC'
    },
    {
      id: '6',
      city: 'Canoas',
      meanTemperature: '11ºC',
      maxTemperature: '30ºC',
      minTemperature: '29ºC'
    },
    {
      id: '7',
      city: 'Canoas',
      meanTemperature: '11ºC',
      maxTemperature: '30ºC',
      minTemperature: '29ºC'
    },
    {
      id: '8',
      city: 'Canoas',
      meanTemperature: '11ºC',
      maxTemperature: '30ºC',
      minTemperature: '29ºC'
    }
  ]

  const handleOpenReport = async (cityName: string) => {
    try {
      const query = queryString.stringify({ city: cityName, days: 7 })

      const { data } = await localAPI.get<WeatherResponseData>(`/weather?${query}`)
  
      setReport({
        isVisible: true,
        data
      })
    } catch (err) {}
  }
  
  const handleCloseReport = () => {
    setReport(baseReport)
  }


  const renderTemperature = dataStorage.map(value => 
    <FavoriteCard
      key={value.id}
      city={value.city}
      minTemperature={value.minTemperature}
      maxTemperature={value.maxTemperature}
      meanTemperature={value.maxTemperature}
      onClick={() => handleOpenReport(value.city)}
    />
  )

  return (
    <>
      <ReportWeather 
        isVisible={report.isVisible}
        onClose={handleCloseReport}
        data={report.data as WeatherResponseData}
      />
      <Header />
      <Styles.Main>
        <Styles.H1>Suas cidades</Styles.H1>
        <Styles.FavoriteContainer>
          {renderTemperature}
        </Styles.FavoriteContainer>
        <Button onClick={() => router.push('/pesquisa')}>Adicionar uma cidade</Button>
      </Styles.Main>
    </>
  )
}

export default Home