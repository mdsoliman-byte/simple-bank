const myPass = "shakil";
const myUser = "shakil@gamil.com"
document
  .getElementById("user-login-btn")
  .addEventListener("click", function () {
    const userEmail = document.getElementById("user-email").value;
    const userPassword = document.getElementById("user-password").value;

    if (userEmail == myUser && userPassword == myPass ) {
      window.location.href = "dashbord.html";
    } else {
      window.location.href = "404.html";
    }
  });
