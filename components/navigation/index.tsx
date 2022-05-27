import Link from "next/link"
import { useRouter } from "next/router"
import { NavigationHeader } from "./style"

export const Navigation = () => {
  const router = useRouter()

  return(
    <NavigationHeader>
    <nav>
      { router.asPath !== "/" && <Link href="/">Home</Link> }
      { router.asPath !== "/create-user" && <Link href="/create-user">Novo Usuário</Link> }
    </nav>

    </NavigationHeader>
  )
}