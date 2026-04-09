import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { api } from "../services/api"

export default function UserPage () {
  const { username } = useParams()
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState([])
  const [order, setOrder] = useState('desc')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const userRes = await api.get(`/users/${username}`)
        const repoRes = await api.get(`/users/${username}/repos`)

        setUser(userRes.data)
        setRepos(sortRepos(repoRes.data, order))
      } catch(error) {
        console.error("Erro ao buscar o usuário", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [username])

  const sortRepos = (repos, order) => {
    return [...repos].sort((a, b) =>
      order === 'desc'
        ? b.stargazers_count - a.stargazers_count
        : a.stargazers_count - b.stargazers_count
    )
  }

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder)
    setRepos(sortRepos(repos, newOrder))
  }

  if (loading) return <p>Carregando perfil...</p>;
  if (!user) return <p>Usuário não encontrado.</p>;

  return(
    <div className="container mt-4">
      <div className="d-flex align-items-center">
        <img src={user.avatar_url} width="100" />
        <div className="ms-3">
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <p>Seguidores: {user.followers}</p>
        </div>
      </div>

      <div className="mt-4">
        <button className="btn btn-secondary me-2" onClick={() => handleOrderChange('desc')}>
          Mais estrelas
        </button>
        <button className="btn btn-secondary" onClick={() => handleOrderChange('asc')}>
          Menos estrelas
        </button>
      </div>

      <ul className="list-group mt-3">
        {repos.map(repo => (
          <li key={repo.id} className="list-group-item">
            <Link to={`/repo/${repo.owner.login}/${repo.name}`}>
              {repo.name}
            </Link>
            <span className="badge bg-primary ms-2">
              ⭐ {repo.stargazers_count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}