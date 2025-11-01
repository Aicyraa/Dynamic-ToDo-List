export function setID() {
   let current_id = JSON.parse(localStorage.getItem("id")) || 1
   let [old_value, new_value] = [current_id, ++current_id]
   localStorage.setItem("id", JSON.stringify(new_value))
   return old_value
}

export function removeValue(...inputs) {
   for(let input of inputs) {
      input.value = ''
   }
}

export function renderTask() {
   
}
