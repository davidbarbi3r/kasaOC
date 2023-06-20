import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
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
          <Route path='404' element={<NoMatch/>}/>
          <Route path="*" element={<Navigate to='/404' />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
