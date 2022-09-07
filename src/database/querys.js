import { RegistrarUsuario } from "../controllers/Usuarios.Controller";

export const querys  ={
    getAllUsuarios12: "select * from Usuario",
    /* OBTENER TOTAL DE USUARIOS */
    getAllUsuarios: "SELECT * FROM Usuarios",
    /* OBTENER TOTAL DE TARIFAS */
    getAllTarifas: "SELECT * FROM Tarifas",
    /* OBTENER TOTAL DE Historial */
    getAllHistorial: "SELECT * FROM HistorialA",

    usuariosPA: "EXECUTE SP_InsertUsuario @opcion=1, @id=@id, @nombre=@nombre, @apellidopa=@apellidopa, @apellidoma=@apellidoma, @direccion=@direccion, @numtel=@numtel, @sexo=@sexo, @password=@password, @rango=@rango",

    /* CREAR USUARIO*/
    addNewUsuario: "INSERT INTO Usuarios (Nombre, ApellidoPa, ApellidoMa, NumTel, Direccion, Sexo, Password) VALUES (@Nombre, @ApellidoPa, @ApellidoMa, @NumTel, @Direccion, @Sexo, @Password)",
    
    /*Seleccionar Usuario por el id*/
    selectUsuarioById: "SELECT * FROM [Historial_Consumo_Agua].[dbo].[Usuarios] WHERE ID = @ID",
    /*Seleccionar Tarifa por el id*/
    selectTarifaById: "SELECT * FROM [Historial_Consumo_Agua].[dbo].[Tarifas] WHERE IDtarifa = @IDtarifa",
    /*Seleccionar Historial por el id*/
    selectHistorialByFecha: "SELECT * FROM [Historial_Consumo_Agua].[dbo].[HistorialA] WHERE fecha = @fecha",

    /* ELIMINAR USUARIO CON ID*/
    deleteUsuario: "DELETE FROM [Historial_Consumo_Agua].[dbo].[Usuarios] WHERE ID = @ID",
    /*Seleccionar Tarifa por el id*/
    deleteTarifaById: "DELETE * FROM [Historial_Consumo_Agua].[dbo].[Tarifas] WHERE IDtarifa = @IDtarifa",
    /*Seleccionar Historial por el id*/
    deleteTarifaById: "DELETE * FROM [Historial_Consumo_Agua].[dbo].[HistorialA] WHERE id = @id",

    getTotalProducts: "SELECT COUNT(*) FROM alumno",
    
    /* ACTUALIZAR USUARIO CON ID*/
    uptdateUsuarioById: "UPDATE Usuarios SET Nombre=@Nombre, ApellidoPa=@ApellidoPa, ApellidoMa=@ApellidoMa, Direccion=@Direccion, NumTel=@NumTel, Sexo=@Sexo, Password=@Password WHERE ID = @ID",
    
    /* Inicio de sesion USUARIO*/
    loginusuario: "SELECT * FROM Usuarios WHERE Nombre=@Nombre and Password=@Password"
}
