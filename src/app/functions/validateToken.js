import { decode } from "jsonwebtoken";
const validateToken = (token)=>{ //validando o token
    const isTokenValidate = decode(token);
    if(isTokenValidate){
        return token= true
    }
    return token=false;
}   
export {validateToken};