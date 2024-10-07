require('dotenv').config();
const mariadb = require('mariadb');

const pool = mariadb.createPool({
host: process.env.DB_HOST, 
user: process.env.DB_USERNAME,   
password: process.env.DB_PASSWORD,
port: process.env.DB_PORT,
multipleStatements: true,
metaAsArray: true,
connectTimeout: 99999,
socketTimeout: 0,
maxAllowedPacket: 1073741824,
dateStrings:true
});


let checkConnection = async () => 
{

    let conn: any;
    try {
        conn = await pool.getConnection();
       
      } 
      catch (err) 
      {
        console.log("Connection Error Message: ", err);
        throw err;
      } 
      finally 
      {
        if (conn) 
        conn.end();
      }
}

//checkConnection();

export default pool;


