document.addEventListener('DOMContentLoaded', ()=> {

    const formulario = document.querySelector('#formulario');
    const nombre = document.querySelector('#nombre')
    const hora = document.querySelector('#hora')
    const fecha = document.querySelector('#fecha')
    const btnSubmit = document.querySelector('#submit');
 
    let turnos = {
        nombre: '',
        hora: '',
        fecha:''
    };


    formulario.addEventListener('submit', (e) => {
        e.preventDefault()

        const telefono = '+541123917872'
        const mensaje = encodeURIComponent(`Hola quiero reservar un turno. Mi nombre es ${nombre.value}, el día ${fecha.value} a las ${hora.value}`)
        const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;
        
        if(nombre.value === '' || fecha.value === '' || hora.value === '') {
            enviarAlerta('Completa los espacios vacios', 'error')

        } else {
            enviarAlerta('Turno tomado');
            
            setTimeout(() => {

                window.open(url,"_blank")
            }, 3000);
        
        }




    })



    function enviarAlerta(mensaje,tipo) {

        const divAlerta = document.createElement('div');
        divAlerta.textContent = mensaje;
        
        if(tipo === 'error') {
           divAlerta.classList.add('text-white', 'mx-auto', 'border-2', 'px-4', 'py-2', 'mb-4', 'bg-red-400', 'font-bold', 'tracking-widest') 
        } else {
            divAlerta.classList.add('text-white', 'mx-auto', 'border-2', 'px-4', 'py-2', 'mb-4', 'bg-green-400', 'font-bold', 'tracking-widest')
        }


        formulario.appendChild(divAlerta);

        setTimeout(() => {
            divAlerta.remove();
            hora.value = '';
            fecha.value = '';
            nombre.value = '';

        }, 3000);

    }



    // hora.addEventListener('input', () => {
    //     const value = this.value;
    //     const hours = parseInt(value.slice(0, 2), 10);
    //     const minutes = parseInt(value.slice(3, 5), 10);
      
    //     if (minutes % 30 !== 0) {
    //       // The time is not every 30 minutes.
    //       const newMinutes = Math.round(minutes / 30) * 30;
    //         console.log(value);
    //     }
    // })
    
});