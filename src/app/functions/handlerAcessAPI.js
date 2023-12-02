'use server'
const url = "https://lado-servidor-ptac-4.vercel.app";

const getUserAuthenticated = async (user) => { //usuario authenticado
   try{
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
} catch {
   return null
}
}


const getUsers = async (user) =>{
    try{
      const responseOfApi = await fetch(url + "/users", {cache: "no-cache"});
   const lista = await responseOfApi.json();
   return lista;
    } catch {
      return null
    }
   
}
const getUser = async (id) =>{
   try{
     const responseOfApi = await fetch(`${url}´/user/${id}`, {
      method: "GET",
      cache: "no-cache",
      headers: {
          "Content-Type": "application/json"
         },
      
});
  const lista = await responseOfApi.json();
  return lista;
   } catch {
     return null
   }
  
}

const postUser = async (user) => { //fazendo o cadastrar
   try{
   const responseOfApi = await fetch(url + "/user",
        {
            method: "POST",
            cache: "no-cache",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(user)
    }
   );
   const userSave = await responseOfApi.json();
   return userSave;
} catch {
   return null
}
}

const updateUser = async (user, id) => { //alterando o usuario, passa o usuario e a indentificação
   try{
   const responseOfApi = await fetch(url + "/user/" + id,
        {
            method: "PUT",
            cache: "no-cache",
            headers: 
            { "Content-Type": "application/json"},
            body: JSON.stringify(user)
    }
   );
   const userUpdate = await responseOfApi.json();
   return userUpdate;
} catch {
   return null
}
}

const deleteUser = async (user, id) => { //Deletando o usuario
   try{
   const responseOfApi = await fetch(url + "/user/" + id,
        {
            method: "DELETE",
            cache: "no-cache",
            headers: 
            { "Content-Type": "application/json"},
            body: JSON.stringify(user)
    }
   );
   const userUpdate = await responseOfApi.json();
   return userUpdate;
} catch {
   return null
}
}


export { getUsers, getUserAuthenticated, postUser, updateUser, getUser };