import Map from './classes/map'
import Keyboard from './classes/util/keyboard'
import Player from './classes/player';

let keyboardManager = new Keyboard()
let player = new Player(10,10)
let map = new Map(process.stdout.rows-1,process.stdout.columns)
map.addPlayer(player)
let tickLengthMs = 1000 / 60
let previousTick = Date.now()
let actualTicks = 0


class App {
  private keyboardManager
  constructor() {
    gameLoop()
  }
}

let gameLoop = function( ) {
  let now = Date.now()
  actualTicks++
  if (previousTick + tickLengthMs <= now) {
    let delta = (now - previousTick) / 1000
    previousTick = now
    update(delta)
    actualTicks = 0
  }
  if (Date.now() - previousTick < tickLengthMs - 16) {
    setTimeout(gameLoop)
  } else {
    setImmediate(gameLoop)
  }
}

let update = function( delta ) {
  map.render()
  player.processInput(keyboardManager.getLastKey())
}

export default App