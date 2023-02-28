import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Detailpage from './Pages/DetailPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/detailpage/:slug' element={<Detailpage />} />
      </Routes>
    </Router>
  )
}

export default App
