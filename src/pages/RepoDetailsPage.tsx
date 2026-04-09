import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../services/api'

export default function RepoDetailsPage() {
  const { owner, repo } = useParams()
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
    <div className="container mt-4">
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <p>⭐ {data.stargazers_count}</p>
      <a href={data.html_url} target="_blank" className="btn btn-primary">
        Ver no GitHub
      </a>
    </div>
  )
}