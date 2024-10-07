import bcrypt from 'bcryptjs';

const checkPassword  = (string:any, hash:any) => 
{
  return new Promise((resolve, error) => 
  {
    bcrypt.compare(string, hash, (err, success) => 
    {
        if (err) { return error(err) }
        resolve(success)
    })

  })

 }

export default checkPassword;