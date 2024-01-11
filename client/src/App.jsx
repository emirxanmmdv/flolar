import './App.scss'
import { BrowserRouter , Routes, Route } from "react-router-dom"
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import AddPage from './Pages/AddPage'
function App() {




  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<AddPage/>}/>


          

        </Route>

      </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App