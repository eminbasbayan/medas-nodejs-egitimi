let obj1 = { name: "Bruce Wayne" };
let obj2 = obj1;
// obj2.name = "Clark Kent";
obj2 = {
  name: "Clark Kent",
};
console.log(obj1); // Bruce Wayne
console.log(obj2); // Clark Kent