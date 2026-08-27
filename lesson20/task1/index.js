class User {
    constructor(name, age) {
         this.name = name;
        this.age = age;
    }
    sayHi(){
    console.log(`Hi, I am ${this.name}`);
}
requestNewPhoto(){
    console.log(`New photo request was sent for ${this.name}`);
}
setAge(age){
    this.age = age;
    if(this.age >= 25){
        this.requestNewPhoto();
    }
    if(this.age < 0){
        return false;
    }
     return this.age;
}
static createEmpty(){
    return new User("", null);
}
}
