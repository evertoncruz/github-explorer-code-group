import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { api } from "../services/api"
import { Layout } from "../components/Layout"

export default function UserPage () {
  const { username } = useParams()
  const navigate = useNavigate()
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
    <Layout>
      <button className="btn btn-outline-light mb-3" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 text-center">
            <img src={user.avatar_url} className="img-fluid rounded-circle" />
            <h4 className="mt-3">{user.name}</h4>
            <p>{user.bio}</p>
            <div className="d-flex justify-content-around">
              <span>👥 {user.followers}</span>
              <span>📦 {user.public_repos}</span>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="d-flex justify-content-between mb-3">
            <h4>Repositórios</h4>
            <div>
              <button className="btn btn-sm btn-outline-light me-2" onClick={() => handleOrderChange('desc')}>
                ↓ Stars
              </button>
              <button className="btn btn-sm btn-outline-light" onClick={() => handleOrderChange('asc')}>
                ↑ Stars
              </button>
            </div>
          </div>

          {repos.map(repo => (
            <div key={repo.id} className="card p-3 mb-2">
              <div className="d-flex justify-content-between">
                <Link to={`/repo/${repo.owner.login}/${repo.name}`}>
                  {repo.name}
                </Link>
                <span>⭐ {repo.stargazers_count}</span>
              </div>
              <small>{repo.description}</small>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}