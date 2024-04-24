let name = "Tugay";
let age = 20;
let isAdmin = true;

function bilgiGetir() {
  console.log(name, age, isAdmin);
}

function yasKontrol() {
  if (age >= 18) {
    console.log("18 Yaşından büyüksünüz!");
  } else {
    console.log("Yaşınız uygun değildir.");
  }
}

function karesi(sayi1) {
  console.log("Hesaplama yapılıyor...");
  console.log(sayi1 * sayi1);
}

function toplama(sayi1, sayi2) {
  console.log(sayi1 + sayi2);
}

function isimSoyisim(isim, soyisim) {
  console.log("Hoşgeldiniz", isim, soyisim);
}

bilgiGetir();
yasKontrol();

age = 5;
yasKontrol();

karesi(15);
karesi(20);

toplama(5, 10);

isimSoyisim("Tugay", "Yılmaz");
