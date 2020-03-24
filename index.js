// Code your solutions in this file
function writeCards(names, event) {
     let card_arr = []
     for (let x = 0; x < names.length; x++) {
          card_arr.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`)
     }
     return card_arr
}

function countDown(num) {
     while (num >= 0) {
          console.log(num);
          num--;
     }
}

countDown(10)