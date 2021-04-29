//starting the project
const list_body_h2 = $(`#list-viewer`);
list_body_h2.html(`<h2>My Lists</h2> <ol id="list_items"></ol>`);

const addBtn = $(`#btn-add`);
addBtn.html(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
<path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
<path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
</svg>`);

const deleteButton = $(`#deletBtn`);
deleteButton.html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button>`);

let listArray = [];
let input_value = ``;
const input_values = $(`#list_items`);
// input_values.html(`<li>first list</li>`);
//when user input a list name it will be taken from the input-list to listArray and pushed into <li> inside <ol> in the list-Viewer.
$(`#btn-add`).click(() => {
  input_value = $(`#list-input`).val();
  //   console.log(input_value);

  if (input_value !== "") {
    addToLists();
    renderList();
    input_value = $(`#list-input`).val(``);
    console.log(listArray);
  } else {
    alert(`Please Enter List first`);
  }
});

addToLists = function () {
  listArray.push(input_value);
};

let list_item = $(`#list-item-pushed`);
list_item.click(() => {
  $(this).css({
    color: "red",
    "background-color": "yellow",
    "font-size": "30px",
  });
});

renderList = () => {
  let ol = $(`#list_items`);
  ol.html(``);
  let li;
  for (i = 0; i < listArray.length; i++) {
    //I am willing to add delete button in here.
    li = $(`<div class="list-item-class"><li id="list-item-pushed${i}">${listArray[i]}
     
     </li><input class="checkBox" type="checkbox" name=checkbox id="deleted${i}"></div>`); // Iam adding an checkBox to delete lists .
    ol.append(li);

    console.log($('#list-item-pushed').attr('id'));
    console.log($('#deleted').attr('id'));
    
    // $('input[name=checkbox]').change(function(){
    //     if($(this).is(':checked')) {
    //         // Checkbox is checked..
    //         console.log("checked");
    //         console.log(`deleted${i} is checked`);
    //     } else {
    //         console.log("not checked");
    //         console.log(`deleted${i} is unchecked`);
    //         // Checkbox is not checked..
    //     };
    // });
    // if($(`#deleted${i}`).is(`:checked`)){

    //     console.log("checked");

    // $(`list-item-pushed${i}`).css({

    //     color: "red",
    // })

    


    $(`#list-item-pushed${i}`).on("click", function () {
      $(this).css({
        color: "red",
        
        "font-size": "30px",
      });

    //   next();
    });

    $(`#deleted${i}`).on("click", function () {
      $(this).css({
        color: "blue",
        "background-color": "red",
        "font-size": "30px",
       
      });
    });
  }
};

next = () => {
  $(`#Container`).hide();
  page2Shower();
};

page2Shower = () => {
  $(`#p2-Container`).show();
};


// بس ياخد  قيمتها بدي اعمل فللتر عالاري ,local storage 