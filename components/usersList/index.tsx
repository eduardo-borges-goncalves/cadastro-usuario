import { UserCard } from "../userCard"

export const UsersList = () => {
  return(
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Linguagem</th>
          <th>Área de atuação</th>
          <th>Situação Profissional</th>
          <th>Tem experiência?</th>
          <th>LinkedIn</th>
          <th>GitHub</th>
        </tr>
      </thead>
      <tbody>
        <UserCard/>
      </tbody>
    </table>
  )
}