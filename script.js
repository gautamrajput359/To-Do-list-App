let inputBox = document.getElementById("textarea");
let addBtn = document.getElementById("add");
let listItems = document.getElementById("listitems");

addBtn.addEventListener("click", () => {
    if(inputBox.value === '') {
        alert("Write something to add to task")
    }
    else {
        let list = document.createElement("li");
        list.innerHTML = inputBox.value
        listItems.appendChild(list)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        list.appendChild(span)
    }
    inputBox.value = "";
    saveData()
});

listItems.addEventListener("click",(e)=> {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("check")
    saveData()
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    saveData()
    }
})

function saveData() {
    localStorage.setItem("data", listItems.innerHTML);
}
function showTask() {
    listItems.innerHTML = localStorage.getItem("data");
}
showTask();