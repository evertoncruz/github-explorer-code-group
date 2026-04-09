import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import RepoDetailsPage from './pages/RepoDetailsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="/repo/:owner/:repo" element={<RepoDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}