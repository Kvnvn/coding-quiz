// get the list from storage
var list = JSON.parse(localStorage.getItem("list"))
if (list === null) {
  list = [];
}
var listElement = document.getElementById("list");
// display the list
for (var i = 0; i < list.length; i++) {
  var newLiElement = document.createElement("li");
  newLiElement.textContent = list[i].name + "score" + list[i].score;
  listElement.appendChild(newLiElement);
}
//display list of higscores
if (list.length === 0) {
  var messageElement = document.createElement("h2");
  messageElement.textContent = "No highscores here!"
  document.body.appendChild(messageElement)
}
