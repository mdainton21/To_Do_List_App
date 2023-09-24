function newItem() {

    //1. Adding a new item to the list of items: 
    let list = $('#list');
    let li = $('<li></li>');

    // translating the input into a list item
    let inputValue = $('#input').val();
    li.append(inputValue);


    // Checking for text in the input space
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        list.append(li);
    }

    //2. Crossing out an item from the list of items:
    li.on("dblclick", function() {
        li.addClass("strike");
    });

    //3(i). Adding the delete button "X": 
    let crossOutButton = document.createElement("crossOutButton");
    crossOutButton.appendChild(document.createTextNode("X"));
    li.appendChild(crossOutButton);

    crossOutButton.addEventListener("click", deleteListItem);
    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem() {
        li.classList.add("delete")
    }
    // 4. Reordering the items: 
    $('#list').sortable();

}