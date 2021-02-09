import React from "react";
import "./styles.css";
import Producto from "./components/Producto";

class App extends React.Component {
  state = {
    nuevoProducto: {
      imagen: "",
      precio: "",
      producto: "",
      descripcion: ""
    },
    productos: [
      {
        imagen:
          "https://static.13.cl/7/sites/default/files/esports/articulos/field-image/portadaxbox.jpg",
        precio: "$14,000 MXN",
        producto: "Xbox Series X",
        descripcion: "Consola Xbox Series X con capacidad de 1 TB"
      },
      {
        imagen:
          "https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg",
        precio: "$7,200 MXN",
        producto: "Nintendo Switch",
        descripcion: "Consola Nintendo Switch con capacidad de 32 GB"
      },
      {
        imagen:
          "https://http2.mlstatic.com/D_NQ_NP_760512-MLA41851508080_052020-O.jpg",
        precio: "$4,500 MXN",
        producto: "Nintendo Switch Lite Turquesa",
        descripcion: "Consola Nintendo Switch Lite con capacidad de 32 GB"
      },
      {
        imagen:
          "https://www.somosxbox.com/wp-content/uploads/2020/09/xbox-series-x-xbox-series-s-que-xbox-compro-1-somosxbox.jpg",
        precio: "$8,000 MXN",
        producto: "Xbox Series S",
        descripcion: "Consola Xbox Series S con capacidad de 512 GB"
      }
    ]
  };

  onChangeNombre(event) {
    let text = event.target.value;

    this.setState({
      nuevoProducto: {
        ...this.state.nuevoProducto,
        producto: text
      }
    });
  }

  onChangeDescripcion(event) {
    let text = event.target.value;

    this.setState({
      nuevoProducto: {
        ...this.state.nuevoProducto,
        descripcion: text
      }
    });
  }

  onChangePrecio(event) {
    let text = event.target.value;

    this.setState({
      nuevoProducto: {
        ...this.state.nuevoProducto,
        precio: text
      }
    });
  }

  onChangeImagen(event) {
    let text = event.target.value;

    this.setState({
      nuevoProducto: {
        ...this.state.nuevoProducto,
        imagen: text
      }
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    /*const { productos } = this.state; <-- const productos = this.state.productos
    productos.push(this.state.nuevoProducto);
    this.setState({ productos });*/

    this.setState({
      productos: [...this.state.productos, this.state.nuevoProducto]
    });
  }

  render() {
    console.log(this.state.nuevoProducto);
    return (
      <div className="container">
        <form
          className="mt-4 mb-4"
          onSubmit={(event) => this.onFormSubmit(event)}
        >
          <h3>Lista de productos</h3>

          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => this.onChangeNombre(event)}
            />
          </div>

          <div className="form-group">
            <label>Descripción</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => this.onChangeDescripcion(event)}
            />
          </div>

          <div className="form-group">
            <label>Precio</label>
            <input
              type="number"
              className="form-control"
              onChange={(event) => this.onChangePrecio(event)}
            />
          </div>

          <div className="form-group">
            <label>URL de la imagen</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => this.onChangeImagen(event)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-success btn-block"
            id="agregarProducto"
          >
            Agregar producto a la lista
          </button>
        </form>

        {this.state.productos.map((producto) => (
          <Producto
            imagen={producto.imagen}
            precio={producto.precio}
            producto={producto.producto}
            descripcion={producto.descripcion}
          />
        ))}
      </div>
    );
  }
}

export default App;

