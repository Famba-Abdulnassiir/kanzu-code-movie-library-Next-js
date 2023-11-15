"use client"

import { useSession  } from 'next-auth/react'
import React from "react";

export default function page() {
    const { data: session } = useSession()
   
    if (session) {
      return <p>Hello, {session.user.name}!</p>;
    }
  
    return <p>You are not logged in.</p>;
  }