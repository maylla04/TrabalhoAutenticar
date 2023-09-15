'use client'
import { UserCircle2 } from "lucide-react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

export default function recoverPassword(){
    const { push } = useRouter();
    
    const handlerPassword = async (e) => {
        e.preventDefault();
        push('/');
         
      }

    return(
        <div className="grid grid-cols-1 place-items-center mt-20">
      <div className="border border-amber-200 p-10 bg-yellow-400 rounded">
      <center><UserCircle2 size={48} color="white" strokeWidth={1} /><br/>
      </center>
      <center><h1 className="text-2xl text-white">Recuperar Acesso</h1><br/></center>
            <form onSubmit={handlerPassword}>
        <input
          className="border  p-3 border-amber-200 bg-amber-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 mt-5 w-80 hover:border-amber-300"
          placeholder='Digite o email de recuperação'
          type="email"
          >
        </input><br/>
        <div className="grid grid-cols-1">
        </div>
        <input
          className="border p-3 border-amber-200 bg-amber-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 mt-10 w-80 hover:border-amber-300"
          placeholder='Digite Nova Senha'
          type='password'
        >
        </input><br/>
        <div className="grid grid-cols-1">
        <button
        className="border border-white p-5 border-amber-200 bg-yellow-300  mt-10  hover:bg-amber-200 text-white text-xl"
        >Enviar
        </button><br/>
        
        </div>
      </form>
      <ToastContainer/>
      </div></div>

 )}