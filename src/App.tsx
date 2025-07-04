
import Layout from './components/layout/layout'
import {  Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      {/* <Route index element={<Home />} />
      <Route path="search" element={<SearchResults />} />
      <Route path="plan" element={<JourneyResults />} /> */}
    </Route>
  </Routes>
  )
}

export default App
