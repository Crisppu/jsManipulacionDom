
//const contenido = `
 //<i class="fas fa-trash-alt trashIcon icon"></i>`;
 const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask)
    return i;
    };
    const deleteTask = (evento) =>{
    /*console.log("eliminar tarea")
    console.log(evento.target.parentElement);  //accedemos al evento y al target y luego al elemento padre. osea ruta del li para eliminar esa tarea*/
    
    const parent = evento.target.parentElement;
    //console.log(parent) verificamos si tenemos el elemento li
    parent.remove();
    };

    export default deleteIcon