import React, {useState} from "react"
import "./Form.css"

function Form(){
    const [categoria, setCategoria] = useState('');

    const handleCategoriaChange = (e) => {
        setCategoria(e.target.value);
    };

    return <div>
    <h2 className="titulo_form">EDITAR CARD:</h2>
        <form>
            <label>Título</label>
            <input name="titulo" type="text" placeholder="Título del nuevo video..."></input>
        
            <label>Categoría</label>
            <select name="categoria" value={categoria} onChange={handleCategoriaChange}>
                <option value="">Selecciona una categoría</option>
                <option value="Música">Frontend</option>
                <option value="Deportes">Backend</option>
                <option value="Educación">Innovacion y Gestion</option>
            </select>
        
            <label>Imagen</label>
            <input name="imagen" type="text" placeholder="Imagen..."></input>
        
            <label>Video</label>
            <input name="video" type="text" placeholder="Link del video..."></input>

            <label>Descripcion</label>
            <textarea placeholder="Pequeña descripción sobre el video..."></textarea>

            <div className="botones_form">
                <button className="btn_guardar">GUARDAR</button>
                <button className="btn_limpiar">LIMPIAR</button>
            </div>
        </form>
        </div>
}

export default Form;