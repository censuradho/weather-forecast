import { FormEvent, useEffect, useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import Link from 'next/link'
import { MdSearch } from 'react-icons/md'
import queryString from 'querystring'

import TextInput from 'components/common/TextInput'
import ActivityIndicator from 'components/common/ActivityIndicator'
import ReportWeather from 'components/Modal/ReportWeather'

import * as Styles from 'styles/pesquisa'

import localAPI from 'services/local'

import * as dbLocal from 'lib/dbLocal'

import { ResponseData, Location } from '_interfaces/weather'
import { useMemo } from 'react'



function Search () {
  const [searchResult, setSearchResult] = useState<ResponseData>()
  const [resultData, setResultData] = useState<ResponseData>()

  const [search, setSearch] = useState('')

  const [recentSearchs, setRecentSearchs] = useState<Location[]>([])

  const [isLoading, setIsLoading] = useState(false)
  const [isVisibleReport, setIsVisibleReport] = useState(false)

  const handleSearch = async (entry: string) => {
    try {
      setIsLoading(true)

      const query = queryString.stringify({
        city: entry
      })
  
      const { data } = await localAPI.get<ResponseData>(`/weather?${query}`)
  
      setResultData(data)
      return data
    } catch (err) {

    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenResult = async (cityName: string) => {
    await handleSearch(cityName)
    setIsVisibleReport(true)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const data = await handleSearch(search)

    if (!data) return

    setSearchResult(data)

    getInitialRecentSearchs()
    dbLocal.setItem('recents-searchs', {
      [data.location.name]: data.location
    })
  }

  const handleCloseReport = () => {
    setIsVisibleReport(false)
  }

  const getInitialRecentSearchs = () => {
    const data = dbLocal.getItem<Location>('recents-searchs')
    if (!data) return    
    setRecentSearchs(data)
  }

  const renderRecentResults = useMemo(() => recentSearchs.map(value => (
    <Styles.Item onClick={() => handleOpenResult(value.name)} key={value.name}>{value.name}</Styles.Item>
  )), [recentSearchs])

  useEffect(() => {
    getInitialRecentSearchs()
  }, [])

  return (
    <>
      <ActivityIndicator isVisible={isLoading} />
    {resultData && (
        <ReportWeather 
          data={resultData}
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
            {searchResult && <Styles.Item onClick={() => setIsVisibleReport(true)}>{searchResult.location.name}</Styles.Item>}
          </Styles.List>
        </Styles.ListContainer>
        {renderRecentResults.length > 0 && (
          <Styles.ListContainer>
            <Styles.ListTitle>Resultados recentes</Styles.ListTitle>
            <Styles.List>
              {renderRecentResults}
            </Styles.List>
          </Styles.ListContainer>
        )}
      </Styles.Main>
    </>
  )
}

export default Search
