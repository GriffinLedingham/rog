import Map from './classes/map'
import Player from './classes/player';
import GameEntity from './classes/gameEntity';
import Input from './classes/components/input'

let input = new Input()
let player = new Player(input)
player.setPos(10,10)

let enemy = new GameEntity()
enemy.setPos(20,20)

let map = new Map(process.stdout.rows-1,process.stdout.columns)
map.addEntity(player)
map.addEntity(enemy)
let tickLengthMs = 1000 / 60
let previousTick = Date.now()
let actualTicks = 0


class App {
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
  player.update()
}

export default App