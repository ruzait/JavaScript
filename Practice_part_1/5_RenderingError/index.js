// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let Error = document.getElementById("error");

function rendError() {
    /* Error.innerHTML = "Something went wrong, please try again";
     */Error.textContent = "Something went wrong, please try again";
}