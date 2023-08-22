import { Suspense } from "react"

export default async function ListUsers({lista}) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return(
        <div>
            <Suspense fallback={<p>Carregando...</p>}>
                {lista.map((lista, index) =>
                <p key={index}>
                    {lista.name}
                </p>
                )}
            </Suspense>
        </div>
    )
}