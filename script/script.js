import Task from "./task.js";
import { setID as id, removeValue as remove} from "./taskHelpers.js";
import modal, {
   openModal as open,
   closeModal as close,
} from "./modals.js";

// Modal
modal.addBtn.addEventListener("click", open(modal.addModal, modal.overlay));
modal.closeBtn.addEventListener("click", close(modal.addModal, modal.overlay))

// Add Task
modal.saveBtn.addEventListener("click", (e) => {

   let task = document.getElementById("add__task");
   let deadline = document.getElementById("add__task__due");
   let close = close(modal.addModal, modal.overlay)

   if (!task.value.trim() || !deadline.value.trim()) {
      return alert("invalid task!");
   }

   let storage = JSON.parse(localStorage.getItem('storage')) || []
   storage.push(new Task(id(), task.value, deadline.value))
   localStorage.setItem('storage', JSON.stringify(storage))
   
   remove(task, deadline)
   close()

});
