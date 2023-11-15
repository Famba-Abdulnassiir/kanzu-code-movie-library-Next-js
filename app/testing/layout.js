"use client";

import Header from "../Header";
import { SessionProvider } from "next-auth/react";

export default function layout({ children }) {
    return  (<>
    
    <SessionProvider>
    <Header/>
        {children}
    </SessionProvider>
    </>
     )
  }