const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.on("orderPizza", (size, topping) => {
  console.log(`Bir ${size} pizza pişiriliyor. İçindekiler: ${topping}`);
});

emitter.emit("orderPizza", "large", "mantar");
