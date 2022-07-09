window.addEventListener('load', ()=> {
    const input =document.querySelector('.input')
    const form= document.querySelector('#contask')
    const newtask= document.querySelector('#newtask')
   console.log(input.value)
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const task = input.value
    if (!task){
        alert ('input correct task');
        return
    }

    const taskCont= document.createElement('div')
    taskCont.classList.add('task')

    const taskInput=document.createElement('input')
    taskInput.type= 'text';
    taskInput.value= task;
    taskInput.setAttribute('readonly', 'readonly');
    taskInput.classList.add('action');

   const btn = document.createElement('div');
   btn.classList.add('buttons');

   const editBtn = document.createElement('button')
   editBtn.classList.add('edit');
   editBtn.innerHTML = 'Edit'

   const deleteBtn= document.createElement('button');
   deleteBtn.classList.add('delete');
   deleteBtn.innerHTML='Delete'

    btn.appendChild(editBtn);
    btn.appendChild(deleteBtn);
    
    taskCont.appendChild(btn);
    taskCont.appendChild(taskInput);
    newtask.appendChild(taskCont);

    deleteBtn.addEventListener('click', ()=>{
        taskCont.remove();
    })

    editBtn.addEventListener('click', ()=>{
        if (editBtn.innerHTML=='Edit'){
            taskInput.removeAttribute('readonly')
        editBtn.innerHTML='Save'
        taskInput.focus();
        }
        else{
            taskInput.setAttribute('readonly', 'readonly')
            editBtn.innerHTML='Edit'
        }
        })
       
})
  
})
