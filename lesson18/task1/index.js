const event = {
    message: "Welcome to the party!",
    guests: [
        {name: "Tom", email: "tgmail@gmail.com", age: 15},
        {name:"Ann", email: "agmail@gmail.com", age: 21},
        {name:"Sam", email: "sgmail@gmail.com", age: 25 },
    ],
    getInvitations(){
        return this.guests.filter(({ age }) =>
           age >= 18
        ).map(({ name, email })=> ({
            email,
          massage: `Dear, ${name}. ${this.message}`,
    
        }))
    },
};
console.log(event.getInvitations());
