// User Interface Logic
function handleForm(event) {
  event.preventDefault();
  hideResults()
  const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");
  const userSelectionsArray = Array.from(userSelections);
  console.log(userSelectionsArray);
  userSelectionsArray.sort()
  
  const newArray = []
    userSelectionsArray.forEach(function(element) {
    newArray.push(element.value);
    })

  newArray.sort();
  newArray.forEach(function(element) {
    const paragraph = document.createElement("p");
    console.log(paragraph, typeof(paragraph));
    paragraph.append(element);
    document.body.append(paragraph);
    });

resultsToUpperCase();    
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm);
  });

//Business Logic

function hideResults() {
  document.getElementById("grocery").setAttribute("class", "hidden");
  }
  
function resultsToUpperCase() {
  document.querySelector("p").setAttribute("class", "paras")
}









