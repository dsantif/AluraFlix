import React, {useState} from "react"
import "./Form.css"

function Form(){
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagen, setImagen] = useState('');
    const [video, setVideo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleCategoriaChange = (e) => {
        setCategoria(e.target.value);
    };

    const handleTituloChange = (e) => {
        setTitulo(e.target.value);
    };

    const handleImagenChange = (e) => {
        setImagen(e.target.value);
    };

    const handleVideoChange = (e) => {
        setVideo(e.target.value);
    };

    const handleDescripcionChange = (e) => {
        setDescripcion(e.target.value);
    };

    const handleClear = () => {
        setTitulo('');
        setCategoria('');
        setImagen('');
        setVideo('');
        setDescripcion('');
    };

    return <div>
    <h2 className="titulo_form">EDITAR CARD:</h2>
        <form className="form">
            <label>Título</label>
            <input data-titulo name="titulo" type="text" placeholder="Título del nuevo video..." value={titulo} onChange={handleTituloChange}></input>
        
            <label>Categoría</label>
            <select data-categoria name="categoria" value={categoria} onChange={handleCategoriaChange}>
                <option value="">Selecciona una categoría</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Innovacion y Gestion</option>
            </select>
        
            <label>Imagen</label>
            <input data-imagen name="imagen" type="text" placeholder="Imagen..." value={imagen} onChange={handleImagenChange}></input>
        
            <label>Video</label>
            <input data-video name="video" type="text" placeholder="Link del video..." value={video} onChange={handleVideoChange}></input>

            <label>Descripcion</label>
            <textarea data-descripcion placeholder="Pequeña descripción sobre el video..." value={descripcion} onChange={handleDescripcionChange}></textarea>

            <div className="botones_form">
                <button className="btn_guardar" type="submit">GUARDAR</button>
                <button className="btn_limpiar" type="button" onClick={handleClear}>LIMPIAR</button>
            </div>
        </form>
        </div>
}

export default Form;