const formNewsletter = document.querySelector("#newsletterform");
const newsletterinput = document.querySelector("#newsletterinput");
const erroremail = document.querySelector("#erroremail");
const popup = document.querySelector("#popup");

formNewsletter.addEventListener("submit", (event) => {
  let errors = [];
  if (newsletterinput.value == "") {
    erroremail.innerHTML = "";
    erroremail.innerHTML += "Debes ingresar un correo electronico";
    errors.push(1);
  }
  if (errors.length > 0) {
    event.preventDefault();
  } else {
    event.submit;
  }
});
