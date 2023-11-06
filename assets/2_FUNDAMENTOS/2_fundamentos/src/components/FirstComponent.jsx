import MuyComponent from "./MyComponent";

{/*Arquivo de estilo*/}

const FirstComponent = () => {
    {/* essa ffunção faz isso*/}
    return(
        <div>
            <h1>Meu primeiro componente</h1>
            <p className="teste"> Meu texto</p>
            <MuyComponent />
        </div>      
    );
};

export default FirstComponent;