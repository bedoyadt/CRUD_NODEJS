//1 paso
const express = require('express');
//2 paso
const path = require('path');
//3 paso
const morgan = require('morgan');
//3 paso
const mysql = require('mysql');
//3 paso
const myconnection = require('express-myconnection');

//1 paso
const servidor = express();

//inportando rutas
//4 paso
const customerRouter = require('./rutas/clientes');

//1 paso
//ajustes del servido
servidor.set('port', process.env.PORT || 4000);
//paradesirle donde estan las vistas
//2 paso
servidor.set('views', path.join(__dirname, 'views'));
//2 paso
servidor.set('view engine', 'ejs');


//middiewares
//3 paso
servidor.use(morgan('dev'));
//3 paso
servidor.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'bedoya701',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'));
//8 paso
//el metodo es parar poder resivir los datos del formulario
//para poder entender los datos del formulario; los campos del formulario
servidor.use(express.urlencoded({ extended: false }));

//rutas
//4 paso
servidor.use('/', customerRouter);


//archivos estaticos o css js 
//5 paso
servidor.use(express.static(path.join(__dirname, 'puclic')));


//1 paso
//servodor
servidor.listen(servidor.get('port'), () => {
    console.log('sevidor en el portal 4000');
});