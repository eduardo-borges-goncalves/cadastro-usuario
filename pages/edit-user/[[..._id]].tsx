import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { FormUser } from "../../components/formUser";
import apiClient from "../../services/api-client";
import { User } from "../../types/user";
import { RegisterContainer } from "./style";

export default function RegisterUser() {
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

  const router = useRouter()
  const { _id } = router.query

  const getUser = async () => {
    const response = await apiClient.get(`/users/${_id}`)
    response && setUser(response.data)
  }

  const createUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await apiClient.post("/users", { ...user })
    console.log(response)
    response && setUpdateUser({ ...updateUser, new: true })
    setTimeout(()=> router.push(`/view-user/${response.data.user._id}`), 500)
  }

  useEffect(() => { _id && getUser() }, [_id])

  return (
    <RegisterContainer>
      { _id ?
          <h1>Editar Usuário</h1>
          :
          <h1>Cadastrar Usuário</h1>
      }
      <div className={ updateUser.new || updateUser.updated || updateUser.deleted ? "success" : "hidden" }>
        { updateUser.new && <span >Novo usuário cadastrado com sucesso!</span>}
        { updateUser.updated && <span >Usuário atualizado com sucesso!</span>}
        { updateUser.deleted && <span> Usuário deletado!</span>}
      </div>
      <FormUser
        createUser={createUser}
        setUser={setUser}
        user={user}
        _id={_id}
        updateUser={updateUser}
        setUpdateUser={setUpdateUser}
      />
    </RegisterContainer>
  )
}