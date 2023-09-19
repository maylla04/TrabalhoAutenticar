'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess" //chamando a função de acesso
import { useRouter } from "next/navigation";
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserCircle2 } from "lucide-react";
import Link from "next/link";

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push } = useRouter(); // utilizar a função push, que redireciona o usuario para a pagina dash

  const handlerLogin = async (e) => {
    e.preventDefault(); //previnindo o envio do formulário
    try {
      const userAuth = await handlerAcessUser(user); //utilizando a função
      if(userAuth.token === undefined){
        toast.error("Error no Email ou senha!")
      }
      push('/pages/dashboard'); //usa o push aq
    } catch {
      toast.error("Erro na Aplicação");
    }
  }
  return (
    <div className="grid grid-cols-1 place-items-center mt-20">
      <div className="border border-amber-200 p-10 bg-yellow-400 rounded">
      <center><UserCircle2 size={48} color="white" strokeWidth={1} /><br/>
      </center>
      <center><h1 className="text-2xl text-white">FAÇA LOGIN</h1><br/></center>
      
      <form onSubmit={handlerLogin}>
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
        className="border border-white p-5 border-amber-200 bg-yellow-300  mt-10  hover:bg-amber-200 text-white text-xl"
        >Entrar
        </button><br/>
        <center><button><Link href={'/page'} className="text-white text-xl font-bold"
        >Esqueci minha senha
        </Link></button></center>
        </div>
      </form><br/>
      <h1 className="text-white">//Email: marcelino.passos<br/>
      //Senha: marcelino123</h1>
      <ToastContainer/>
      </div></div>
      //toastcontainer, tipo um alert
  )
}
