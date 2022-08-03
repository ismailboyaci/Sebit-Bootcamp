loadEvents();
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submitForm);
  document.querySelector('ul').addEventListener('click',taskClick);

}

function submitForm(e){
  e.preventDefault();
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}


function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  
}

function taskClick(e){
  if(e.target.className == 'delete')
    deleteTask(e);
  else {
    completeTask(e);
  }
}


function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}


function completeTask(e){
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  }else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}