class User {
  constructor(id, name, sessionId) {
    // Динамически создаем свойства-геттеры, которые берут данные из аргументов конструктора
    Object.defineProperty(this, 'id', { get() { return id; } });
    Object.defineProperty(this, 'name', { get() { return name; } });
    Object.defineProperty(this, 'sessionId', { get() { return sessionId; } });
  }
}

class UserRepository {
  // put your code here
constructor(users){
    this.users = users;
    Object.freeze(this.users);
}
 getUserNames(){
    return this.users.map(user => user.name);
 } 
 getUsersIds(){
    return this.users.map(user=> user.id)
}
 getUserNameById(id){
    let findUser = this.users.find(user =>user.id === id);
    return findUser.name;
}
}
const user1 = new User(1, "Tom", "session1");
const user2 = new User(2, "Bob", "session2");
let user3 = new User(3, "Sam", "session3");
let userRepository = new UserRepository([user1, user2, user3]);
console.log(userRepository.getUserNameByid(2));
