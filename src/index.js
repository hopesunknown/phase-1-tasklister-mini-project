document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let descriptionInput = document.querySelector("form");
  descriptionInput.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDo(document.getElementById("new-task-description").value);
    descriptionInput.reset();  //this clears the form after you hit submit
  })
});

function buildToDo(todo) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener("click", doDelete)
  btn.textContent = "X";
  p.textContent = `${todo} `;
  p.appendChild(btn);
  document.querySelector("#tasks").appendChild(p);
  
}

function doDelete(e) {
  e.target.parentNode.remove();
}