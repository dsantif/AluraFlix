import "./Menu.css"

function Menu(){
    return (
        <div className="menu_container">
            <div className="frontend_container">
                <div className="titulo_front">
                    <h4>FRONTEND</h4>
                </div>

                <div className="cards_container">
                    <div className="cards_box">
                        <div className="front_img">
                            <a href="https://youtu.be/PztCEdIJITY?si=YtfFzB3PEW_I9w4O" target="blank">
                            <div><img src="/img/vf1.jpg"/></div>
                            </a>
                        </div>
                        <div className="btn_cards">
                            <button className="btn_borrar_f"><i class="fi fi-rr-delete-right"></i>Eliminar</button>
                            <button className="btn_editar_f"><i class="fi fi-rr-comment-alt-edit"></i>Editar</button>
                        </div>
                    </div>

                    <div className="cards_box">
                        <div className="front_img">
                            <a href="https://youtu.be/GJfOSoaXk4s?si=ouMBfDIlgxN4yQn3" target="blank">                        
                            <div><img src="/img/vf2.jpg"/></div>
                            </a>
                        </div>
                        <div className="btn_cards">
                            <button className="btn_borrar_f"><i class="fi fi-rr-delete-right"></i>Eliminar</button>
                            <button className="btn_editar_f"><i class="fi fi-rr-comment-alt-edit"></i>Editar</button>
                        </div>
                    </div>

                    <div className="cards_box">
                        <div className="front_img">
                            <a href="https://www.youtube.com/watch?v=rpvrLaBQwgg" target="blank">
                            <div><img src="/img/vf3.jpg"/></div>
                            </a>
                        </div>
                        <div className="btn_cards">
                            <button className="btn_borrar_f"><i class="fi fi-rr-delete-right"></i>Eliminar</button>
                            <button className="btn_editar_f"><i class="fi fi-rr-comment-alt-edit"></i>Editar</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="backend_container">
                <div className="titulo_back">
                    <h4>BACKEND</h4>
                </div>
                <div className="cards_container">
                    <div className="cards_box">
                        <div className="back_img">
                            <a href="https://www.youtube.com/watch?v=5XPojnx9bb8" target="blank">
                            <div><img src="/img/vb1.jpg"/></div>
                            </a>
                        </div>
                        <div className="btn_cards">
                            <button className="btn_borrar_b"><i class="fi fi-rr-delete-right"></i>Eliminar</button>
                            <button className="btn_editar_b"><i class="fi fi-rr-comment-alt-edit"></i>Editar</button>
                        </div>
                    </div>

                    <div className="cards_box">
                        <div className="back_img">
                            <a href="https://www.youtube.com/watch?v=aure5d3B88g" target="blank">
                            <div><img src="/img/vb2.jpg"/></div>
                            </a>
                        </div>
                        <div className="btn_cards">
                            <button className="btn_borrar_b"><i class="fi fi-rr-delete-right"></i>Eliminar</button>
                            <button className="btn_editar_b"><i class="fi fi-rr-comment-alt-edit"></i>Editar</button>
                        </div>
                    </div>

                    <div className="cards_box">
                        <div className="back_img">
                            <a href="https://www.youtube.com/watch?v=EoPvlE85XAQ" target="blank">
                            <div><img src="/img/vb3.jpg"/></div>
                            </a>
                        </div>
                        <div className="btn_cards">
                            <button className="btn_borrar_b"><i class="fi fi-rr-delete-right"></i>Eliminar</button>
                            <button className="btn_editar_b"><i class="fi fi-rr-comment-alt-edit"></i>Editar</button>
                        </div>
                    </div>

                </div>

            </div>

            <div className="innovacion_container">
                <div className="titulo_innovacion">
                    <h4>INNOVACION Y GESTION</h4>
                </div>
                <div className="cards_container">
                    <div className="cards_box">
                        <div className="inn_img">
                            <a href="https://www.youtube.com/watch?v=vhwspfvI52k" target="blank">
                            <div><img src="/img/vi1.jpg"/></div>
                            </a>
                        </div>
                        <div className="btn_cards">
                            <button className="btn_borrar_i"><i class="fi fi-rr-delete-right"></i>Eliminar</button>
                            <button className="btn_editar_i"><i class="fi fi-rr-comment-alt-edit"></i>Editar</button>
                        </div>
                    </div>

                    <div className="cards_box">
                        <div className="inn_img">
                            <a href="https://www.youtube.com/watch?v=YhR7Zp8NUzE" target="blank">
                            <div><img src="/img/vi2.jpg"/></div>
                            </a>
                        </div>
                        <div className="btn_cards">
                            <button className="btn_borrar_i"><i class="fi fi-rr-delete-right"></i>Eliminar</button>
                            <button className="btn_editar_i"><i class="fi fi-rr-comment-alt-edit"></i>Editar</button>
                        </div>
                    </div>

                    <div className="cards_box">
                        <div className="inn_img">
                            <a href="https://www.youtube.com/watch?v=6N3OkLCfK-0" target="blank">
                            <div><img src="/img/vi3.jpg"/></div>
                            </a>
                        </div>
                        <div className="btn_cards">
                            <button className="btn_borrar_i"><i class="fi fi-rr-delete-right"></i>Eliminar</button>
                            <button className="btn_editar_i"><i class="fi fi-rr-comment-alt-edit"></i>Editar</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Menu;