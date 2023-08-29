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
                <h1>Nav</h1>
                <Link href={"/pages/dashboard"}>Home</Link>
                <Link href={"/pages/dashboard/alter"}>Alterar</Link>
                <Link href={"/pages/dashboard/register"}>Registrar</Link>
                <button onClick={logout}>Sair</button>
                <div>{children}</div>
            </div>
        </body>
    )
}