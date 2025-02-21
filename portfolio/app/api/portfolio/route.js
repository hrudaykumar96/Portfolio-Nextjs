import DbConnection from "@/app/utils/config/DbConnection";
import User from "@/app/utils/models/Users";
import { NextResponse } from "next/server";

export const GET = async()=>{
    try {
        DbConnection();
        const data = await User.findOne();
        return NextResponse.json({ success: data});
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error'});
    }
}