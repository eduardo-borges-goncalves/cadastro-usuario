import Link from "next/link"

export const UserCard = () => {
  return(
    <Link href="/edit-user">
      <tr>
        <td>Eduardo</td>
        <td>27</td>
        <td>Javascript</td>
        <td>Front end</td>
        <td>Transição de carreira</td>
        <td>Não</td>
        <td>LinkedIn</td>
        <td>GitHub</td>
      </tr>
    </Link>
  )
}