
var addList= document.querySelector('.add-list-js');
var container = document.querySelector('.container');
console.log(container)
console.log(addList)

addList.addEventListener('click',showForm);

function showForm(e) {
  console.log(event.target)
//  e.target.classList.remove('add-list');
  //e.target.classList.add('hide');
  //creando hijos: formulario , input , boton que agrega tareas:
  var form=  document.createElement('form');
  var input = document.createElement('input');
  var addButton= document.createElement('button');
  var cancelButton = document.createElement('button');
  //reemplazando el addlist por el formulario :
  container.replaceChild(form,addList);
  //creando hijos:
  form.appendChild(input);
  form.appendChild(addButton);
  form.appendChild(cancelButton);
  //agregando atributos y detalles a los elementos creados:
  input.setAttribute('placeholder','añadir una lista');
  addButton.textContent = 'Añadir';
  cancelButton.textContent='X';

}
