emailjs.init("rWHIXGE7CvFYcM0in");

const surveyForm = document.getElementById("SurveyForm");

surveyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(SurveyForm);
  const results = {};
  formData.forEach((value, key) => {
    results[key] = value;
  });

  const templateParams = {
    user_email: results.userEmail,
    question_1: results.q1,
    question_2: results.q2,
    question_3: results.q3,
  };

  emailjs
    .send("service_jjkacuf", "template_69ihh5g", templateParams)
    .then((response) => {
      console.log("Correo enviado con éxito!", response.status, response.text);
      Swal.fire({
        title: "¡Gracias por tu opinión!",
        text: "Tus respuestas nos ayudarán a mejorar.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      surveyForm.reset();
    })
    .catch((error) => {
      console.error("Error al enviar el correo:", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar tu encuesta. Inténtalo de nuevo más tarde.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    });
});
