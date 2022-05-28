import Link from "next/link"
import { User } from "../../types/user"

export const UserCard = ({
  name, 
  age, 
  language, 
  operationArea, 
  professionalSituation, 
  experience, 
  linkedin, 
  github, 
  _id
}: User ) => {

  return(
    <Link href={`/edit-user/${_id}`}>
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{language} </td>
        <td>{operationArea} </td>
        <td>{professionalSituation}</td>
        <td>{experience? "Possui": "Não possui"}</td>
        <td>{linkedin}</td>
        <td>{github}</td>
      </tr>
    </Link>
  )
}