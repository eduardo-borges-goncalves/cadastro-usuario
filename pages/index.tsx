import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PrimaryBlueButton } from '../components/button/PrimaryBlueButton'
import { UsersList } from '../components/usersList'
import { useUsers } from '../contexts/users'
import apiClient from '../services/api-client'
import { User } from '../types/user'
import { HomeContainer, HomeSection } from './style'

// desenvolver uma barra de busca de usuários 

const Home: NextPage = () => {
  // const [ users, setUsers ] = useState <User[]> ([])

  const { users } = useUsers()

  // useEffect(()=> {
  //   const getUsers = async () => {
  //     const response = await apiClient.get("/users")

  //     console.log("---", response)

  //     response && setUsers(response.data)
  //   }
  //   getUsers()
  // }, [])


  return (
    <HomeContainer >
      <h1> Usuários </h1>
      <HomeSection >
        <div>
          <input placeholder="Pesquisar Usuário" type="search" id='buscar-usuario' />
        </div>
          <Link href="/edit-user">
            <PrimaryBlueButton> Novo Usuário </PrimaryBlueButton>
          </Link>
      </HomeSection>
      <UsersList users={users} />
    </HomeContainer>
  )
}

export default Home
