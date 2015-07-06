// var userinput
var userInput = document.getElementById("newEntry")
// var form
var form = document.getElementById("entry")
var total = document.getElementById("total")
// when the user submits a form
form.addEventListener("submit", function(event){
  event.preventDefault()
  // console log the userinput 
  console.log(userInput.value)
  // get the total value
  var currentTotal = total.innerHTML.substr(1)
  // add the user input to the total value
  var totalValue = parseInt(currentTotal) + parseInt(userInput.value)
  console.log(totalValue)
  // update the total value in the html
})
