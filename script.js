const form = document.querySelector('form');
const inputAdicionar = document.querySelector('#input_adicionar')
const tasks_list = document.querySelector('.tasks_list')
const criadas = document.querySelector('#contador_criadas h4')
const concluidas = document.querySelector('#contador_concluidas h4')
const textoTarefa = document.querySelector('.task-text p')
const checkbox = document.querySelector('.task-checkbox')
var contadorCriadas = 0
var contadorConcluidas = 0

form.onsubmit = function(event){
    event.preventDefault()
    Background.close()
    criandoTarefa()
}

function criandoTarefa(){
    
    contadorCriadas++
    criadas.innerHTML = contadorCriadas

    const tarefa = inputAdicionar.value
    const tasks = document.createElement('div');
    tasks.classList.add('tasks');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');

    const taskText = document.createElement('p');
    taskText.textContent = tarefa;
    taskText.classList.add('task-text');

    const apagar = document.createElement('button');
    apagar.type = 'button';
    apagar.classList.add('apagar');

    const lixo = document.createElement('img')
    lixo.src = '/img/lixo.png'
    lixo.classList.add('lixeira')


    tasks.appendChild(checkbox);
    tasks.appendChild(taskText);
    tasks.appendChild(apagar);
    apagar.appendChild(lixo);
    tasks_list.appendChild(tasks);

    inputAdicionar.value = '';

    apagar.addEventListener('click', function (){
        contadorCriadas--
        criadas.innerHTML = contadorCriadas

        if(contadorCriadas == 0){
          Background.open()
        }
        tasks.remove();
        contadorConcluidas--
            if(contadorConcluidas < 0){
                contadorConcluidas = 0
                concluidas.innerHTML = contadorConcluidas
            }
            if(contadorConcluidas == 0){
                concluidas.innerHTML = contadorConcluidas
            }
            else{
                concluidas.innerHTML = contadorConcluidas + " de " + contadorCriadas
            }
    })

    checkbox.addEventListener('change', function(){

        if(checkbox.checked){
            taskText.classList.add('riscado')
            contadorConcluidas++
            concluidas.innerHTML = contadorConcluidas + " de " + contadorCriadas
        }
        else{
            taskText.classList.remove('riscado')
            contadorConcluidas--
            if(contadorConcluidas < 0){
                contadorConcluidas = 0
                concluidas.innerHTML = contadorConcluidas
            }
            if(contadorConcluidas == 0){
                concluidas.innerHTML = contadorConcluidas
            }
            else{
                concluidas.innerHTML = contadorConcluidas + " de " + contadorCriadas
            }
        }
        
    })
    
    
}

const Background = {
    element: document.querySelector('.background'),

    close(){
        Background.element.classList.add('close')
    },
    open(){
        Background.element.classList.remove('close')
    }
}  








