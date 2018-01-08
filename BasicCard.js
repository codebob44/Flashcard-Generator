function BasicCard(front, back) {

  // Scope-safe constructor. This code allows us to optionally create BasicCards without using the new keyword
  if (!(this instanceof BasicCard)) {
    return new BasicCard(front, back);
  }

  this.front = front;
  this.back = back;
}

module.exports = BasicCard;

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");


console.log();
console.log("----- Basic Card -----");
console.log(firstPresident.front);
console.log(firstPresident.back);
console.log("----------------------");