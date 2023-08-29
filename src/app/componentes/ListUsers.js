
export default async function ListUsers({lista}) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return(
        <div>
            
                {lista?.map((lista, index) =>
                <p key={index}>
                    {lista.name}
                </p>
                )}
           
        </div>
    )
}