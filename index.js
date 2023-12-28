const PizzaShop = require("./pizza-shop.js");
const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, topping) => {
  console.log(`Sipariş alındı: ${size} pizza, ${topping} ile.`);
});

pizzaShop.order("large", "zeytin");
pizzaShop.displayOrderNumber();
