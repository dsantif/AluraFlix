import "./Banner.css"

function Banner(){
    return (
        <div className="banner_container">
            <div className="banner_card">
                <div className="texto_banner">
                    <div className="fondo_titulo">
                    <h1 className="titulo_banner">FRONTEND</h1>
                    </div>
                    <h2 className="subtitulo_banner">Challenge React</h2>
                    <h5 className="descripcion_banner">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</h5>
                </div>

                <div className="video_banner">
                    <div className="banner_img">
                        <a href="https://www.youtube.com/watch?v=ov7vA5HFe6w&ab_channel=AluraLatam" target="_blank">
                        <img src="/img/video_card.jpg"/>
                        </a>
                    </div>
                </div>
    
            </div>
        </div>
    )

}

export default Banner;