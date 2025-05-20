const form = document.querySelector('form');
const inputAdicionar = document.querySelector('#input_adicionar')


form.onsubmit = function(event){
    event.preventDefault()

    
}

function criandoTarefa(tarefa){
    const tarefa = inputAdicionar.value

    
}

const closeBackground = {
    element: document.querySelector('.background'),

    close(){
     closeBackground.element.classList.add('close')
    }
}               