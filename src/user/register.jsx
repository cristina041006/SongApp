import { useState } from "react"
import { addUser } from "../services/apiService"

export default function LoginForm(){
    const [user, setUser] = useState({
        name:"",
        email: "",
        login: "",
        rol: "user",
        password: ""
    })

    function handelchange(e){
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })

    }

    async function postUser(e){
        e.preventDefault()
        const userAdd = await addUser(user);
        if(userAdd.status==201){
            alert("Registrado correctamente");
            setUser({
                name:"",
                email: "",
                login: "",
                rol: "user",
                password: ""
            })
        }
    }

return <section className="vh-100">
<div className="container py-5 h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
      <div className="card shadow-2-strong" style={{borderRadius: 1 +"rem"}}>
        <div className="card-body p-5 text-center">

          <h3 className="mb-5 subtitle">Sing in</h3>
          <form>
          
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="typeEmailX-2"> Nombre</label>
            <input type="text" id="name" className="form-control form-control-lg" name="name" required onChange={handelchange}/>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="typeEmailX-2"> Login</label>
            <input type="text" id="login" className="form-control form-control-lg"  name="login" required onChange={handelchange}/>
           
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="typeEmailX-2">Email</label>
            <input type="email" id="email" className="form-control form-control-lg" name="email" onChange={handelchange}/>
           
          </div>
          
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="typeEmailX-2">Password</label>
            <input type="password" id="password" className="form-control form-control-lg" name="password" required onChange={handelchange}/>
          </div>
          <br></br>
          <button className="btn btn-success btn-lg btn-block" type="submit" id="singin" onClick={postUser}>Sing in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

</section>
}