import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const userAuth = await getUserAuthenticated(user); //constante usuario authenticate
    
    const isTokenValidate = await validateToken(userAuth.token); //token validado

    
    if (isTokenValidate) {
        Cookies.set('token', userAuth.token, { expires: 1 });
        //cookie, token e tempo de expiração
    }
    return userAuth
}
export default handlerAcessUser;

