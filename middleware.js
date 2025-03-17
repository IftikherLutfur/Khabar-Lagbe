import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
    const token = await getToken({ req, secret: process.env.NEXT_PUBLIC_AUTH_SECRET });

    console.log(token, "Decoded Token"); // Debugging

    // যদি ইউজার লগইন না করে থাকে
    if (!token) {
        return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    }

    // যদি ইউজার অ্যাডমিন না হয় এবং সে `/admin` রুটে যেতে চায়
    if (req.nextUrl.pathname.startsWith("/AdminRoutes") && token.type !== "admin") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ["/AdminRoutes/:path*", "/BookProgram","/OnlineOrder/:path*"],
};
