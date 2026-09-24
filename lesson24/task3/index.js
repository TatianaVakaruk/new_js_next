const getDiff = (date1, date2) => {
 let  date = Math.abs(date1.getTime() - date2.getTime());
  const MS_IN_SECOND = 1000;
  const MS_IN_MINUTE = MS_IN_SECOND * 60;
  const MS_IN_HOUR = MS_IN_MINUTE * 60;
  const MS_IN_DAY = MS_IN_HOUR * 24;

  
  const days = Math.floor(date / MS_IN_DAY);
  date %= MS_IN_DAY;

  
  const hours = Math.floor(date / MS_IN_HOUR);
  date %= MS_IN_HOUR;

  
  const minutes = Math.floor(date / MS_IN_MINUTE);
  date %= MS_IN_MINUTE;

  
  const seconds = Math.floor(date / MS_IN_SECOND);

 
  return `days: ${days} hours: ${hours} minutes: ${minutes} seconds: ${seconds}`;
}

console.log(getDiff(new Date('2026, 01, 15'), new Date('2028, 01, 10')));