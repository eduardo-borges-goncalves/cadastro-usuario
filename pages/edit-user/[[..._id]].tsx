import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { FormUser } from "../../components/formUser";
import { useUsers } from "../../contexts/users";
import apiClient from "../../services/api-client";
import { User } from "../../types/user";
import { RegisterContainer } from "../../styles/pages-styles/edit-user-style";

export default function RegisterUser() {
  const [erro, setErro] = useState("")
  const [updateUser, setUpdateUser] = useState({
    new: false,
    deleted: false,
    updated: false,
  })
  const [user, setUser] = useState<User>({
    name: "",
    age: "",
    language: "",
    operationArea: "",
    professionalSituation: "",
    experience: false,
    linkedin: '',
    github: ""
  })
  const { users, createUser } = useUsers()

  const router = useRouter()
  const {_id} = router.query

  const getUser = () => {
    const user = users.filter(user =>user._id === _id[0]);
    setUser(user[0])
  }

  const createUserAPI = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await apiClient.post("/users", { ...user })
  
    if (response.status === 201){
      createUser(response.data.user)
      setUpdateUser({ ...updateUser, new: true })
      setTimeout(()=> router.push(`/view-user/${response.data.user._id}`), 500)
    }
  }

  useEffect(() => { _id && getUser() }, [_id])

  return (
    <RegisterContainer>
      { _id ?
          <h1>Editar Usuário</h1>
          :
          <h1>Cadastrar Usuário</h1>
      }
      { 
        erro ?
          <div className="erro">
            <span>{erro}</span>
          </div>
          :
          <div className={ updateUser.new || updateUser.updated || updateUser.deleted ? "success" : "hidden" }>
            { updateUser.new && <span >Novo usuário cadastrado com sucesso!</span>}
            { updateUser.updated && <span >Usuário atualizado com sucesso!</span>}
            { updateUser.deleted && <span> Usuário deletado!</span>}
          </div>
      }
      <FormUser
        createUserAPI={createUserAPI}
        setUser={setUser}
        user={user}
        _id={_id}
        updateUser={updateUser}
        setUpdateUser={setUpdateUser}
        setErro={setErro}
      />
    </RegisterContainer>
  )
}