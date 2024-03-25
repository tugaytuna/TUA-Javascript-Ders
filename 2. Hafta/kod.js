let name = "Tolga";
let age = 22;
let isAdmin = true;

console.log(name, age, isAdmin);

// if (age >= 18) {
//   console.log("Giriş Yapabilirsiniz!");
// } else {
//   console.log("18 yaşından küçüksünüz!");
// }

// if (name == "Tugay") {
//   console.log("Tugay Bey Hoş Geldiniz!");
// } else if (name == "Ayşe") {
//   console.log("Ayşe Hanım Hoş Geldiniz!");
// } else {
//   console.log("Kullanıcı bulunamadı.");
// }

if (isAdmin) {
  console.log("if çalıştı");
}

// AND && VE
// TRUE && TRUE => TRUE
// TRUE && FALSE => FALSE
// FALSE && TRUE => FALSE
// FALSE && FALSE => FALSE
if (age < 18 && age >= 7) {
  console.log("İlkokul, Ortaokul veya lise öğrencisi.");
}

// OR || VEYA
// TRUE || TRUE => TRUE
// TRUE || FALSE => TRUE
// FALSE || TRUE => TRUE
// FALSE || FALSE => FALSE
if (name == "Tugay" || name == "Ercan") {
  console.log("Kullanıcı Hoş Geldiniz!");
}

if (name == "Tugay" && age > 18) {
  console.log("Tugay hoş geldin. Giriş yaptınız!");
} else {
  console.log("Kullanıcı adınız ve yaşınız uygun değil.");
}

if (name != "Tugay") {
  console.log("kullanıcı");
}
