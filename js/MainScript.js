const formReservas = document.getElementById("formReserva");
     
const btnReservas = document.getElementsByClassName("btn-reservas");

for (let i = 0; i < btnReservas.length; i++) {
    btnReservas[i].addEventListener("click", saveData);
}


const checkIn = document.getElementById("inputCheckIn");
const checkOut = document.getElementById("inputCheckOut");
const adultos = document.getElementById("inputAdultos");
const menores = document.getElementById("inputMenores");
const perPago = document.getElementById("inputPersonaPago");
const email = document.getElementById("formControlEmail");
    
function saveData(datos){
    datos.preventDefault()
  console.log("In " + checkIn.value, "Out " + checkOut.value, "Adultos " + adultos.value, "Menores " + menores.value, "Pago " + perPago.value, "Mail " + email.value);
    }
