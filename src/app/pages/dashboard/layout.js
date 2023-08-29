'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const metadata = {
    title: 'Register users',
    description: 'Registrando usuarios'
}

export default function DashboardLayout({ children }){
    return(
        <body>
            <div>
                <h1>Nav</h1>
                <Link href={"/pages/dashboard"}>Home</Link>
                <Link href={"/pages/dashboard/alter"}>Alterar</Link>
                <Link href={"/pages/dashboard/register"}>Registrar</Link>
                <div>{children}</div>
            </div>
        </body>
    )
}