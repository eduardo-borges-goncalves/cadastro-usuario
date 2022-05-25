import Link from "next/link"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import apiClient from "../../services/api-client"
import { User } from "../../types/user"
import { DeleteButton } from "../button/DeleteButton"
import { GrayButton } from "../button/GrayButton"
import { PrimaryBlueButton } from "../button/PrimaryBlueButton"
import { FormWrapper } from "./style"

type FormUserProps = {
  createUser: (e: FormEvent<HTMLFormElement>) => Promise<void>,
  user: User,
  setUser: Dispatch<SetStateAction<User>>,
  _id?: string | string[], 
  setDeleted: Dispatch<SetStateAction<boolean>>
}

export const FormUser = ({
  createUser,
  user,
  setUser,
  _id, 
  setDeleted, 
}: FormUserProps) => {

  const updateUser = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await apiClient.patch(`/users/${_id}`, {...user})
  }

  const deleteUser = async () => {
    const response = await apiClient.delete(`/users/${_id}`);
    response.status && setDeleted(true)
  }

  return (
    <FormWrapper action="" onSubmit={_id ? (e) => updateUser(e) :(e) => createUser(e) }>
      <fieldset className="f-1">
        <input
          value={_id && user.name}
          className="i-1"
          required
          minLength={3}
          type="text"
          placeholder="Nome"
          onChange={(e) => setUser({ ...user, name: e.target.value })} />
        <input
          value={_id && user.age }
          className="i-2"
          required
          type="text"
          placeholder="Idade"
          onChange={(e) => setUser({ ...user, age: e.target.value })} />
      </fieldset>
      <fieldset className="f-2">
        <input
          value={_id && user.language}
          required
          minLength={3}
          type="text"
          placeholder="Linguagem"
          onChange={(e) => setUser({ ...user, language: e.target.value })} />
        <input
          value={_id && user.operationArea}
          required
          minLength={3}
          type="text"
          placeholder="Área de atuação "
          onChange={(e) => setUser({ ...user, operationArea: e.target.value })} />
        <input
          value={_id && user.professionalSituation}
          required
          minLength={3}
          type="text"
          placeholder="Situação Profissional"
          onChange={(e) => setUser({ ...user, professionalSituation: e.target.value })} />
      </fieldset>
      <fieldset className="f-3">
        <label htmlFor="experience">Possui experiência com desenvolvimento?</label>
        <div>
          {
            user.experience ?
              <>
                <span>Sim</span>
                <input
                  checked
                  required
                  type="radio"
                  name="experience"
                  id=""
                  onChange={() => setUser({ ...user, experience: true })} />
                <span>Não</span>
                <input
                  required
                  type="radio"
                  name="experience"
                  id=""
                  onChange={() => setUser({ ...user, experience: false })} />
              </>
              :
              <>
              <span>Sim</span>
              <input
              required
              type="radio"
              name="experience"
              id=""
              onChange={() => setUser({ ...user, experience: true })} />
              <span>Não</span>
              <input
                checked
                required
                type="radio"
                name="experience"
                id=""
                onChange={() => setUser({ ...user, experience: false })} />
              </>
          }
        </div>
      </fieldset>
      <fieldset className="f-4">
        <input
          value={_id && user.linkedin}
          required
          minLength={3}
          type="text"
          placeholder="LinkedIn"
          onChange={(e) => setUser({ ...user, linkedin: e.target.value })} />
        <input
          value={_id && user.github}
          required
          minLength={3}
          type="text"
          placeholder="Github"
          onChange={(e) => setUser({ ...user, github: e.target.value })} />
      </fieldset>
      <div className="buttons">
        <Link href="/">
          <a> <GrayButton> Cancelar </GrayButton> </a>
        </Link>
        {_id && 
            <DeleteButton type="button" onClick={() => deleteUser()}>
              Excluir
            </DeleteButton>
        }
        <PrimaryBlueButton type="submit">
          {_id ? "Atualizar" : "Cadastrar"}
        </PrimaryBlueButton>
      </div>
    </FormWrapper>
  )
}