import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/user/${username}`)
  }
  
  return (
    <div className="container mt-5">
      <h1>GitHub Explorer</h1>
      <form onSubmit={handleSubmit} className="mt-3">
        <input
          className="form-control"
          placeholder="Digite o username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="btn btn-primary mt-3">Buscar</button>
      </form>
    </div>
  )
}