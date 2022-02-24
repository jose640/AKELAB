import { Fragment, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Akelab = () => {
  // Crear State
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [resultado, setResultado] = useState([]);
  const [cerrar, setCerrar] = useState(false);

  //Validacion de error
  const validarError = (e) => {
    if (Number.isInteger(e)) {
      if (e >= 1) {
        setCantidad(e);
        setError(false);
        setMensaje("");
        return;
      } else {
        setError(true);
        setMensaje("Ingrese un numero mayor a cero");
        setCantidad(0);
        return;
      }
    } else {
      setError(true);
      setMensaje("Caracter no valido");
      setCantidad(0);
      return;
    }
  };

  // buscar multiplos
  const buscarMultiplos = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      setMensaje("Caracter no valido");
      setResultado([]);
      return;
    }

    const array = [];
    // Buscar multiplos
    for(let i=1; i<=cantidad; i++){
        if(i%3===0 && i%5===0){
            array.push("AKELAB");
        }else if(i%3===0 && i%5!==0){
            array.push("AKE");
        }else if(i%3!==0 && i%5===0){
            array.push("LAB");
        }else {
            array.push(i);
        }
    }
    setResultado(array);
    setCerrar(true);
    setCantidad(0);
  };


  return (
    <Fragment>
      <h2>Ake-lab</h2>

      <form className="formulario" onSubmit={buscarMultiplos}>
        <div className="form-group row-5">
          <div className="d-flex flex-row-reverse">
            <Link to={"/"} className="btn btn-outline-danger">
              X
            </Link>
          </div>
          <label className="font-weight-bold">Ingrese un numero</label>
          <input
            type="text"
            className="form-control formulario-input"
            placeholder="0"
            onChange={(e) => validarError(parseInt(e.target.value))}
          />
          {error ? (
            <h6 className="font-weight-bolder text-danger">{mensaje}</h6>
          ) : null}
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-outline-primary">
              Buscar
            </button>
          </div>
        </div>
      </form>

      <Modal isOpen={cerrar}>
        <ModalHeader className="row cabecera">
          <div className="d-flex flex-row-reverse">
            <button
              className="btn btn-outline-danger"
              onClick={() => setCerrar(false)}
            >
              X
            </button>
          </div>
          <h3>Los multiplos de AKE-LAB son:</h3>
        </ModalHeader>
        <ModalBody className="container">
          <div className="row alert alert-info">
            {resultado
              ? resultado.join(", ")
              : null}
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default Akelab;
