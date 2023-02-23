function IngresoDeUsuario() {
    var nombreUsuario = prompt('Ingrese su nombre de usuario')
    var contrasena = prompt('Ingrese su contraseña')
    alert('¡Hola ' + nombreUsuario + '!')
}


function elegirSuscripcion() {
    alert('Presiona "Aceptar" para desplegar nuestros planes de suscripción mensual')
    let tipoDeSuscripcion = parseInt(prompt('Elige tu suscripción: \n 1-Everyday \n 2-Simple \n 3-Doble Shot'))
    switch (tipoDeSuscripcion) {
        case 1:
            alert('¡Felicitaciones por su suscripción! \n del producto añadido es de $690')
            break
        case 2:
            alert('¡Felicitaciones por su suscripción! \n del producto añadido es de $900')
            break
        case 3:
            alert('¡Felicitaciones por su suscripción! \n El del producto añadido es de $1700')
            break;
        default:
            alert('Ingrese opcion valida (1, 2 o 3)')
            break;
    }
}


function elegirBolsa() {
    alert('Presiona "Aceptar" para comprar nuestros cafes de especialidad')
    let tipoDeBolsa = parseInt(prompt('Elige tu café: \n 1-Brasil Crucera \n 2-Etiopía Najá \n 3-Guatemala GTA'))
    switch (tipoDeBolsa) {
        case 1:
            alert('¡Felicitaciones por su compra! \n El valor del producto añadido es de $550')
            break;
        case 2:
            alert('¡Felicitaciones por su compra! \n El del producto añadido es de $800')
            break;
        case 3:
            alert('¡Felicitaciones por su compra! \n El del producto añadido es de $700')
            break;
        default:
            alert('Ingrese opcion valida (1, 2 o 3)')
            break;
    }
}


function QueComprar() {
    let suscripcionOCompra = parseInt(prompt('¿Qué estás buscando? \n 1-Suscripción mensual \n 2-Compra'))
    do {
        if (suscripcionOCompra == 1) {
            elegirSuscripcion();
            break;
        } else if (suscripcionOCompra == 2) {
            elegirBolsa();
            break;
        } else {
            alert('Ingrese opcion valida (1 o 2)');
            suscripcionOCompra = parseInt(prompt('¿Qué estás buscando? \n 1-Suscripción mensual \n 2-Compra'));
        }
    } while (suscripcionOCompra === 1 || suscripcionOCompra === 2)
}


function SeguirCompra() {
    let quieroSeguirComprando = prompt('¿Queres seguir comprando? \n 1-Si \n 2-No');
    if (quieroSeguirComprando === '1') {
        QueComprar();
        SeguirCompra();
    } else {
        alert('Nos vemos pronto por más cafecito a domicilio...');
    }
}


window.addEventListener('load', function () {
    let stringIngresoDeUsuario = IngresoDeUsuario();
    let stringQueComprar = QueComprar();
    let stringSeguirCompra = SeguirCompra();
})

