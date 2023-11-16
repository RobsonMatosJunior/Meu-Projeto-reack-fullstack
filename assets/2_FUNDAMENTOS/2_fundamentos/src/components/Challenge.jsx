//Import Style
import style from "./Events.module.css"

const Challenge = () => {

    const Valor1 = 4;
    const Valor2 = 5;
    const Soma = () => {
        console.log(Valor1+Valor2)
    }


    return(
        <div>
            <div>
            <p>{Valor1}</p>
            <p>{Valor2}</p>
            </div>
            <div>
                <button className={style.btns} onClick={Soma}>
                    Soma
                </button>
            </div>
        </div>
    )
}

export default Challenge