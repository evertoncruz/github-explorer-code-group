import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Layout } from "../components/Layout"

export default function HomePage() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/user/${username}`)
  }
  
  return (
    <Layout>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h3>Buscar usuário</h3>
            <form onSubmit={handleSubmit}>
              <input
                className="form-control mt-3"
                placeholder="ex: filipedeschamps"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button className="btn btn-primary mt-3 w-100">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}