class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = String(Math.floor(Math.random() * 100000)); 
    this.dateCreated = new Date();
    this.isConfirmed = false; 
    this.dateConfirmed = null; 
  }


  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    if (this.isConfirmed === false) {
      this.dateConfirmed = new Date(); 
      this.isConfirmed = true;
    }
    
  }

  isValidType() {
    if (this.type === "Buy" || this.type === "Sell") {
      return true;
    }
    return false;
  }
}


const order1 = new Order(1000, "New York", "Buy", 1);
console.log(order1); 