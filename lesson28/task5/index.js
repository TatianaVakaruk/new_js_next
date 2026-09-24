const delay = () => {
    return  Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
}
const delayOfSecond = delay();

const requestUserData = (userId, callback) => {
  if(userId === 'broken'){
   return callback( 'Failed to load user data', null);
  } else {
 return setTimeout(function(){
   callback(null, {
        userId,
        email: `${userId}@example.com`,
      })
  }, delayOfSecond)
}
};
const dataUser =  (error, user)=>{
    if (error) {
    console.log(error); 
  } else { 
   console.log(user);
  }
    }
    requestUserData(95, dataUser);
