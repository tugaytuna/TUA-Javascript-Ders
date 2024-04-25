let toplam = 0;
let dizi1 = [];

for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    dizi1.push(i);
  }
}

// console.log(toplam);

console.log(dizi1);

for (let i = 0; i < dizi1.length; i++) {
  dizi1[i] = dizi1[i] * 2;
}

console.log(dizi1);

function sayiListeleme(limit) {
  toplam = 0;
  for (let i = 1; i <= limit; i++) {
    toplam += i;
  }
  console.log("1'den " + limit + "e kadar olan sayıların toplamı:  " + toplam);
}

sayiListeleme(20);
sayiListeleme(120);
sayiListeleme(5);
