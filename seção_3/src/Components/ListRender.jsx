import { useState } from "react"

//Imports

//Import CSS

const ListRender = () => {

    const [users, setUsers] = useState ([
        {id:1, name: "Gabriel", age: 29},
        {id:2, name:"Julho", age:30},
        {id:3,name:"Natalia",age:45},
        {id:4,name:"João Pedro",age:67},
        {id:5, name: "Otero", age: 74},
    ]);
  
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
            
        setUsers((prevUsers)=>  {
            console.log(prevUsers);
    
            return prevUsers.filter((users) => randomNumber !== users.id)
        });
    };

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
                <button onClick={deleteRandom}> Delete random User</button>
            </div>
        </section>
    )
}

export default ListRender