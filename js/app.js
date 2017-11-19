
var addList= document.querySelector('.add-list-js');
var containerAddList = document.querySelector('.container-add-list')
var container = document.querySelector('.container');
console.log(container)
console.log(addList)

addList.addEventListener('click',showForm);

function showForm(e) {
//  e.preventDefault();
//  e.stopPropagation();
  console.log(event.target)
//  e.target.classList.remove('add-list');
  //e.target.classList.add('hide');
  //creando hijos: formulario , input , boton que agrega tareas:
  var form=  document.createElement('div');
  var input = document.createElement('input');
  var addButton= document.createElement('button');
  var cancelButton = document.createElement('button');
  //reemplazando el addlist por el formulario :
  container.replaceChild(form,containerAddList);
  //creando hijos:
  form.appendChild(input);
  form.appendChild(addButton);
  form.appendChild(cancelButton);
  //agregando atributos y detalles a los elementos creados:
  input.setAttribute('placeholder','añadir una lista');
  addButton.textContent = 'Guardar';
  cancelButton.textContent='X';

  //agreando evento click al boton 'addButton'
  //  addButton.removeEventListener('click',showForm)
  addButton.addEventListener('click',nameOfList);


  // funcion que agregue una lista :
  function nameOfList() {
    // creando elementos de la nueva lista:
  //  debugger
    var listContainer = document.createElement('div');
    var titleContainer = document.createElement('div');
    var title = document.createElement('p');
    var containerAddItem= document.createElement('div');
    var addItem = document.createElement('p');
    //agregando el titulo a la nueva lista y texto 'Añadir una tarea':
    title.textContent= input.value;
    input.value='';
    addItem.textContent='Añadir una tarea';
    //creando hijos:
    titleContainer.appendChild(title);
    listContainer.appendChild(titleContainer);
    containerAddItem.appendChild(addItem);
    listContainer.appendChild(containerAddItem);
    container.insertBefore(listContainer,form);



    containerAddItem.addEventListener('click',item);

       function item (e) {
         console.log('agregar');

       }

  }
}
