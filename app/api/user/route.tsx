import { db } from "@/config/db";
import { usersTable } from "@/config/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req: {name: string, email: string}){
    const {name, email } = await req;
    
    //first chack if user exists in db
    const user = await db.select().from(usersTable).where(eq(usersTable.email, email))

    //if not insert current user
    if(user.length == 0){
        const result = await db.insert(usersTable).values({
            name: name,
            email: email
        })

        return NextResponse.json(result)
    }

    return NextResponse.json(user[0])
}