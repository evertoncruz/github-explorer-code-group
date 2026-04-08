import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function UserPage () {
    const { username } = useParams()
    
    useEffect( () => {
      alert(username)
    }, [username] )
  return(
    <div>
      <h1>GitHub Explorer Code Group User Page</h1>
    </div>
  )
}