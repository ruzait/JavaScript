let counEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    counEl.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    console.log(count)
}