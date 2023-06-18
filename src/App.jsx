import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import NoMatch from './Pages/NoMatch'
import Accomodation from './Pages/Accomodation'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/:id' element={<Accomodation/>}/>
          <Route path='a-propos' element={<About/>}/>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
