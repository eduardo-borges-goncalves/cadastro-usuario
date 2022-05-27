import type { NextPage } from 'next'
import Link from 'next/link'
import { PrimaryBlueButton } from '../components/button/PrimaryBlueButton'
import { UsersList } from '../components/usersList'
import { useUsers } from '../contexts/users'
import { HomeContainer, HomeSection } from '../styles/pages-styles/home-style'


const Home: NextPage = () => {
  const { users } = useUsers()

  return (
    <HomeContainer >
      <h1> Usuários </h1>
      <HomeSection >
          <Link href="/edit-user">
            <a>
            <PrimaryBlueButton> Novo Usuário </PrimaryBlueButton>
            </a>
          </Link>
      </HomeSection>
      <UsersList users={users} />
    </HomeContainer>
  )
}

export default Home
