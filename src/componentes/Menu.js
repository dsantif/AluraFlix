import "./Menu.css"

function Menu(){
    return (
        <div className="menu_container">
            <div className="frontend_container">
                <div className="titulo_front">
                    <h4>FRONTEND</h4>
                </div>

                <div className="cards_front">
                    <div className="box_front">
                        <div className="img_front">
                            <div><img src="/img/vf1.jpg"/></div>
                        </div>
                        <div className="btn_front">
                            <button className="btn_borrar"><i class="fi fi-rr-delete-right"></i>Eliminar</button>
                            <button className="btn_editar"><i class="fi fi-rr-comment-alt-edit"></i>Editar</button>
                        </div>
                    </div>

                    <div className="box_front">
                    <div className="img_front">
                            <div><img src="/img/vf2.jpg"/></div>
                        </div>
                        <div className="btn_front">
                            <button className="btn_borrar"><i class="fi fi-rr-delete-right"></i>Eliminar</button>
                            <button className="btn_editar"><i class="fi fi-rr-comment-alt-edit"></i>Editar</button>
                        </div>
                    </div>

                    <div className="box_front">
                    <div className="img_front">
                            <div><img src="/img/vf3.jpg"/></div>
                        </div>
                        <div className="btn_front">
                            <button className="btn_borrar"><i class="fi fi-rr-delete-right"></i>Eliminar</button>
                            <button className="btn_editar"><i class="fi fi-rr-comment-alt-edit"></i>Editar</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="backend_container">
                <div className="titulo_back">
                    <h4>BACKEND</h4>
                </div>
                <div className="cards_back">

                </div>

            </div>

            <div className="innovacion_container">
                <div className="titulo_innovacion">
                    <h4>INNOVACION Y GESTION</h4>
                </div>
                <div className="cards_innovacion">

                </div>

            </div>
        </div>
    )
}

export default Menu;