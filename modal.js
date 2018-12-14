/** variables **/

let modal = document.querySelector("#modal");
let element = document.querySelector("#element"); // change element here
let modalCloseBtn = document.querySelector("#modalCloseBtn");
let modalMyContent = document.querySelector("#modalMyContent");

/** functions **/
function hideModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");    
}
function showModal() {
    modal.classList.remove("hide");
    modal.classList.add("show");
}

/** program **/
modalMyContent.innerHTML(
	`my text`	// insert content here
);

/** event managers **/
element.addEventListener("click", showModal) // change element here
modalCloseBtn.addEventListener("click", hideModal);