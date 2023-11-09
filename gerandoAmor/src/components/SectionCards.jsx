import Comunidade from "../images/313300754_573181067944716_5191642201732057972_n 1.png"
import Instagram from "../icons/instagram.svg"
import Seta from "../icons/seta.svg"

const SectionCarsd =() => {

    return(
        <section className="sectionLayout">
            
            <div className="cards-layout">
    
                <div className="project-info">
                    <img src="" alt="Icon handshake" />
                    <h4>Seja um Voluntário</h4>
                    <p>
                        Toda ajuda é bem-vinda! Clique no botão abaixo e nos envie mensagem para entrarmos em contato!
                    </p>
                    <div className="btns-cards">
                        <a className="know-more" href="" target="_blank">
                            Voluntariado
                        </a>
                    </div>

                </div>
            </div>

            <div className="cards-layout" >
    
                <div className="project-info">
                    <img className="img2" src="" alt="Icon handshake" />
                    <h4>Seja um Associado</h4>
                    <p>
                        Toda ajuda é bem-vinda! Clique no botão abaixo e nos envie mensagem para entrarmos em contato!
                    </p>
                    <div className="btns-cards">
                        <a className="know-more" href="" target="_blank">
                            Saiba Mais
                        </a>
                    </div>

                </div>
            </div>

            <div className="card-dif">    
                <div className="infos-card">
                    <div className="card-style">
                        <img className="layout" src="" alt="Icon@" />
                        <h4>Nos Apoie!</h4>
                        <p>
                            Você pode nos ajudar de outra forma, compartilhe o nosso trabalho com outras pessoas, agradecemos!.
                        </p>
                        
                        <p className="conteudo">
                            Clique no Icone
                            <img className="layout" src={Seta} alt="seta"/>
                            <img className="layout" src={Instagram} alt="Instagram"/>
                        </p>
                    </div>                    
                </div>
                <div>
                    <img className="card-image" src={Comunidade} alt="Comunidade"/>
                </div>
            </div>
        </section>
    );
};

export default SectionCarsd