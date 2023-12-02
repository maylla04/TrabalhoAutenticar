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
      <div className="border border-zinc-200 p-10 bg-zinc-600 rounded">
      <center><UserCircle2 size={48} color="white" strokeWidth={1} /><br/>
      </center>
      <center><h1 className="text-2xl text-white">Recuperar Acesso</h1><br/></center>
            <form onSubmit={handlerPassword}>
        <input
          className="border  p-3 border-zinc-200 bg-zinc-200 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-300 mt-5 w-80 hover:border-zinc-300"
          placeholder='Digite o email de recuperação'
          type="email"
          >
        </input><br/>
        <div className="grid grid-cols-1">
        </div>
        <input
          className="border  p-3 border-zinc-200 bg-zinc-200 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-300 mt-5 w-80 hover:border-zinc-300"
          placeholder='Digite Nova Senha'
          type='password'
        >
        </input><br/>
        <div className="grid grid-cols-1">
        <button
        className="border  p-5 border-zinc-300 bg-zinc-400  mt-10  hover:bg-zinc-200 text-white text-xl"
        >Enviar
        </button><br/>
        
        </div>
      </form>
      <ToastContainer/>
      </div></div>

 )}