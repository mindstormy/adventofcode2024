
const fs = require('node:fs');

let list1 = []
let list2 = []
let distances = []
let totalDistance = 0

function doIt() {
  fs.readFile("day1input.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    firstArray = data.split(/\r?\n/)
    firstArray.forEach((x) => {
      foo = x.split('   ')
      list1.push(foo[0])
      list2.push(foo[1])
    })
    console.log(list1.length)
    let filteredList1 = list1.filter(function (el) {
      return el != (null || '');
    })
    let filteredList2 = list2.filter(function (el) {
      return el != (null || '');
    })

    let sortedList1 = filteredList1.sort((function(a, b) {
      return a - b;
    }))
    let sortedList2 = filteredList2.sort((function(a, b) {
      return a - b;
    }))

    for (let index = 0; index < sortedList1.length; index++) {
      const firstEl = sortedList1[index];
      for (let x = 0; x < sortedList2.length; x++) {
        const secondEl = sortedList2[x];
        const distanceBefore = totalDistance
        if(index === x) {
          distance = Math.abs(Number(firstEl) - Number(secondEl))
          totalDistance =+ distance + distanceBefore
        }
         
       
      }
      
    }
    console.log('TOTAL DISTANCE =', totalDistance)
  })
  
}


doIt()