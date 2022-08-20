window.onload = function () {
    let formCreate = document.querySelector("#formCreate");
    let productName = document.querySelector("#name");
    let divProductName = document.querySelector("#divProductName");
    let errorProductName = document.querySelector("#errorProductName");
    let productDescription = document.querySelector("#description");
    let divProductDescription = document.querySelector("#divProductDescription");
    let errorProductDescription = document.querySelector("#errorProductDescription");
    let productStock = document.querySelector("#stock");
    let divProductStock = document.querySelector("#divProductStock");
    let errorProductStock = document.querySelector("#errorProductStock");
    let productCategory = document.querySelector("#category");
    let errorProductCategory = document.querySelector("#errorProductCategory");
    let productSize = document.querySelectorAll(".size__detail");
    let errorProductSize = document.querySelector("#errorProductSize");
    let errorBack = document.querySelectorAll(".error-back");

    formCreate.name.focus();

    let productNameEvents = function (event) {
        // Activamos Eventos en conjunto
        errorProductName.innerHTML = "";
        functions.deleteBackErrorText(errorBack);
        let regproductName = /^[A-Za-z]{5}/;
        if (!regproductName.test(event.target.value)) {
          errorProductName.innerHTML += "Debes ingresar el nombre del producto";
          functions.addRemoveClass(productName, "is-invalid", "is-valid");
          functions.addRemoveClass(divProductName, "invalid-label");
        } else {
          functions.addRemoveClass(productName, "is-valid", "is-invalid");
          functions.addRemoveClass(divProductName, "valid-label", "invalid-label");
        }
      };
      // Añadimos multiples eventos al productName
      productName.addEventListener("keyup", productNameEvents, false);
      productName.addEventListener("blur", productNameEvents, false);

      let productDescriptionEvents = function (event) {
        // Activamos Eventos en conjunto
        errorProductDescription.innerHTML = "";
        functions.deleteBackErrorText(errorBack);
        let regproductDescription = /^[A-Za-z]{20,}/;
        if (!regproductDescription.test(event.target.value)) {
          errorProductDescription.innerHTML += "Debes ingresar una descripción de al menos 20 caracteres";
          functions.addRemoveClass(productDescription, "is-invalid", "is-valid");
          functions.addRemoveClass(divProductDescription, "invalid-label");
        } else {
          functions.addRemoveClass(productDescription, "is-valid", "is-invalid");
          functions.addRemoveClass(divProductDescription, "valid-label", "invalid-label");
        }
      };
      // Añadimos multiples eventos al productDescription
      productDescription.addEventListener("keyup", productDescriptionEvents, false);
      productDescription.addEventListener("blur", productDescriptionEvents, false);

      let productStockEvents = function (event) {
        // Activamos Eventos en conjunto
        errorProductStock.innerHTML = "";
        functions.deleteBackErrorText(errorBack);
        if (event.target.value == "") {
          errorProductStock.innerHTML += "Debes ingresar el stock del producto";
          functions.addRemoveClass(productStock, "is-invalid", "is-valid");
          functions.addRemoveClass(divProductStock, "invalid-label");
        } else {
          functions.addRemoveClass(productStock, "is-valid", "is-invalid");
          functions.addRemoveClass(divProductStock, "valid-label", "invalid-label");
        }
      };
      // Añadimos multiples eventos al productStock
      productStock.addEventListener("keyup", productStockEvents, false);
      productStock.addEventListener("blur", productStockEvents, false);

      // Validamos Categoria
      productCategory.addEventListener("blur", function(){
        errorProductCategory.innerHTML = "";
        functions.deleteBackErrorText(errorBack);
        if (productCategory.value == "") {
          errorProductCategory.innerHTML += "Debes elegir la categoria del producto";
        }
      });

      // Validamos Tallas
      for (let i = 0; i < productSize.length; i++) {
        productSize[i].addEventListener("mouseup", function(event){
            let valueGen = productSize[i].value;
            console.log(valueGen);
            errorProductSize.innerHTML = '';
            functions.deleteBackErrorText(errorBack);
            if (productSize[i].value !== '1' && productSize[i].value !== '2' && productSize[i].value !== '3' && productSize[i].value !== '4') {
              errorProductSize.innerHTML += "Debes elegir una talla";
            }
          });
        
      }
      
};