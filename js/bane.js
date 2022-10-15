
const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

//Reccorrer todos los puntos
punto.forEach(( cadaPunto, i) => {
    //Asignar un click a cada punto
    punto[i].addEventListener('click',()=>{

        //Guardar la posicion de cada punto
        let posicion = i;
        //Calculando el espacio que debe desplazarse el Grande
        let operacion = posicion * -34.5;
        //Movemos el grand
        grande.style.transform = `translateX(${operacion}%)`
        //Recorremos todos los puntos
        punto.forEach((cadaPunto, i)=>{
            //Quitamos la clase Activo a Todos los puntos
            punto[i].classList.remove('activo')
        })

        //Añadir la clase activo en el punto que se le da click
        punto[i].classList.add('activo')

    })
});