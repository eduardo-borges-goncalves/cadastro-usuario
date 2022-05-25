import { User } from "../../types/user"
import { UserCard } from "../userCard"

type UsersListProps ={
  users: User[]
}

export const UsersList = ({users}: UsersListProps) => {
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
        {
          users.map(user => (
            <UserCard key={user._id} {...user} />
          ))
        }
      </tbody>
    </table>
  )
}