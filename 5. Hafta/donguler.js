let name = "Tugay";
let age = 20;

// for (let i = 1; i <= 10; i++) {
//   console.log(i + ". kullanıcı");
// }

let dizi1 = ["Tugay", 25, 15, "Tolga"];

let toplam = 0;

for (let i = 1; i <= 10; i++) {
  toplam += i;
}

console.log(toplam);

// console.log(dizi1[0]);
// console.log(dizi1[1]);
// console.log(dizi1[2]);
// console.log(dizi1[3]);

dizi1.push("Ercan");
dizi1.push("Yılmaz");
dizi1.push(22);

for (let i = 0; i < dizi1.length; i++) {
  console.log(dizi1[i]);
}
