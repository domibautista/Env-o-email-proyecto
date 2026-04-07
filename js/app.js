document.addEventListener("DOMContentLoaded", () => {
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const mensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    //const BtnEnviar = document.querySelector('')

    inputEmail.addEventListener('blur', validar);

    inputAsunto.addEventListener('blur', validar);

    mensaje.addEventListener('blur', validar);

    function validar(event) {
        if(event.target.value.trim() === '') {
            mostrarAlerta(`el campo ${event.target.id} es obligatorio`, event.target.parentElement);
            return;
        }

        limpiarAlerta(event.target.parentElement);
    }   


    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-center', 'p-2', 'alerta');
        
        referencia.appendChild(error);

    }

})

function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector('.alerta');

    if(alerta) {
        alerta.remove();
    }
}