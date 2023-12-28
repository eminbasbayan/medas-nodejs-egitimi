const fs = require("node:fs");

//! Senkron Dosya yoksa oluşturma varsa içine yazma.
// fs.writeFileSync("./file.txt", "Hello World!!!!");
//! Asenkron Dosya yoksa oluşturma varsa içine yazma.
// fs.writeFile("./file.txt", "Emin Başbayan", (err) => {
//   if (err) {
//     console.log("Dosya yazarken bir hata oluştu:", err);
//   } else {
//     console.log("Dosya başarıyla yazıldı!");
//   }
// });

//! Dosya üzerine yazı ekleme
// fs.writeFile("./file.txt", "Emin Başbayan", { flag: "a" }, (err) => {
//   if (err) {
//     console.log("Dosya yazarken bir hata oluştu:", err);
//   } else {
//     console.log("Dosya başarıyla yazıldı!");
//   }
// });

//! Senkron dosya okuma
// const txtFile = fs.readFileSync("./file.txt","utf-8");
//! Asenkron dosya okuma
// fs.readFile("./file.txt", (err, data) => {
//   setTimeout(() => {
//     if (err) {
//       console.log("Dosya okunurken bir hata oluştu:", err);
//     } else {
//       console.log(data.toString());
//     }
//   }, 3000);
// });
// console.log("async");

//! Dosya silme
// fs.unlink("./file.txt", (err) => {
//   if (err) {
//     console.log("Dosya silinemedi:", err);
//   } else {
//     console.log("Dosya başarıyla silindi!");
//   }
// });

//! Klasör oluşturma
// fs.mkdir("./images", (err) => {
//   if (err) {
//     console.log("Klasör oluşturulamadı:", err);
//   } else {
//     console.log("Klasör başarıyla oluştu!");
//   }
// });
//! Klasör silme
fs.rmdir("./images", (err) => {
  if (err) {
    console.log("Klasör silinmedi:", err);
  } else {
    console.log("Klasör başarıyla silindi!");
  }
});
