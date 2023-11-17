import { useState } from "react";

//Import CSS

//Imports

const ManageData = () => {
    
    let someData = 10;

    const [number, setNumber] = useState(10);


  return (
    <div>
        <h1>Valor: {someData} </h1>
        <button onClick={() => (someData = 15)}> 
            Mudar Variavel
        </button>

        <h1>Valor: {number} </h1>

        <button onClick={() => setNumber(25)}>
            Mudar Valor 2
        </button>
        
    </div>
  )
}

export default ManageData
