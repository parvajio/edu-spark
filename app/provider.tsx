"use client";
import { UserDetailsContext } from "@/context/userDetailsContext";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    createUser();
  }, [user]);

  const createUser = async () => {
    if (!user) return;

    const res = await axios.post("/api/user", {
      name: user.fullName,
      email: user.primaryEmailAddress?.emailAddress, // Get the first email address
    });
    setUserDetails(res.data);
  };

  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export default Provider;
