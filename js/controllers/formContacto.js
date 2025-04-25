"use strict";

emailjs.init("FjXqc8pJbi3VPE8vm");

const form = document.querySelector("#ContactForm");
const inputNombre = document.querySelector("#txtName");
const inputCorreo = document.querySelector("#txtEmail");
const inputTelefono = document.querySelector("#txtTel");
const inputMensaje = document.querySelector("#txtMessage");
const botonEnviar = document.querySelector("#txtButton");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  enviarDatos();
});

const imprimirMensajeError = (pMsjError) => {
  Swal.fire({
    title: "Error",
    text: pMsjError,
    icon: "error",
    confirmButtonText: "Aceptar",
  });
};

const validarDatos = (pNombre, pCorreo, pTelefono, pMensaje) => {
  if (pNombre == null || pNombre == undefined || pNombre == "") {
    imprimirMensajeError("Ingrese su nombre completo");
    return false;
  }
  if (pCorreo == null || pCorreo == undefined || pCorreo == "") {
    imprimirMensajeError("Ingrese su correo electrónico");
    return false;
  }
  if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(pCorreo)) {
    imprimirMensajeError("Ingrese un correo electrónico válido");
    return false;
  }
  if (pTelefono == null || pTelefono == undefined || pTelefono == "") {
    imprimirMensajeError("Ingrese su número de teléfono");
    return false;
  }
  if (!/^[0-9]{8}$/.test(pTelefono)) {
    imprimirMensajeError("Ingrese un número de teléfono válido de 8 dígitos");
    return false;
  }
  if (pMensaje == null || pMensaje == undefined || pMensaje == "") {
    imprimirMensajeError("Ingrese su consulta o mensaje");
    return false;
  }
  return true;
};

const limpiarFormulario = () => {
  inputNombre.value = "";
  inputCorreo.value = "";
  inputTelefono.value = "";
  inputMensaje.value = "";
};

const enviarDatos = () => {
  let sNombre = inputNombre.value;
  let sCorreo = inputCorreo.value;
  let nTelefono = inputTelefono.value;
  let sMensaje = inputMensaje.value;

  if (validarDatos(sNombre, sCorreo, nTelefono, sMensaje) == false) {
    return;
  }

  const templateParams = {
    user_name: sNombre,
    user_email: sCorreo,
    user_phone: nTelefono,
    user_message: sMensaje,
  };

  emailjs.send("service_hmn3a8i", "template_8vtmhin", templateParams).then(
    function (response) {
      console.log("Correo enviado con éxito!", response.status, response.text);
      Swal.fire({
        title: "Mensaje enviado",
        text: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      limpiarFormulario();
    },
    function (error) {
      console.error("Error al enviar el correo:", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  );
};
