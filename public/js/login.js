window.onload = function () {
  let formLogin = document.querySelector("#formLogin");
  let password = document.querySelector("#password");
  let email = document.querySelector("#email");
  let divEmail = document.querySelector("#divEmail");
  let divPassword = document.querySelector("#divPassword");
  let errorEmail = document.querySelector("#errorEmail");
  let errorPassword = document.querySelector("#errorPassword");
  let errorBack = document.querySelectorAll(".error-back");
  let passwordEye =document.querySelector("#passwordEye");

  functions.seePassword({
    queryUno: passwordEye,
    queryDos: password,
    className: "eye",
  });

  let emailEvents = function (event) {
    // Activamos Eventos en conjunto
    errorEmail.innerHTML = "";
    functions.deleteBackErrorText(errorBack);
    if (event.target.value == "") {
      errorEmail.innerHTML += "Debes ingresar un correo electronico";
      functions.addRemoveClass(email, "is-invalid", "is-valid");
      functions.addRemoveClass(divEmail, "invalid");
    } else {
      functions.addRemoveClass(email, "is-valid", "is-invalid");
      functions.addRemoveClass(divEmail, "valid", "invalid");
    }
  };

  // Añadimos multiples eventos al Email
  email.addEventListener("keyup", emailEvents, false);
  email.addEventListener("blur", emailEvents, false);

  let passwordEvents = function (event) {
    // Activamos las clases en conjunto
    errorPassword.innerHTML = "";
    functions.deleteBackErrorText(errorBack);
    if (event.target.value == "") {
      errorPassword.innerHTML += "Debes ingresar una contraseña";
      functions.addRemoveClass(password, "is-invalid", "is-valid");
      functions.addRemoveClass(divPassword, "invalid");
    } else {
      functions.addRemoveClass(password, "is-valid", "is-invalid");
      functions.addRemoveClass(divPassword, "valid", "invalid");
    }
  };

  // Añadimos multiples eventos al Password
  password.addEventListener("keyup", passwordEvents, false);
  password.addEventListener("blur", passwordEvents, false);

  formLogin.addEventListener("submit", (event) => {
    let errors = [];
    functions.deleteBackErrorText(errorBack);
    if (email.value == "") {
      errorEmail.innerHTML = "";
      errorEmail.innerHTML += "Debes ingresar un correo electronico";
      errors.push(1);
    }
    if (password.value == "") {
      errorPassword.innerHTML = "";
      errorPassword.innerHTML += "Debes ingresar una contraseña";
      errors.push(1);
    }
    if (errors.length > 0) {
      event.preventDefault();
    } else {
      event.submit;
    }
  });
};
