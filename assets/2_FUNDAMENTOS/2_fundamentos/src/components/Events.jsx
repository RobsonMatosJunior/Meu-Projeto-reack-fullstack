//Import Style
import style from "./Events.module.css"

const Events =() => {

    const handMyEvent = (e) => {
        console.log(e);

        console.log("Ativou o evento")

    };

    const renderSomething =(x) => {
        if(x){
            return <h1>Renderizando Isso</h1>
        } else {
            return <h1>Também posso renderizar isso</h1>
        }
    };

    return(
        <div>
            <div>
                <button className={style.btns} onClick={handMyEvent}>
                    Clique Aqui
                </button>

            </div>

            <div>

                <button className={style.btns} onClick={() => console.log("Clicou!")}>
                    Clique aqui também!
                </button>

            </div>
            <div>

                <button className={style.btns} onClick={() => {
                    if(true) {
                        console.log("Isso não deveria existir")
                    }
                } } >
                    Clique aqui por favor
                </button>
                
            </div>

            {renderSomething(true)}
            {renderSomething(false)}

        </div>
    );
};

export default Events