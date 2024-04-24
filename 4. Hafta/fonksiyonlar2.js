let sayi1 = 10;
let sayi2 = 20;

let toplam;

function topla(num1, num2) {
  return num1 + num2;
}

toplam = topla(15, 25);

console.log("Toplam: " + toplam);

function fullNameCreator(isim, soyisim) {
  soyisim = soyisim.toUpperCase();
  return isim + " " + soyisim;
}

let fullName;

fullName = fullNameCreator("Tugay", "Yılmaz");

console.log("Hoşgeldiniz", fullName);
