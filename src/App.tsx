import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<main>Code Group Challenger</main>} />
        <Route path="/test" element={<main>TESTE</main>} />
      </Routes>
    </BrowserRouter>
  )
}