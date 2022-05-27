import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { FormUser, UpdateUser } from "../../components/formUser";
import { useUsers } from "../../contexts/users";
import apiClient from "../../services/api-client";
import { User } from "../../types/user";
import { RegisterContainer } from "../../styles/pages-styles/edit-user-style";

export default function CreateUser() {
  const [erro, setErro] = useState("")
  const [updateUser, setUpdateUser] = useState<UpdateUser>({
    new: false 
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
  const {createUser} = useUsers()

  const router = useRouter()

  const createUserAPI = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await apiClient.post("/users", { ...user })
  
    if (response.status === 201){
      createUser(response.data.user)
      setUpdateUser({ ...updateUser, new: true })
      setTimeout(()=> router.push(`/view-user/${response.data.user._id}`), 500)
    }
  }

  return (
    <RegisterContainer>
      <h1>Cadastrar Usuário</h1>
      { 
        erro ?
          <div className="erro">
            <span>{erro}</span>
          </div>
          :
          <div className={ updateUser.new ? "success" : "hidden" }>
            { updateUser.new && <span >Novo usuário cadastrado com sucesso!</span>}
          </div>
      }
      <FormUser
        createUserAPI={createUserAPI}
        setUser={setUser}
        user={user}
        updateUser={updateUser}
        setUpdateUser={setUpdateUser}
        setErro={setErro}
      />
    </RegisterContainer>
  )
}