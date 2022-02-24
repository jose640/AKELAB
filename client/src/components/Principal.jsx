import { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { obtenerPeliculas } from "../redux";

const Principal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const peliculas = useSelector((store) => store.peliculas.pelicula);

  //Crear State
  const [validarId, setValidarId] = useState("");
  const [abrirModal, setAbrirModal] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //Funcion para validar el Id
  const sumitValidar = (e) => {
    e.preventDefault();
    setEnviado(true);

    if (validarId.trim() === "") {
      setError(true);
      setLoading(false);
      return;
    } else {
      setLoading(true);
      dispatch(obtenerPeliculas(validarId));
      setValidarId("");
    }
  };

  /* const redireccion = () => {
    navigate(`/peliculas_akelab`);
    setEnviado(false);
  } */

  /*  useEffect(() => {
    setError(false);
  }, [validarId]); 
 */
  console.log(peliculas);

  return (
    <Fragment>
      <div className="contenido-principal contenido">
        <h2>¡Enfrentando Adversidades!</h2>
        <div className="d-flex justify-content-around">
          <div className="item">
            <Link
              to={"/serie_fibonacci"}
              className="btn btn-outline-primary item-btn"
            >
              Serie Fibonacci
            </Link>
          </div>
          <div className="item">
            <Link to={"/ake-lab"} className="btn btn-outline-primary item-btn">
              Ake-lab
            </Link>
          </div>
          <div className="item">
            <button
              className="btn btn-outline-primary item-btn"
              onClick={() => {
                setAbrirModal(true);
                setEnviado(false);
              }}
            >
              Peliculas Akelab
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={abrirModal}>
        <ModalHeader className="row cabecera">
          <div className="d-flex flex-row-reverse">
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                setAbrirModal(false);
                setValidarId("");
                setLoading(false);
                setError(false);
              }}
            >
              X
            </button>
          </div>
          Validacion de Usuario
        </ModalHeader>
        <ModalBody className="container">
          <form onSubmit={sumitValidar}>
            <div className="formulario-modal">
              <label className="font-weight-bold">Ingrese ID</label>
              <input
                type="text"
                className="form-control formulario-input"
                placeholder="0"
                value={validarId}
                onChange={(e) => {
                  setValidarId(e.target.value);
                  setEnviado(false);
                  setLoading(false);
                  setError(false);
                }}
              />
              { !error && enviado && peliculas.length === 0 ? (
                <h6 className="font-weight-bolder text-danger">
                  Id incorrecta
                </h6>
              ) : error && enviado && !validarId ? (
                <h6 className="font-weight-bolder text-danger">
                  Campo requerido
                </h6>
              ) : peliculas.length !== 0 && enviado ? (
                navigate(`/peliculas_akelab`)
              ) : null}
            </div>

            <div className="form-group d-flex">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-outline-primary">
                  Validar
                </button>
              </div>
              <div>
                 {loading ? (
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ):null
              }
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default Principal;
