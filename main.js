// starting the project

// Hiding all pages exept of home page
$(window).on("load", function () {
  buttons();
  page2Hider();
  $(`#mainContainerDiv`).hide();
});
const listViewerPage1 = $(`#list-viewer`);
listViewerPage1.html(` <ol id="listItems"></ol>`);
// ****************************************************************

// under this comment a declration of all buttons and a function contains there css.
const addBtn = $(`#btn-add`);
const deleteButton = $(`#deletBtn`);
const addToDoBtn = $(`#btn-add-ToDo`);
const homeBtn = $(`#home`);
const home1Btn = $(`#home1`);
const homebtn3 = $(`#home3`);
buttons = () => {
  addBtn.html(`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" fill="green" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
<path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
<path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
</svg>`);

  deleteButton.html(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#EB3636" class="bi bi-trash-fill" viewBox="0 0 16 16">
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button>`);

  addToDoBtn.html(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="green" class="bi bi-plus-square" viewBox="0 1 16 13">
<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>`);

  homeBtn.html(`<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
<path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>`);

  home1Btn.html(`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
<path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>`);

homebtn3.html(`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
<path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>`);

};
// *****************************************************************

// The button that deletes lists from page 2
const deletePtow = $(`#btn-delete-ToDo`);

deletePtow.click(() => {
  deleteFromDone();
});
//*******************************************************************
// The button that get the user to menu to add a list info.
addBtn.click(() => {
  $(`#Container`).hide();
  $(`#mainContainerDiv`).show();
});
//********************************************************************

// Home button to gide user to home page.
homeBtn.click(() => {
  page2Hider();
});
homebtn3.click(()=>{
  $(`#mainContainerDiv`).hide();
  $(`#Container`).show();
})
// *****************************************************************

// local storage to get array of lists.(page 1)
let listArray = JSON.parse(localStorage.getItem("listArray")) || [];

// decleration of the inputs from user.
let inputValue = ``;
dateValue = ``;
// *****************************************************************
function change_placeholder_color(target_class, color_choice) {
  $("#list-input").append("<style>" + target_class + "::placeholder{color:" +  color_choice + "}</style>")
}
// an event added when user clicks on save after filling list name and list date.
const saveBtn = $(`#saveBtn`);
$(`#saveBtn`).click(() => {
  inputValue = $(`#list-input`).val();
  dateValue = $(`#dateInput`).val();

  if (inputValue !== "") {
    addToLists();
    renderList();
    inputValue = $(`#list-input`).val(``);
    $(`#Container`).show();
    $(`#mainContainerDiv`).hide();
  } else {
    
    change_placeholder_color('.menuInputs', 'red')
    
    // alert(`Please Enter List first`); //this to alert user that he must enter a value (list name)
  }
});
// ******************************************************************

//this function to get the selected checkBox id, and filters the listArray by the name of checked box list item.
let selectedItemToDelete = "";
let itemPossition = 0;
const checkedBoxValue = () => {
  let checkedValue = $(`.checkBox`);

  for (let i = 0; i < checkedValue.length; i++) {
    let x = `${checkedValue[i].checked}`;

    if (x === `true`) {
      selectedItemToDelete = checkedValue[i].id;

      listArray = listArray.filter((element) => {
        return element.list !== selectedItemToDelete;
      });
    }
  }
  localStorage.setItem("listArray", JSON.stringify(listArray));
  renderList();
};
//*********************************************************************

// here is a function when user click on the lists inside home page.
// it takes as inside the choosen list.
let listItem = $(`#list-item-pushed`);
listItem.click(() => {
  $(this).css({
    color: "red",
    "background-color": "yellow",
    "font-size": "30px",
  });
});
// ******************************************************************

// Renderlist: function to get user input values from inputs in the form
// and put it inside listArray that holds the lists that user inputs.
function renderList() {
  let ol = $(`#listItems`);
  ol.html(``);
  let li;

  for (i = 0; i < listArray.length; i++) {
    //I am willing to add delete button in here.
    li = $(`<div class="list-item-class"><li id="list-item-pushed${i}">${listArray[i].list} 
   </li> <input class="checkBox" type="checkbox" name=checkbox id="${listArray[i].list}">${listArray[i].date}</div>`);
    // Iam adding an checkBox to delete lists .
    ol.append(li);

    $(`#list-item-pushed${i}`).on("click", function () {
      homePageHider();
      $(`#mainContainerDiv`).hide();
      page2Shower();
    });
  }
}
// *****************************************************************

// addToLists: a function to add user input values in array of objects,
// and push it inside listArray that will appears in home page,
// and will upgreade local storage with the new values.
addToLists = function () {
  arrayObject = { list: inputValue, date: dateValue };
  listArray.push(arrayObject);
  localStorage.setItem("listArray", JSON.stringify(listArray));
};
renderList();
//****************************************************************************

//this is when the user click on the delete button.
deleteButton.on(`click`, function () {
  checkedBoxValue();
});

// those functions for hide and show pages on demand.
homePageHider = () => {
  $(`#Container`).hide();
  page2Shower();
};

page2Shower = () => {
  $(`#p2-Container`).show();
};

function page2Hider() {
  $(`#p2-Container`).hide();
  $(`#Container`).show();
}
//************************************************************************** */

//##########################################################################
// Below section for the Todo page (inside lists after user clicks on).

// getting body of page2 using jquery.
const toDoBody = $(`#toDoBody`);
toDoBody.html(`<ol id="ol-list"></ol>`);
// local storage to get array of lists.(page2)
let listToDoArray = JSON.parse(localStorage.getItem("listDoneArray")) || [];
// decleration of the inputs from user.(page 2)
let inputValueToDo = ``;
let listDoneArray = [];
//***************************************************************************** */

// Button that set users input inside the ToDo list
$(`#btn-add-ToDo`).click(() => {
  inputValueToDo = $(`#toDo-input`).val();

  if (inputValueToDo !== "") {
    addToListsToDo();
    renderListToDo();
    inputValueToDo = $(`#toDo-input`).val(``);
  } else {
    alert(`Please Enter List first`);
  }
});
// ********************************************************************************

// push users input value inside listToDoArray that will appears in ToDo section,
// and will upgreade local storage with the new values.
addToListsToDo = function () {
  listToDoArray.push(inputValueToDo);
  localStorage.setItem("listDoneArray", JSON.stringify(listDoneArray));
};
// *****************************************************************************

// RenderlistToDo: function to get user input values from input inside lists,
// and put it inside listToDoArray that holds the lists that user inputs.
let movedItemIndex = [0];
let itemId;
let itemToDoPossition = 0;
renderListToDo = () => {
  let ol = $(`#ol-list`);
  ol.html(``);

  for (let i = 0; i < listToDoArray.length; i++) {
    li = $(`<div class="list-item-class"><li id="toDo-pushed${i}">${listToDoArray[i]}
       
       </li></div>`);
    ol.append(li);

    $(`#toDo-pushed${i}`).on("click", function () {
      itemId = $(`#toDo-pushed${i}`).attr(`id`);
      itemToDoPossition = i;
      deleteFromToDo();
    });
  }
};
// ****************************************************************************

// deleteFromToDo: a function to delete items from ToDO list inside page2.
let doneItem = ``;
deleteFromToDo = () => {
  doneItem = listToDoArray.splice(itemToDoPossition, 1);
  addtoDone();

  renderListToDo();
  renderToDone();
};
// ******************************************************************************

// addtoDone: a function to push items to ol inside "Done" section in page2.
addtoDone = () => {
  listDoneArray.push(doneItem);
};
// ******************************************************************************

// renderToDone: a functtion to render useres clicks on items inside ToDo,
// and put them inside "Done" in ol.
const doneBody = $(`#doneBody`);
doneBody.html(`<ol id="ol-list-done"></ol>`);
let itemDonePossition = 0;
renderToDone = () => {
  let olDone = $(`#ol-list-done`);
  olDone.html(``);

  for (let i = 0; i < listDoneArray.length; i++) {
    liDone = $(`<div class="list-item-class"><li id="done-pushed${i}">${listDoneArray[i]}
       
       </li><input class="checkBox" type="checkbox" name=checkbox id="deleted${i}"></div>`);
    olDone.append(liDone);

    $(`#done-pushed${i}`).on("click", function () {
      itemIdtoDelete = $(`#done-pushed${i}`).attr(`id`);
      itemDonePossition = i;
      deleteFromDone();
    });
  }
};
// ********************************************************************************

deleteFromDone = () => {
  listArray.splice(itemPossition, 1);

  localStorage.setItem("listDoneArray", JSON.stringify(listDoneArray));

  renderToDone();
};
