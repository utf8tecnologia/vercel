import { useState } from "react"
 
 function Home() {
     return (
        <div>
         <h1>HOME PAGE</h1>
         <Contador/>
        </div>
     )
     
 }

 export default Home

 function Contador() {
     const [contador, setContador] = useState(1);

     function adicionarContador() {
         setContador(contador + 1);
     }
     return (
         <div>
         <div>{contador}</div>
         <button onClick={adicionarContador}>MAIS 1</button>
         </div>
     )
 }