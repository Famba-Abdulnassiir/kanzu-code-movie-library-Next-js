import Header from "@/app/Header";
import React from "react";


export default function layout({ children }) {
    return  (<>
    <Header/>
    <section>{children}</section>
    </>
     )
  }