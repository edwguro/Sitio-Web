var express = require('express');
var router = express.Router();
var db= require("../conexion/conexion");

//GET seccion productos (productos.ejs)
router.get('/', function(req, res, next) {

    db.query('SELECT * FROM tblproductos', function (err, resultados)  {
    console.log(resultados);
    res.render('productos', { title: 'NUESTROS EJEMPLARES',Ejemplares:resultados });
    });


     
});

module.exports = router;
