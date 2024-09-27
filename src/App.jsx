import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Constructions1 } from './components/Constructions1'
import { Constructions2 } from './components/Constructions2'
import { Constructions3 } from './components/Constructions3'
import { Constructions4 } from './components/Constructions4'

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/Construction1' element={<Constructions1 className='main-img-container'/>} />
            <Route path='/Construction2' element={<Constructions2 className='main-img-container'/>} />
            <Route path='/Construction3' element={<Constructions3 className='main-img-container'/>} />
            <Route path='/Construction4' element={<Constructions4 className='main-img-container'/>} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
