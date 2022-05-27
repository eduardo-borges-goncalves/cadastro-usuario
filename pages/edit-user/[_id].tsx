import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { FormUser } from "../../components/FormUser";
import { useUsers } from "../../contexts/users";
import apiClient from "../../services/api-client";
import { User } from "../../types/user";
import { RegisterContainer } from "../../styles/pages-styles/edit-user-style";

export default function EditUser() {
  const [erro, setErro] = useState("")
  const [updateUser, setUpdateUser] = useState({
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
    const user = users.filter(user =>user._id === _id);
    setUser(user[0])
  }

  useEffect(() => { _id && getUser() }, [_id])

  return (
    <RegisterContainer>
      <h1>Editar Usuário</h1>
      { 
        erro ?
          <div className="erro">
            <span>{erro}</span>
          </div>
          :
          <div className={ updateUser.updated || updateUser.deleted ? "success" : "hidden" }>
            { updateUser.updated && <span >Usuário atualizado com sucesso!</span>}
            { updateUser.deleted && <span> Usuário deletado!</span>}
          </div>
      }
      <FormUser
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