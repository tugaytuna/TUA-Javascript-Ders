let userdb = [
  {
    isim: "Ahmet",
    soyisim: "Yılmaz",
    kullaniciAdi: "ahmet123",
    sifre: "ahmet123Sifre",
    sinif: 10,
    okulNumarasi: "12345",
    isAdmin: false,
    enSevdigiDiller: ["JavaScript", "Python"],
  },
  {
    isim: "Ayşe",
    soyisim: "Kaya",
    kullaniciAdi: "ayse456",
    sifre: "ayse456Sifre",
    sinif: 11,
    okulNumarasi: "54321",
    isAdmin: false,
    enSevdigiDiller: ["Java", "C#"],
  },
  {
    isim: "Mehmet",
    soyisim: "Demir",
    kullaniciAdi: "mehmet789",
    sifre: "mehmet789Sifre",
    sinif: 9,
    okulNumarasi: "98765",
    isAdmin: true,
    enSevdigiDiller: ["Python", "Ruby"],
  },
  {
    isim: "Zeynep",
    soyisim: "Yıldız",
    kullaniciAdi: "zeynep321",
    sifre: "zeynep321Sifre",
    sinif: 12,
    okulNumarasi: "13579",
    isAdmin: false,
    enSevdigiDiller: ["JavaScript", "TypeScript"],
  },
  {
    isim: "Murat",
    soyisim: "Kara",
    kullaniciAdi: "murat567",
    sifre: "murat567Sifre",
    sinif: 11,
    okulNumarasi: "76543",
    isAdmin: false,
    enSevdigiDiller: ["C++", "Java"],
  },
  {
    isim: "Elif",
    soyisim: "Öztürk",
    kullaniciAdi: "elif789",
    sifre: "elif789Sifre",
    sinif: 10,
    okulNumarasi: "24680",
    isAdmin: false,
    enSevdigiDiller: ["Python", "PHP"],
  },
  {
    isim: "Ali",
    soyisim: "Şahin",
    kullaniciAdi: "ali987",
    sifre: "ali987Sifre",
    sinif: 12,
    okulNumarasi: "86420",
    isAdmin: true,
    enSevdigiDiller: ["JavaScript", "Swift"],
  },
  {
    isim: "Fatma",
    soyisim: "Kaplan",
    kullaniciAdi: "fatma654",
    sifre: "fatma654Sifre",
    sinif: 9,
    okulNumarasi: "36912",
    isAdmin: false,
    enSevdigiDiller: ["Ruby", "Go"],
  },
];

let baslik = document.getElementsByTagName("h1")[0];

let inputUsername = document.getElementById("username");
let inputPassword = document.getElementById("password");

let loginButton = document.getElementsByTagName("button")[0];

let infoText = document.getElementsByClassName("info")[0];

let userList = document.getElementById("userList");

loginButton.setAttribute("onclick", "login()");

let username = "";
let password = "";

function login() {
  username = "";
  password = "";
  username = inputUsername.value;
  password = inputPassword.value;

  loginControl();

  console.log(username, password);
}

function loginControl() {
  if (username == "" || password == "") {
    infoText.innerHTML = "Kullanıcı adı veya şifre boş olamaz!";
    infoText.style.color = "red";
  }

  for (let i = 0; i < userdb.length; i++) {
    if (userdb[i].kullaniciAdi == username && userdb[i].sifre == password) {
      infoText.innerHTML = "Giriş başarılı!";
      infoText.style.color = "green";

      inputUsername.remove();
      inputPassword.remove();
      loginButton.innerHTML = "Çıkış Yap";

      if (userdb[i].isAdmin) {
        userList.innerHTML = "<h2> Admin giriş yaptı! </h2>";
      } else {
        userList.innerHTML = "<h2> Kullanıcı giriş yaptı! </h2>";
      }

      return;
    } else {
      infoText.innerHTML = "Kullanıcı adı veya şifre yanlış!";
      infoText.style.color = "red";
    }
  }
}
