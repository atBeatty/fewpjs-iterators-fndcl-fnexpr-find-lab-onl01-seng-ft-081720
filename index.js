const testVar = {}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function testFunc() {
  return "hi"
}
console.log(testFunc())

function superbowlWin(arr){
  let winExists = arr.find(row => row.result === "W")
  debugger
  
  if (winExists) {
    console.log(winExists.year)
    debugger
    return winExists.year
  } 
}

superbowlWin(record)
