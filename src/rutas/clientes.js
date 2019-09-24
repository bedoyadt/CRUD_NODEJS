//todas las URL del forney que nos pueede mandar
//4 paso
const express = require('express');
//4 paso
const router = express.Router();

//6 paso
//para traer el controladores
const clientesControles = require('../controladores/clientesControles');

//6 paso
router.get('/', clientesControles.list);
//8 paso
//para poder resivir los datos del formulario
//y pasar sselos al controlador
router.post('/Guardar', clientesControles.save);
//9 paso
//eliminar clientes de la basededatos
router.get('/delete/:Id', clientesControles.delete);
//10 paso
//editar la informacion
router.get('/update/:Id', clientesControles.edit);
//11 paso
//para el boton que cuando le dew actualizar actile el formulario
router.post('/update/:Id', clientesControles.update);
//4 paso
//para es portar las rutas
module.exports = router;