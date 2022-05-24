import type { NextPage } from 'next'
import Link from 'next/link'
import { UsersList } from '../components/usersList'
import { HomeContainer, HomeSection } from './style'

// desenvolver uma barra de busca de usuários 

const Home: NextPage = () => {
  return (
    <HomeContainer >
      <HomeSection >
        <div>
          <input placeholder="Pesquisar Usuário" type="search" id='buscar-usuario' />
        </div>
        <Link href="/register-user">
          <button className="btnNewUser">Novo Usuário</button>
        </Link>
      </HomeSection>
      <UsersList/>
    </HomeContainer>
  )
}

export default Home
