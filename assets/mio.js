/*mi explicacion*/
/*el document : nos referimos a todo nuestro html osea a todo nuestro documento.html */
/* .querySelector("span") : seleccionamos el elemento al cual vamos hacer un tiro de cambio*/
/*.textContent="todo llo que estaba dentro de .task cámbiame por este que acabo de escribir"; */
// document.querySelector("span").textContent="todo llo que estaba dentro de .task cámbiame por este que acabo de escribir";


/*CLASE01 CLASE02 CLASE 03 */

// const btn = document.querySelector("[data-form-btn]"); //seleccionamos el boton agregar, le estoy diciendo al programa donde ara click el usuario
// console.log(btn)
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
// const createTask = (evento)=>{
// evento.preventDefault(); //evita que recargue la pagina
// const input = document.querySelector('[data-form-input]');
// const value = input.value;//obtiene el contenido dentro del intup
// const task = document.querySelector('[data-task]');
// input.value = ""; // nos limpia el input
// //copiamos y pegamos el codigo de nuestro index.html para hacer la modificacion de lo que llena value
// const contenido = `<div>
// <i class="far fa-check-square icon"></i>
// <span class="task">${value}</span>
// </div> <i class="fas fa-trash-alt trashIcon icon"></i>`
// task.innerHTML = contenido; //con esta instruccion le decimos que se  ubique en donde esta data-task y me coloque el contenido html

// };

// btn.addEventListener('click', createTask);
