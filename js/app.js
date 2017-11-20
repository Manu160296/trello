window.addEventListener('load', function() {
  var addList = document.querySelector('.add-list-js');
  var containerAddList = document.querySelector('.container-add-list')
  var container = document.querySelector('.container');

  //funcion que da focus a los elementos
  function onFocus(element) {
    return element.focus();
  };

  addList.addEventListener('click', showForm);

  function showForm(e) {

    //creando elemntos: formulario , input , boton que agrega tareas:
    var form = document.createElement('div');
    var input = document.createElement('input');
    var addButton = document.createElement('button');
    var cancelButton = document.createElement('button');

    //reemplazando el addlist por el formulario :
    container.replaceChild(form, containerAddList);

    //agregando elementos al DOM:
    form.appendChild(input);
    form.appendChild(addButton);
    form.appendChild(cancelButton);

    //agregando atributos y detalles a los elementos creados:
    form.setAttribute('class', 'form');
    input.setAttribute('class', 'input');
    addButton.setAttribute('class', 'add-button');
    cancelButton.setAttribute('class', 'cancel-button');
    onFocus(input)
    input.setAttribute('placeholder', 'Añadir una tarea...');
    addButton.textContent = 'Guardar';
    cancelButton.textContent = 'X';

    //agregando evento click al boton 'addButton'
    addButton.addEventListener('click', nameOfList);


    // funcion que agregue una lista :
    function nameOfList() {
      // creando elementos de la nueva lista:
      if (input.value) {
        var listContainer = document.createElement('div');
        var titleContainer = document.createElement('div');
        var title = document.createElement('p');
        var containerAddItem = document.createElement('div');
        var addItem = document.createElement('p');

        //agregando el titulo a la nueva lista y texto 'Añadir una tarea':
        title.textContent = input.value;
        input.value = '';
        onFocus(input)
        addItem.textContent = 'Añadir una tarea';

        //agregando elementos al DOM:
        titleContainer.appendChild(title);
        listContainer.appendChild(titleContainer);
        containerAddItem.appendChild(addItem);
        listContainer.appendChild(containerAddItem);
        container.insertBefore(listContainer, form);

        //agregando atributos
        titleContainer.setAttribute('class', 'title-container');
        listContainer.setAttribute('class', 'list-container');
        containerAddItem.setAttribute('class', 'container-add-item');

      };

      containerAddItem.addEventListener('click', item);

      function item(e) {
        // creando elementos :
        var containerTextArea = document.createElement('div');
        var textArea = document.createElement('textarea');
        var add = document.createElement('button');
        add.textContent = 'Añadir';

        // agregando elementos creados al DOM :
        containerTextArea.appendChild(textArea);
        containerTextArea.appendChild(add);
        listContainer.replaceChild(containerTextArea, containerAddItem);

        // agregando atributos:
        containerTextArea.setAttribute('class', 'container-textarea');
        textArea.setAttribute('class', 'textarea');
        textArea.setAttribute('rows', '3');
        add.setAttribute('class', 'add');

        //textArea.focus();
        onFocus(textArea)

        add.addEventListener('click', save);

        function save(e) {
          if (textArea.value) {
            //creando elementos
            var unknownList = document.createElement('ul');
            var listItem = document.createElement('li');
            listItem.textContent = textArea.value;
            textArea.value = '';
            onFocus(textArea);

            // agregando atributos
            unknownList.setAttribute('class', '.unknown-list');
            listItem.setAttribute('class', 'list-item');

            //agregando elementos al DOM:
            unknownList.appendChild(listItem);
            listContainer.insertBefore(unknownList, containerTextArea);
          }
        }
      }
    }

  }

})
