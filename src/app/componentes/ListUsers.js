
export default async function ListUsers({lista}) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return(
        <div className="grid grid-cols-">
            
                {lista?.map((lista, index) =>
                <div className="grid grid-cols-2" key={index}>
                    {lista.name}
                    {lista.email}
                </div>
                )}
           
        </div>
    )
}