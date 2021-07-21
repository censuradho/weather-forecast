import { memo } from 'react'

import Avatar from 'components/Avatar'

import * as Styles from './styles'

function Header () {
  const username = 'Censuradho'

  return (
    <Styles.Header>
      <Styles.Greeting>
        <div>
          <span>Olá</span><br />
          <strong>{username}</strong>
        </div>
        <Avatar 
          size={4}
          url="https://github.com/censuradho.png"
          username={username}
        />
      </Styles.Greeting>
    </Styles.Header>
  )
}

export default memo(Header)
