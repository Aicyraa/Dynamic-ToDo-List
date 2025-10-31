import Task from "./task.js";
import modal_obj, {
   openModal as open,
   closeModal as close,
} from "./addModal.js";

// Modal
modal_obj.addBtn.addEventListener("click", open);
modal_obj.overlay.addEventListener("click", close);

// Add Task
modal_obj.saveBtn.addEventListener("click", (e) => {
   let task = document.getElementById("add__task");
   let deadline = document.getElementById("add__task__due");

   console.log(task.value, deadline.value);

   if (!task.value.trim() || !deadline.value.trim()) {
      return alert('invalid task!')
   }

   

});
