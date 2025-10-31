let add_modal = {
   overlay: document.querySelector(".overlay"),
   addModal: document.querySelector(".header__add"),
   addBtn: document.getElementById("header__add__btn"),
   saveBtn: document.querySelector("#header__add__submit"),
};

function openModal() {
   add_modal.overlay.classList.add("active");
   add_modal.addModal.classList.add("active");
}

function closeModal() {
   add_modal.overlay.classList.remove("active");
   add_modal.addModal.classList.remove("active");
}

add_modal.addBtn.addEventListener('click', openModal)
add_modal.overlay.addEventListener('click', closeModal)

export default add_modal