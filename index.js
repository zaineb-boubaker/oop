class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getTotalItems() {
    return this.items.length;
  }

  addItem(product, quantity) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const cartItem = new ShoppingCartItem(product, quantity);
      this.items.push(cartItem);
    }
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  displayCartItems() {
    if (this.items.length === 0) {
      console.log("The cart is empty.");
    } else {
      this.items.forEach((item) => {
        console.log(
          `Product: ${item.product.name}, Quantity: ${
            item.quantity
          }, Total Price: $${item.getTotalPrice()}`
        );
      });
    }
  }

  getTotalCost() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }
}


const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Phone", 800);
const product3 = new Product(3, "Headphones", 150);

const cart = new ShoppingCart();

cart.addItem(product1, 1); 
cart.addItem(product2, 2); 
cart.addItem(product3, 3); 

console.log("Cart items:");
cart.displayCartItems();

console.log("Total cost:", cart.getTotalCost());

cart.removeItem(2); 

console.log("Updated cart items:");
cart.displayCartItems();

console.log("Updated total cost:", cart.getTotalCost());
