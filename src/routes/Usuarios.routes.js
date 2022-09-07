import {Router} from "express";
import {LoginyRegister, RegistrarUsuario,UsuarioAdministrador,CrearRegistrarUsuario , UsuarioDefault, InformacionTHUsuarioDefault, InformacionTHUsuarioAdministrador, ConfiguracionEliminarUsuarioById, Login, Configuracion,EditarUsuario, EditarTarifas,ActualizarUsuario, CalcularConsumo, HOME, InformacionTHUsuarioAdministradorEliminareUsuarioById, CrearUsuario, InformacionTHUsuarioDefaultHistorialByFecha, InformacionTHUsuarioAdministradorHistorialByFecha} from "../controllers/Usuarios.Controller";

const router = Router();

router.get("/", HOME);

//Ruta para pagina de formularios de Login y Register
router.get("/Login&Register", LoginyRegister);

//Ruta para pagina de Inicio de Administrador
router.get("/UsuarioAdministrador", UsuarioAdministrador);

//Ruta para pagina de Inicio de usuarios defaults
router.get("/UsuarioDefault", UsuarioDefault);

//Ruta para pagina de Inicio de usuarios defaults
router.post("/Calculadora", CalcularConsumo);

//Ruta para pagina de Inicio de usuarios defaults de tabla de historial y Tarifas
router.get("/InformacionTHUsuarioDefault", InformacionTHUsuarioDefault);

//Ruta para pagina de Inicio de usuarios defaults de tabla de historial formulario fecha
router.post("/InformacionTHUsuarioDefault/Historial/ByFecha", InformacionTHUsuarioDefaultHistorialByFecha);

//Ruta para pagina de Inicio de usuarios Administrador de tabla de historial y Tarifas
router.get("/InformacionTHUsuarioAdministrador", InformacionTHUsuarioAdministrador);

//Ruta para pagina de Inicio de usuarios defaults de tabla de historial formulario fecha
router.post("/InformacionTHUsuarioAdministrador/Historial/ByFecha", InformacionTHUsuarioAdministradorHistorialByFecha);

//Ruta para eliminar Tarifas con el id
router.get("/InformacionTHUsuarioAdministrador/:ID", InformacionTHUsuarioAdministradorEliminareUsuarioById);

//Ruta para Editar Tarifas con el id
router.get("/Configuracion/Editar/:ID", EditarTarifas);

//Ruta para pagina de Configuracion de usuarios Administrador de tabla de Usuarios y mas tablas
router.get("/Configuracion", Configuracion);

//Ruta para pagina de usuarios Administrador Configuracion Editar tabla de Usuarios y mas tablas
router.get("/Configuracion/Editar/:ID", EditarUsuario);

//Ruta para pagina de usuarios Administrador Configuracion Actualizar tabla de Usuarios y mas tablas
router.post("/Configuracion/Editar/Actualizar", ActualizarUsuario);

//Ruta para eliminar Usuarios con el id
router.get("/Configuracion/Eliminar/:ID", ConfiguracionEliminarUsuarioById);

//Ruta para Crear Usuarios
router.get("/Configuracion/Crear", CrearUsuario);

//Ruta para registrar nuevo usuario
router.post("/Registrar", RegistrarUsuario);

//Ruta para create nuevo usuario
router.post("/Configuracion/Crear/Registrar", CrearRegistrarUsuario);


//Ruta para registrar nuevo usuario
router.post("/Login", Login);

export default router;