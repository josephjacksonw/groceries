// User Interface Logic
function handleForm(event) {
  event.preventDefault();
  hideResults()
  const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");
  const userSelectionsArray = Array.from(userSelections);
  userSelectionsArray.sort()
  
  const newArray = []
    userSelectionsArray.forEach(function(element) {
    newArray.push(element.value.toUpperCase());
    })

  newArray.sort();
  newArray.forEach(function(element) {
    const paragraph = document.createElement("p");
    element.toUpperCase();
    paragraph.append(element);
    document.body.append(paragraph);
    });   
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm);
  });

//Business Logic

function hideResults() {
  document.getElementById("grocery").setAttribute("class", "hidden");
  }
  









