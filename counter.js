let count = 0
const numEl = document.getElementById("num")
const incrementBtn = document.getElementById("increment-btn")
const decrementBtn = document.getElementById("decrement-btn")
const saveBtn = document.getElementById("save-btn")
const entryEl = document.getElementById("entries")


incrementBtn.addEventListener("click", function () {
    count += 1
    numEl.innerHTML = count
})

decrementBtn.addEventListener("click", function () {
    if (count > 0) {
        count -= 1
        numEl.textContent = count
    }
})

saveBtn.addEventListener("click", function () {
    let result = count + " - "
    entryEl.innerHTML += result

    numEl.innerHTML = 0
    count = 0
})

