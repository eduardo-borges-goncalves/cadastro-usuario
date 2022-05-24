import Link from "next/link";
import { useState } from "react";
import { GrayButton } from "../../components/button/GrayButton";
import { PrimaryBlueButton } from "../../components/button/PrimaryBlueButton";
import apiClient from "../../services/api-client";
import { RegisterContainer } from "./style";

type User = {
  name: string, 
  age: string,
  language: string,
  operationArea: string, 
  professionalSituation: string, 
  experience: boolean, 
  linkedin: string, 
  github: string
}

export default function RegisterUser () {
  const [ newUser, setNewUser ] = useState(false)
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

  const postUser = async () => {
    const response = await apiClient.post("/users", {...user})
    response && setNewUser(true)
  } 

  return (
    <RegisterContainer>
      <h1>Cadastrar Usuário</h1>
      <form action="" >
        <fieldset className="f-1">
          <input 
            className="i-1" 
            type="text" 
            placeholder="Nome"
            onChange={(e) => setUser({...user, name: e.target.value})} />
          <input 
            className="i-2" 
            type="text" 
            placeholder="Idade" 
            onChange={(e) => setUser({...user, age: e.target.value})} />
        </fieldset>
        <fieldset className="f-2">
          <input 
            type="text" 
            placeholder="Linguagem" 
            onChange={(e) => setUser({...user, language: e.target.value})}/>
          <input 
            type="text" 
            placeholder="Área de atuação " 
            onChange={(e) => setUser({...user, operationArea: e.target.value})} />
          <input 
            type="text" 
            placeholder="Situação Profissional" 
            onChange={(e) => setUser({...user, professionalSituation: e.target.value})}/>
        </fieldset>
        <fieldset className="f-3"> 
          <label htmlFor="experience">Possui experiência com desenvolvimento?</label>
          <div>
            <span>Sim</span>
            <input 
              type="radio" 
              name="experience" 
              id="" 
              onChange={() => setUser({...user, experience: true})} />
            <span>Não</span>
            <input 
              type="radio" 
              name="experience" 
              id="" 
              onChange={() => setUser({...user, experience: false})}/>
          </div>
        </fieldset>
        <fieldset className="f-4">
          <input 
            type="text" 
            placeholder="LinkedIn" 
            onChange={(e) => setUser({...user, linkedin: e.target.value})}/>
          <input 
            type="text" 
            placeholder="Github" 
            onChange={(e) => setUser({...user, github: e.target.value})}/>
        </fieldset>
      </form>
      <div className="buttons">
        <Link href="/"> 
          <a> <GrayButton> Cancelar </GrayButton> </a>
        </Link>
        <PrimaryBlueButton 
          onClick={postUser}
          type="submit">Cadastrar</PrimaryBlueButton>
      </div>
      { newUser &&
        <div className="success">
          <span >Novo usuário cadastrado com sucesso!</span>  
        </div>
      }
    </RegisterContainer>
  )
}