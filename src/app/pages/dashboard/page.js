import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const lista = getUsers()
    return (
        <div>
            <h1>Dashboard</h1>
            {lista?.map((lista, index) => {
                return(
                 <div key={index}>
                 <p>{lista.nome}</p>
                 <p>{lista.email}</p>
                 <p>{lista.password}</p>
                 </div>
                 )
            })}
           
        </div>
    );
};