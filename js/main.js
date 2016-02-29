//What elements should we create variables for?

// #entry - form
// #newEntry - text input
// #total - the total <th>
// #entries - the table of all entries

//What events should we listen for?

// #form on submit

//What elements need to be created?

// <tr><td></td><td> input value </td></tr>

//How is user input handled?

// negative numbers subtract from total
// positive add
// non numbers give you NaN
// expect users are good.

//What do we need to keep track of?

// the numbers that have been inputted

//What can be calculated from the things we need to keep track of?

// the total


// useful jQuery Methods

// Appending an element to another element
// .append()
// Updating the HTML for an element
// .html("the new value here")
// Reading the HTML from an element
// .html()
// listening to events
// .on("submit", callback)

function CashRegister(){
  this.entries = [];
  this.els = {
    // #entry - form
    form: $("#entry"),
    // #newEntry - text input
    input: $("#newEntry"),
    // #total - the total <th>
    total: $("#total"),
    // #entries - the table of all entries
    entries: $("#entries")
  }
}

CashRegister.prototype.calculateTotal = function(){
  // add all the values of the array together
    // set the total to 0
    // loop through each element of entries array
      // total = total + entries[i]
  var total = 0;
  for( var i = 0; i < this.entries.length; i++ ){
    total += this.entries[i];
  }
  return total;
}

CashRegister.prototype.displayEntry = function(entry){
  // add the user input to the second td of that row
  var tr = $("<tr></tr>"); // document.createElement("tr")
  var td = $("<td></td>");
  var td2 = $("<td>" + entry + "</td>");
  tr.append(td)
  tr.append(td2)
  // append it to #entries
  this.els.entries.append(tr);
}

var register = new CashRegister();

// when the user submits the form // .on("submit")
register.els.form.on("submit", function(event){
  event.preventDefault();
  // get the user's input // .val()
  var newNumber = parseFloat(register.els.input.val())
  // clear the text input // .val("")
  register.els.input.val("")
  // add that user's input to an array
  register.entries.push(newNumber)
  // create a new table row
  register.displayEntry(newNumber);
  // calculate total
  var newTotal = register.calculateTotal()
    // update #total's html to be the $ + newTotal
  register.els.total.html("$" + newTotal)
})
