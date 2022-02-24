import { Fragment, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SerieFibonacci = () => {
  // Crear State
  const [entero, setEntero] = useState(0);
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [fibonacci, setFibonacci] = useState([]);
  const [cerrar, setCerrar] = useState(false);

  //Validacion de error
  const validarError = (e) => {
    if (Number.isInteger(e)) {
      if (e >= 1) {
        setEntero(e);
        setError(false);
        setMensaje("");
        return;
      } else {
        setError(true);
        setMensaje("Ingrese un numero mayor a cero");
        setEntero(0);
        return;
      }
    } else {
      setError(true);
      setMensaje("Caracter no valido");
      setEntero(0);
      return;
    }
  };

  // calcular serie fibonacci
  const calcularSerie = (e) => {
    e.preventDefault();

    //Validar
    if (entero < 1 || isNaN(entero)) {
      setError(true);
      setMensaje("Caracter no valido");
      setFibonacci([]);
      return;
    }

    const array = [0, 1];
    // calcular
    for (let i = 2; i <= entero; i++) {
      array.push(array[i - 1] + array[i - 2]);
    }
    array.shift();
    setFibonacci(array);
    setCerrar(true);
  };

  return (
    <Fragment>
      <h2>SERIE FIBONACCI</h2>

      <form className="formulario" onSubmit={calcularSerie}>
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
            /* value={entero} */
            onChange={(e) => validarError(parseInt(e.target.value))}
          />
          {error ? (
            <h6 className="font-weight-bolder text-danger">{mensaje}</h6>
          ) : null}
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-outline-primary">
              Calcular
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
          <h3>Serie Fibonacci de {entero}</h3>
        </ModalHeader>
        <ModalBody className="container">
          <div className="row alert alert-info">
            {fibonacci
              ? fibonacci.map((num, index) => (
                  <div className="col-md-2 listado" key={index}>
                    <li className="listas">{num}</li>
                  </div>
                ))
              : null}
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default SerieFibonacci;
