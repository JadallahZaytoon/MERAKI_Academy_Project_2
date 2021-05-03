// starting the project

$(window).on("load", function () {
  page2Hider();
  $(`#mainContainerDiv`).hide();
});
const list_body_h2 = $(`#list-viewer`);
list_body_h2.html(` <ol id="list_items"></ol>`);

const addBtn = $(`#btn-add`);
addBtn.html(`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" fill="green" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
<path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
<path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
</svg>`);

const deleteButton = $(`#deletBtn`);
deleteButton.html(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#EB3636" class="bi bi-trash-fill" viewBox="0 0 16 16">
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button>`);

const addToDoBtn = $(`#btn-add-ToDo`);
addToDoBtn.html(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-plus-square" viewBox="0 1 16 13">
<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>`);

const homeBtn = $(`#home`);
homeBtn.html(`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
<path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>`);

const deletePtow = $(`#btn-delete-ToDo`);

deletePtow.click(() => {
  deleteFromDone();
});
// local storage to get array of lists.
let listArray = JSON.parse(localStorage.getItem("listArray")) || [];
let input_value = ``;
renderList();
// const input_values = $(`#list_items`);

$(`#finishBtn`).click(() => {
  currenStep=1;
  input_value = $(`#list-input`).val();
  datefunction(()=>{
    $(`#dateInpput${iValue}`).show();
  })
  if (input_value !== "") {
    addToLists();
    renderList();
    // addToLocalStorage();
    input_value = $(`#list-input`).val(``);
    // console.log(listArray);
    $(`#Container`).show();
    $(`#mainContainerDiv`).hide();
  } else {
    alert(`Please Enter List first`);
  }
});

addToLists = function () {
  listArray.push(input_value);
  localStorage.setItem("listArray", JSON.stringify(listArray));
};

let list_item = $(`#list-item-pushed`);
list_item.click(() => {
  $(this).css({
    color: "red",
    "background-color": "yellow",
    "font-size": "30px",
  });
});
const iValue=0;
//this function is to render the values(new lists added by user) from the input to the list to view.
function renderList() {
  let ol = $(`#list_items`);
  ol.html(``);
  let li;
  console.log(listArray);
  for (i = 0; i < listArray.length; i++) {
    //I am willing to add delete button in here.
    li = $(`<div class="list-item-class"><li id="list-item-pushed${i}">${listArray[i]}
   
     </li><input type="date" id="dateInpput${i}" class="Date"><input class="checkBox" type="checkbox" name=checkbox id="deleted${i}"></div>`); // Iam adding an checkBox to delete lists .
    ol.append(li);

    // localStorage.setItem(`lists`, `listArray`);
    // localStorage.setItem("listArray", JSON.stringify(listArray))
    iValue=i;
    $(`#list-item-pushed${i}`).on("click", function () {
      homePageHider();
      $(`#mainContainerDiv`).hide();
    });
  }
}

//this function to get the selected checkBox id.
let selected_Item_toDelete = "";
let item_position = 100;
const checkedBoxValue = () => {
  let checkedValue = $(`.checkBox`);

  for (let i = 0; i < checkedValue.length; i++) {
    let x = `${checkedValue[i].checked}`;

    if (x === `true`) {
      selected_Item_toDelete = $(`#deleted${i}`).attr(`id`);
      item_position = i;
      // console.log(selected_Item_toDelete);
      deleteItemsFromList(listArray);
    }
  }
};

const deleteItemsFromList = (listArray) => {
  // console.log(item_position);
  listArray.splice(item_position, 1);

  localStorage.setItem("listArray", JSON.stringify(listArray));

  renderList();
};

//this is when the user click on the delete button.
deleteButton.on(`click`, function () {
  checkedBoxValue();
});

addBtn.click(() => {
  toListAdder();
});

toListAdder = () => {
  $(`#Container`).hide();
  $(`#mainContainerDiv`).show();
};

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

$(`#home`).click(() => {
  page2Hider();
});

// inside the todo list

// here I got the to do body that will put the lists item on it.
const toDoBody = $(`#toDoBody`);
toDoBody.html(`<ol id="ol-list"></ol>`);

let listToDoArray = [];
let input2_value = ``;
let listDoneArray = [];
// this button is the one beside input
$(`#btn-add-ToDo`).click(() => {
  input2_value = $(`#toDo-input`).val();

  if (input2_value !== "") {
    addToListsToDo();
    renderListToDo();
    input2_value = $(`#toDo-input`).val(``);
    // console.log(`listTodoArray in button click= ${listToDoArray}`);
  } else {
    alert(`Please Enter List first`);
  }
});

addToListsToDo = function () {
  listToDoArray.push(input2_value);
};

//here is to put the user input vlaue from listToDoArray to the ol inside ToDo body.
let movedItemIndex = [0];
let itemId;
let itemToDo_Position = 0;
renderListToDo = () => {
  let ol = $(`#ol-list`);
  ol.html(``);

  for (let i = 0; i < listToDoArray.length; i++) {
    li = $(`<div class="list-item-class"><li id="toDo-pushed${i}">${listToDoArray[i]}
       
       </li></div>`);
    ol.append(li);

    $(`#toDo-pushed${i}`).on("click", function () {
      itemId = $(`#toDo-pushed${i}`).attr(`id`);
      itemToDo_Position = i;
      // console.log(`****************************`);
      deleteFromToDo();
    });
  }
};

addtoDone = () => {
  listDoneArray.push(doneItem);
  console.log(` list to done in addtoDone = ${listDoneArray}`);
};

let doneItem = ``;
deleteFromToDo = () => {
  doneItem = listToDoArray.splice(itemToDo_Position, 1);
  addtoDone();

  renderListToDo();
  renderToDone();
};

// here I got the done body that will move the lists item on it.
const doneBody = $(`#doneBody`);
doneBody.html(`<ol id="ol-list-done"></ol>`);
let itemDone_Position = 0;
renderToDone = () => {
  let ol_Done = $(`#ol-list-done`);
  ol_Done.html(``);

  console.log(`listDoneArray in renderToDone = ${listDoneArray}`);
  for (let i = 0; i < listDoneArray.length; i++) {
    li_done = $(`<div class="list-item-class"><li id="done-pushed${i}">${listDoneArray[i]}
       
       </li></div>`);
    ol_Done.append(li_done);

    $(`#done-pushed${i}`).on("click", function () {
      itemIdtoDelete = $(`#done-pushed${i}`).attr(`id`);
      itemDone_Position = i;
      deleteFromDone();
    });
  }
};

deleteFromDone = () => {
  listDoneArray.splice(itemToDo_Position, 1);
};

// this section is for the step progress bar.
const previousBtn = $(`#previousBtn`);
const nextBtn = $(`#nextBtn`);
const finishBtn = $(`#finishBtn`);
const content = $(`#content`);
const bullets = [...$(`.bullet`)];
const MAX_STEPS = 3;
let currenStep = 1;

// here to enable next button only if input has value.

if ($(`#list-input`).val()) nextBtn.attr(`disabled`, true);
$(`#list-input`).on("change", () => {
  console.log($(`#list-input`).val());
  nextBtn.attr(`disabled`, false);
});

$(`#dateInpput`).hide();

nextBtn.click(() => {
  const currentBullet = bullets[currenStep - 1];
  currentBullet.classList.add(`completed`);

  currenStep++;
  previousBtn.attr(`disabled`, false);

  if (currenStep === MAX_STEPS) {
    finishBtn.attr(`disabled`, false);
    nextBtn.attr(`disabled`, true);
  }
  $(`#list-input`).hide();
  
  datefunction();
});

previousBtn.click(() => {
  const previouseBullet = bullets[currenStep - 1];
  previouseBullet.classList.remove(`completed`);
  currenStep--;
  nextBtn.attr(`disabled`, false);
  finishBtn.attr(`disabled`, true);
  if (currenStep === 1) {
    previousBtn.attr(`disabled`, true);
  }
  $(`#list-input`).show();
  $(`#dateInpput`).hide();
});
