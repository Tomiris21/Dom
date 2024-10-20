const addBtn = document.querySelector('.addBtn'); 
const newTask = document.querySelector('.task'); 
const taskList = document.querySelector('.taskList'); 
 
 
const createTask = () => { 
const newLi = document.createElement('li'); 
const newTaskValue = newTask.value; 
newLi.textContent = newTaskValue; 
newLi.addEventListener('click', checkList); 
taskList.appendChild(newLi); 
newTask.value = ''; 
} 
 
const checkList = (event) => { 
const clickedLi = event.target; 
clickedLi.classList.toggle('done'); 
}