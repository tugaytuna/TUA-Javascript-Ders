let baslik = document.getElementById("baslik");
let altbasliklar = document.getElementsByClassName("altbaslik");

let h1Elements = document.getElementsByTagName("h1");

let butonGiris = document.getElementById("girisYapBtn");
butonGiris.onclick = () => {
  button1Clicked();
};

h1Elements[0].innerHTML = "11. Hafta DOM - Kontrol";

// console.log(altbasliklar[0].innerHTML);
// console.log(altbasliklar[1].innerHTML);

// for (let i = 0; i < altbasliklar.length; i++) {
//   altbasliklar[i].innerHTML = "JS ile Değişti (hepsi)";
// }

function button1Clicked() {
  console.log("buton tıklandı");
  altbasliklar[0].innerHTML = "JS ile Değiştirildi!";
  baslik.setAttribute("class", "dahaBuyuk");

  //   altbasliklar[0].setAttribute("class", "");
  //   baslik.remove();
}

//https://www.w3schools.com/js/js_htmldom_html.asp
