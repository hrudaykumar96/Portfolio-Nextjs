import DbConnection from "@/app/utils/config/DbConnection";
import User from "@/app/utils/models/Users";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        DbConnection();

            const { email, password } = await req.json();
            const cookieStore = await cookies();
            
            const user = await User.findOne({ email });
            if(!user) return NextResponse.json({ emailError: 'Email not registered'});

            const checkPassword = await bcrypt.compare(password, user.password);
            if(!checkPassword) return NextResponse.json({passwordError: 'Incorrect Password'});

            const token = jwt.sign({id: user.id}, process.env.NEXT_JWT_KEY);
            cookieStore.set('token', token,{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 24 * 60 * 60,
                path: '/',
                sameSite: 'strict'
            });
            return NextResponse.json({success:'You have logged in successfully'});
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error'})
    }
};