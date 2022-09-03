const formNewsletter = document.querySelector("#newsletterform");
const newsletterinput = document.querySelector("#newsletterinput");
const erroremail = document.querySelector("#erroremail");
const popup = document.querySelector("#popup");

formNewsletter.addEventListener("submit", (event) => {
  event.preventDefault();
  let errors = [];
  if (newsletterinput.value == "") {
    erroremail.innerHTML = "";
    erroremail.innerHTML += "Debes ingresar un correo electronico";
    errors.push(1);
  } else {
    popup.classList.toggle("show");
    body.classList.toggle("fijar-body");
    setTimeout(function () {
      popup.classList.toggle("show");
      body.classList.toggle("fijar-body");
    }, 3000);
    erroremail.innerHTML = "";
    newsletterinput.value = "";
  }
});
