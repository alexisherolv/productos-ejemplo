import React from "react";

function Producto(props) {
  return (
    <figure className="snip1171">
      <img src={props.imagen} />
      <div className="price">{props.precio}</div>
      <figcaption>
        <h3>{props.producto}</h3>
        <p>{props.descripcion}</p>
        <a>Agregar al carrito</a>
      </figcaption>
    </figure>
  );
}

export default Producto;