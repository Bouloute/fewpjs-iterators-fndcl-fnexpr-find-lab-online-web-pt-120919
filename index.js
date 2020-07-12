const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(superbowls){
  let result = superbowls.find(wins => { return wins.result == "W"})
  let ans = result ? result.year : undefined
  console.log (ans)
}