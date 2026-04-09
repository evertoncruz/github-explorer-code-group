import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../services/api'
import { Layout } from '../components/Layout'

export default function RepoDetailsPage() {
  const { owner, repo } = useParams()
  const navigate  = useNavigate()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepo() {
      try {
        setLoading(true)
        const res = await api.get(`/repos/${owner}/${repo}`)
        setData(res.data)
      } catch(error) {
        console.log('Erro ao carregar repositório', error)
      } finally {
        setLoading(false)
      }
    }
    fetchRepo()
  }, [owner, repo])

  if (loading) return <p>Carregando repositório...</p>
  if (!data) return <p>Repositório não encontrado.</p>

  return (
    <Layout>
      <button className="btn btn-outline-light mb-3" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className="card p-4">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <div className="d-flex justify-content-between">
          <span>⭐ {data.stargazers_count}</span>
          <span>🍴 {data.forks_count}</span>
        </div>
        <a href={data.html_url} target="_blank" className="btn btn-primary mt-3">
          Ver no GitHub
        </a>
      </div>
    </Layout>
  )
}