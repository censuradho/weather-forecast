import { FormEvent, useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import Link from 'next/link'
import { MdSearch } from 'react-icons/md'
import queryString from 'querystring'

import TextInput from 'components/common/TextInput'

import * as Styles from 'styles/pesquisa'

import localAPI from 'services/local'

import { ResponseData } from '_interfaces/weather'

function Search () {
  const [cities, setCities] = useState([])
  const [search, setSearch] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const query = queryString.stringify({
      city: search
    })

    const { data } = await localAPI.get(`/weather?${query}`)

    setCities(data)
  }


  return (
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
          <Styles.Item>Porto Alegre</Styles.Item>
        </Styles.List>
      </Styles.ListContainer>
    </Styles.Main>
  )
}

export default Search
