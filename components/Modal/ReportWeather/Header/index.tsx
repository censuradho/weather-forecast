import { MdArrowBack, MdSearch, MdBookmarkBorder, MdBookmark } from 'react-icons/md'
import { useRef, useEffect, useState } from 'react'

import * as Styles from './styles'
import { Box } from 'theme/GlobalStyles'

import { setItem, deleteItem, getItem } from 'lib/dbLocal'

import { CITIES_FAVORITE, CitiesFavorite } from 'entities/db'


interface HeaderProps {
  onBack?: () => void,
  favoriteData: CitiesFavorite
}

function Header (props: HeaderProps) {
  const refElement = useRef<HTMLElement>(null)

  const [isFavorite, setIsFavorite] = useState(false)
  
  const [isScrolled, setIsScrolled] = useState(false)

  const handleFavorite = () => {
    if (isFavorite) {

      deleteItem(CITIES_FAVORITE, props.favoriteData.city)

      setIsFavorite(false)
      return
    }

    setItem(CITIES_FAVORITE, {
      [props.favoriteData.city]: props.favoriteData
    })
    setIsFavorite(true)

  }

  const getIsFavorite = () => {
    const storageData = getItem<CitiesFavorite>(CITIES_FAVORITE)

    const isFavorite = !!storageData.filter(data => data.city === props.favoriteData.city)[0]

    if (!isFavorite) return

    setIsFavorite(true)
    
  }

  useEffect(() => {
    getIsFavorite()
  }, [])

  useEffect(() => {
    if (!refElement.current) return
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= 1) {
        setIsScrolled(false)
        return
      }

      setIsScrolled(true)
    }, {
      threshold: [1]
    })

    observer.observe(refElement.current)
  }, [refElement])

  return (
    <Styles.Header ref={refElement} isScrolled={isScrolled}>
      <button onClick={props.onBack}>
        <MdArrowBack size={25} />
      </button>
      <Styles.Title>Cidades - Porto Alegre</Styles.Title>
      <Box 
        alignItems="center"
        gap={1}
      >
        <button>
          <MdSearch size={25} />
        </button>
        <button onClick={handleFavorite}>
          {!isFavorite ? <MdBookmarkBorder size={25} /> : <MdBookmark size={25} />}
        </button>
      </Box>
    </Styles.Header>
  )
}

export default Header