export default function Register(){
    return(
        <div className="grid grid-cols-1 place-items-center mt-20"> 
            <div className="border border-amber-200 p-10 rounded">
            <h1 className="text-2xl text-amber-300 hover:text-amber-400">Formulário de cadasto</h1>
            <div>
                <form>
                <input
          className="border  p-3 border-amber-200 bg-amber-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 mt-5 w-80 hover:border-amber-300"
          placeholder='E-mail'
          type="email"
          >
        </input><br/>
        <input
          className="border p-3 border-amber-200 bg-amber-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 mt-10 w-80 hover:border-amber-300"
          placeholder='Senha'
          type='password'
          >
        </input><br/>
        <div className="grid grid-cols-1">
        <button
        className="border p-5 border-amber-200  mt-10  hover:bg-amber-200"
        >Entrar
        </button>
        </div>
                </form>
                </div>
            </div>
            </div>
    )
}