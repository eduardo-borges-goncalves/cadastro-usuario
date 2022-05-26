import Link from "next/link"
import { useRouter } from "next/router"
import { Dispatch, FormEvent, SetStateAction } from "react"
import { useUsers } from "../../contexts/users"
import apiClient from "../../services/api-client"
import { User } from "../../types/user"
import { DeleteButton } from "../button/DeleteButton"
import { GrayButton } from "../button/GrayButton"
import { PrimaryBlueButton } from "../button/PrimaryBlueButton"
import { FormWrapper } from "./style"

type FormUserProps = {
  createUserAPI: (e: FormEvent<HTMLFormElement>) => Promise<void>,
  user: User,
  setUser: Dispatch<SetStateAction<User>>,
  _id?: string | string[], 
  setUpdateUser: Dispatch<SetStateAction<UpdateUser>>, 
  updateUser: UpdateUser, 
  setErro: Dispatch<SetStateAction<string>>
}

type UpdateUser = {
  new: boolean,
  deleted: boolean,
  updated: boolean,
}

export const FormUser = ({
  createUserAPI,
  user,
  setUser,
  _id, 
  setUpdateUser, 
  updateUser, 
  setErro
}: FormUserProps) => {

  const disabledBtn  = updateUser.deleted || updateUser.new || updateUser.updated 
  const { upUser, delUser } = useUsers()

  const router = useRouter()

  const updateUserFunc = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErro("")
    try {
      await apiClient.patch(`/users/${_id}`, {...user})
      
      upUser(user)
      setUpdateUser({...updateUser, updated: true})
      setTimeout(()=> router.push(`/view-user/${_id}`), 1000)
    } catch { setErro("Erro ao tentar atualizar usuário")}
  }

  const deleteUser = async () => {
    setErro("")
    try {
      await apiClient.delete(`/users/${_id}`);

      delUser(_id[0])
      setUpdateUser({...updateUser, deleted: true})
      setTimeout(()=> router.push(`/`), 1000)
    } catch { setErro("Erro ao tentar atualizar usuário") }
  }

  return (
    <FormWrapper action="" onSubmit={_id ? (e) => updateUserFunc(e) :(e) => createUserAPI(e) }>
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
          <span>Sim</span>
          <input
            checked={user.experience}
            required
            type="radio"
            name="experience"
            id=""
            onChange={() => setUser({ ...user, experience: true })} />
          <span>Não</span>
          <input
            checked={!user.experience}
            required
            type="radio"
            name="experience"
            id=""
            onChange={() => setUser({ ...user, experience: false })} />
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
          <GrayButton disabled={disabledBtn}> Cancelar </GrayButton> 
        </Link>
        {_id && 
            <DeleteButton 
              disabled={disabledBtn} 
              type="button" 
              onClick={() => deleteUser()}>
              Excluir
            </DeleteButton>
        }
        <PrimaryBlueButton 
          disabled={disabledBtn} 
          type="submit">
          {_id ? "Atualizar" : "Cadastrar"}
        </PrimaryBlueButton>
      </div>
    </FormWrapper>
  )
}