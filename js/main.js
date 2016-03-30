$(document).ready(function(){
  var cashRegister = {
    entries: [],
    elements: {
      form: $("#entry"),
      entries: $("#entries"),
      total: $("#newEntry")
    },
    calculateTotal: function(){
      var total = 0;
      for( var i = 0; i < this.entries.length; i++ ){
        total += this.entries[i];
      }
      return total;
    },
    addEntry: function(){
      var newEntry = $("<tr></tr>")
      newEntry.append($("<td></td>"))

    },
    getInput: function(){
      var input = this.elements.form.value()
      return input
    }
  }

  cashRegister.elements.form.on("submit", function(e){
    e.preventDefault()
    console.log("submit works")
  })
})
