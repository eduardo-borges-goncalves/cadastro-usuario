import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import apiClient from "../../services/api-client"
import { User } from "../../types/user"
import { ViewUserContainer } from "../../styles/pages-styles/view-user-style"

export default function ViewUser () {
  const [ user, setUser ] = useState <User>({
    name: "", 
    age: "",
    language: "",
    operationArea: "", 
    professionalSituation: "", 
    experience: false, 
    linkedin: '', 
    github: ""
  })

  const router = useRouter()
  const {_id} = router.query 

  console.log(_id)

  const getUser = async () => {
    const response = await apiClient.get(`/users/${_id}`)

    response && setUser(response.data)
  }

  useEffect(() => { _id && getUser()}, [])

  return (
    <ViewUserContainer>
      <h1>Usuário</h1>
      <div>
        <span className="userKey">Nome: </span><span>{user.name}</span>
      </div>
      <div>
        <span className="userKey">Idade: </span><span>{user.age}</span>
      </div>
      <div>
        <span className="userKey">Linguagem: </span><span>{user.language}</span>
      </div>
      <div>
        <span className="userKey">Área de Operação: </span><span>{user.operationArea}</span>
      </div>
      <div>
        <span className="userKey">Experiência: </span>
        <span>{user.experience ? "Possui experiência" : "Não possui experiência"}</span>
      </div>
      <div>
        <span className="userKey">Linkedin: </span><span>{user.linkedin}</span>
      </div>
      <div>
        <span className="userKey">GitHub: </span><span>{user.github}</span>
      </div>     
    </ViewUserContainer>
  )
}