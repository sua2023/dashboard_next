"use client"
import React,{ useEffect, useState } from 'react';

import { Metadata } from "next";
import SignIn from "./auth/signin/page";
import ECommerce from "@/components/Dashboard/E-commerce";

export default function Main() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  return (
    <>
      {user?<ECommerce />: <SignIn />  }
    
    </>
  );
}
