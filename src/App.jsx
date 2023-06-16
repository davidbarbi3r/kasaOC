import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import About from './About/About'
import NoMatch from './NoMatch/NoMatch'
import Accomodation from './Accomodation/Accomodation'

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
