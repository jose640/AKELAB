const routes = require("express").Router();
const data = require("../Movies.json");

routes.get("/", (req, res) => { 
    res.status(404).send({Error: "No se encontro el recurso solicitado"});
    console.log("No se encontro el recurso solicitado");
});

routes.get("/:Akelab", (req, res) => {
    const Akelab = req.params.Akelab;

    try {
        if(parseInt(Akelab) === 123456789) {
            res.status(200).send(data);
            console.log("Envio exitoso");
        }else {
            res.status(422).send({Error: "Parametros no validos"});
            console.log("Parametros no validos");
        }
      } catch (error) {
          res.status(500).send({Error: "Problemas con el servidor"});
          console.log(error);
        
      }
  
  });

  routes.get("/:Akelab/:parametro", (req, res) => { 
      const parametro = req.params.parametro;
      if(parametro) {
        res.status(404).send({Error: "No se encontro el recurso solicitado"});
        console.log("No se encontro el recurso solicitado");
      }
    
});
  
  module.exports = routes;