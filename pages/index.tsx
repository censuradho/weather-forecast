import queryString from 'querystring'
import { useRouter } from 'next/dist/client/router'

import Header from 'components/Header'
import FavoriteCard from 'components/FavoriteCard'
import Button from 'components/Button'
import ReportWeather from 'components/Modal/ReportWeather'
import ActivityIndicator from 'components/common/ActivityIndicator'

import * as Styles from 'styles'
import { useState } from 'react'

import { ResponseData as WeatherResponseData } from '_interfaces/weather'

import localAPI from 'services/local'

import * as dbLocal from 'lib/dbLocal'

import { CITIES_FAVORITE, CitiesFavorite } from 'entities/db'
import { useEffect } from 'react'

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
  const [dataStorage, setDataStorage] = useState<WeatherResponseData[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getFavoriteData = async () => {
    try {
      setIsLoading(true)
      const storagedFavorite = dbLocal.getItem<CitiesFavorite>(CITIES_FAVORITE)
  
      const favorites: WeatherResponseData[] = []
  
      for (const favorite of storagedFavorite) {
        const query = queryString.stringify({
          city: favorite.city
        })
        const { data } = await localAPI.get<WeatherResponseData>(`/weather?${query}`)
        favorites.push(data)
      }
      setDataStorage(favorites)
    } catch (err) {

    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenReport = async (cityName: string) => {
    try {
      const query = queryString.stringify({ city: cityName, days: 7 })

      const response = await localAPI.get<WeatherResponseData>(`/weather?${query}`)
  
      setReport({
        isVisible: true,
        data: response.data
      })
    } catch (err) {}
  }
  
  const handleCloseReport = () => {
    setReport(baseReport)
    getFavoriteData()
  }


  const renderTemperature = dataStorage.map(value => {
    const city = value.location.name
    const minTemperature = `${value.forecast.forecastday[0].day.mintemp_c}ºC`
    const maxTemperature = `${value.forecast.forecastday[0].day.maxtemp_c}ºC`
    const meanTemperature = `${value.current.feelslike_c}ºC`

    return (
      <FavoriteCard
        key={city}
        city={city}
        minTemperature={minTemperature}
        maxTemperature={maxTemperature}
        meanTemperature={meanTemperature}
        onClick={() => handleOpenReport(city)}
      />
    )
  })

  useEffect(() => {
    getFavoriteData()
  }, [])

  return (
    <>
      <ActivityIndicator isVisible={isLoading} />
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