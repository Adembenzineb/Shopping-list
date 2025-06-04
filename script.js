const bt = document.querySelector("#addItem");
bt.addEventListener("click", Add);

document.querySelector("#clearList").addEventListener("click",clear);

function Add() {
    const div = document.querySelector("#items");
    const input = document.getElementById("item").value.trim();
    const inputElement = document.getElementById("item");


    if (input === ""){
        this.showMessage("Please enter the item's name","error")
        return false
    }

    //Adding the new item
    const new_item = document.createElement("div")
    new_item.classList.add("item")
    div.appendChild(new_item)

    //Adding the remove button
    button = document.createElement("input")
    button.classList.add("remove")
    button.setAttribute("type","button")
    button.textContent = "x"
    new_item.appendChild(button)

    // Add event to remove the item
    button.addEventListener("click", function() {
        new_item.remove()
    })

    //Adding the content of the item
    text = document.createElement("p");
    text.classList.add("Shop")
    text.textContent = input;
    new_item.appendChild(text)

    //Add the item to the list
    new_item.appendChild(button)
    div.appendChild(new_item)

    //Clear the input for the next item
    inputElement.value = "";
    inputElement.focus();
   
}
function clear(){
    const container = document.querySelector("#items")
    container.innerHTML = "";
}