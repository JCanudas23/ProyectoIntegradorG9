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
    let productImage = document.querySelector("#image");
    let errorProductImage = document.querySelector("#errorProductImage");
    let productPrice = document.querySelector("#price");
    let divProductPrice = document.querySelector("#divProductPrice");
    let errorProductPrice = document.querySelector("#errorProductPrice");
    let errorBack = document.querySelectorAll(".error-back");

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
        let regproductStock = /^\d+$/;
        if (!regproductStock.test(event.target.value)) {
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
          functions.addRemoveClass(productCategory, "is-invalid", "is-valid");
          errorProductCategory.innerHTML += "Debes elegir la categoria del producto";
        } else {
          functions.addRemoveClass(productCategory, "is-valid", "is-invalid");
        }
      });

      // Validamos Imagen
      productImage.addEventListener("blur", function(){
        errorProductImage.innerHTML = "";
        functions.deleteBackErrorText(errorBack);
        if (productImage.value == "") {
          functions.addRemoveClass(productImage, "is-invalid", "is-valid");
          errorProductImage.innerHTML += "Debes agregar una imagen del producto";
        } else {
          functions.addRemoveClass(productImage, "is-valid", "is-invalid");
        }
      });
      
      let productPriceEvents = function (event) {
        // Activamos Eventos en conjunto
        errorProductPrice.innerHTML = "";
        functions.deleteBackErrorText(errorBack);
        let regproductPrice = /^\d+$/;
        if (!regproductPrice.test(event.target.value)) {
          errorProductPrice.innerHTML += "Debes ingresar el precio del producto";
          functions.addRemoveClass(productPrice, "is-invalid", "is-valid");
          functions.addRemoveClass(divProductPrice, "invalid-label");
        } else {
          functions.addRemoveClass(productPrice, "is-valid", "is-invalid");
          functions.addRemoveClass(divProductPrice, "valid-label", "invalid-label");
        }
      };
      // Añadimos multiples eventos al productPrice
      productPrice.addEventListener("keyup", productPriceEvents, false);
      productPrice.addEventListener("blur", productPriceEvents, false);

      formCreate.addEventListener("submit", (event) => {
        let errors = [];
        functions.deleteBackErrorText(errorBack);
        if (productName.value == "") {
          errorProductName.innerHTML = "";
          errorProductName.innerHTML += "Debes ingresar el nombre del producto";
          errors.push(1);
        }
        if (productDescription.value == "") {
          errorProductDescription.innerHTML = "";
          errorProductDescription.innerHTML += "Debes ingresar una descripción de al menos 20 caracteres";
          errors.push(1);
        }
        if (productStock.value == "") {
          errorProductStock.innerHTML = "";
          errorProductStock.innerHTML += "Debes ingresar el stock del producto";
          errors.push(1);
        }
        if (productCategory.value == "") {
          errorProductCategory.innerHTML = "";
          errorProductCategory.innerHTML += "Debes elegir la categoria del producto";
          errors.push(1);
        }
        if (productImage.value == "") {
          errorProductImage.innerHTML = "";
          errorProductImage.innerHTML += "Debes agregar una imagen del producto";
          errors.push(1);
        }
        if (productPrice.value == "") {
          errorProductPrice.innerHTML = "";
          errorProductPrice.innerHTML += "Debes ingresar el precio del producto";
          errors.push(1);
        }        
        if (errors.length > 0) {
          event.preventDefault();
        } else {
          event.submit;
        }
      });
};

