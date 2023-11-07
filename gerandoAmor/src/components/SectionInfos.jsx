//Imports
import imagem01 from "../images/QR code (1).png"
import imagem02 from "../icons/whatsapp.svg"
import backgound from "/background_image.png"

const SectionInfos =() => {

    return(
        <section>
            <div className='background-div'>
                <div className="infos">
                    <h1>Seja um doador</h1>
                    <h2>Toda ajuda é Bem-Vinda</h2>
                    <p className='conteudo-imagem'>
                        <img src={imagem01} alt="QR code" />
                        <img src={imagem02} alt="whatsapp incon" />
                    </p>
                    <p className='P-SectionInfos'>
                        Doe agora escaneando o QR code <br />
                        Ou <br />
                        Clique no Icone
                    </p>

                </div>
            </div>
        </section>
    );
};

export default SectionInfos;
