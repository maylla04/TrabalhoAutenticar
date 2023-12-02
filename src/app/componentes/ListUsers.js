import Link from "next/link"

export default async function ListUsers({lista}) {
    await new Promise((resolve) => setTimeout(resolve, 3000)) //tempo para resposta
    return(
        <div className="grid p-10">
                <div className="grid grid-cols-3 p-6 bg-zinc-400 border-b border-yzinc-200">
                    <h1 className="font-bold text-2xl text-white">Nome</h1>
                    <h1 className="font-bold text-2xl text-white">Email</h1>
                
                </div>
                {lista?.map((lista, index) =>
                <div className="grid grid-cols-3 p-2 bg-zinc-200" key={index}>
                    
                    <p className="border-zinc-500 p-3 text-white bg-zinc-500">{lista.name}</p>
                    <p className="border-zinc-500 p-3 text-white bg-zinc-500">{lista.email}</p>
                    <div className="p-3">
                    <Link href={`dashboard/alter/${lista.id}`} className="p-3 border border-zinc-200 bg-zinc-500 text-white hover:bg-white hover:border-zinc-200 hover:text-zinc-200">Alterar</Link>
                    </div>
                    
                    
                </div>
                )}
           
        </div>
    )
}