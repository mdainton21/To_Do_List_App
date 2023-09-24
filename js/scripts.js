function newItem() {

    //1. Adding a new item to the list of items: 
    let list = $('#list');
    let li = $('<li></li>');

    //1.1. translating the input into a list item
    let inputValue = $('#input').val();
    li.append(inputValue);


    // 1.2. Checking for text in the input space
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        list.append(li);
    }

    //2. Crossing out an item from the list of items:
    li.on("dblclick", function() {
        li.toggleClass("strike");
    });

    //3. Adding the delete button "X": 
    let deleteButton = $('<deletebutton></deletebutton>');
    deleteButton.append(document.createTextNode("X"));
    li.append(deleteButton);

    // 3.2. Calling the function to remove the list item
    deleteButton.on("click", deleteListItem);
    //3.3 Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem() {
        li.addClass("delete");
    }

    // 4. Reordering the items: 
    $('#list').sortable();

}