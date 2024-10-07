import pool from '../config/db';


const findByUserId = async (userId: any) => {

    let conn: any;
    try 
    {
      
      conn = await pool.getConnection();

              const rows = await conn.query(`SELECT a.userId, a.userName, a.password, a.userRole FROM lms.users a WHERE a.userId=? LIMIT 1;`, [userId]);

              if(rows)
              {
                  if(rows && rows[0].length>0)
                  {
                    let result = rows[0];
                    return result;
                  }
              }

     } 

    catch(err) 
    {
      throw err;
    }

    finally 
    {
      if (conn)
      conn.end(); 
  
      if (conn)
      conn.release();
    }

};


export default { findByUserId };
