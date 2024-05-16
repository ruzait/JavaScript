let counEl = document.getElementById("count-el")
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    counEl.textContent = count
}

function save() {
    console.log(count)
}