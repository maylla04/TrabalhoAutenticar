'use server'
const url = "https://lado-servidor-ptac-4.vercel.app";

const getUserAuthenticated = async (user) => { //usuario authenticado
   const responseOfApi = await fetch(url + "/user/authenticated",
        {
            method: "POST",
            cache: "no-cache",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(user)
    }
   );
   const userAuth = await responseOfApi.json();
   return userAuth;
}

const getUsers = async (user) =>{
    const responseOfApi = await fetch(url + "/users", {cache: "no-cache"});
   const lista = await responseOfApi.json();
   return lista;
}
export { getUsers, getUserAuthenticated };