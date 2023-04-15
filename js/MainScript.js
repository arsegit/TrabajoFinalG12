const formReservas = document.getElementById("formReservas");

const btnReservas = document.getElementsByClassName("btn-reservas");

for (let i=0; i<btnReservas.length; i++){
    btnReservas[i].addEventListener("click", saveData);
}

// captura de los datos de los campos//
const checkIn = getElementById("inputCheckIn");
const checkOut = getElementById("inputCheckOut");
const adultos = getElementById("inputAdultos");
const menores = getElementById("inputMenores");
const perPago = getElementById("inputPersonaPago");
const email = getElementById("formControlEmail");


function saveData(datos){
    console.log(`{Datos del formulario Reserva
    fecha ingreso: ${checkIn.value}
    fecha egreso: ${checkOut.value}
    cantidad adultos: ${adultos.value}
    cantidad Menores: ${menores.value}
    persona a cargo: ${perPago.value}
    email: ${email.value}
    `);
}
