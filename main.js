//starting the project
const list_body_h2 = $("#list-viewer");
list_body_h2.html(`<h2>My Lists</h2>,<ol id="list_items"></ol>`);

const addBtn = $("#btn-add");
addBtn.html(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
<path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
<path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
</svg>`);

let listArray = [];
let input_value = "";
const input_values = $(`#list_items`);
// input_values.html(`<li>first list</li>`);
//when user input a list name it will be taken from the input-list to listArray and pushed into <li> inside <ol> in the list-Viewer.
$("#btn-add").click(() => {
  input_value = $("#list-input").val();
//   console.log(input_value);

  if (input_value !== "") {
    addToLists();
    renderList();
    input_value = $("#list-input").val("");
    console.log(listArray);
  } else {
    prompt(`Please Enter List first`);
  }
});

addToLists = function () {
  listArray.push(input_value);
};

renderList = () => {

let ol=$("#list_items");
ol.html("");
  for (i = 0; i < listArray.length; i++) {
    
    
    let li=$(`<li>${listArray[i]}</li>`);
    ol.append(li);
    
  }
};
