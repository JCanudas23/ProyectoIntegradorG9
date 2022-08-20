window.onload = function () {
  let formRegister = document.querySelector("#formRegister");
  let name = document.querySelector("#name");
  let divName = document.querySelector("#divName");
  let errorName = document.querySelector("#errorName");
  let userName = document.querySelector("#user_name");
  let divUserName = document.querySelector("#divUserName");
  let errorUserName = document.querySelector("#errorUserName");
  let userEmail = document.querySelector("#email");
  let divUserEmail = document.querySelector("#divUserEmail");
  let errorUserEmail = document.querySelector("#errorUserEmail");
  let userPassword = document.querySelector("#password");
  let divUserPassword = document.querySelector("#divUserPassword");
  let errorUserPassword = document.querySelector("#errorUserPassword");
  let userCPassword = document.querySelector("#passwordConfirm");
  let divUserCPassword = document.querySelector("#divUserCPassword");
  let errorUserCPassword = document.querySelector("#errorUserCPassword");
  let errorBack = document.querySelectorAll(".error-back");

  let nameEvents = function (event) {
    // Activamos Eventos en conjunto
    errorName.innerHTML = "";
    functions.deleteBackErrorText(errorBack);
    let regName = /^[A-Za-z]{4}/;
    if (!regName.test(name.value)) {
      errorName.innerHTML += "Debes ingresar un nombre";
      functions.addRemoveClass(name, "is-invalid", "is-valid");
      functions.addRemoveClass(divName, "invalid");
    } else {
      functions.addRemoveClass(name, "is-valid", "is-invalid");
      functions.addRemoveClass(divName, "valid", "invalid");
    }
  };
  // Añadimos multiples eventos al Name
  name.addEventListener("keyup", nameEvents, false);
  name.addEventListener("blur", nameEvents, false);

  let userNameEvents = function (event) {
    // Activamos Eventos en conjunto
    errorUserName.innerHTML = "";
    functions.deleteBackErrorText(errorBack);
    let regUserName = /^[A-Za-z]{2}/;
    if (!regUserName.test(userName.value)) {
      errorUserName.innerHTML += "Debes ingresar un nombre de usuario valido";
      functions.addRemoveClass(userName, "is-invalid", "is-valid");
      functions.addRemoveClass(divUserName, "invalid");
    } else {
      functions.addRemoveClass(userName, "is-valid", "is-invalid");
      functions.addRemoveClass(divUserName, "valid", "invalid");
    }
  };
  // Añadimos multiples eventos al userName
  userName.addEventListener("keyup", userNameEvents, false);
  userName.addEventListener("blur", userNameEvents, false);

  let userEmailEvents = function (event) {
    // Activamos Eventos en conjunto
    errorUserEmail.innerHTML = "";
    functions.deleteBackErrorText(errorBack);
    let regUserEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regUserEmail.test(userEmail.value)) {
      errorUserEmail.innerHTML += "Debes ingresar un E-mail valido";
      functions.addRemoveClass(userEmail, "is-invalid", "is-valid");
      functions.addRemoveClass(divUserEmail, "invalid");
    } else {
      functions.addRemoveClass(userEmail, "is-valid", "is-invalid");
      functions.addRemoveClass(divUserEmail, "valid", "invalid");
    }
  };
  // Añadimos multiples eventos al userEmail
  userEmail.addEventListener("keyup", userEmailEvents, false);
  userEmail.addEventListener("blur", userEmailEvents, false);

  let userPasswordEvents = function (event) {
    // Activamos Eventos en conjunto
    errorUserPassword.innerHTML = "";
    functions.deleteBackErrorText(errorBack);
    let regUserPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regUserPassword.test(userPassword.value)) {
      errorUserPassword.innerHTML += "Debes ingresar una contraseña, deberá contener al menos 8 carácteres, una Mayúscula, un numero y un carácter especial";
      functions.addRemoveClass(userPassword, "is-invalid", "is-valid");
      functions.addRemoveClass(divUserPassword, "invalid");
    } else {
      functions.addRemoveClass(userPassword, "is-valid", "is-invalid");
      functions.addRemoveClass(divUserPassword, "valid", "invalid");
    }
  };
  // Añadimos multiples eventos al userPassword
  userPassword.addEventListener("keyup", userPasswordEvents, false);
  userPassword.addEventListener("blur", userPasswordEvents, false);

  let userCPasswordEvents = function (event) {
    // Activamos Eventos en conjunto
    errorUserCPassword.innerHTML = "";
    functions.deleteBackErrorText(errorBack);
    if ( userCPassword.value != userPassword.value || userCPassword.value == "" ) {
      errorUserCPassword.innerHTML += "La contraseña no coincide";
      functions.addRemoveClass(userCPassword, "is-invalid", "is-valid");
      functions.addRemoveClass(divUserCPassword, "invalid");
    } else {
      functions.addRemoveClass(userCPassword, "is-valid", "is-invalid");
      functions.addRemoveClass(divUserCPassword, "valid", "invalid");
    }
  };
  // Añadimos multiples eventos al userCPassword
  userCPassword.addEventListener("keyup", userCPasswordEvents, false);
  userCPassword.addEventListener("blur", userCPasswordEvents, false);

  formRegister.addEventListener("submit", (event) => {
    let errors = [];
    functions.deleteBackErrorText(errorBack);
    if (name.value == "") {
      errorName.innerHTML = "";
      errorName.innerHTML += "Debes ingresar un nombre";
      errors.push(1);
    }
    if (userName.value == "") {
      errorUserName.innerHTML = "";
      errorUserName.innerHTML += "Debes ingresar un nombre de usuario valido";
      errors.push(1);
    }
    if (userEmail.value == "") {
      errorUserEmail.innerHTML = "";
      errorUserEmail.innerHTML += "Debes ingresar un E-mail valido";
      errors.push(1);
    }
    if (userPassword.value == "") {
      errorUserPassword.innerHTML = "";
      errorUserPassword.innerHTML +=
        "Debes ingresar una contraseña, deberá contener al menos 8 carácteres, una Mayúscula, un numero y un carácter especial";
      errors.push(1);
    }
    if (userCPassword.value == "") {
      errorUserCPassword.innerHTML = "";
      errorUserCPassword.innerHTML += "La contraseña no coincide";
      errors.push(1);
    }
    if (errors.length > 0) {
      event.preventDefault();
    } else {
      event.submit;
    }
  });
};
