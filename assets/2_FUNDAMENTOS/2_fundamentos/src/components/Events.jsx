const Events =() => {

    const handMyEvent = (e) => {
        console.log(e);

        console.log("Ativou o evento")

    };

    return(
        <div>
            <div>
                <button onClick={handMyEvent} >Clique Aqui</button>
            </div>
        </div>
    );
};

export default Events