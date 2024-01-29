import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import GetSong from './song/GetAllSong'
import GetOneSong from './song/GetSong'
import Formulario from './song/AddSong'
import Form from './song/UpdateSong'
import Menu from './song/Menu';
import './index.css'

export default function App(){
  return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Menu></Menu>}>
    <Route path='/canciones' element={<GetSong></GetSong>}></Route>
    <Route path='/detalles' element={<GetOneSong></GetOneSong>}></Route>
    <Route path='/crear' element={<Formulario></Formulario>}></Route>
    <Route path='/edit/:id' element={<Formulario></Formulario>}></Route>
    <Route path='/canciones/:term' element={<GetSong></GetSong>}></Route>
  </Route>
  </Routes>
  </BrowserRouter>

  ) 
  
}
{/* <Route path='/edit:id' element={<GetSong></GetSong>}></Route>*/}
//<BrowserRouter></BrowserRouter>
//<Form id={"65644ab7ebc82977d440c1f8"}></Form>