'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Flower2 } from "lucide-react";



export default function DashboardLayout({ children }){
    const { push } = useRouter();

    const logout = (e) => {
        e.preventDefault();
        Cookies.remove('token');
        push('/');
    }
    return(
        <body>
            <div>
            <nav class="flex items-center justify-between bg-amber-300 text-white p-4">
  <div class="flex items-center">
  <Flower2 size={48} color="#ffffff" strokeWidth={1.25} />
  </div>
  <div class="flex">
  <Link href={"/pages/dashboard"} className="mr-4">Home</Link>
                <Link href={"/pages/dashboard/alter" } className="mr-4">Alterar</Link>
                <Link href={"/pages/dashboard/register"} className="mr-4">Registrar</Link>
                <button onClick={logout}>Sair</button>
  </div>
</nav>

                
                <div>{children}</div>
            </div>
        </body>
    )
}