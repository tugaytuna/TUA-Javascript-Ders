let h2Elements = document.getElementsByTagName("h2");
let inputs = document.getElementsByTagName("input");
let loginButton = document.getElementById("loginButton");

let statusText = document.getElementById("statusText");

// loginButton.onclick = () => {
//   loginButtonClicked();
// };
loginButton.setAttribute("onclick", "loginButtonClicked()");

let username = "";

function loginButtonClicked() {
  username = inputs[0].value;

  if (username == "tugay") {
    // console.log("Giriş Başarılı");
    statusText.innerText = "Giriş Başarılı";
    statusText.style.color = "green";
    inputs[0].remove();
    loginButton.remove();
  } else {
    // console.log("Kullanıcı adı geçersiz!");
    inputs[0].value = "";
    statusText.innerHTML = "Kullanıcı adı geçersiz!";
    statusText.style.color = "red";
  }
}
