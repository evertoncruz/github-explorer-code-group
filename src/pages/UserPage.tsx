import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../services/api"

export default function UserPage () {
  const { username } = useParams()
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const userRes = await api.get(`/users/${username}`)
        const repoRes = await api.get(`/users/${username}/repos`)

        setUser(userRes.data)
        setRepos(repoRes.data)
      } catch(error) {
        console.error("Erro ao buscar o usuário", error)
      } finally {
        setLoading(false)
      }

    }
    fetchData()
  }, [username])


  if (loading) return <p>Carregando perfil...</p>;
  if (!user) return <p>Usuário não encontrado.</p>;

  return(
    <div>
      <h1>GitHub Explorer Code Group User Page</h1>

      <img src={user.avatar_url} alt="Avatar do usuário no github" />
    </div>
  )
}