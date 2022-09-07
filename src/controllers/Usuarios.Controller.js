import bcryptjs from "bcryptjs";
const Passport = require('passport');
import { getConnection, querys, sql } from "../database";

//
export const LoginyRegister = async (req, res) => {
    res.render('Login&Register');
    };


export const UsuarioAdministrador = async (req, res) => {
    const { aguam3, TarifasPrecio, resultmul } = req.body;
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllTarifas);
    const r=0;
    res.render('UsuarioAdministrador',{
        result,
        r
    });
    };

export const UsuarioDefault = async (req, res) => {
    const { aguam3, TarifasPrecio, resultmul } = req.body;
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllTarifas);
    const r=0;
    res.render('UsuarioDefault',{
        result,
        r,
    });
    };

    export const HOME = async (req, res) => {
        res.render('Login&Register');
        };

export const CalcularConsumo = async (req, res) => {
    const { aguam3, TarifasPrecio } = req.body;
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllTarifas);
    function multiplicar() {
        const m1 = aguam3;
        const m2 = TarifasPrecio;
        const r = m1*m2;
        console.log(r);
        res.render('UsuarioDefault',{
            r,
            result,
        });
    }
    console.log(multiplicar());   
    };

export const InformacionTHUsuarioDefault = async (req, res) => {
    const pool = await getConnection();
    const Tarifas = await pool.request().query(querys.getAllTarifas);
    const Historial = await pool.request().query(querys.getAllHistorial);
    res.render('InformacionTHUsuarioDefault',{
        Tarifas,
        Historial
    });
    };


    export const InformacionTHUsuarioDefaultHistorialByFecha = async (req, res) => {
        const {fecha} = req.body;
        const pool = await getConnection();
        const Tarifas = await pool.request().query(querys.getAllTarifas);
        const Historial = await pool
        .request()
        .input("fecha", sql.Date, fecha)
        .query(querys.selectHistorialByFecha);
        res.render('InformacionTHUsuarioDefault',{
            Tarifas,
            Historial
        });
        };
        

//configuracion donde se miraran todos los usuarios registrados
export const InformacionTHUsuarioAdministrador = async (req, res) => {
    const pool = await getConnection();
    const Tarifas = await pool.request().query(querys.getAllTarifas);
    const Historial = await pool.request().query(querys.getAllHistorial);
    res.render('InformacionTHUsuarioAdministrador',{
        Tarifas,
        Historial
    });
};

export const InformacionTHUsuarioAdministradorHistorialByFecha = async (req, res) => {
    const {fecha} = req.body;
    const pool = await getConnection();
    const Tarifas = await pool.request().query(querys.getAllTarifas);
    const Historial = await pool.request().query(querys.getAllHistorial);
    if (fecha == "") {
        res.render('InformacionTHUsuarioAdministrador',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "¡No se puede dejar los campos vacios!",
            alertIcon: 'error',
            showConfirmButton:false,
            timer:2500,
            ruta:'',
            Tarifas,
            Historial

        });
    } else{
        const pool = await getConnection();
    const Tarifas = await pool.request().query(querys.getAllTarifas);
    const Historial = await pool
    .request()
    .input("fecha", sql.Date, fecha)
    .query(querys.selectHistorialByFecha);
    res.render('InformacionTHUsuarioAdministrador',{
        Tarifas,
        Historial
    });
    }
    
    };

    //configuracion donde se miraran todos los usuarios registrados
    export const Configuracion = async (req, res) => {
        const pool = await getConnection();
        const Usuarios = await pool
        .request()
        .query(querys.getAllUsuarios);
        res.render('Config',{
            Usuarios
        });
        };  

    //Ruta para editar los registros de usuarios
    export const EditarUsuario = async (req, res) => {
        const {ID} = req.params;    
        const pool = await getConnection();
        const result1 = await pool
            .request()
            .input("ID", req.params.ID)
            .query(querys.selectUsuarioById);
            res.render('Editar',{
                result1
            });
        };


    //Ruta para editar los registros de Tarifas
    export const EditarTarifas = async (req, res) => {
        const {ID} = req.params;    
        const pool = await getConnection();
        const result1 = await pool
            .request()
            .input("ID", req.params.ID)
            .query(querys.selectUsuarioById);
            res.render('Editar',{
                result1
            });
        };

    //Ruta para editar los registros de Tarifas
    export const CrearUsuario = async (req, res) => {
            res.render('Crear');
        };



export const RegistrarUsuario = async (req, res) => {
    const { Nombre, ApellidoPa, ApellidoMa, NumTel, Direccion, Sexo, Password, Password2} = req.body;
    let ex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)(\.zw{2,3,4})+$/;
    const expresion_regular = /^[0-9] {5} $/;
    let passswordHaash = await bcryptjs.hash(Password, 8);


    if (Nombre == "" || ApellidoPa == "" || ApellidoMa == "" || NumTel == "" || Direccion == "" || Sexo == "" || Password == "" || Password2 == "") {
        res.render('Login&Register',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "¡No se puede dejar los campos vacios!",
            alertIcon: 'error',
            showConfirmButton:false,
            timer:2500,
            ruta:''
        });
    }else if (Password !== Password2) {
        res.render('Login&Register',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "!Las contraseñas no coinciden¡",
            alertIcon: 'error',
            showConfirmButton:false,
            timer:2500,
            ruta:''
        });
        
    } 
    
     //validando que no entren letras en el Nombre
     else if (Nombre.match(/[0-9]/g) || Nombre.length <= 3) {
        res.render('Login&Register',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "¡El nombre no puede contener digitos y su longitud tiene que ser mayor de 3 caracteres!",
            alertIcon: 'error',
            showConfirmButton:false,
            timer:2500,
            ruta:''
        });
    }
    //validando que no entren letras en el Apellido
    else if (ApellidoPa.match(/[0-9]/g) || ApellidoPa.length <= 3) {
        res.render('Login&Register',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "¡El apellido no puede contener digitos y su longitud tiene que ser mayor de 3 caracteres!",
            alertIcon: 'error',
            showConfirmButton:false,
            timer:2500,
            ruta:''
        });
    }
    //que cumplan con tener letras, digitos y que tengas mas de 8 caracteres 
    else if (Password.length <= 8 || Password.search(/\w/)) {
        res.render('Login&Register',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "¡su contraseña debe de tener al menos 8 caracteres, mayuscula, minuscula y numeros",
            alertIcon: 'error',
            showConfirmButton:false,
            timer:2500,
            ruta:''
        });
    }
    else{
        try {
            const pool = await getConnection();
            
            await pool
                .request()
                .input("Nombre", sql.VarChar, Nombre)
                .input("ApellidoPa", sql.VarChar, ApellidoPa) 
                .input("ApellidoMa", sql.VarChar, ApellidoMa)
                .input("NumTel", sql.VarChar, NumTel)
                .input("Direccion", sql.VarChar, Direccion)
                .input("Sexo", sql.Char, Sexo)
                .input("Password", sql.VarChar, Password)
                .query(querys.addNewUsuario);
        
        res.render('Login&Register',{
            alert: true,
            alertTitle: "Registrado",
            alertMessage: "!Registro Exitoso¡",
            alertIcon: 'success',
            showConfirmButton:false,
            timer:1500,
            ruta:''
        });
           } catch (error) {
            res.status(500);
            res.send(error.message);
           }
        }
};

export const CrearRegistrarUsuario = async (req, res) => {
    const { id, nombre, apellidopa, apellidoma, direccion, numtel, sexo, password, rango} = req.body;
    let ex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)(\.zw{2,3,4})+$/;
    const expresion_regular = /^[0-9] {5} $/;


    if (id == "" || nombre == "" || apellidopa == "" || apellidoma == "" || direccion == "" || numtel == "" || sexo == "" || password == "" || rango == "") {
        res.render('Crear',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "¡No se puede dejar los campos vacios!",
            alertIcon: 'error',
            showConfirmButton:false,
            timer:2500,
            ruta:''
        });
    }
    else{
        try {
            const pool = await getConnection();
            
            await pool
                .request()
                .input("id", sql.Int, id)
                .input("nombre", sql.VarChar, nombre)
                .input("apellidopa", sql.VarChar, apellidopa) 
                .input("apellidoma", sql.VarChar, apellidoma)
                .input("direccion", sql.VarChar, direccion)
                .input("numtel", sql.Int, numtel)
                .input("sexo", sql.Char, sexo)
                .input("password", sql.VarChar, password)
                .input("rango", sql.Char, rango)
                .query(querys.usuariosPA);
        
        res.render('Crear',{
            alert: true,
            alertTitle: "Registrado",
            alertMessage: "!Registro Exitoso¡",
            alertIcon: 'success',
            showConfirmButton:false,
            timer:1500,
            ruta:''
        });
           } catch (error) {
            res.status(500);
            res.send(error.message);
           }
        }
};


/* Actualizar datos de tabla de usuarios ya registrados*/
export const ActualizarUsuario = async (req, res) => {
    const {ID,Nombre, ApellidoPa, ApellidoMa, NumTel, Direccion, Sexo, Password } = req.body;
    let passswordHaash = await bcryptjs.hash(Password, 8);
    //validacion
    if ( ID == null || Nombre == null || ApellidoPa == null || ApellidoMa == null || NumTel == null || Direccion == null || Sexo == null || Password == null) {
        res.render('Editar',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "¡No se puede dejar los campos vacios!",
            alertIcon: 'error',
            showConfirmButton:false,
            timer:2500,
            ruta:''
        });
    }

   try {
    const pool = await getConnection();
   await pool
        .request()
        .input("ID", sql.Int, ID)
        .input("Nombre", sql.VarChar, Nombre)
        .input("ApellidoPa", sql.VarChar, ApellidoPa) 
        .input("ApellidoMa", sql.VarChar, ApellidoMa)
        .input("NumTel", sql.VarChar, NumTel)
        .input("Direccion", sql.VarChar, Direccion)
        .input("Sexo", sql.Char, Sexo)
        .input("Password", sql.VarChar, Password)
        .query(querys.uptdateUsuarioById);
        res.redirect('/Configuracion');
   } catch (error) {
    res.status(500);
    res.send(error.message);
   }
};

export const InformacionTHUsuarioAdministradorEliminareUsuarioById = async (req, res) => {
    const {ID} = req.params;    
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("ID", req.params.ID)
        .query(querys.deleteUsuario);
        res.redirect('/InformacionTHUsuarioAdministrador');
};

export const ConfiguracionEliminarUsuarioById = async (req, res) => {
    const {ID} = req.params;    
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("ID", req.params.ID)
        .query(querys.deleteUsuario);
        res.redirect('/Configuracion');
};


export const Login = async (req, res) => {
    const { Nombre, Password } = req.body;
    //validacion
    if (Nombre == "" || Password == "") {
        res.render('Login&Register',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "¡No se puede dejar los campos vacios!",
            alertIcon: 'error',
            showConfirmButton:false,
            timer:2500,
            ruta:''
        });
    }

   try {
            const pool = await getConnection();
            const result = await pool.request().query(querys.getAllTarifas);
            const r=0;
            const rows = await pool
            .request()
            .input("Nombre", sql.VarChar, Nombre)
            .input("Password", sql.VarChar, Password)
            .query(querys.loginusuario);
            if (rows.recordset.length != "") {
                res.render('UsuarioDefault',{
                    result,
                    r,
                        alert: true,
                        alertTitle: "Has iniciado sesscion",
                        alertMessage: "!Login Exitoso¡",
                        alertIcon: 'success',
                        showConfirmButton:false,
                        timer:1500,
                        ruta:''
                });
            } else {
                res.render('Login&Register',{
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "!Cuenta no existente¡",
                    alertIcon: 'error',
                    showConfirmButton:false,
                    timer:1500,
                    ruta:''
                });
            }
        } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};