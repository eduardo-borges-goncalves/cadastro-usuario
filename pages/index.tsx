import type { NextPage } from 'next'
import Link from 'next/link'
import { PrimaryBlueButton } from '../components/button/PrimaryBlueButton'
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
        <PrimaryBlueButton >
             Novo Usuário 
        </PrimaryBlueButton>
             </Link>
      </HomeSection>
      <UsersList/>
    </HomeContainer>
  )
}

export default Home
