import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import About from './About/About'
import NoMatch from './NoMatch/NoMatch'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='a-propos' element={<About/>}/>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
