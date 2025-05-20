const form = document.querySelector('form');
const inputAdicionar = document.querySelector('#input_adicionar')
const taks = document.querySelector('.task')

form.onsubmit = function(event){
    event.preventDefault()
    closeBackground.close()
    
}

function criandoTarefa(){
    const tarefa = inputAdicionar.value
    
    
}

const closeBackground = {
    element: document.querySelector('.background'),

    close(){
     closeBackground.element.classList.add('close')
    }
}               