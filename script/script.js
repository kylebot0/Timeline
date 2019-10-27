
function checkHistory() {
  items = document.querySelectorAll(".tl-item");
  console.log(items);
  for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "blue";
  }
}
function checkTimemachine() {
  items = document.querySelectorAll(".time");
  console.log(items);
  for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "orange";
  }
}
function checkIntrovert() {
  items = document.querySelectorAll(".introvert");
  console.log(items);
  for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "green";
  }
}
function checkExtrovert() {
  items = document.querySelectorAll(".extrovert");
  console.log(items);
  for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "pink";
  }
}


checkHistory();
checkTimemachine();
checkIntrovert();
checkExtrovert();
