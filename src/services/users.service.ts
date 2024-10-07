import usersDb from '../db/users.db';

const findByUserId = async(userId:any) => {

    try 
    {
        let data: any = await usersDb.findByUserId(userId);

        if(!data)
        {
            return { status: 401, message: 'Invalid user id'};
        }
  
        return data;
    }
    catch (error) 
    {
       throw error;
    }
}

export default { findByUserId };