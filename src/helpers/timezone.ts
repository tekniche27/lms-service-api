const moment = require('moment'); 

const timezone = (selectedTimeZone: any) => 
{
  let currentDateTime = moment(new Date());
  return currentDateTime.tz(selectedTimeZone).format("YYYY-MM-DD HH:mm:ss");  
}

export default timezone;