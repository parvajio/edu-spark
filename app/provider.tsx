"use client"
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
    const {user} = useUser()

    useEffect(()=>{
        createUser()
    },[user])


    const createUser = async ()=>{
        if (!user) return; // Don't make the request if user is not available
        
        const res = await axios.post("/api/user", {
            name: user.fullName,
            email: user.emailAddresses[0].emailAddress, // Get the first email address
        })
        console.log(res.data)
    }

  return <div>{children}</div>;
};

export default Provider;
