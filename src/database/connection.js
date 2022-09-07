import sql from 'mssql';

const dbSettings = {
    user: 'abela',
    password: 'root',
    server: 'LocalHost',
    database: 'Historial_Consumo_Agua',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

export const getConnection = async () => {
    try {
      const pool = await sql.connect(dbSettings);
      return pool;
    } catch (error) {
      console.error(error);
    }
  };
  
  export { sql };