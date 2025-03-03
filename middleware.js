import { cookies } from "next/headers"

const { NextResponse } = require("next/server")

export const middleware = async (request)=>{
    const token = await cookies(request).get('next-auth.session-token')
    console.log(token, "Token");
    
    if(!token){
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }
    return NextResponse.next()
}
export const config = {
    matcher : ['/BookProgram']
}