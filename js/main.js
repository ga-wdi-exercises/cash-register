$(document).ready(function(){
  var cashRegister = {
    total: 0,
    elements: {
      form: $("#entry"),
      input: $("#newEntry"),
      entries: $("#entries"),
      totalTD: $("#total")
    },
    addToTotal: function(amount){
      this.total += amount
    },
    addEntry: function(){
      this.addToTotal(parseFloat(this.getEntryAmount()))
      this.elements.entries.append(this.renderEntry())
      this.renderTotal()
    },
    getEntryAmount: function(){
      var input = this.getInput()
      var entryAmount = parseFloat(input).toFixed(2)
      return entryAmount
    },
    renderEntry: function(){
      var entryAmount = this.getEntryAmount()
      this.elements.input.val("")
      console.log(entryAmount)
      var newEntry = $("<tr></tr>")
      var entry = $("<td></td>")
      entry.html(entryAmount)
      newEntry.append($("<td></td>"))
      newEntry.append(entry)
      return newEntry
    },
    renderTotal: function(){
      this.elements.totalTD.html("$" + this.total.toFixed(2))
    },
    getInput: function(){
      return this.elements.input.val()
    }
  }

  cashRegister.elements.form.on("submit", function(e){
    e.preventDefault()
    cashRegister.addEntry()
  })
})
