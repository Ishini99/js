// document.addEventListener("DOMContentLoaded", function () {
//   let a = document.getElementById("text");

//   // Check if the element exists before modifying it
//   if (a) {
//     a.innerHTML = "hii";
//   }
// });
function inHTML(qu, content) {
  if (content) {
    document.querySelector(qu).innerHTML = content;
  } else {
    document.querySelector(qu).innerHTML = "no content in inHTML function";
  }
}
function valFunc(a, value) {
  if (value) {
    document.querySelector(a).value = value;
  } else {
    document.querySelector(a).innerHTML = "no content in valFunc ";
  }
}
