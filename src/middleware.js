'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value; //pegando cookie com nome de token
    const urlLogin = new URL('/', request.url); //acessa a rota do login
    const urlDash = new URL('/pages/dashboard', request.url); //rota da dash
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        //se o token não estiver validade OU não tiver um token
        if (request.nextUrl.pathname === '/pages/dashboard' || request.nextUrl.pathname === '/pages/dashboard/alter' || request.nextUrl.pathname === '/pages/dashboard/register') {
            //verificando se o servidor está renderizando a rota dashboard OU alter OU register
            return NextResponse.redirect(urlLogin);
            //vai ser retornado para a rota home
        }
    }
    
    if (isTokenValidated) { //se tiver o token vai e o usuario querer ir pro login, vai retorna ele para dashboard
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlDash);
        }
    }
    
    
    
    NextResponse.next();//indica para continuar a operaçao que foi solicitada pelo componente cliente
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/dashboard/alter', '/pages/dashboard/register']
    //configurando as rotas que o middleware irá controlar
};

