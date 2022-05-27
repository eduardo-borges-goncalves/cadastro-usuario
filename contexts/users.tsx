import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { User } from "../types/user"
 
type UsersProps = {
  users: User[],
  createUser: (user:User) => void, 
  upUser: (user:User) => void, 
  delUser: (_id:string | string[] | undefined) => void, 
  setUsers: Dispatch<SetStateAction<User[]>>
}

export const UsersContext = createContext<UsersProps>({} as UsersProps)

type UsersProviderProps =  {
  children: ReactNode
}

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
  const [ users, setUsers ] = useState<User[]>([])

  const createUser = (user:User) => {
    users.push(user)
  }

  const upUser = (user:User) => {    
    setUsers( users.map(item => item._id === user._id?  user : item ))
  }

  const delUser = (_id:string | string[] | undefined) => {    
    setUsers( users.filter(item => item._id !== _id))
  }

  useEffect(() => {
    const getUsers = async () => {
      const response = await apiClient.get("/users")
      setUsers(response.data)
    }
    users.length <= 0 && getUsers()
  }, [])

  return ( 
    <UsersContext.Provider
      value={{
        users, 
        createUser, 
        upUser,
        delUser, 
        setUsers,
      }}
      >
      {children}
    </UsersContext.Provider>
  )
}

export const useUsers = () => {
  const context = useContext(UsersContext)

  if(!context) {
    throw new Error("Você somente pode usar este hook debaixo de um <UsersContextProvider")
  }
  return context
}