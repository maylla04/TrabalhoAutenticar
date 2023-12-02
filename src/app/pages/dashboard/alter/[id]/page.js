'use client'
import { useEffect, useState } from "react";
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { updateUser, getUser } from "@/app/functions/handlerAcessAPI";

export default function Alter( {params} ){//parametro pegando o id
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { push } = useRouter();

  useEffect(() =>{
    const findUser = async () => {
      const userFind = await getUser(params.id);
      setUser({ ...user })
    }
    findUser()
  }, [])

  const handlerAlter = async (e) => {
    e.preventDefault();
    toast.success('Alterado com Sucesso!')
    await updateUser(user, params.id);//pega o usuario e o id dele
    return push("/pages/dashboard");
  } 
  return(
    <div className="grid grid-cols-1 place-items-center mt-20">
    <div className="border border-amber-200 p-10 bg-zinc-600">
    <center><UserCircle2 size={48} color="white" strokeWidth={1} /><br/>
    </center>
    <center><h1 className="text-2xl text-white">Alterar Usuário</h1><br/></center>
    
    <form onSubmit={handlerAlter}>
    <input
        className="border  p-3 border-zinc-200 bg-zinc-200 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-300 mt-5 w-80 hover:border-zinc-300"
        value={user.name}
        placeholder="Nome"
        type="name"
        onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
      </input><br/>
      <input
        className="border  p-3 border-zinc-200 bg-zinc-200 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-300 mt-5 w-80 hover:border-zinc-300"
        value={user.email}
        type="email"
        placeholder="Email"
        onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
      </input><br/>
      <input
        className="border  p-3 border-zinc-200 bg-zinc-200 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-300 mt-5 w-80 hover:border-zinc-300"
        value={user.password}
        type='password'
        placeholder="Password"
        onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
      </input><br/>
      <div className="grid grid-cols-1">
      <button
      className="border  p-5 border-zinc-500 bg-zinc-400  mt-10  hover:bg-zinc-500 text-white text-xl"
      >Alterar
      </button>
      </div>
    </form>
    <ToastContainer/>
    </div></div>
    )
}