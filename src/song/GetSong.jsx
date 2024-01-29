import React, { useState, useEffect } from 'react';
import { getSong } from '../services/apiService';

export default function SongDetails({id}) {
const [song, setSong] = useState(null);

useEffect(()=>{
    async function getOneSong(){
        const songg = await getSong(id)
        console.log(songg.data)
        setSong(songg.data);
    }
    getOneSong()
}, [])



if(song!=null){
  return (<>
  <h1>Informacion de una cancion</h1>
    <div className="card" style={{width: 18 +'rem' }}>
    <div className="card-body">
      <h5 className="card-title">Nombre de la cancion: {song.name}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">Duracion de la cancion: {song.duration}</h6>
    </div>
  </div>
  </>
  );
  
}

}