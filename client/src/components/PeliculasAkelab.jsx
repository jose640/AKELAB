import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Filter from "../imagenes/Filter Icon.png";
import Arrow from "../imagenes/Arrow Icon.png";
import Vector from "../imagenes/Vector.png";
import Card from "./Card";
import { obtenerPeliculas } from "../redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const PeliculasAkelab = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const peliculas = useSelector((store) => store.peliculas.pelicula);

  //Crear States
  const [dropdown, setDropdown] = useState(false);
  const [dropdownOrdenar, setDropdownOrdenar] = useState(false);
  const [arrOrdenado, setArrOrdenado] = useState([]);
  const [actualizar, setActualizar] = useState(false);

  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  };

  const abrirCerrarDropdownOrdenar = () => {
    setDropdownOrdenar(!dropdownOrdenar);
  };

  const ordenar = (e) => {
    switch (e) {
      case "Nue-Anti":
        setArrOrdenado(
          peliculas.results.sort((a1, a2) => Date.parse(a2.release_date) < Date.parse(a1.release_date))
        );
        console.log(arrOrdenado);
        setActualizar(true);
        break;
      case "Anti-Nue":
        setArrOrdenado(
          peliculas.results.sort((a1, a2) => Date.parse(a1.release_date) > Date.parse(a2.release_date))
        );
        console.log(arrOrdenado);
        setActualizar(true);
        break;
      case "Ascendente":
        setArrOrdenado(
          peliculas.results.sort((a1, a2) => a1.vote_average - a2.vote_average)
        );
        setActualizar(true);
        break;
      case "Descendente":
        setArrOrdenado(
          peliculas.results.sort((a1, a2) => a2.vote_average - a1.vote_average)
        );
        setActualizar(true);
        break;
      default:
        break;
    }
  };

  /* useEffect(() => {
    dispatch(obtenerPeliculas());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  return (
    <Fragment>
      <div className="peliculas">
        <nav>
          <div className="d-flex flex-row-reverse">
            <button
              className="btn btn-outline-danger"
              onClick={() => navigate(`/`)}
            >
              X
            </button>
          </div>
          <div>
            <h3>Películas</h3>
          </div>
          <div className="d-flex flex-row">
            <div>
              <form className="d-flex flex-row">
                <input type="search" className="input-search" />
                <button className="btn-search">
                  <img src={Vector} alt="Vector" />
                </button>
              </form>
            </div>

            <Dropdown
              className="dropdown"
              isOpen={dropdown}
              toggle={abrirCerrarDropdown}
            >
              <DropdownToggle data-toggle="dropdown" tag="span">
                <img src={Filter} alt="Filter" />
              </DropdownToggle>
              <DropdownMenu>
                <div className="overflow-auto">
                  <DropdownItem header>Genero</DropdownItem>
                  <DropdownItem>
                    {/* {peliculas.length > 0
                      ? peliculas.genres.map((gen) => (
                          <div
                            className="custom-control custom-checkbox"
                            key={gen.id}
                          >
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id={gen.id}
                            />
                            <label
                              className="custom-control-label"
                              for={gen.id}
                            >
                              {gen.name}
                            </label>
                          </div>
                        ))
                      : null} */}
                  </DropdownItem>
                </div>
              </DropdownMenu>
            </Dropdown>
            <div className="d-flex flex-row">
              <div className="ordenar">
                <h6>Ordenar</h6>
              </div>

              <Dropdown
                className="dropdown-ordenar"
                isOpen={dropdownOrdenar}
                toggle={abrirCerrarDropdownOrdenar}
                size="sm"
              >
                <DropdownToggle data-toggle="dropdown" tag="span">
                  <img src={Arrow} alt="Arrow" id="imagenArrow" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Fecha</DropdownItem>
                  <DropdownItem
                    name="Nue-Anti"
                    onClick={(e) => ordenar(e.target.name)}
                  >
                    Nuevas - Antiguas
                  </DropdownItem>
                  <DropdownItem
                    name="Anti-Nue"
                    onClick={(e) => ordenar(e.target.name)}
                  >
                    Antiguas - Nuevas
                  </DropdownItem>
                  <DropdownItem header>Calificación</DropdownItem>
                  <DropdownItem
                    name="Ascendente"
                    onClick={(e) => ordenar(e.target.name)}
                  >
                    0 - 10 Puntos
                  </DropdownItem>
                  <DropdownItem
                    name="Descendente"
                    onClick={(e) => ordenar(e.target.name)}
                  >
                    10 - 0 Puntos
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </nav>
        <div className="row d-flex align-items-stretch">
          { actualizar && arrOrdenado ? 
                arrOrdenado.results.map((peli) => (
                    <div className="col-4" key={peli.id}>
                      <Card
                        nombre={peli.title}
                        ano={peli.release_date}
                        imagen={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`}
                        texto={peli.overview}
                        titulo={peli.title}
                        calificacion={peli.vote_average}
                        genero={peli.genre_ids}
                        fecha={peli.release_date}
                      />
                    </div>
                  )):
            peliculas
              ? peliculas.results.map((peli) => (
                  <div className="col-4" key={peli.id}>
                    <Card
                      nombre={peli.title}
                      ano={peli.release_date}
                      imagen={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`}
                      texto={peli.overview}
                      titulo={peli.title}
                      calificacion={peli.vote_average}
                      genero={peli.genre_ids}
                      fecha={peli.release_date}
                    />
                  </div>
                ))
              : null
          }
        </div>
      </div>
    </Fragment>
  );
};

export default PeliculasAkelab;
