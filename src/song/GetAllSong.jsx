import React, { useState, useEffect } from 'react';
import { getSongs, deleteSong, getSongSearch } from '../services/apiService';
import { Link, useParams } from 'react-router-dom';

export default function SongList() {
const {term} = useParams()
const [songs, setSong] = useState([]);


useEffect(()=>{
  async function getAllSong(){
      const song = await getSongs()
      setSong(song.data)
    }
  async function getSongSearch(){
    const songSearch = await getSongSearch()
    setSong(songSearch.data)
  }
  if(term){
    getSongSearch()
  }else{
    getAllSong()

  }
}, [])


async function eliminar(id){
  const song = await deleteSong(id)
  const newsSong = await getSongs()
  setSong(newsSong.data)
  
}


const listSong = songs.map((song)=>{
  return <>
  <li className='listaLi' key={song._id}>

 
 <div className="card" style={{width: 18 +'rem' }}>
  <div className="card-body">
    <h5 className="card-title">Nombre de la cancion: {song.name}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary"> Duracion de la cancion: {song.duration}</h6>
    <button onClick={ () => eliminar(song._id)} className='btn btn-danger'>Eliminar</button>
    <Link to={`/edit/${song._id}`}><button  className='btn btn-warning'>Editar</button></Link>
    
  </div>
</div> 
 </li>
</>
  
})

return (
  <div key={1}>
    <h1>Lista de canciones</h1>
    <ul className='lista'>{listSong}</ul>
  </div>
);
}

