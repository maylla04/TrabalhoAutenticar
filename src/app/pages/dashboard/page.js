import ListUsers from "@/app/componentes/ListUsers";
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react"

export default async function Dashboard() {
   const lista = getUsers()
    return (
        <div>
            <h1>Dashboard</h1>
            <Suspense fallback={<p>Carregando</p>}>
                <ListUsers lista={lista}/>
            </Suspense>
           
        </div>
    );
};