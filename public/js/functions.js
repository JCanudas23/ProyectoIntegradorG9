const functions = {
  // Borramos el error text del back
  deleteBackErrorText: (query) => {
    for (let i = 0; i < query.length; i++) {
      query[i].innerHTML = "";
    }
  },
  // Añadir y quitar una clase al mismo query
  addRemoveClass: (query, className, classNameDos) => {
    query.classList.add(className), query.classList.remove(classNameDos);
  },
  // Ver contraseña
  seePassword: ({queryUno, queryDos, queryTres, className}) => {
    queryUno.addEventListener("click", () => {
      queryUno.classList.toggle(className);
      if (queryUno.classList.contains(className)) {
        queryDos.type = "text";
        queryTres.type = "text";
      } else {
        queryDos.type = "password";
        queryTres.type = "password";
      }
    });
  },
};

