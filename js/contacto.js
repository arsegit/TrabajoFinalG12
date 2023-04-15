// const formModal = new bootstrap.Modal("#formModal");

const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputComent = document.getElementById("inputComent");
const check = document.getElementById("check");

const forms = document.querySelectorAll("form");
const btnForm = document.getElementsByClassName("btn-form");

/*
const phone = document.getElementById("phone");
const locationInput = document.getElementById("location");
const graffitiFile = document.getElementById("graffitiFile");
const extraInfo = document.getElementById("extraInfo");
*/

check.addEventListener("click", function () {
  btnForm[4].toggleAttribute("disabled");
});



for (let i = 0; i < btnForm.length; i++) {
  btnForm[i].addEventListener("click", handleMultiStep);
}
/*
function handleMultiStep(e) {
  e.preventDefault();
  switch (e.target.id) {
    case "btn-next-form1":
      forms[0].classList.toggle("d-none");
      forms[1].classList.toggle("d-none");
      break;
    case "btn-next-form2":
      forms[1].classList.toggle("d-none");
      forms[2].classList.toggle("d-none");
      break;
    case "btn-prev-form2":
      forms[0].classList.toggle("d-none");
      forms[1].classList.toggle("d-none");
      break;
    case "btn-prev-form3":
      forms[1].classList.toggle("d-none");
      forms[2].classList.toggle("d-none");
      break;
    case "btn-submit":
      console.log("here I go");
      handleSubmit();
    default:
      return;
  }
};
*/
function handleSubmit() {
  console.log(inputName?.value, inputEmail?.value, inputComent?.value, check?.value);
  forms[0].reset();
 
  forms[0].classList.toggle("d-none");
  // formModal.show();
}