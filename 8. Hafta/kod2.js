function buttonTiklandi() {
  console.log("Yükleniyor!");
  loadingScreen();
  console.log("Hoşgeldiniz!");
}

function loadingScreen() {
  for (let i = 1; i <= 100; i++) {
    console.log("Loading...", "%" + i);
  }
}
