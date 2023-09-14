import Link from "next/link"

export default async function ListUsers({lista}) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return(
        <div className="grid p-32">
                <div className="grid grid-cols-3 p-6 bg-amber-400 border-b border-yellow-200">
                    <h1 className="font-bold text-2xl text-white">Nome</h1>
                    <h1 className="font-bold text-2xl text-white">Email</h1>
                </div>
                {lista?.map((lista, index) =>
                <div className="grid grid-cols-3 p-5 bg-amber-200" key={index}>
                    <p className="border border-amber-300 p-3 text-white bg-amber-300">{lista.name}</p>
                    <p className="border border-amber-300 p-3 text-white bg-amber-300">{lista.email}</p>
                    <div className="p-3">
                    <Link href={"/pages/dashboard/alter" } 
                    className="p-3 border border-amber-200 bg-amber-300 text-white hover:bg-white hover:border-amber-200 hover:text-amber-200">Alterar</Link>
                    </div>
                    
                    
                </div>
                )}
           
        </div>
    )
}