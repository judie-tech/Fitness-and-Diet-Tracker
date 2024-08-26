document
  .getElementById("sign-up-page")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("sign-up-page").classList.add("hidden");
    document.getElementById("login-page").classList.remove("hidden");
  });

document
  .getElementById("login-page")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("profile-setup-page").classList.remove("hidden");
  });

document
  .getElementById("profile-setup-page")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("profile-setup-page").classList.add("hidden");
    document.getElementById("dashboard-page").classList.remove("hidden");
  });
