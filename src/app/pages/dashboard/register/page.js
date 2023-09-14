'use client'
import { useState } from "react";
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserCircle2 } from "lucide-react";

export default function Register(){
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handlerRegister = async (e) => {
    e.preventDefault();
    toast.success('o dia esta lindo')
  }

  return(
    <div className="grid grid-cols-1 place-items-center mt-20">
    <div className="border border-amber-200 p-10">
    <center><UserCircle2 size={48} color="#ebc400" strokeWidth={0.5} /><br/>
    </center>
    <center><h1 className="text-2xl text-amber-300 hover:text-amber-400">Registrar Usuário</h1><br/></center>
    
    <form onSubmit={handlerRegister}>
      <input
        className="border  p-3 border-amber-200 bg-amber-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 mt-5 w-80 hover:border-amber-300"
        placeholder='E-mail'
        type="email"
        onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
      </input><br/>
      <input
        className="border p-3 border-amber-200 bg-amber-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 mt-10 w-80 hover:border-amber-300"
        placeholder='Senha'
        type='password'
        onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
      </input><br/>
      <div className="grid grid-cols-1">
      <button
      className="border p-5 border-amber-200  mt-10  hover:bg-amber-200"
      >Entrar
      </button>
      </div>
    </form>
    <ToastContainer/>
    </div></div>
    )
}