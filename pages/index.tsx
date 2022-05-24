import type { NextPage } from 'next'
import Link from 'next/link'
import { UsersList } from '../components/usersList'
import styles from '../styles/Home.module.css'

// desenvolver uma barra de busca de usuários 

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.searchUserSection} >
        <div>
          <label htmlFor="buscar-usuario">Buscar Usuário </label>
          <input type="search" id='buscar-usuario' />
        </div>
        <Link href="/register-user">
          <button className={styles.btnNewUser}>Novo Usuário</button>
        </Link>
      </section>
      <UsersList/>
    </div>
  )
}

export default Home
