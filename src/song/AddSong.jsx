import { useParams } from "react-router-dom";
import {createSong, getSong, updateSong } from '../services/apiService';
import { useEffect, useState } from "react";

export default function Formulario(){
    const {id} = useParams();
    const [song , setSong] = useState({
        name:"",
        duration:0
    })
    if(id){
        useEffect(()=>{
            async function getOneSong(){
                const songg = await getSong(id)
                console.log(songg.data)
                setSong(songg.data);
            }
            getOneSong()
        }, [])
    }

   

    function handelchange(e){
        setSong({
            ...song,
            [e.target.name] : e.target.value
        })

    }

    async function add(e){
        e.preventDefault();
        if(!id){
            const songSdd = await createSong(song);
            if(songSdd.status==201){
                alert("Añadido con exito")
                setSong({
                    name:"",
                    duration:0
                })
            }

        }else{
            const songedit = await updateSong(id, song)
            if(songedit.status==201){
                alert("Editado con exito")
            }
        }
        
    }

   
        return <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{borderRadius: 1 +"rem"}}>
                        <div className="card-body p-5 text-center">
                            
                            <h3 className="mb-5">Añadir</h3>
                            <form>
                            
                            <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="typeEmailX-2">Nombre</label>
                            <input type="text" id="description" className="form-control form-control-lg" name="name" value={song.name} onChange={handelchange}/>
                            
                            </div>
                            
                            <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="typeEmailX-2">Duracion</label>
                            <input type="text" id="price" className="form-control form-control-lg"  name="duration" value={song.duration} onChange={handelchange}/>
                            </div>
                            <button className="btn btn-success btn-lg btn-block" type="submit" onClick={add}>Añadir</button>
                        
                            </form>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </>
    

}

function Titulo ({appear}) {
    if(appear){
        return <h3 className="mb-5">Editar</h3>
    }else{
        return <h3 className="mb-5">Añadir</h3>
    }

}