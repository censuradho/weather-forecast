// raigeki - 25 LIGHTERS w/ SKINNYꓘID
import { FormEvent, useEffect, useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import Link from 'next/link'
import { MdSearch } from 'react-icons/md'
import queryString from 'querystring'

import TextInput from 'components/common/TextInput'
import ActivityIndicator from 'components/common/ActivityIndicator'
import Button from 'components/common/Button'
import ReportWeather from 'components/Modal/ReportWeather'

import * as Styles from 'styles/pesquisa'
import { Box } from 'theme/GlobalStyles'

import localAPI from 'services/local'
import positionStack from 'services/positionStack'

import * as dbLocal from 'lib/dbLocal'

import { ResponseData, Location } from '_interfaces/weather'
import { PositionStack, PositionStackData } from '_interfaces/positionStack'

import { VISIT_RECENTS } from 'entities/db'

import { useMemo } from 'react'

function Search () {
  const [cities, setCities] = useState<PositionStackData[]>([])

  const [searchResult, setSearchResult] = useState<ResponseData>()
  const [recentSearchs, setRecentSearchs] = useState<PositionStackData[]>([])

  const [weatherData, setResultData] = useState<ResponseData>()
  const [search, setSearch] = useState('')


  const [isLoading, setIsLoading] = useState(false)
  const [isVisibleReport, setIsVisibleReport] = useState(false)

  const handleSearch = async (coordinates: string) => {
    try {
      setIsLoading(true)

      const query = queryString.stringify({
        query: coordinates
      })
  
      const { data } = await localAPI.get<ResponseData>(`/weather?${query}`) 
      setResultData(data)
      return data
    } catch (err) {

    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenResult = async (coordinates: string) => {
    await handleSearch(coordinates)

    
    const [city] = cities.filter(value => `${value.latitude},${value.longitude}` === coordinates)

    dbLocal.setItem(VISIT_RECENTS, {
      [coordinates]: city
    })
    getInitialRecentSearchs()
    setIsVisibleReport(true)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      setIsLoading(true)

      const query = queryString.stringify({
        query: search
      })
  
      const { data } = await localAPI.get<PositionStackData[]>(`/address?${query}`)
      setCities(data)
    
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCloseReport = () => {
    setIsVisibleReport(false)
  }

  const getInitialRecentSearchs = () => {
    const data = dbLocal.getItem<PositionStackData>(VISIT_RECENTS)
    if (!data) return    
    setRecentSearchs(data)
  }

  const handleDeleteAllRecentSearchs = () => {
    recentSearchs.forEach(value => {

      dbLocal.deleteItem(VISIT_RECENTS, `${value.latitude},${value.longitude}`)
    })
    getInitialRecentSearchs()
  }

  const renderResults = useMemo(() => cities.map(value => (
    <Styles.Item onClick={() => handleOpenResult(`${value.latitude},${value.longitude}`)} key={value.label}>{value.label}</Styles.Item>
  )), [cities])

  const renderRecentResults = useMemo(() => recentSearchs.map(value => (
    <Styles.Item onClick={() => handleOpenResult(`${value.latitude},${value.longitude}`)} key={`${value.latitude},${value.locality}`}>{value.label}</Styles.Item>
  )), [recentSearchs])

  useEffect(() => {
    getInitialRecentSearchs()
  }, [])

  return (
    <>
      <ActivityIndicator isVisible={isLoading} />
    {weatherData && (
        <ReportWeather 
          data={weatherData}
          isVisible={isVisibleReport}
          onClose={handleCloseReport}
        />
      )}
      <Styles.Main>
        <Styles.Header>
          <Link href="/">
            <Styles.LinkBackward aria-label="voltar">
                <MdArrowBack size={25} />
            </Styles.LinkBackward>
          </Link>
          <Styles.Title>Add cidade</Styles.Title>
        </Styles.Header>
        <Styles.Form onSubmit={handleSubmit}>
          <TextInput 
            left={<MdSearch size={20} />}
            onChange={event => setSearch(event.target.value)}
            value={search}
          />
        </Styles.Form>
        <Styles.ListContainer>
          <Styles.ListTitle>Resultados</Styles.ListTitle>
          <Styles.List>
            {renderResults}
          </Styles.List>
        </Styles.ListContainer>
          <Styles.ListContainer>
            <Box alignItems="center" justifyContent="space-between">
              <Styles.ListTitle>Resultados recentes</Styles.ListTitle>
              <Button onClick={handleDeleteAllRecentSearchs}>Apagar tudo</Button>
            </Box>
            <Styles.List>
              {renderRecentResults.length > 0 && renderRecentResults}
            </Styles.List>
          </Styles.ListContainer>
      </Styles.Main>
    </>
  )
}

export default Search
