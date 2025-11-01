import Task from "./task.js";
import { setID as id, removeValue as remove} from "./taskHelpers.js";
import modal, {
   openModal as open,
   closeModal as close,
   setError as err
} from "./modals.js";

// Modal
modal.addBtn.addEventListener("click", open(modal.addModal, modal.overlay));
modal.closeBtn.addEventListener("click", close(modal.addModal, modal.overlay))
modal.errBtn.addEventListener("click", close(modal.errModal))

// Add Task
modal.saveBtn.addEventListener("click", (e) => {

   let task = document.getElementById("add__task");
   let deadline = document.getElementById("add__task__due");
   let btn = close(modal.addModal, modal.overlay)

   if (!task.value.trim() || !deadline.value.trim()) {
      return err('Invalid Input!')
   }

   let storage = JSON.parse(localStorage.getItem('storage')) || []
   storage.push(new Task(id(), task.value, deadline.value))
   localStorage.setItem('storage', JSON.stringify(storage))
   
   remove(task, deadline)
   btn()

});
