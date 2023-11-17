import { useState } from "react"

useState
//Imports

//Import CSS


const ListRender = () => {

    const [list] = useState(["Gabriel", "Julho", "Natalia", "João Pedro"]);


    const [users] = useState ([
        {id:1, name: "Gabriel", age: 29},
        {id:2, name:"Julho", age:30},
        {id:3,name:"Natalia",age:45},
        {id:4,name:"João Pedro",age:67},
        {id:5, name: "Otero", age: 74},
    ]);
  
    return (

        <section>
            <div>
                <ul>
                    {users.map((users) => (
                        <li key={users.id}>
                            {users.name} - {users.age}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
  )
}

export default ListRender



