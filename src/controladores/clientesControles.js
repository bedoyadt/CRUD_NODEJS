//el nombre dela conection en = [conn]
//6 paso
const controller = {};
//6 paso
//controlador listar 
controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM registro', (err, cliente) => {
            if (err) {
                res.json(err);
            }
            //aqui va el console.log por sino en lista
            //console.log(clientes);
            res.render('cliente', {
                data: cliente
            });
        });
    });
};
//8 paso
//controlador de guardar los datos
//customer se puede cambiar denombre al que quieras
controller.save = (req, res) => {
    const data = req.body;
    //console.log(req.body)
    req.getConnection((err, conn) => {
        const query = conn.query('INSERT INTO registro set ?', data, (err, customer) => {
            //console.log(customer);
            //res.send('hola'); para ver siestaguardando los datos
            res.redirect('/');
        });
    });
};
//9 paso
//params es para resivir el dato por la cual se va aeliminar osea que es el id
controller.delete = (req, res) => {
    const { Id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM registro WHERE Id = ?', [Id], (err, rows) => {
            res.redirect('/');
        });
    });
};
//10 paso
//para que le lleve los datos al formulario editar
// [const { id } = req.params] es para que melo traiga el id en un odjecto
//para poder odtener los datos nesecito octener el [ID] para eso es la consulta [const { id } = req.params]
controller.edit = (req, res) => {
    const { Id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM registro WHERE Id = ?", [Id], (err, rows) => {
            //para que me lleve al formulario editar
            res.render('clientes_editar', {
                data: rows[0]
            })
        });
    });
};

//11 paso
controller.update = (req, res) => {
    //para poder odtener los datos nesecito octener el [ID] para eso es la consulta [const { Id } = req.params]
    const { Id } = req.params;
    //estoy resiviendo los campos del formulario
    const resiviendoLosCampos = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE registro set ? WHERE Id = ?', [resiviendoLosCampos, Id], (err, rows) => {
            //redirect espara rendisar acia una vista
            res.redirect('/');
        });
    });
};

//6 paso
module.exports = controller;