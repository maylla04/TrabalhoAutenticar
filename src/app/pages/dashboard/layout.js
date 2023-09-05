'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const metadata = {
    title: 'Register users',
    description: 'Registrando usuarios'
}

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
            <nav class="flex items-center justify-between bg-gray-900 text-white p-4">
  <div class="flex items-center">
    <a href="#" class="text-xl font-bold">Logo</a>
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