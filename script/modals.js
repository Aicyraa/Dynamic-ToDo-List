let add_modal = {
   overlay: document.querySelector(".overlay"),
   addModal: document.querySelector(".header__add"),
   errModal: null,
   addBtn: document.getElementById("header__add__btn"),
   closeBtn: document.getElementById("header__close__btn"),
   saveBtn: document.querySelector("#header__add__submit"),
};

function openModal(...modals) {
   return function () {
      for (let modal of modals) {
         modal.classList.add("active");
      }
   };
}

function closeModal(...modals) {
   return function () {
      for (let modal of modals) {
         modal.classList.remove("active");
      }
   };
}

export default add_modal;
export { openModal, closeModal };
