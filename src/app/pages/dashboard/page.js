import ListUsers from "@/app/componentes/ListUsers";
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react"

export default async function Dashboard() {
   const lista = getUsers()
    return (
        <div className="">
            <Suspense fallback={
            <center><img className="mt-20"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2bg.com.br%2Floading.gif&f=1&nofb=1&ipt=40fbb224dcf19d6033bab7cb97d279459be9795c72982b73980aea7b3144e046&ipo=images"/>
            <h1>Aguarde, carregando</h1></center>
            }>
                <ListUsers lista={lista}/>
            </Suspense>
           
        </div>
    );
};