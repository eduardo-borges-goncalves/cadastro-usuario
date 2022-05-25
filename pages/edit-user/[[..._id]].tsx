import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { GrayButton } from "../../components/button/GrayButton";
import { PrimaryBlueButton } from "../../components/button/PrimaryBlueButton";
import { FormUser } from "../../components/formUser";
import apiClient from "../../services/api-client";
import { User } from "../../types/user";
import { RegisterContainer } from "./style";

export default function RegisterUser () {
  const [ newUser, setNewUser ] = useState(false)
  const [ deleted, setDeleted ] = useState(false)
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

  const getUser = async () => {
    const response = await apiClient.get(`/users/${_id}`)

    response && setUser(response.data)
  }

  const createUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await apiClient.post("/users", {...user})
    response && setNewUser(true)
  } 

  useEffect(()=>{ _id && getUser()}, [_id])

  return (
    <RegisterContainer>
      {
        _id ?
          <h1>Editar Usuário</h1>
          :
          <h1>Cadastrar Usuário</h1>
      }
      <FormUser 
        createUser={createUser}
        setUser={setUser}
        user={user}
        _id={_id}
        setDeleted={setDeleted}
      />
      
      { newUser &&
        <div className="success">
          <span >Novo usuário cadastrado com sucesso!</span>  
        </div>
      }
      { deleted &&
        <div className="success">
          <span> Usuário deletado!</span>  
        </div>
      }
    </RegisterContainer>
  )
}