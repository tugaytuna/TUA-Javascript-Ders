let name = "Tugay";
let age = 22;
let isAdmin = false;

console.log(name, age, isAdmin);

let dizi1 = ["Ahmet", "Tolga", "Ercan"];
let dizi2 = [80, age, 100];
let dizi3 = [80, "3.Hafta", false, [1, 5, 2]];

console.log(dizi1);
console.log(dizi2);
console.log(dizi3);

console.log(dizi1[1]);

dizi2[0] = 100;

// dizi2[3] = 50;
dizi2.push(50);

console.log(dizi2.length);

console.log(dizi2[dizi2.length - 1]);

dizi2.sort();
console.log(dizi2);

dizi1[0] = name;

console.log(dizi1);
