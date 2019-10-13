function check() {
  items = document.querySelectorAll(".tl-item");
  console.log(items);
  for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "green";
  }
}
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


check();
checkHistory();
checkTimemachine();
