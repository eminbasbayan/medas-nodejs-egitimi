const PizzaShop = require("./pizza-shop.js");
const DrinkMachine = require("./drink-machine.js");
const EtkinlikYoneticisi = require("./event-handling.js");
const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();
const etkinlikYoneticisi = new EtkinlikYoneticisi();

etkinlikYoneticisi.on("etkinlikOlusturuldu", (etkinlik) => {
  console.log(
    `Yeni bir etkinlik oluşturuldu: ${etkinlik.etkinlikAdi}, Tarih: ${etkinlik.tarih}`
  );
});

etkinlikYoneticisi.on("katilimciEklendi", (katilimci) => {
  console.log(
    `${katilimci.katilimciAdi} adlı katılımcı, ${katilimci.etkinlikAdi} adlı etkinliğe katıldı.`
  );
});

etkinlikYoneticisi.etkinlikOlustur("Konser", "28-12-2023");
etkinlikYoneticisi.katilimciEkle("Konser", "Emin Başbayan");

pizzaShop.on("order", (size, topping) => {
  console.log(`Sipariş alındı: ${size} pizza, ${topping} ile.`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "zeytin");
pizzaShop.displayOrderNumber();
