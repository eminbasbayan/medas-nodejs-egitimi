const EventEmitter = require("node:events");

class EtkinlikYoneticisi extends EventEmitter {
  constructor() {
    super();
  }
  etkinlikOlustur(etkinlikAdi, tarih) {
    this.emit("etkinlikOlusturuldu", { etkinlikAdi, tarih });
  }
  katilimciEkle(etkinlikAdi, katilimciAdi) {
    this.emit("katilimciEklendi", { etkinlikAdi, katilimciAdi });
  }
}

module.exports = EtkinlikYoneticisi;

/* 
Etkinlik Yöneticisi
Etkinlik Oluşturucusu Event: Etkinlik Adı, Tarih.
Katılımcı Ekle Event: Etlinlik Adı, Katılımcı Adı
*/
