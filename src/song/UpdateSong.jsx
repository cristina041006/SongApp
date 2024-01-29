import React, { useState, useEffect } from 'react';
import {updateSong , getSong} from '../services/apiService';

function SongUpdate({id, data}) {
const [songUpdate, setSongUpdate] = useState(null);
const [songRecive, setSong] = useState(null);

useEffect(()=>{
    async function updateOneSong(){
        const song = await updateSong(id, data)
        console.log(song)
    }
    updateOneSong()
}, [])

useEffect(()=>{
  async function getOneSong(){
    const song = await getSong(id);
    setSong(song.data)
  }
})

return (
  <form>
    <input type='text' value={songRecive.name}></input>
    <input type='text' value={songRecive.duration}></input>
  </form>
);
}


export default function Formulario({id}){
  const [songRecive, setSong] = useState(null);
  const [songValor, setValor] =useState({
    name:"",
    duration:""
  })
  useEffect(()=>{
    async function getOneSong(){
      const song = await getSong(id);
      setSong(song.data)
    }
    getOneSong();
  },[])


  if(songRecive!=null){
    return (
      <>
      <h1>Editar cancion</h1>
      <form>
        <label >Nombre de la cancion: </label>
        <input type='text' value={songRecive.name}></input>
        <br>
        </br>
        <br></br>
        <label >Duracion de la cancion: </label>
        <input type='text' value={songRecive.duration}></input>
        <br></br>
        <button type='submit' >Editar</button>
      </form>
      </>
    );

  }
}