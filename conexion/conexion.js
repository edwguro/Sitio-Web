const mysql = require ('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ventas'
})

connection.connect(
    (err)=>{
        if (!err){console.log("Conexion Exitosa la DB");}
        else {console.log("Error al conectar DataBase ");}
    } 
);
module.exports=connection;

/*connection.query('SELECT * FROM tblproductos', function (err, resultados)  {
console.log(resultados);
});
*/
//connection.end();