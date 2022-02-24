import Start3 from "../imagenes/Star 3.png";
import Start5 from "../imagenes/Star 5.png";
import { useSelector } from "react-redux";


const Card = ({
  nombre,
  ano,
  imagen,
  texto,
  titulo,
  calificacion,
  genero,
  fecha,
}) => {

    const peliculas = useSelector((store) => store.peliculas.pelicula);




  return (
    <div className="card-1">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card mt-4">
            <div className="container pruduct-1 align-items-center p-2">
              <div className="align-items-center ml-1">
                <h5>
                  {nombre}({ano.split("-")[0]})
                </h5>
              </div>
              <div className="row ">
                <div className="col-md-4 m-1">
                  <img
                    className="rounded"
                    src={imagen}
                    alt=""
                    height="280"
                    width="140"
                  />
                </div>
                <div className="col-md-7 ml-4">
                  <div className="text-sm-left">
                    <div className="mb-4">
                      <span className="text-justify">
                        {texto.slice(0, 367)}
                      </span>
                    </div>
                    <div className="d-flex flex-row">
                      <h6 className="small font-weight-bold mr-2">Titulo: </h6>
                      <span className="text-capitalize">{titulo}</span>
                    </div>
                    <div className="d-flex flex-row">
                      <h6 className="font-weight-bold mr-2">Calificacion:</h6>
                      <span>{calificacion}</span>
                      <div className="d-flex align-items-start ml-2 ">
                      <img src={Start3} alt="Start" />
                      <img src={Start3} alt="Start" /> 
                      <img src={Start3} alt="Start" /> 
                      <img src={Start3} alt="Start" /> 
                      <img src={Start5} alt="Start" /> 
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <h6 className="font-weight-bold mr-2">Genero:</h6>
                     {
                          peliculas
                          // eslint-disable-next-line array-callback-return
                          ? peliculas.genres.map((gen) => {
                            for(let id of genero){
                                if(id === gen.id){
                                    return (
                                        <span className="text-capitalize" key={gen.id}>{gen.name},</span>
                                        );
                                }
                            }
                        }):null}
                    </div>
                    <div className="d-flex flex-row">
                      <h6 className="font-weight-bold mr-2">Fecha de realización:</h6>
                      <span className="text-capitalize">{fecha}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
