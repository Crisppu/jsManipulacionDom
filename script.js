
const btn = document.querySelector("[data-form-btn]"); //seleccionamos el boton agregar
console.log(btn)
/*
cuando el usuario haga click en el boton agregara se ejecutara  la siguiente funcion
btn.addEventListener("click", function(evento){
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")//seleccionamos el intup de nuestro formulario
    console.log(input.value)
});
*/

// funcion anónima (arrow functions)
//opcion 1 aun se puede hacer mejor
//cuando el usuario haga click en el boton agregara se ejecutara  la siguiente funcion
// btn.addEventListener("click", (evento)=>{
//     evento.preventDefault();//no permite que se actualice la pagina despues de agregar informacion a nuestra lista
//     const input = document.querySelector("[data-form-input]")//seleccionamos el intup de nuestro formulario
//     console.log(input.value)
// });

// funcion anónima (arrow functions)
const createTask = (evento)=>{
evento.preventDefault();
const input = document.querySelector('[data-form-input]');
console.log(input.value);
};

btn.addEventListener('click', createTask);
