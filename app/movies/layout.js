import Header from "../Header";

export default function layout({ children }) {
    return  (<>
    <Header/>
    <section>{children}</section>
    </>
     )
  }