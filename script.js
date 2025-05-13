const bt = document.querySelector("#addItem");
bt.addEventListener("click", Add);

function Add() {
    const div = document.querySelector("#items");
    const input = document.getElementById("item").value;


    new_item = document.createElement("div")
    new_item.classList.add("item")
    new_item.style["backgroundColor"] ="pink"
    div.appendChild(new_item)

    button = document.createElement("input")
    button.classList.add("remove")
    button.setAttribute("type","button")
    button.setAttribute("value","-")
    new_item.appendChild(button)

    text = document.createElement("p");
    text.classlist.add("Shop")
    text.textContent = input;
    new_item.appendChild(text)

    
    
    
    
    
    



    
    
}