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

  export default checkComplete