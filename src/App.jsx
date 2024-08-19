import { BrowserRouter as Router, Route, Routes } from 
'react-router-dom';
import Home from './pages/Home'
import MovieToShow from './pages/MovieToShow';
function App2() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movietoshow/:id" element={<MovieToShow />} />
    </Routes>
  </Router>
  )
}
export default App2
