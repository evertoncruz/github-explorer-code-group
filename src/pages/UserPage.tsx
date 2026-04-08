import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { api } from "../services/api"

export default function UserPage () {
    const { username } = useParams()
    
    useEffect(() => {
      async function fetchData() {
        const userRes = await api.get(`/users/${username}`)
        const repoRes = await api.get(`/users/${username}/repos`)

        console.log(userRes, repoRes);
      }
      fetchData()
    }, [username])

  return(
    <div>
      <h1>GitHub Explorer Code Group User Page</h1>
    </div>
  )
}