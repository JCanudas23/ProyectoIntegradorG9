const functions = {
    // Borramos el error text del back
    deleteBackErrorText : (query) => {
        for (let i = 0; i < query.length; i++) {
            query[i].innerHTML = ''; 
        }
    },
    // Añadir y quitar una clase al mismo query
    addRemoveClass : (query,className,classNameDos) => {
        query.classList.add(className),
        query.classList.remove(classNameDos)
    },
}