const mysql=require('mysql'); 
const connection=mysql.createConnection({
    host: process.env.DB_HOST,
    client:process.env.DB_CLIENT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((error)=>{
    if(error){
        console.log('El error de conexión es: '+error)
        return;
    }
    console.log('Lograste conectarte a la base de datos')
});
module.exports= connection;