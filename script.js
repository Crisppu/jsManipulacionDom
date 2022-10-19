//esta funcion nos permite que nuestro codigo se animo - immediately invoked function expression IIFE
( () => {
const btn = document.querySelector("[data-form-btn]"); //seleccionamos el boton agregar, le estoy diciendo al programa donde ara click el usuario
//console.log(btn)
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

/*clase 03 */
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

/*clase04 */
// funcion anónima (arrow functions)
const createTask = (evento) => {
  evento.preventDefault(); //evita que recargue la pagina
  const input = document.querySelector("[data-form-input]");
  const value = input.value; //obtiene el contenido dentro del intup
  const list = document.querySelector("[data-list]")// estamos ubicados en la etiqueta ul
  const task = document.createElement('li'); //hacemos que se cree un elemento li en html
  task.classList.add("card"); //agregamos los estilos del css class="card"
  input.value = ""; // nos limpia el input

  /*02 */
  // ${checkComplete()}
  //console.log(checkComplete());
  const taskContent = document.createElement("div");
  //taskContent.appendChild(checkComplete()); //movimos


  /*convertimos esto 03 */
  /* <span class="task">${value}</span>*/
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  /*como el elemento div es el padre con este digo le decimos que el elemento i sea el primero y el span se muestre de segundo */
  taskContent.appendChild(checkComplete()); //movimos qui
  taskContent.appendChild(titleTask);


  /*no demos mesclar html con javascript aqui todo el contenido que fuimos a traer al html lo estamos convirtiendo a javascript  */


  //copiamos y pegamos el codigo de nuestro index.html para hacer la modificacion de lo que llena value

  // const contenido = `<div>
  // <i class="far fa-check-square icon"></i>
  // <span class="task">${value}</span>
  // </div> <i class="fas fa-trash-alt trashIcon icon"></i>`;

  // const contenido = `<div>
  // ${checkComplete()}
  // <span class="task">${value}</span>
  // </div> <i class="fas fa-trash-alt trashIcon icon"></i>`;

  // const contenido = `
  // ${checkComplete()}
  // <span class="task">${value}</span>
  // <i class="fas fa-trash-alt trashIcon icon"></i>`;

  // const contenido = `
  // 
  // 
  // <i class="fas fa-trash-alt trashIcon icon"></i>`;

  const contenido = `


 <i class="fas fa-trash-alt trashIcon icon"></i>`;
  // task.innerHTML = contenido; //con esta instruccion le decimos que se  ubique en donde esta data-task y me coloque el contenido html
  task.appendChild(taskContent);
  list.appendChild(task);
  //console.log(contenido)
};

btn.addEventListener("click", createTask);

/*01 */
/*<i class="far fa-check-square icon"> */
const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon"); //icon esta en el css
  i.addEventListener('click', completeTask); // parte de la funcion cuadro check
  return i
}

/*funcion de nuestro cuadro check  para saber cuando esta marcado o desmarcado*/
const completeTask = (event) => {
  //console.log(event);//podemos ver cual es el elemento que esta tocando el usuario en la consola de navegador aparece como un objeto TARGET
  const element = event.target;
  //https://fontawesome.com/v5/icons/check-square?s=solid&f=classic ojo cambiar version v5.15.4
  //<i class="fas fa-check-square"></i>
  //para cambiar el icono que esta por este debemos hacer lo siguiente.
  element.classList.toggle('fas');//toggle nos permite saber cuando el usuario marca y desmarca el check osea me dice si esta activo o desactivo
  element.classList.toggle('completeIcon');//traemos esta propiedad desde el css
  element.classList.toggle('far'); //quitamos esta propiedad del icono anterior
};

})() //immediately invoked function expression IIFE