const button=document.querySelector('.input-container button');
const input=document.querySelector('.input-container input');
const list= document.querySelector('.todo-list');

button.addEventListener('click',()=>{
    const li=document.createElement('li');
    li.classList.add('todo-list-item');
    const deleteBtn=document.createElement('button');
    deleteBtn.innerText='delete'
    if (input.value){
        li.innerText=input.value;
        list.appendChild(li);
        li.appendChild(deleteBtn);
        input.value=''
        deleteBtn.addEventListener('click',()=>{
            list.removeChild(li)
        })
    }else{
        alert('input is empty')
    }
})