import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Menu(){
  const [value, setValue] = useState();


  function handleChange(e){
    setValue(e.target.value)
  }

    return <>
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Animaland</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
           <Link to="/crear">Crear</Link> 
        </li>
        <li className="nav-item">
            <Link to="/canciones">Canciones</Link>
        </li>
        <li className="nav-item">
            <Link to="/register">Singin</Link>
        </li>
      </ul>
      
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
      <Link to={`/canciones/${value}`}><button className="btn btn-info">Search</button></Link> 
    </div>
  </nav>
    <div>
        <Outlet></Outlet>
    </div>  
    </>
}